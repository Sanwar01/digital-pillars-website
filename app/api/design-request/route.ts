import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE } from '@/content/site';
import { design } from '@/content/design';

const INDUSTRY_IDS = new Set(
  design.wizard.steps.business.industries.map((i) => i.id),
);
const GOAL_IDS = new Set(design.wizard.steps.improve.options.map((o) => o.id));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type DesignPayload = {
  businessName?: unknown;
  website?: unknown;
  industry?: unknown;
  industryOther?: unknown;
  goals?: unknown;
  about?: unknown;
  idealCustomer?: unknown;
  inspirationUrls?: unknown;
  threeWords?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
};

function asString(v: unknown) {
  return typeof v === 'string' ? v.trim() : '';
}

function validate(body: DesignPayload) {
  const errors: Record<string, string> = {};

  const businessName = asString(body.businessName);
  const website = asString(body.website);
  const industry = asString(body.industry);
  const industryOther = asString(body.industryOther);
  const about = asString(body.about);
  const idealCustomer = asString(body.idealCustomer);
  const threeWords = asString(body.threeWords);
  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);

  const goals = Array.isArray(body.goals)
    ? body.goals.filter((g): g is string => typeof g === 'string')
    : [];
  const inspirationUrls = Array.isArray(body.inspirationUrls)
    ? body.inspirationUrls
        .filter((u): u is string => typeof u === 'string')
        .map((u) => u.trim())
        .filter(Boolean)
    : [];

  if (businessName.length < 2) {
    errors.businessName = 'Please enter your business name.';
  }
  if (!industry || !INDUSTRY_IDS.has(industry as never)) {
    errors.industry = 'Please select an industry.';
  }
  if (industry === 'other' && industryOther.length < 2) {
    errors.industryOther = 'Please tell us your industry.';
  }
  if (website) {
    try {
      const url = website.startsWith('http') ? website : `https://${website}`;
      new URL(url);
    } catch {
      errors.website = 'Please enter a valid website URL.';
    }
  }
  if (goals.length < 1 || goals.length > 3) {
    errors.goals = 'Please choose between 1 and 3 improvements.';
  } else if (goals.some((g) => !GOAL_IDS.has(g as never))) {
    errors.goals = 'Please choose valid improvements.';
  }
  if (about.length < 10) {
    errors.about = 'Please add one or two sentences about what you do.';
  }
  if (idealCustomer.length < 5) {
    errors.idealCustomer = 'Please describe your ideal customer.';
  }
  if (name.length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid business email.';
  }

  return {
    errors,
    values: {
      businessName,
      website,
      industry,
      industryOther,
      goals,
      about,
      idealCustomer,
      inspirationUrls,
      threeWords,
      name,
      email,
      phone,
    },
  };
}

export async function POST(request: Request) {
  let body: DesignPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { errors, values } = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.ENQUIRY_TO_EMAIL || SITE.email;
  const from =
    process.env.ENQUIRY_FROM_EMAIL || 'Digital Pillars <onboarding@resend.dev>';

  const industryLabel =
    design.wizard.steps.business.industries.find((i) => i.id === values.industry)
      ?.label ?? values.industry;
  const goalLabels = values.goals.map(
    (g) =>
      design.wizard.steps.improve.options.find((o) => o.id === g)?.label ?? g,
  );

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Free homepage concept: ${values.businessName} — ${values.name}`,
      text: [
        `Business: ${values.businessName}`,
        `Website: ${values.website || '—'}`,
        `Industry: ${industryLabel}${
          values.industry === 'other' ? ` (${values.industryOther})` : ''
        }`,
        `Goals: ${goalLabels.join(', ')}`,
        '',
        'About:',
        values.about,
        '',
        'Ideal customer:',
        values.idealCustomer,
        '',
        `Inspiration: ${
          values.inspirationUrls.length
            ? values.inspirationUrls.join(', ')
            : '—'
        }`,
        `Three words: ${values.threeWords || '—'}`,
        '',
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || '—'}`,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Could not send your request. Please try again.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('Design request send failed:', err);
    return NextResponse.json(
      { error: 'Could not send your request. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
