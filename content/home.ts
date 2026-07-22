import { contact } from './contact';

export const home = {
  seo: {
    title: 'Digital Pillars | Web Design & Software Agency Manchester',
    description:
      'Digital Pillars is a Manchester web design and software agency building websites, web apps, digital strategy and AI automation for ambitious businesses.',
  },
  hero: {
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600',
    imageAlt: 'Abstract dark architecture representing digital foundations',
    eyebrow: 'Web Design & Software Agency · Manchester, UK',
    lines: ['We build the', 'digital pillars', 'your business'],
    accentLine: 'stands on.',
    body: 'Websites, software, strategy and AI automation — engineered to beat your competitors and win you more leads.',
    primaryCta: {
      label: 'Get free homepage design',
      href: '/free-homepage-design',
    },
    secondaryCta: { label: 'See our work', href: '/our-work' },
  },
  trust: {
    eyebrow: 'Trusted across industries',
  },
  benefits: [
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
  ],
  servicesPreview: {
    eyebrow: 'What we do',
    headline: 'Four services, one obsession: results.',
    viewAllLabel: 'View all services',
    viewAllHref: '/services',
  },
  testimonials: [
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
  ],
  aboutPreview: {
    eyebrow: 'Who we are',
    headline: "A Manchester tech agency with a builder's mindset.",
    body: "We're a tight-knit team of designers, engineers and strategists. No bloated account layers, no jargon — just senior people who care about your outcomes as much as you do.",
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&q=85&w=1100',
    imageAlt: 'Digital Pillars tech agency workspace in Manchester',
    cta: { label: 'Our story', href: '/about' },
  },
} as const;
