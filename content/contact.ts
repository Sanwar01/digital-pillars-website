export type EnquiryServiceId =
  | 'website'
  | 'online-store'
  | 'web-app'
  | 'ai-automation'
  | 'other';

export const contact = {
  seo: {
    title: 'Contact | Digital Pillars Manchester',
    description:
      'Book a free discovery call or send an enquiry to Digital Pillars. Manchester web design and software agency — reply within one working day.',
  },
  hero: {
    eyebrow: 'Contact',
    lines: ["Let's talk", 'about growth.'],
    body: 'Whether you need a sharper website, a store that sells, a custom web app, or AI that saves hours — pick a path below. A senior partner responds within one working day.',
    highlights: [
      'A clear plan for your next digital move',
      'Honest advice on what’s worth building',
      'Fast turnaround from first conversation',
      'Manchester-based, working UK-wide',
    ],
    formIntro:
      'Prefer to write it down? Send an enquiry and we’ll come back to you.',
    bookCallCta: 'Book a free discovery call',
    orLabel: 'OR',
    reachOutLabel: 'Prefer email?',
  },
  calendly: {
    url: 'https://calendly.com/digital-pillars/free-discovery-call',
  },
  enquiry: {
    progressLabel: 'Step',
    backLabel: 'Back',
    nextLabel: 'Continue',
    submitLabel: 'Send enquiry',
    submittingLabel: 'Sending…',
    steps: {
      service: {
        title: 'What are you looking for?',
        options: [
          {
            id: 'website',
            label: 'Website',
            hint: 'Marketing site or redesign',
          },
          {
            id: 'online-store',
            label: 'Online store',
            hint: 'E-commerce & payments',
          },
          {
            id: 'web-app',
            label: 'Web app',
            hint: 'Portals, dashboards, tools',
          },
          {
            id: 'ai-automation',
            label: 'AI & automation',
            hint: 'Chatbots, workflows, integrations',
          },
          {
            id: 'other',
            label: 'Something else',
            hint: 'Not sure yet — that’s fine',
          },
        ],
      },
      description: {
        title: 'What’s the goal?',
        label: 'Briefly describe what you need help with.',
        placeholder: 'What are you looking to build?',
      },
      details: {
        title: 'Where should we reply?',
        nameLabel: 'Full name',
        namePlaceholder: 'Jane Smith',
        phoneLabel: 'Telephone',
        phonePlaceholder: '07123 456 789',
        emailLabel: 'Email',
        emailPlaceholder: 'jane@company.com',
      },
    },
    success: {
      title: 'Got it — thanks',
      body: 'Your enquiry is with us. A senior partner will reply within one working day.',
      resetLabel: 'Send another enquiry',
    },
    errors: {
      generic: 'Something went wrong. Please try again or email us directly.',
    },
  },
  conceptCta: {
    eyebrow: 'Limited offer',
    headline: 'Free homepage concept in 48 hours',
    body: 'Not sure where to start? We’ll deliver a free custom concept for your homepage — no commitment required.',
    ctaLabel: 'Claim free concept',
    ctaHref: '/free-homepage-concept',
  },
  contactInfo: {
    eyebrow: 'Get in touch',
    headline: 'Contact information',
    directLabel: 'Reach us directly',
    followLabel: 'Follow',
  },
  faqs: {
    eyebrow: 'FAQ',
    headline: 'Before you book',
    items: [
      {
        q: 'Is the strategy call really free?',
        a: 'Yes. It’s a focused conversation to see if we’re a fit. No hard sell — if we’re not right for you, we’ll say so.',
      },
      {
        q: 'What’s in the free homepage concept?',
        a: 'One homepage design concept tailored to your business, delivered by email within 48 hours. It’s a design direction, not a full built website — and it’s yours to keep either way.',
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
        a: 'Of course — hello@digitalpillars.co.uk. Use whichever path is easiest.',
      },
    ],
  },
} as const;
