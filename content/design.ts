export type DesignIndustryId =
  | 'estate-agent'
  | 'solicitor'
  | 'accountant'
  | 'healthcare'
  | 'trades'
  | 'restaurant'
  | 'charity'
  | 'retail'
  | 'other';

export type DesignImproveId =
  | 'more-enquiries'
  | 'modernise-brand'
  | 'improve-trust'
  | 'more-calls'
  | 'increase-bookings'
  | 'mobile'
  | 'stand-out'
  | 'better-ux';

export type DesignRequest = {
  businessName: string;
  website: string;
  industry: DesignIndustryId | null;
  industryOther: string;
  goals: DesignImproveId[];
  about: string;
  idealCustomer: string;
  inspirationUrls: string[];
  threeWords: string;
  name: string;
  email: string;
  phone: string;
};

export const design = {
  seo: {
    title: 'Free Homepage Design | Digital Pillars Manchester',
    description:
      'Get a free homepage concept for your business — a real design direction from Digital Pillars, delivered within 48 hours. No commitment, no payment details.',
  },
  hero: {
    eyebrow: 'Free homepage concept',
    lines: ['See your new site', 'before you spend.'],
    body: 'Answer a few short questions and we’ll design a free homepage concept for you — delivered within 48 hours. No commitment, no payment details, no catch.',
  },
  howItWorks: {
    eyebrow: 'How it works',
    items: [
      {
        no: '01',
        title: 'Tell us about your business',
        body: 'A short guided form — a few minutes, no jargon.',
      },
      {
        no: '02',
        title: 'We design your concept',
        body: 'A real designer creates a homepage concept tailored to your answers.',
      },
      {
        no: '03',
        title: 'Delivered in 48 hours',
        body: 'You get the concept by email. Love it? We’ll talk about building the rest.',
      },
    ],
  },
  wizard: {
    progressLabel: 'Step',
    backLabel: 'Back',
    nextLabel: 'Continue',
    skipLabel: 'Skip',
    submitLabel: 'Request free concept',
    submittingLabel: 'Sending…',
    optionalHint: 'Optional',
    errors: {
      generic: 'Something went wrong. Please try again or email us directly.',
    },
    steps: {
      business: {
        title: 'Business information',
        subtitle: 'Tell us about your business',
        businessNameLabel: 'Business name',
        businessNamePlaceholder: 'Whitfield Lettings',
        websiteLabel: 'Website',
        websiteHint: 'If you don’t have a website, leave it blank.',
        websitePlaceholder: 'https://…',
        industryLabel: 'Industry',
        industryPlaceholder: 'Select an industry',
        industryOtherLabel: 'Tell us your industry',
        industryOtherPlaceholder: 'e.g. Dental practice',
        industries: [
          { id: 'estate-agent', label: 'Estate Agent' },
          { id: 'solicitor', label: 'Solicitor' },
          { id: 'accountant', label: 'Accountant' },
          { id: 'healthcare', label: 'Healthcare' },
          { id: 'trades', label: 'Trades' },
          { id: 'restaurant', label: 'Restaurant' },
          { id: 'charity', label: 'Charity' },
          { id: 'retail', label: 'Retail' },
          { id: 'other', label: 'Other' },
        ],
      },
      improve: {
        title: 'What do you want to improve?',
        subtitle: 'What’s the main reason you want a new homepage?',
        hint: 'Choose up to 3. This tells us what to optimise for.',
        max: 3,
        options: [
          { id: 'more-enquiries', label: 'Generate more enquiries' },
          { id: 'modernise-brand', label: 'Modernise our brand' },
          { id: 'improve-trust', label: 'Improve trust' },
          { id: 'more-calls', label: 'Get more phone calls' },
          { id: 'increase-bookings', label: 'Increase bookings' },
          { id: 'mobile', label: 'Improve mobile experience' },
          { id: 'stand-out', label: 'Stand out from competitors' },
          { id: 'better-ux', label: 'Better user experience' },
        ],
      },
      about: {
        title: 'Tell us about your business',
        subtitle: 'In one or two sentences, what does your business do?',
        hint: 'This becomes your hero copy inspiration.',
        label: 'What you do',
        placeholder:
          'We help first-time buyers find affordable homes across Greater Manchester.',
        exampleLabel: 'Example',
        example:
          'We help first-time buyers find affordable homes across Greater Manchester.',
      },
      customer: {
        title: 'Your ideal customer',
        subtitle: 'Who are you trying to attract?',
        hint: 'This helps us write the page for the right audience.',
        label: 'Ideal customer',
        placeholder: 'Homeowners looking to sell quickly.',
        exampleLabel: 'Examples',
        examples: [
          'Homeowners looking to sell quickly.',
          'Small businesses needing bookkeeping.',
        ],
      },
      inspiration: {
        title: 'Inspiration',
        subtitle: 'Are there any websites you like?',
        hint: 'Optional — this saves us guessing your design taste.',
        label: 'Website URL',
        placeholder: 'https://…',
        addLabel: 'Add another',
        removeLabel: 'Remove',
      },
      threeWords: {
        title: 'Describe your business in three words',
        subtitle: 'A quick bonus if you want to shape the tone.',
        hint: 'Optional — skip if you’re not sure.',
        label: 'Three words',
        placeholder: 'Modern, luxury, friendly',
        exampleLabel: 'Examples',
        examples: [
          'Modern · Luxury · Friendly',
          'Fast · Reliable · Affordable',
        ],
      },
      contact: {
        title: 'Contact details',
        subtitle: 'Where should we send your concept?',
        nameLabel: 'Name',
        namePlaceholder: 'Jane Smith',
        emailLabel: 'Business email',
        emailPlaceholder: 'jane@company.com',
        phoneLabel: 'Phone',
        phoneHint: 'Optional',
        phonePlaceholder: '07123 456 789',
      },
    },
    success: {
      eyebrow: 'Thanks!',
      title: 'We’ve received your request.',
      nextLabel: 'Here’s what happens next.',
      nextSteps: [
        'We’ll research your business.',
        'We’ll design a bespoke homepage concept.',
        'We’ll email it to you within 48 hours.',
      ],
      waitingLabel: 'While you’re waiting…',
      waitingBody:
        'Book a free strategy call if you’d like to discuss your project.',
      ctaLabel: 'Book a free strategy call',
    },
  },
  scope: {
    eyebrow: 'What you get',
    included: [
      'One homepage design concept',
      'Tailored to your business & goals',
      'Designed by a real person, not a template',
      'Yours to keep — no strings attached',
    ],
    note: 'The free homepage concept is a design direction, not a full built website. If you like it, we’ll quote for the complete build — and if you don’t, you owe us nothing.',
  },
  formSection: {
    eyebrow: 'Get started',
    headline: 'Request your free concept',
  },
} as const;
