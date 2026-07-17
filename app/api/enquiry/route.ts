import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE } from '@/content/site';

const SERVICE_LABELS: Record<string, string> = {
  website: 'Website',
  'online-store': 'Online store',
  'web-app': 'Web app',
  'ai-automation': 'AI & automation',
  other: 'Other',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryPayload = {
  service?: unknown;
  description?: unknown;
  name?: unknown;
  phone?: unknown;
  email?: unknown;
};

function validate(body: EnquiryPayload) {
  const errors: Record<string, string> = {};

  const service = typeof body.service === 'string' ? body.service : '';
  const description =
    typeof body.description === 'string' ? body.description.trim() : '';
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';

  if (!service || !(service in SERVICE_LABELS)) {
    errors.service = 'Please choose a service.';
  }
  if (description.length < 10) {
    errors.description = 'Please add a few words about what you need.';
  }
  if (name.length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (phone.replace(/[^0-9]/g, '').length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email.';
  }

  return { errors, values: { service, description, name, phone, email } };
}

export async function POST(request: Request) {
  let body: EnquiryPayload;
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
  const serviceLabel = SERVICE_LABELS[values.service] ?? values.service;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `New enquiry: ${serviceLabel} — ${values.name}`,
      text: [
        `Service: ${serviceLabel}`,
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        '',
        'Details:',
        values.description,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Could not send your enquiry. Please try again.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('Enquiry send failed:', err);
    return NextResponse.json(
      { error: 'Could not send your enquiry. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
