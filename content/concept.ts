export type ConceptGoalId = 'more-enquiries' | 'relaunch' | 'first-site';

export type ConceptRequest = {
  business: string;
  website: string;
  goal: ConceptGoalId | null;
  name: string;
  email: string;
};

export const concept = {
  seo: {
    title: 'Free Homepage Concept | Digital Pillars Manchester',
    description:
      'Get a free homepage concept for your business — a real design direction from Digital Pillars, delivered within 48 hours. No commitment, no payment details.',
  },
  hero: {
    eyebrow: 'Free homepage concept',
    lines: ['See your new site', 'before you spend.'],
    body: 'Tell us about your business and we’ll design a free homepage concept for you — delivered within 48 hours. No commitment, no payment details, no catch.',
  },
  steps: {
    eyebrow: 'How it works',
    items: [
      {
        no: '01',
        title: 'Tell us about your business',
        body: 'Fill in the short form below — two minutes, no jargon.',
      },
      {
        no: '02',
        title: 'We design your concept',
        body: 'A real designer creates a homepage concept tailored to your business.',
      },
      {
        no: '03',
        title: 'Delivered in 48 hours',
        body: 'You get the concept by email. Love it? We’ll talk about building the rest.',
      },
    ],
  },
  form: {
    eyebrow: 'Get started',
    headline: 'Request your free concept',
    businessLabel: 'Business name & what you do',
    businessPlaceholder: 'e.g. Whitfield Lettings — estate agent in Salford',
    websiteLabel: 'Current website (if you have one)',
    websitePlaceholder: 'https://…',
    goalLabel: 'What’s the main goal?',
    goals: [
      {
        id: 'more-enquiries',
        label: 'More enquiries',
        hint: 'Turn visitors into leads',
      },
      {
        id: 'relaunch',
        label: 'A fresh redesign',
        hint: 'Current site feels dated',
      },
      {
        id: 'first-site',
        label: 'My first website',
        hint: 'Starting from scratch',
      },
    ],
    nameLabel: 'Your name',
    namePlaceholder: 'Jane Smith',
    emailLabel: 'Email',
    emailPlaceholder: 'jane@company.com',
    submitLabel: 'Get my free concept',
    submittingLabel: 'Sending…',
    validationMessage: 'Please fill in your business, name and a valid email.',
    successTitle: 'Your concept is on its way',
    successBody:
      'Thanks — we’ll email your free homepage concept within 48 hours. Want to talk sooner? Book a free strategy call anytime.',
    successCtaLabel: 'Book a strategy call',
    successCtaHref: '/contact',
  },
  scope: {
    eyebrow: 'What you get',
    included: [
      'One homepage design concept',
      'Tailored to your business & goal',
      'Designed by a real person, not a template',
      'Yours to keep — no strings attached',
    ],
    note: 'The free homepage concept is a design direction, not a full built website. If you like it, we’ll quote for the complete build — and if you don’t, you owe us nothing.',
  },
} as const;
