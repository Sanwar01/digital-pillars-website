export const contact = {
  seo: {
    title: 'Contact | Digital Pillars — Book a Call, Manchester',
    description:
      'Get in touch with Digital Pillars, a Manchester web design and software agency. Book a free discovery call or send us a message about your project.',
  },
  hero: {
    eyebrow: 'Contact',
    lines: ["Let's start", 'something great.'],
  },
  form: {
    fields: [
      {
        name: 'name',
        label: 'Full name',
        type: 'text',
        placeholder: 'Jane Smith',
        required: true,
      },
      {
        name: 'email',
        label: 'Email address',
        type: 'email',
        placeholder: 'jane@company.com',
        required: true,
      },
      {
        name: 'phone',
        label: 'Phone (optional)',
        type: 'tel',
        placeholder: '+44 7000 000000',
        required: false,
      },
    ],
    serviceLabel: 'Service of interest (optional)',
    servicePlaceholder: 'Select a service…',
    messageLabel: 'Tell us about your project',
    messagePlaceholder: 'What are you looking to build?',
    submitLabel: 'Send message',
    submittingLabel: 'Sending…',
    validationMessage: 'Please fill in your name, email and message.',
  },
  sidebar: {
    directLabel: 'Direct',
    followLabel: 'Follow',
    mapTitle: 'Digital Pillars Manchester location',
    mapSrc: 'https://www.google.com/maps?q=Manchester+M4+4BF&output=embed',
  },
} as const;
