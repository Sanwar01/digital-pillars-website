export type CaseStudy = {
  seo: { title: string; description: string };
  /** One-line business outcome under the title */
  headline: string;
  heroImage: string;
  /** Project overview facts */
  overview: { label: string; value: string }[];
  challenge: string;
  solution: string;
  features: { title: string; body: string }[];
  visuals: { src: string; alt: string; caption?: string }[];
  journey: { step: string; title: string; body: string }[];
  /** Light, buyer-friendly tools — not a stack dump */
  tools: string[];
  outcomes: { value: string; label: string }[];
  /** Quote or short demo / note */
  note: { label: string; body: string; attribution?: string };
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  type: string;
  year: string;
  image: string;
  /** Short card blurb */
  description: string;
  /** Shown as pills on the card */
  deliverables: string[];
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
    overviewEyebrow: 'Project overview',
    challengeEyebrow: 'The challenge',
    solutionEyebrow: 'The solution',
    featuresEyebrow: 'Key features',
    visualsEyebrow: 'Visual breakdown',
    journeyEyebrow: 'User journey',
    toolsEyebrow: 'Tools & technology',
    outcomeEyebrow: 'Outcome',
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
      description:
        'A conversion-led website and agent portal that turns property browsers into viewings.',
      deliverables: ['UX/UI design', 'Web redesign', 'Portal build'],
      caseStudy: {
        seo: {
          title: 'Northern Estates Case Study | Digital Pillars',
          description:
            'A conversion-led estate agency website and portal that turned more browsers into viewings across Greater Manchester.',
        },
        headline:
          'More viewings. Clearer listings. A site that sells the property — not the template.',
        heroImage: img('photo-1542393545-10f5cde2c810'),
        overview: [
          { label: 'Client', value: 'Northern Estates' },
          { label: 'Industry', value: 'Estate Agents' },
          { label: 'Deliverable', value: 'Website & portal' },
          { label: 'Year', value: '2025' },
        ],
        challenge:
          'Their old site looked dated and buried good stock. Buyers bounced on mobile, and agents spent too long chasing leads that never arrived.',
        solution:
          'We rebuilt the experience around property search and enquiry — then gave agents a simple portal so listings stay fresh without IT headaches.',
        features: [
          {
            title: 'Property-first browsing',
            body: 'Listings lead every key page, so buyers find homes before they find clutter.',
          },
          {
            title: 'Fast enquiry paths',
            body: 'Viewing requests and valuations sit where people already decide — not buried in a footer.',
          },
          {
            title: 'Agent portal',
            body: 'Staff update stock and hand off leads without juggling spreadsheets.',
          },
        ],
        visuals: [
          {
            src: img('photo-1542393545-10f5cde2c810'),
            alt: 'Northern Estates homepage',
            caption: 'Homepage built around search and featured stock',
          },
          {
            src: img('photo-1524758631624-e2822e304c36', 1200),
            alt: 'Property listing experience',
            caption: 'Listing cards designed for scannability on mobile',
          },
          {
            src: img('photo-1497366811353-6870744d04b2', 1200),
            alt: 'Enquiry flow',
            caption: 'Short enquiry journey from interest to booking',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Discover',
            body: 'A buyer lands on a clear homepage and searches by area or type.',
          },
          {
            step: '02',
            title: 'Decide',
            body: 'Strong photos and essentials help them shortlist without friction.',
          },
          {
            step: '03',
            title: 'Enquire',
            body: 'One tap to request a viewing — straight to the right agent.',
          },
        ],
        tools: ['Next.js', 'Headless CMS', 'Map search', 'Email automation'],
        outcomes: [
          { value: '+38%', label: 'More enquiries' },
          { value: '+24%', label: 'More valuation requests' },
          { value: '2×', label: 'Faster on mobile' },
        ],
        note: {
          label: 'Client note',
          body: '“We finally have a site that looks as professional as the service we give in person.”',
          attribution: 'Director, Northern Estates',
        },
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
      description:
        'A warmer charity site with simpler giving — and less admin for the team.',
      deliverables: ['UX/UI design', 'Web redesign', 'Automation'],
      caseStudy: {
        seo: {
          title: 'BrightFutures Trust Case Study | Digital Pillars',
          description:
            'A warmer charity website and simpler giving experience that lifted online donations for BrightFutures Trust.',
        },
        headline:
          'A site that shows the impact — and makes giving feel effortless.',
        heroImage: img('photo-1497366754035-f200968a6e72'),
        overview: [
          { label: 'Client', value: 'BrightFutures Trust' },
          { label: 'Industry', value: 'Charities' },
          { label: 'Deliverable', value: 'Website & automation' },
          { label: 'Year', value: '2025' },
        ],
        challenge:
          'Supporters couldn’t find programmes or donate without friction. Staff wasted hours chasing incomplete gifts and updating records by hand.',
        solution:
          'We built a story-led website with a calm donation path — and automated the admin that was burning the team’s time.',
        features: [
          {
            title: 'Impact-led storytelling',
            body: 'Programmes and outcomes sit front and centre so donors understand where money goes.',
          },
          {
            title: 'Simple giving',
            body: 'One-off and monthly donations that feel trustworthy and take minutes.',
          },
          {
            title: 'Quiet automation',
            body: 'Receipts and CRM updates happen in the background — no spreadsheet chase.',
          },
        ],
        visuals: [
          {
            src: img('photo-1497366754035-f200968a6e72'),
            alt: 'BrightFutures Trust homepage',
            caption: 'Warm, human homepage with a clear give CTA',
          },
          {
            src: img('photo-1461749280684-dccba630e2f6', 1200),
            alt: 'Programmes pages',
            caption: 'Programme pages that explain impact without jargon',
          },
          {
            src: img('photo-1524758631624-e2822e304c36', 1200),
            alt: 'Donation experience',
            caption: 'Donation flow designed for confidence, not complexity',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Connect',
            body: 'A supporter arrives and immediately sees who the charity helps.',
          },
          {
            step: '02',
            title: 'Understand',
            body: 'Programme pages make the need and the outcome feel concrete.',
          },
          {
            step: '03',
            title: 'Give',
            body: 'They donate once or monthly — and get instant confirmation.',
          },
        ],
        tools: ['Next.js', 'Donation platform', 'CRM sync', 'Email receipts'],
        outcomes: [
          { value: '+52%', label: 'Online donations' },
          { value: '8 hrs', label: 'Admin saved each week' },
          { value: '+31%', label: 'Forms completed' },
        ],
        note: {
          label: 'Demo note',
          body: 'Happy to walk through the live donation journey and behind-the-scenes automation on a short call.',
        },
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
      description:
        'A customer account app that makes bills and usage clear — and cuts support calls.',
      deliverables: ['UX/UI design', 'Web app', 'Migration'],
      caseStudy: {
        seo: {
          title: 'Volt Energy Case Study | Digital Pillars',
          description:
            'A customer account app for Volt Energy that cut support calls and made bills and usage easy to understand.',
        },
        headline:
          'Customers get answers themselves — without calling the call centre.',
        heroImage: img('photo-1597673030062-0a0f1a801a31'),
        overview: [
          { label: 'Client', value: 'Volt Energy' },
          { label: 'Industry', value: 'Energy' },
          { label: 'Deliverable', value: 'Customer web app' },
          { label: 'Year', value: '2024' },
        ],
        challenge:
          'Customers couldn’t see bills or usage clearly. Every simple question became a phone call — and the old portal felt unreliable.',
        solution:
          'We designed a calm account app that answers the questions people actually ask — balance, usage, bills — before they pick up the phone.',
        features: [
          {
            title: 'Clear account home',
            body: 'Usage, bills and balance in language customers understand.',
          },
          {
            title: 'Guided help',
            body: 'Common issues resolve in-app with clear next steps.',
          },
          {
            title: 'Mobile-ready',
            body: 'Built for checking in on the go, not just at a desk.',
          },
        ],
        visuals: [
          {
            src: img('photo-1597673030062-0a0f1a801a31'),
            alt: 'Volt Energy dashboard',
            caption: 'Account home that answers the first three questions',
          },
          {
            src: img('photo-1466611653911-95081537e5b7', 1200),
            alt: 'Usage views',
            caption: 'Usage and billing made scannable',
          },
          {
            src: img('photo-1531973576160-7125cd663d86', 1200),
            alt: 'Support flows',
            caption: 'Help paths that reduce avoidable calls',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Sign in',
            body: 'A customer opens the app to check something simple.',
          },
          {
            step: '02',
            title: 'See clearly',
            body: 'Balance, usage and latest bill are obvious in seconds.',
          },
          {
            step: '03',
            title: 'Resolve',
            body: 'If they need help, guided support finishes the job.',
          },
        ],
        tools: ['React', 'Secure login', 'Billing APIs', 'Support tickets'],
        outcomes: [
          { value: '−27%', label: 'Support tickets' },
          { value: '64%', label: 'Self-serve rate' },
          { value: '+18', label: 'Portal satisfaction' },
        ],
        note: {
          label: 'Client note',
          body: '“Our phone queue got quieter within weeks — customers can finally help themselves.”',
          attribution: 'Head of Customer, Volt Energy',
        },
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
      description:
        'Brand and launch website that helps founders understand the offer — and apply.',
      deliverables: ['Brand identity', 'UX/UI design', 'Website'],
      caseStudy: {
        seo: {
          title: 'Quay Startups Case Study | Digital Pillars',
          description:
            'A confident brand and launch website that helps Quay Startups attract the right founders and partners.',
        },
        headline:
          'A digital presence that finally matched the quality of their network.',
        heroImage: img('photo-1461749280684-dccba630e2f6'),
        overview: [
          { label: 'Client', value: 'Quay Startups' },
          { label: 'Industry', value: 'Startups' },
          { label: 'Deliverable', value: 'Brand & website' },
          { label: 'Year', value: '2025' },
        ],
        challenge:
          'Quay had strong relationships but a weak first impression online. Founders couldn’t tell what was on offer — or how to apply.',
        solution:
          'We shaped a confident brand and a fast site that makes the offer obvious: who it’s for, what you get, and how to start.',
        features: [
          {
            title: 'Clear positioning',
            body: 'A brand system that feels ambitious without startup jargon.',
          },
          {
            title: 'Programme clarity',
            body: 'Pages that spell out fit, timeline and outcomes.',
          },
          {
            title: 'Application paths',
            body: 'Founders and partners get in touch through the right door.',
          },
        ],
        visuals: [
          {
            src: img('photo-1461749280684-dccba630e2f6'),
            alt: 'Quay Startups homepage',
            caption: 'Homepage that leads with the offer, not fluff',
          },
          {
            src: img('photo-1531973576160-7125cd663d86', 1200),
            alt: 'Programme overview',
            caption: 'Programme pages with obvious next steps',
          },
          {
            src: img('photo-1542393545-10f5cde2c810', 1200),
            alt: 'Brand detail',
            caption: 'Brand system carried through the full site',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Arrive',
            body: 'A founder lands and immediately understands who Quay is for.',
          },
          {
            step: '02',
            title: 'Explore',
            body: 'Programmes explain the path without a sales call first.',
          },
          {
            step: '03',
            title: 'Apply',
            body: 'A short application starts a real conversation.',
          },
        ],
        tools: ['Figma', 'Next.js', 'CMS', 'Analytics'],
        outcomes: [
          { value: '+41%', label: 'Qualified applications' },
          { value: '2.1×', label: 'Time on site' },
          { value: '−19%', label: 'Bounce rate' },
        ],
        note: {
          label: 'Demo note',
          body: 'We can share the brand system and live site walkthrough on a 15-minute call.',
        },
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
      description:
        'A resident portal for rent, repairs and documents — less phone queue, more self-serve.',
      deliverables: ['UX/UI design', 'Web app', 'Low code'],
      caseStudy: {
        seo: {
          title: 'Pennine Housing Case Study | Digital Pillars',
          description:
            'A resident portal that made rent, repairs and documents easier for Pennine Housing tenants — and quieter for the call centre.',
        },
        headline:
          'Everyday housing tasks online — so residents don’t need to call.',
        heroImage: img('photo-1497366811353-6870744d04b2'),
        overview: [
          { label: 'Client', value: 'Pennine Housing' },
          { label: 'Industry', value: 'Housing' },
          { label: 'Deliverable', value: 'Resident portal' },
          { label: 'Year', value: '2024' },
        ],
        challenge:
          'Residents phoned for balances, repairs and paperwork. Staff were overloaded, and the old tools weren’t easy enough for everyone.',
        solution:
          'We built an accessible portal focused on the tasks residents actually need — rent, repairs and documents — in plain language.',
        features: [
          {
            title: 'Rent at a glance',
            body: 'Balance and payment history without the phone queue.',
          },
          {
            title: 'Repairs with status',
            body: 'Log a job and track progress without chasing updates.',
          },
          {
            title: 'Document centre',
            body: 'The paperwork tenants need, when they need it.',
          },
        ],
        visuals: [
          {
            src: img('photo-1497366811353-6870744d04b2'),
            alt: 'Resident portal home',
            caption: 'Portal home designed for clarity, not clutter',
          },
          {
            src: img('photo-1497366754035-f200968a6e72', 1200),
            alt: 'Repairs view',
            caption: 'Repair logging with clear status',
          },
          {
            src: img('photo-1524758631624-e2822e304c36', 1200),
            alt: 'Mobile experience',
            caption: 'Built to work on the phones residents actually use',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Log in',
            body: 'A resident opens the portal for a simple account task.',
          },
          {
            step: '02',
            title: 'Complete',
            body: 'They check rent, raise a repair or download a document.',
          },
          {
            step: '03',
            title: 'Done',
            body: 'No phone call — and staff get a cleaner request if needed.',
          },
        ],
        tools: ['Secure login', 'Housing systems', 'Accessible UI', 'Notifications'],
        outcomes: [
          { value: '−22%', label: 'Call volume' },
          { value: '71%', label: 'Repairs logged online' },
          { value: '4.2k+', label: 'Residents using it' },
        ],
        note: {
          label: 'Client note',
          body: '“Residents tell us it’s the first housing portal that doesn’t feel intimidating.”',
          attribution: 'Digital Lead, Pennine Housing',
        },
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
      description:
        'An AI dashboard that helps teams trust insights — and act on them faster.',
      deliverables: ['UX/UI design', 'Product UI', 'AI integration'],
      caseStudy: {
        seo: {
          title: 'Meridian AI Case Study | Digital Pillars',
          description:
            'An AI product interface that helps teams trust insights and act faster — without drowning in complexity.',
        },
        headline:
          'AI that feels clear enough to trust — and simple enough to use every day.',
        heroImage: img('photo-1531973576160-7125cd663d86'),
        overview: [
          { label: 'Client', value: 'Meridian AI' },
          { label: 'Industry', value: 'AI / SaaS' },
          { label: 'Deliverable', value: 'Product dashboard' },
          { label: 'Year', value: '2025' },
        ],
        challenge:
          'The product was powerful, but people couldn’t see what the AI was doing. Without trust, insights sat unused.',
        solution:
          'We designed a dashboard that shows what matters, why it matters, and what to do next — so teams act instead of second-guess.',
        features: [
          {
            title: 'Trusted insights',
            body: 'Clear context so operators know why a recommendation appeared.',
          },
          {
            title: 'Action queue',
            body: 'Next steps sit ready — not buried in charts.',
          },
          {
            title: 'Daily-driver UI',
            body: 'Built for operators who live in the product, not for demos.',
          },
        ],
        visuals: [
          {
            src: img('photo-1531973576160-7125cd663d86'),
            alt: 'Meridian AI dashboard',
            caption: 'Dashboard focused on decisions, not noise',
          },
          {
            src: img('photo-1597673030062-0a0f1a801a31', 1200),
            alt: 'Insight views',
            caption: 'Insights with enough context to trust',
          },
          {
            src: img('photo-1461749280684-dccba630e2f6', 1200),
            alt: 'Action queue',
            caption: 'Action queue that turns insight into movement',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Scan',
            body: 'An operator opens the day with a clear feed of what changed.',
          },
          {
            step: '02',
            title: 'Trust',
            body: 'Context and confidence make the insight feel dependable.',
          },
          {
            step: '03',
            title: 'Act',
            body: 'They complete the next step without leaving the product.',
          },
        ],
        tools: ['React', 'Design system', 'AI APIs', 'Realtime updates'],
        outcomes: [
          { value: '−45%', label: 'Time to insight' },
          { value: '3.4×', label: 'Actions completed' },
          { value: '92%', label: 'Pilot retention' },
        ],
        note: {
          label: 'Demo note',
          body: 'We can walk through a recorded product demo and the design decisions behind the dashboard.',
        },
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
      description:
        'A lettings redesign built for tenants searching homes and landlords ready to instruct.',
      deliverables: ['UX/UI design', 'Web redesign', 'SEO'],
      caseStudy: {
        seo: {
          title: 'Salford Lettings Case Study | Digital Pillars',
          description:
            'A lettings website redesign that won more landlord instructions and made finding a home easier on mobile.',
        },
        headline:
          'Built for two audiences: tenants looking for a home, and landlords ready to instruct.',
        heroImage: img('photo-1524758631624-e2822e304c36'),
        overview: [
          { label: 'Client', value: 'Salford Lettings' },
          { label: 'Industry', value: 'Estate Agents' },
          { label: 'Deliverable', value: 'Website redesign' },
          { label: 'Year', value: '2024' },
        ],
        challenge:
          'The site felt generic and weak on mobile. Landlord leads were hard to find, and property search felt like hard work.',
        solution:
          'We redesigned around two clear journeys — find a home, and instruct as a landlord — with a stronger local presence.',
        features: [
          {
            title: 'Dual-path homepage',
            body: 'Tenants and landlords each get a clear way in.',
          },
          {
            title: 'Better property browsing',
            body: 'Faster filters and cards that work properly on phones.',
          },
          {
            title: 'Landlord CTAs',
            body: 'Valuation and instruction asks sit where they convert.',
          },
        ],
        visuals: [
          {
            src: img('photo-1524758631624-e2822e304c36'),
            alt: 'Salford Lettings homepage',
            caption: 'Homepage that serves two audiences without confusion',
          },
          {
            src: img('photo-1542393545-10f5cde2c810', 1200),
            alt: 'Property search',
            caption: 'Search that feels light on mobile',
          },
          {
            src: img('photo-1497366754035-f200968a6e72', 1200),
            alt: 'Landlord journey',
            caption: 'Landlord path with a confident next step',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Choose a path',
            body: 'Visitor picks tenant or landlord from the first screen.',
          },
          {
            step: '02',
            title: 'Browse or instruct',
            body: 'Tenants search homes; landlords see why to instruct.',
          },
          {
            step: '03',
            title: 'Convert',
            body: 'Enquiry or valuation request lands with the right team.',
          },
        ],
        tools: ['Next.js', 'Property feed', 'Local SEO', 'Analytics'],
        outcomes: [
          { value: '+29%', label: 'Landlord leads' },
          { value: '+33%', label: 'Organic traffic' },
          { value: '+21%', label: 'Mobile conversions' },
        ],
        note: {
          label: 'Client note',
          body: '“Landlords finally notice us online — and tenants stop bouncing on their phones.”',
          attribution: 'Partner, Salford Lettings',
        },
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
      description:
        'A digital strategy engagement mapping the highest-ROI next steps for growth.',
      deliverables: ['Digital strategy', 'Roadmap', 'Workshop'],
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
