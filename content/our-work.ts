export type CaseStudy = {
  seo: { title: string; description: string };
  /** One-line business outcome under the title */
  headline: string;
  heroImage: string;
  /** Project overview facts */
  overview: { label: string; value: string }[];
  /** Plain-language problem paragraphs */
  challenge: string[];
  /** What we built — what it is + what it aims to achieve */
  solution: string[];
  features: { title: string; body: string }[];
  visuals: {
    src: string;
    alt: string;
    caption?: string;
    layout?: 'full' | 'half';
  }[];
  journey: { step: string; title: string; body: string }[];
  /** Light, buyer-friendly tools — not a stack dump */
  tools: string[];
  outcomes: { value: string; label: string }[];
  /** Quote or short demo / note */
  note: { label: string; body: string; attribution?: string };
};

export type Project = {
  id: number;
  slug?: string;
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
  caseStudy: {
    backLabel: 'All work',
    overviewEyebrow: 'Project overview',
    challengeEyebrow: 'The challenge',
    challengeHeadline: 'What held them back.',
    aboutEyebrow: 'About the project',
    aboutHeadline: 'What we built.',
    featuresEyebrow: 'Key features',
    visualsEyebrow: 'Visual breakdown',
    journeyEyebrow: 'User journey',
    toolsEyebrow: 'Tools & technology',
    outcomeEyebrow: 'Outcome',
  },
  projects: [
    {
      id: 1,
      slug: 'greenfield-estates',
      title: 'Greenfield Estates',
      category: 'Estate Agents',
      type: 'Website & Portal',
      year: '2026',
      image: '/images/work/greenfield-estates/hero.png',
      description:
        'A conversion-led website and agent portal that turns property browsers into viewings.',
      deliverables: ['UX/UI design', 'Web development', 'Admin panel'],
      caseStudy: {
        seo: {
          title: 'Greenfield Estates Case Study | Digital Pillars',
          description:
            'A conversion-led estate agency website and portal that turned more browsers into viewings.',
        },
        headline:
          'More viewings. Clearer listings. A site that sells the property — not the template. Powered by our own software, so you can update listings and manage enquiries yourself.',
        heroImage: '/images/work/greenfield-estates/hero.png',
        overview: [
          { label: 'Industry', value: 'Estate Agents' },
          { label: 'Project', value: 'Website & portal' },
          {
            label: 'Objective',
            value: 'More viewings & clearer listings.',
          },
          { label: 'Timeline', value: '6 Weeks' },
        ],
        challenge: [
          'Their old site looked dated and buried strong listings under clutter. Buyers bounced on mobile before they found what they needed.',
          'Agents spent too long chasing leads that never arrived — and updating stock felt harder than it should.',
        ],
        solution: [
          'Greenfield Estates is a conversion-led website and agent portal for a modern estate agency. It is designed to put properties first, make enquiries simple, and help agents keep listings fresh without IT headaches.',
          'The goal was to create a premium first impression that builds trust with buyers and sellers, and to drive more viewings and valuation requests through a clear, visible contact flow.',
        ],
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
            src: '/images/work/greenfield-estates/homepage.png',
            alt: 'Greenfield Estates homepage',
            caption: 'Homepage',
          },
          {
            src: '/images/work/greenfield-estates/homepage-listing-section.png',
            alt: 'Property listing',
            caption: 'Property listing',
            layout: 'half',
          },
          {
            src: '/images/work/greenfield-estates/services.png',
            alt: 'Greenfield Estates services',
            caption: 'Services',
            layout: 'half',
          },
          {
            src: '/images/work/greenfield-estates/client-testimonials.png',
            alt: 'Greenfield Estates client testimonials',
            caption: 'Client testimonials',
            layout: 'full',
          },
          {
            src: '/images/work/greenfield-estates/property-detail-page.png',
            alt: 'Property details page',
            caption: 'Property details page',
            layout: 'full',
          },
          {
            src: '/images/work/greenfield-estates/contact.png',
            alt: 'Contact form',
            caption: 'Contact form',
            layout: 'full',
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
          attribution: 'Director, Greenfield Estates',
        },
      },
    },
    {
      id: 2,
      title: 'Drip',
      category: 'Restaurants',
      type: 'Logo & Branding',
      year: '2022',
      image: '/images/work/drip/logo.svg',
      description: 'A logo and brand system for a new restaurant.',
      deliverables: ['Logo design', 'Branding'],
    },
    {
      id: 3,
      slug: 'faith-uk',
      title: 'F.A.I.T.H',
      category: 'Charity & Non-Profit',
      type: 'Website Design & Development',
      year: '2026',
      image: '/images/work/faith/hero.png',
      description:
        'A modern website introducing F.A.I.T.H, a UK organisation supporting Imams, teachers and holistic support workers while encouraging visitors to participate in nationwide research.',
      deliverables: [
        'Landing Page Design',
        'Responsive Development',
        'SEO Foundations',
      ],
      caseStudy: {
        seo: {
          title: 'F.A.I.T.H Website Case Study | Digital Pillars',
          description:
            'How Digital Pillars designed and built the launch website for F.A.I.T.H to establish credibility, communicate its mission and encourage nationwide survey participation.',
        },
        headline:
          'Launching a new national organisation with a website designed to build trust and encourage community participation.',
        heroImage: '/images/work/faith/hero.png',
        overview: [
          {
            label: 'Website',
            value: 'https://faithuk.org',
          },
          {
            label: 'Industry',
            value: 'Community Organisation',
          },
          {
            label: 'Project',
            value: 'Launch website',
          },
          {
            label: 'Objective',
            value: 'Brand Awareness & Survey Responses',
          },
          {
            label: 'Timeline',
            value: '4 Weeks',
          },
        ],
        challenge: [
          'F.A.I.T.H was a newly established organisation without an online presence. Visitors had no clear place to understand the mission or decide whether to get involved.',
          'They needed enough credibility for Imams, teachers and holistic support workers across the UK to trust the organisation — and complete a nationwide research survey.',
        ],
        solution: [
          'faithuk.org is the launch website for F.A.I.T.H, a UK organisation supporting Imams, teachers and holistic support workers. It is designed to explain the mission quickly, build trust with first-time visitors, and make it easy to take part in nationwide research.',
          'The goal was to introduce a new organisation with a premium, serious first impression, and to generate survey responses through a simple, visible participation journey.',
        ],
        features: [
          {
            title: 'Purpose-led Homepage',
            body: "A clear introduction explaining F.A.I.T.H's mission and the communities it supports.",
          },
          {
            title: 'Trust-focused Design',
            body: 'Professional layouts, thoughtful typography and consistent branding helped establish credibility for a newly launched organisation.',
          },
          {
            title: 'Survey-driven User Journey',
            body: 'Calls-to-action were positioned throughout the website to maximise awareness and encourage survey participation.',
          },
          {
            title: 'Fully Responsive',
            body: 'The experience was optimised across desktop, tablet and mobile devices to ensure accessibility for every visitor.',
          },
        ],
        visuals: [
          {
            src: '/images/projects/faith/home.webp',
            alt: 'Homepage',
            caption: 'Introducing the organisation and its mission.',
          },
          {
            src: '/images/projects/faith/about.webp',
            alt: 'About Page',
            caption: 'Explaining the vision, purpose and community impact.',
          },
          {
            src: '/images/projects/faith/survey.webp',
            alt: 'Survey Call To Action',
            caption: 'Designed to encourage visitor participation.',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Understanding the Mission',
            body: 'We worked closely with the organisation to understand its purpose, audience and long-term goals before planning the website structure.',
          },
          {
            step: '02',
            title: 'Designing for Trust',
            body: 'The interface was designed to feel welcoming, credible and easy to navigate while reflecting the professionalism of the organisation.',
          },
          {
            step: '03',
            title: 'Building the Experience',
            body: 'The website was developed with performance, responsiveness and accessibility in mind to provide a smooth experience on every device.',
          },
          {
            step: '04',
            title: 'Encouraging Action',
            body: "The final experience focused on guiding visitors towards completing the national survey and supporting the organisation's launch.",
          },
        ],
        tools: [
          'Custom Website',
          'Responsive Design',
          'SEO Best Practices',
          'Survey Integration',
          'Performance Optimisation',
        ],
        outcomes: [
          {
            value: 'New',
            label: 'Professional Online Presence',
          },
          {
            value: 'UK',
            label: 'Nationwide Audience',
          },
          {
            value: 'Mobile',
            label: 'Responsive Experience',
          },
          {
            value: 'Clear',
            label: 'Survey Journey',
          },
        ],
        note: {
          label: 'Project Goal',
          body: "The website successfully launched F.A.I.T.H's digital presence and provided a trusted platform to introduce the organisation while encouraging visitors to participate in its nationwide survey.",
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
        challenge: [
          'Quay had strong relationships offline, but a weak first impression online. Founders couldn’t quickly tell what was on offer.',
          'Without clarity, the right people bounced — and applications that should have been easy never started.',
        ],
        solution: [
          'Quay Startups is a brand and launch website for a Manchester venture studio. It is designed to make the offer obvious — who it is for, what founders get, and how to apply.',
          'The goal was to create a confident digital presence that matches the quality of their network, and to attract better-fit applications through a clear next step.',
        ],
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
        challenge: [
          'Residents phoned for balances, repairs and paperwork because the old tools were hard to use. Staff time disappeared into routine requests.',
          'The association needed a portal that felt approachable for every resident — not just the digitally confident.',
        ],
        solution: [
          'Pennine Housing’s resident portal is a self-serve home for rent, repairs and documents. It is designed to answer everyday questions without a phone call.',
          'The goal was to reduce call volume, make common tasks feel simple on mobile, and free staff to focus on residents who need real support.',
        ],
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
        tools: [
          'Secure login',
          'Housing systems',
          'Accessible UI',
          'Notifications',
        ],
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
        challenge: [
          'Meridian’s product was powerful, but users couldn’t see what the AI was doing. Insights looked clever — and still went unused.',
          'Without trust and clear next steps, the dashboard became something people opened once and abandoned.',
        ],
        solution: [
          'Meridian AI is a product dashboard for teams who need to act on automated insights every day. It is designed to show what matters, why it matters, and what to do next.',
          'The goal was to make AI feel clear enough to trust, simple enough for daily use, and focused on decisions — not noise.',
        ],
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
        challenge: [
          'The old site felt generic and weak on mobile. Tenants struggled to browse, and landlord leads were easy to miss.',
          'Salford Lettings needed one site that served two audiences without confusing either.',
        ],
        solution: [
          'Salford Lettings is a website redesign for a busy local agency. It is designed around two clear paths — find a home as a tenant, or instruct as a landlord.',
          'The goal was a stronger local first impression, easier property browsing on phones, and more landlord valuation requests through visible calls-to-action.',
        ],
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
