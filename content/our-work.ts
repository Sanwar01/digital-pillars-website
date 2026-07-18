export type CaseStudy = {
  seo: { title: string; description: string };
  /** One-line business outcome under the title */
  headline: string;
  heroImage: string;
  /** Quick facts — industry, deliverable, year, etc. */
  snapshot: { label: string; value: string }[];
  /** Business problem in plain language */
  problem: string;
  /** What we delivered — outcomes, not tech stack */
  built: string[];
  /** Dominant visual proof */
  showcase: { src: string; alt: string }[];
  /** Business impact metrics */
  results: { value: string; label: string }[];
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  type: string;
  year: string;
  image: string;
  /** Present for websites, web apps, and AI work only */
  caseStudy?: CaseStudy;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=85&w=${w}`;

export const ourWork = {
  seo: {
    title: 'Our Work | Portfolio — Digital Pillars Manchester',
    description:
      "Explore Digital Pillars' portfolio of websites, web apps and digital projects for estate agents, charities, startups, energy and housing associations in Manchester.",
  },
  hero: {
    eyebrow: 'Selected work',
    lines: ['Work that', 'moves the needle.'],
    body: 'A snapshot of recent projects across our core industries. Every build is measured on the results it delivers.',
  },
  filters: [
    'All',
    'Estate Agents',
    'Charities',
    'Startups',
    'Energy Industry',
    'Housing Associations',
  ],
  caseStudy: {
    backLabel: 'All work',
    snapshotEyebrow: 'Project snapshot',
    problemEyebrow: 'The problem',
    builtEyebrow: 'What we built',
    showcaseEyebrow: 'The work',
    resultsEyebrow: 'The impact',
  },
  projects: [
    {
      id: 1,
      slug: 'northern-estates',
      title: 'Northern Estates',
      category: 'Estate Agents',
      type: 'Website & Portal',
      year: '2025',
      image: img('photo-1542393545-10f5cde2c810', 1200),
      caseStudy: {
        seo: {
          title: 'Northern Estates Case Study | Digital Pillars',
          description:
            'A conversion-led estate agency website and portal that turned more browsers into viewings across Greater Manchester.',
        },
        headline:
          'More viewings. Clearer listings. A site that sells the property — not the template.',
        heroImage: img('photo-1542393545-10f5cde2c810'),
        snapshot: [
          { label: 'Industry', value: 'Estate Agents' },
          { label: 'Deliverable', value: 'Website & portal' },
          { label: 'Year', value: '2025' },
          { label: 'Focus', value: 'Enquiries & viewings' },
        ],
        problem:
          'Their old site looked dated and buried good stock. Buyers bounced on mobile, and agents spent too long chasing leads that never arrived.',
        built: [
          'A property-first website built to convert browsers into viewings',
          'Simple enquiry and valuation journeys on every key page',
          'A lightweight portal so agents can manage listings without friction',
        ],
        showcase: [
          {
            src: img('photo-1542393545-10f5cde2c810'),
            alt: 'Northern Estates homepage',
          },
          {
            src: img('photo-1524758631624-e2822e304c36', 1200),
            alt: 'Property listing experience',
          },
          {
            src: img('photo-1497366811353-6870744d04b2', 1200),
            alt: 'Enquiry and valuation flow',
          },
        ],
        results: [
          { value: '+38%', label: 'More enquiries' },
          { value: '+24%', label: 'More valuation requests' },
          { value: '2×', label: 'Faster on mobile' },
        ],
      },
    },
    {
      id: 2,
      slug: 'brightfutures-trust',
      title: 'BrightFutures Trust',
      category: 'Charities',
      type: 'Website & Automation',
      year: '2025',
      image: img('photo-1497366754035-f200968a6e72', 1200),
      caseStudy: {
        seo: {
          title: 'BrightFutures Trust Case Study | Digital Pillars',
          description:
            'A warmer charity website and simpler giving experience that lifted online donations for BrightFutures Trust.',
        },
        headline:
          'A site that shows the impact — and makes giving feel effortless.',
        heroImage: img('photo-1497366754035-f200968a6e72'),
        snapshot: [
          { label: 'Industry', value: 'Charities' },
          { label: 'Deliverable', value: 'Website & automation' },
          { label: 'Year', value: '2025' },
          { label: 'Focus', value: 'Donations & trust' },
        ],
        problem:
          'Supporters couldn’t find programmes or donate without friction. Staff wasted hours chasing incomplete gifts and updating records by hand.',
        built: [
          'A story-led website that makes the mission feel human and urgent',
          'One-off and recurring donations that take minutes, not patience',
          'Automatic receipts so the team can focus on the work, not admin',
        ],
        showcase: [
          {
            src: img('photo-1497366754035-f200968a6e72'),
            alt: 'BrightFutures Trust homepage',
          },
          {
            src: img('photo-1461749280684-dccba630e2f6', 1200),
            alt: 'Impact and programmes pages',
          },
          {
            src: img('photo-1524758631624-e2822e304c36', 1200),
            alt: 'Donation experience',
          },
        ],
        results: [
          { value: '+52%', label: 'Online donations' },
          { value: '8 hrs', label: 'Admin saved each week' },
          { value: '+31%', label: 'Forms completed' },
        ],
      },
    },
    {
      id: 3,
      slug: 'volt-energy',
      title: 'Volt Energy',
      category: 'Energy Industry',
      type: 'Web Application',
      year: '2024',
      image: img('photo-1597673030062-0a0f1a801a31', 1200),
      caseStudy: {
        seo: {
          title: 'Volt Energy Case Study | Digital Pillars',
          description:
            'A customer account app for Volt Energy that cut support calls and made bills and usage easy to understand.',
        },
        headline:
          'Customers get answers themselves — without calling the call centre.',
        heroImage: img('photo-1597673030062-0a0f1a801a31'),
        snapshot: [
          { label: 'Industry', value: 'Energy' },
          { label: 'Deliverable', value: 'Customer web app' },
          { label: 'Year', value: '2024' },
          { label: 'Focus', value: 'Self-serve & support' },
        ],
        problem:
          'Customers couldn’t see bills or usage clearly. Every simple question became a phone call — and the old portal felt unreliable.',
        built: [
          'A clear account home for usage, bills and balance',
          'Guided help so people resolve issues without waiting on hold',
          'A calm mobile experience for checking in on the go',
        ],
        showcase: [
          {
            src: img('photo-1597673030062-0a0f1a801a31'),
            alt: 'Volt Energy account dashboard',
          },
          {
            src: img('photo-1466611653911-95081537e5b7', 1200),
            alt: 'Usage and billing views',
          },
          {
            src: img('photo-1531973576160-7125cd663d86', 1200),
            alt: 'Support and self-serve flows',
          },
        ],
        results: [
          { value: '−27%', label: 'Support tickets' },
          { value: '64%', label: 'Self-serve rate' },
          { value: '+18', label: 'Portal satisfaction' },
        ],
      },
    },
    {
      id: 4,
      slug: 'quay-startups',
      title: 'Quay Startups',
      category: 'Startups',
      type: 'Brand & Website',
      year: '2025',
      image: img('photo-1461749280684-dccba630e2f6', 1200),
      caseStudy: {
        seo: {
          title: 'Quay Startups Case Study | Digital Pillars',
          description:
            'A confident brand and launch website that helps Quay Startups attract the right founders and partners.',
        },
        headline:
          'A digital presence that finally matched the quality of their network.',
        heroImage: img('photo-1461749280684-dccba630e2f6'),
        snapshot: [
          { label: 'Industry', value: 'Startups' },
          { label: 'Deliverable', value: 'Brand & website' },
          { label: 'Year', value: '2025' },
          { label: 'Focus', value: 'Applications & clarity' },
        ],
        problem:
          'Quay had strong relationships but a weak first impression online. Founders couldn’t tell what was on offer — or how to apply.',
        built: [
          'A sharp brand that feels ambitious without the jargon',
          'Programme pages that spell out who it’s for and what happens next',
          'Clear paths for founders and partners to get in touch',
        ],
        showcase: [
          {
            src: img('photo-1461749280684-dccba630e2f6'),
            alt: 'Quay Startups homepage',
          },
          {
            src: img('photo-1531973576160-7125cd663d86', 1200),
            alt: 'Programme overview',
          },
          {
            src: img('photo-1542393545-10f5cde2c810', 1200),
            alt: 'Brand and site detail',
          },
        ],
        results: [
          { value: '+41%', label: 'Qualified applications' },
          { value: '2.1×', label: 'Time on site' },
          { value: '−19%', label: 'Bounce rate' },
        ],
      },
    },
    {
      id: 5,
      slug: 'pennine-housing',
      title: 'Pennine Housing',
      category: 'Housing Associations',
      type: 'Resident Portal',
      year: '2024',
      image: img('photo-1497366811353-6870744d04b2', 1200),
      caseStudy: {
        seo: {
          title: 'Pennine Housing Case Study | Digital Pillars',
          description:
            'A resident portal that made rent, repairs and documents easier for Pennine Housing tenants — and quieter for the call centre.',
        },
        headline:
          'Everyday housing tasks online — so residents don’t need to call.',
        heroImage: img('photo-1497366811353-6870744d04b2'),
        snapshot: [
          { label: 'Industry', value: 'Housing' },
          { label: 'Deliverable', value: 'Resident portal' },
          { label: 'Year', value: '2024' },
          { label: 'Focus', value: 'Self-serve & accessibility' },
        ],
        problem:
          'Residents phoned for balances, repairs and paperwork. Staff were overloaded, and the old tools weren’t easy enough for everyone to use.',
        built: [
          'A simple home for rent balance and payment history',
          'Repair logging with clear status updates',
          'A document centre for the paperwork tenants actually need',
        ],
        showcase: [
          {
            src: img('photo-1497366811353-6870744d04b2'),
            alt: 'Pennine Housing resident portal',
          },
          {
            src: img('photo-1497366754035-f200968a6e72', 1200),
            alt: 'Repairs and account views',
          },
          {
            src: img('photo-1524758631624-e2822e304c36', 1200),
            alt: 'Mobile resident experience',
          },
        ],
        results: [
          { value: '−22%', label: 'Call volume' },
          { value: '71%', label: 'Repairs logged online' },
          { value: '4.2k+', label: 'Residents using it' },
        ],
      },
    },
    {
      id: 6,
      slug: 'meridian-ai',
      title: 'Meridian AI',
      category: 'Startups',
      type: 'AI Product & Dashboard',
      year: '2025',
      image: img('photo-1531973576160-7125cd663d86', 1200),
      caseStudy: {
        seo: {
          title: 'Meridian AI Case Study | Digital Pillars',
          description:
            'An AI product interface that helps teams trust insights and act faster — without drowning in complexity.',
        },
        headline:
          'AI that feels clear enough to trust — and simple enough to use every day.',
        heroImage: img('photo-1531973576160-7125cd663d86'),
        snapshot: [
          { label: 'Industry', value: 'AI / SaaS' },
          { label: 'Deliverable', value: 'Product dashboard' },
          { label: 'Year', value: '2025' },
          { label: 'Focus', value: 'Clarity & action' },
        ],
        problem:
          'The product was powerful, but people couldn’t see what the AI was doing. Without trust, insights sat unused.',
        built: [
          'A dashboard that shows what matters — and why it matters',
          'Clear next actions so teams can move, not just monitor',
          'A calm interface built for operators, not demos',
        ],
        showcase: [
          {
            src: img('photo-1531973576160-7125cd663d86'),
            alt: 'Meridian AI dashboard',
          },
          {
            src: img('photo-1597673030062-0a0f1a801a31', 1200),
            alt: 'Insight and action views',
          },
          {
            src: img('photo-1461749280684-dccba630e2f6', 1200),
            alt: 'Product UI detail',
          },
        ],
        results: [
          { value: '−45%', label: 'Time to insight' },
          { value: '3.4×', label: 'Actions completed' },
          { value: '92%', label: 'Pilot retention' },
        ],
      },
    },
    {
      id: 7,
      slug: 'salford-lettings',
      title: 'Salford Lettings',
      category: 'Estate Agents',
      type: 'Website Redesign',
      year: '2024',
      image: img('photo-1524758631624-e2822e304c36', 1200),
      caseStudy: {
        seo: {
          title: 'Salford Lettings Case Study | Digital Pillars',
          description:
            'A lettings website redesign that won more landlord instructions and made finding a home easier on mobile.',
        },
        headline:
          'Built for two audiences: tenants looking for a home, and landlords ready to instruct.',
        heroImage: img('photo-1524758631624-e2822e304c36'),
        snapshot: [
          { label: 'Industry', value: 'Estate Agents' },
          { label: 'Deliverable', value: 'Website redesign' },
          { label: 'Year', value: '2024' },
          { label: 'Focus', value: 'Landlords & local search' },
        ],
        problem:
          'The site felt generic and weak on mobile. Landlord leads were hard to find, and property search felt like hard work.',
        built: [
          'A homepage that speaks to tenants and landlords without confusion',
          'Cleaner property browsing that works properly on phones',
          'Stronger calls-to-action for landlords ready to instruct',
        ],
        showcase: [
          {
            src: img('photo-1524758631624-e2822e304c36'),
            alt: 'Salford Lettings homepage',
          },
          {
            src: img('photo-1542393545-10f5cde2c810', 1200),
            alt: 'Property search experience',
          },
          {
            src: img('photo-1497366754035-f200968a6e72', 1200),
            alt: 'Landlord journey',
          },
        ],
        results: [
          { value: '+29%', label: 'Landlord leads' },
          { value: '+33%', label: 'Organic traffic' },
          { value: '+21%', label: 'Mobile conversions' },
        ],
      },
    },
    {
      id: 8,
      slug: 'greengrid-energy',
      title: 'GreenGrid Energy',
      category: 'Energy Industry',
      type: 'Digital Strategy',
      year: '2025',
      image: img('photo-1466611653911-95081537e5b7', 1200),
    },
  ] as Project[],
  emptyState: 'No projects in this category yet — check back soon.',
};

export function getProjectBySlug(slug: string): Project | undefined {
  return ourWork.projects.find((p) => p.slug === slug);
}

export function getCaseStudyProjects(): (Project & { caseStudy: CaseStudy })[] {
  return ourWork.projects.filter(
    (p): p is Project & { caseStudy: CaseStudy } => p.caseStudy != null,
  );
}
