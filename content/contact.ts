export type NeedId = 'website' | 'software' | 'ai' | 'strategy';
export type TimelineId = 'asap' | 'soon' | 'exploring';
export type BudgetId = 'starter' | 'growth' | 'custom' | 'discuss';

export type PlannerAnswers = {
  need: NeedId | null;
  timeline: TimelineId | null;
  budget: BudgetId | null;
};

export type RecommendationId = 'starter' | 'growth' | 'custom' | 'strategy';

export const contact = {
  seo: {
    title: 'Contact | Project Planner — Digital Pillars Manchester',
    description:
      'Answer three quick questions for a personalised Digital Pillars recommendation, then book a free discovery call or leave your email.',
  },
  hero: {
    eyebrow: 'Project planner',
    lines: ["Let's grow", 'your business.'],
    body: 'Answer three quick questions. We’ll recommend the right starting point — then you can book a call or leave your email.',
  },
  planner: {
    title: '30-second project planner',
    progressLabel: 'Question',
    backLabel: 'Back',
    restartLabel: 'Start over',
    skipToEmail: 'Prefer email instead?',
    questions: [
      {
        id: 'need',
        prompt: 'What do you need most right now?',
        options: [
          {
            id: 'website',
            label: 'A new website or redesign',
            hint: 'Marketing site that wins enquiries',
          },
          {
            id: 'software',
            label: 'A web app or portal',
            hint: 'Dashboards, bookings, internal tools',
          },
          {
            id: 'ai',
            label: 'AI & automation',
            hint: 'Chatbots, workflows, integrations',
          },
          {
            id: 'strategy',
            label: 'Strategy / not sure yet',
            hint: 'Clarity before you spend',
          },
        ],
      },
      {
        id: 'timeline',
        prompt: 'What’s your timeline?',
        options: [
          {
            id: 'asap',
            label: 'ASAP — this month',
            hint: 'Ready to move quickly',
          },
          {
            id: 'soon',
            label: 'Next 1–3 months',
            hint: 'Planning the next quarter',
          },
          {
            id: 'exploring',
            label: 'Exploring options',
            hint: 'Gathering ideas for now',
          },
        ],
      },
      {
        id: 'budget',
        prompt: 'Rough budget band?',
        options: [
          {
            id: 'starter',
            label: 'Under £1,500',
            hint: 'Focused first launch',
          },
          {
            id: 'growth',
            label: '£1,500–£5,000',
            hint: 'Website plus automation',
          },
          {
            id: 'custom',
            label: '£5,000+',
            hint: 'Bespoke build or system',
          },
          {
            id: 'discuss',
            label: 'Prefer to discuss',
            hint: 'We’ll scope it together',
          },
        ],
      },
    ],
  },
  recommendations: {
    starter: {
      id: 'starter',
      eyebrow: 'Recommended starting point',
      title: 'Starter Website Package',
      price: 'From £750',
      summary:
        'A professional, conversion-ready website to get you live fast — without unnecessary complexity.',
      points: [
        'Responsive marketing site',
        'Contact forms & WhatsApp',
        'Basic SEO setup',
        'Hosting support',
      ],
      bookLabel: 'Book a discovery call',
      emailLabel: 'Email me this plan',
    },
    growth: {
      id: 'growth',
      eyebrow: 'Recommended starting point',
      title: 'Growth Website + Automation',
      price: 'From £1,500',
      summary:
        'A site built to capture leads, plus practical automation so your team spends less time on admin.',
      points: [
        'Everything in Starter',
        'Lead capture & booking flows',
        'AI chatbot option',
        'CRM / WhatsApp integrations',
      ],
      bookLabel: 'Book a discovery call',
      emailLabel: 'Email me this plan',
    },
    custom: {
      id: 'custom',
      eyebrow: 'Recommended starting point',
      title: 'Custom Software Solution',
      price: 'Custom quote',
      summary:
        'A bespoke web app, portal or AI-powered system scoped to how your business actually works.',
      points: [
        'Portals & dashboards',
        'Workflow automation',
        'API & systems integration',
        'Ongoing product partnership',
      ],
      bookLabel: 'Book a scoping call',
      emailLabel: 'Email me this plan',
    },
    strategy: {
      id: 'strategy',
      eyebrow: 'Recommended starting point',
      title: 'Digital Strategy Session',
      price: 'Free discovery call',
      summary:
        'You’re early in the process — perfect. We’ll untangle goals, priorities and the highest-ROI next move before you commit budget.',
      points: [
        'Goals & audience clarity',
        'Channel & tech priorities',
        'Realistic roadmap',
        'Transparent next-step quote',
      ],
      bookLabel: 'Book a strategy call',
      emailLabel: 'Email me a summary',
    },
  },
  calendly: {
    // Replace with your real Calendly URL
    url: 'https://calendly.com/digitalpillars/discovery',
    embedTitle: 'Book a call with Digital Pillars',
    note: 'Pick a time that works. You’ll get a calendar invite straight away.',
  },
  emailCapture: {
    title: 'Not ready to book?',
    body: 'Leave your email and we’ll send a short summary of this recommendation — no spam, no drip that never ends.',
    nameLabel: 'Name',
    namePlaceholder: 'Jane Smith',
    emailLabel: 'Email',
    emailPlaceholder: 'jane@company.com',
    submitLabel: 'Send me the plan',
    submittingLabel: 'Sending…',
    successTitle: 'You’re on the list',
    successBody:
      'Thanks — we’ll email a short summary shortly. Prefer to talk sooner? Book a call above anytime.',
    validationMessage: 'Please add your name and a valid email.',
  },
  trust: {
    eyebrow: 'Why teams book us',
    items: [
      { k: '60+', v: 'Projects delivered' },
      { k: '4.9★', v: 'Average client rating' },
      { k: '100%', v: 'UK-based team' },
      { k: '5', v: 'Core industries served' },
    ],
    industriesLabel: 'Trusted across',
  },
  faqs: {
    eyebrow: 'FAQ',
    headline: 'Before you book',
    items: [
      {
        q: 'Is the discovery call really free?',
        a: 'Yes. It’s a focused conversation to see if we’re a fit. No hard sell — if we’re not right for you, we’ll say so.',
      },
      {
        q: 'How accurate is the planner recommendation?',
        a: 'It’s a practical starting point based on need, timeline and budget — not a final quote. On the call we refine scope and price together.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'A focused marketing site usually runs 4–8 weeks; software and app builds are scoped individually. You get a clear timeline before we start.',
      },
      {
        q: 'Do you work outside Manchester?',
        a: 'Yes. We’re Manchester-based and work with clients across the UK and beyond, remotely with regular check-ins.',
      },
      {
        q: 'Can I just email you instead?',
        a: 'Of course — hello@digitalpillars.co.uk. The planner is optional; use whichever path is easiest.',
      },
    ],
  },
  sidebar: {
    directLabel: 'Or reach us directly',
    followLabel: 'Follow',
  },
} as const;

/** Map planner answers to a recommendation id. */
export function getRecommendationId(answers: PlannerAnswers): RecommendationId {
  const { need, timeline, budget } = answers;
  if (!need || !timeline || !budget) return 'strategy';

  if (need === 'strategy') return 'strategy';

  if (need === 'software' || need === 'ai') {
    if (budget === 'custom' || budget === 'discuss') return 'custom';
    if (budget === 'starter' && timeline === 'exploring') return 'strategy';
    return budget === 'starter' ? 'growth' : 'custom';
  }

  // website
  if (budget === 'starter') return 'starter';
  if (budget === 'custom') return 'custom';
  if (budget === 'growth' || timeline === 'asap') return 'growth';
  if (timeline === 'exploring' && budget === 'discuss') return 'strategy';
  return 'growth';
}
