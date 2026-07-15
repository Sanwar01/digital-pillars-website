import { Code2, AppWindow, Compass, Bot } from 'lucide-react';

export const services = [
  {
    title: 'Web Design & Development',
    icon: '▣',
    tone: 'bg-pillar-blue',
    description:
      'Modern, responsive websites built to represent your brand, engage visitors and convert them into customers.',
  },
  {
    title: 'Software & Web Applications',
    icon: '▤',
    tone: 'bg-pillar-green',
    description:
      'Custom web applications, dashboards, portals and tools that streamline operations and support growth.',
  },
  {
    title: 'Digital Strategy & Consulting',
    icon: '◇',
    tone: 'bg-pillar-purple',
    description:
      'Practical guidance to help you make the right digital decisions and build a clear roadmap for growth.',
  },
  {
    title: 'AI & Automation',
    icon: '✦',
    tone: 'bg-pillar-orange',
    description:
      'AI chatbots, workflow automations, CRM integrations and smart systems that save time and reduce admin.',
  },
] as const;

export const sectors = [
  ['▦', 'Local Businesses'],
  ['⚒', 'Tradespeople'],
  ['⌂', 'Estate Agents'],
  ['▤', 'Accountants'],
  ['⚖', 'Solicitors'],
  ['◊', 'Mosques'],
  ['♡', 'Charities'],
  ['♨', 'Restaurants'],
  ['△', 'Startups'],
] as const;

export const packages = [
  {
    title: 'Starter Website Package',
    intro: 'For small businesses needing a professional online presence.',
    priceLabel: 'From',
    price: '£750',
    cta: 'Enquire Now',
    featured: false,
    purple: false,
    items: [
      'Responsive website',
      'Contact forms',
      'WhatsApp button',
      'Basic SEO setup',
      'Hosting support',
      'Maintenance option',
    ],
  },
  {
    title: 'Growth Website + Automation Package',
    intro:
      'For businesses that want to capture more leads and save admin time.',
    priceLabel: 'From',
    price: '£1,500',
    cta: 'Book a Consultation',
    featured: true,
    purple: false,
    items: [
      'Everything in Starter',
      'AI chatbot',
      'Booking forms',
      'Lead capture',
      'CRM integration',
      'WhatsApp integration',
      'Analytics setup',
    ],
  },
  {
    title: 'Custom Software Solution',
    intro: 'For businesses needing bespoke tools or web applications.',
    priceLabel: 'Custom',
    price: 'Quote',
    cta: 'Discuss a Project',
    featured: false,
    purple: true,
    items: [
      'Dashboards and portals',
      'Booking systems',
      'Internal tools',
      'Workflow automation',
      'AI integrations',
      'Custom development',
    ],
  },
] as const;

export const featuredWork = [
  {
    title: 'Mosque Website & Donation Platform',
    category: 'Charity / Non-Profit',
    thumb: 'from-sky-100 via-white to-blue-200',
  },
  {
    title: 'Local Trades Website with Lead Capture',
    category: 'Trades',
    thumb: 'from-orange-200 via-blue-100 to-white',
  },
  {
    title: 'Business Dashboard Web App',
    category: 'SaaS / Web Application',
    thumb: 'from-white via-blue-50 to-slate-200',
  },
  {
    title: 'Charity Website Redesign',
    category: 'Charity',
    thumb: 'from-blue-100 via-emerald-100 to-white',
  },
  {
    title: 'Restaurant Booking Website',
    category: 'Hospitality',
    thumb: 'from-amber-900 via-orange-300 to-amber-100',
  },
  {
    title: 'Consultancy Website Refresh',
    category: 'Business Services',
    thumb: 'from-slate-900 via-blue-200 to-white',
  },
] as const;

export const processSteps = [
  {
    title: 'Discover',
    text: 'We learn about your business, goals, audience and challenges.',
  },
  {
    title: 'Design',
    text: 'We plan the strategy, structure and user experience.',
  },
  {
    title: 'Build',
    text: 'We develop, integrate and test your digital solution.',
  },
  {
    title: 'Support',
    text: 'We provide ongoing support, maintenance and optimisation.',
  },
] as const;

