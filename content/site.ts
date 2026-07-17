import { Code2, AppWindow, Compass, Bot } from 'lucide-react';
import { contact } from './contact';

export const SITE = {
  name: 'Digital Pillars',
  location: 'Manchester, UK',
  email: 'hello@digitalpillars.co.uk',
  address: 'Manchester, UK',
  tagline:
    'A web design and software agency building websites, software & AI that move businesses forward.',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/digitalpillars' },
  ],
  footerBlurb: 'Web design agency · Software agency · Manchester, UK',
};

export const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our work', to: '/our-work' },
  { label: 'Contact', to: '/contact' },
] as const;

export const FOOTER_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our work', to: '/our-work' },
  { label: 'Contact', to: '/contact' },
] as const;

export const FOOTER_COPY = {
  navigateLabel: 'Navigate',
  contactLabel: 'Get in touch',
  rightsSuffix: 'All rights reserved.',
};

export const HEADER_CTA = {
  label: "Let's talk",
  href: '/contact',
};

export const SERVICES = [
  {
    id: 'web-design',
    icon: Code2,
    title: 'Website Design & Development',
    short:
      'Conversion-first websites engineered to load fast and rank in Manchester and beyond.',
    long: 'We design and build high-performance marketing sites and platforms that look bespoke and convert. Accessibility, Core Web Vitals and SEO are baked in from day one.',
    points: [
      'Bespoke UI/UX design',
      'Headless & CMS builds',
      'Technical SEO foundations',
      'Core Web Vitals tuned',
    ],
  },
  {
    id: 'software',
    icon: AppWindow,
    title: 'Software & Web Applications',
    short:
      'Custom web apps, portals and dashboards that streamline the way you operate.',
    long: 'From internal tools to customer portals, we ship robust, scalable applications with clean architecture, secure APIs and interfaces your team will actually enjoy using.',
    points: [
      'Customer & staff portals',
      'Dashboards & analytics',
      'API & systems integration',
      'Scalable cloud infra',
    ],
  },
  {
    id: 'strategy',
    icon: Compass,
    title: 'Digital Strategy & Consulting',
    short:
      'Clarity, roadmaps and measurable plans that connect digital spend to growth.',
    long: 'We audit, plan and prioritise. You get a pragmatic roadmap tied to revenue, not vanity metrics, plus the hands-on support to execute it.',
    points: [
      'Digital audits',
      'Growth roadmaps',
      'Conversion optimisation',
      'Analytics & reporting',
    ],
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & Automation',
    short:
      'Automate the repetitive and layer intelligence into your products and workflows.',
    long: 'We integrate AI assistants, automate manual workflows and connect your tools so your team spends time on what matters. Practical, secure and measurable.',
    points: [
      'AI assistants & chatbots',
      'Workflow automation',
      'Document & data processing',
      'Tooling integrations',
    ],
  },
];

export const INDUSTRIES = [
  'Estate Agents',
  'Charities',
  'Startups',
  'Energy Industry',
  'Housing Associations',
];

export const MARQUEE_EXTRA = [
  'Web Design',
  'Software Agency',
  'AI & Automation',
];

export const FINAL_CTA = {
  eyebrow: "Let's build something",
  headline: 'Ready to outgrow your competitors?',
  body: "Book a free discovery call and we'll map out exactly how Digital Pillars can move your business forward.",
  primary: { label: "Let's talk", href: '/contact' },
  secondary: { label: 'See our work', href: '/our-work' },
};