export const SITE = {
  name: 'Digital Pillars',
  location: 'Manchester, UK',
  email: 'hello@digitalpillars.co.uk',
  phone: '+44 161 000 0000',
  address: 'Federation House, Federation St, Manchester M4 4BF',
  tagline:
    'A Manchester digital agency building websites, software & AI that move businesses forward.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
    { label: 'X / Twitter', href: 'https://www.x.com' },
    { label: 'Dribbble', href: 'https://www.dribbble.com' },
  ],
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

export const BENEFITS = [
  {
    no: '01',
    title: 'Design that outperforms',
    body: 'Award-level craft with commercial intent. Every pixel earns its place and every page is built to convert visitors into enquiries.',
  },
  {
    no: '02',
    title: 'Engineering you can trust',
    body: 'Fast, secure and maintainable. We build on solid foundations so your platform scales with you rather than against you.',
  },
  {
    no: '03',
    title: 'A partner, not a vendor',
    body: 'Straight-talking Manchester team. Clear communication, honest advice and a genuine stake in the results we deliver.',
  },
];

export const STEPS = [
  {
    no: '01',
    title: 'Discover',
    body: 'We dig into your goals, users and market to define what success actually looks like.',
  },
  {
    no: '02',
    title: 'Design',
    body: 'We craft the strategy, structure and interface, validating direction before a line of code.',
  },
  {
    no: '03',
    title: 'Build',
    body: 'We develop, integrate and test in tight iterations so you see progress every week.',
  },
  {
    no: '04',
    title: 'Launch & grow',
    body: 'We ship, measure and optimise, turning the launch into ongoing momentum.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Digital Pillars rebuilt our platform and enquiries doubled within a quarter. They think like partners, not contractors.',
    name: 'Sarah Whitfield',
    role: 'Director, Northern Estates',
  },
  {
    quote:
      'The automation work saved our small team days every month. Genuinely transformative for a charity our size.',
    name: 'David Okoro',
    role: 'Operations Lead, BrightFutures Trust',
  },
  {
    quote:
      'Fast, sharp and refreshingly honest. Our new site finally reflects the ambition of the company.',
    name: 'Priya Nair',
    role: 'Founder, Volt Energy',
  },
];

export const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'A focused marketing site usually runs 4–8 weeks; software and app builds are scoped individually. We give you a clear timeline before we start.',
  },
  {
    q: 'Do you work with businesses outside Manchester?',
    a: "Absolutely. We're proudly Manchester-based but work with clients across the UK and internationally, running projects remotely with regular check-ins.",
  },
  {
    q: 'How much does a project cost?',
    a: 'Every project is scoped to its goals. After a short discovery call we provide a fixed, transparent quote with no hidden extras.',
  },
  {
    q: 'Can you maintain the site after launch?',
    a: 'Yes. We offer ongoing support, hosting and growth retainers so your platform stays fast, secure and evolving.',
  },
  {
    q: 'Which industries do you specialise in?',
    a: 'We regularly work with estate agents, charities, startups, the energy industry and housing associations, plus ambitious businesses of all kinds.',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Northern Estates',
    category: 'Estate Agents',
    type: 'Website & Portal',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1542393545-10f5cde2c810?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
  {
    id: 2,
    title: 'BrightFutures Trust',
    category: 'Charities',
    type: 'Website & Automation',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
  {
    id: 3,
    title: 'Volt Energy',
    category: 'Energy Industry',
    type: 'Web Application',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
  {
    id: 4,
    title: 'Quay Startups',
    category: 'Startups',
    type: 'Brand & Website',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
  {
    id: 5,
    title: 'Pennine Housing',
    category: 'Housing Associations',
    type: 'Resident Portal',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
  {
    id: 6,
    title: 'Meridian AI',
    category: 'Startups',
    type: 'AI Product & Dashboard',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
  {
    id: 7,
    title: 'Salford Lettings',
    category: 'Estate Agents',
    type: 'Website Redesign',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
  {
    id: 8,
    title: 'GreenGrid Energy',
    category: 'Energy Industry',
    type: 'Digital Strategy',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  },
];

export const FILTERS = [
  'All',
  'Estate Agents',
  'Charities',
  'Startups',
  'Energy Industry',
  'Housing Associations',
];
