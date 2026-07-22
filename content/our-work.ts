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
            caption:
              'A simple, clean homepage that leads with the offer, not fluff.',
          },
          {
            src: '/images/work/greenfield-estates/homepage-listing-section.png',
            alt: 'Property listing',
            caption: 'Property listings designed for scannability on mobile.',
            layout: 'half',
          },
          {
            src: '/images/work/greenfield-estates/services.png',
            alt: 'Greenfield Estates services',
            caption: 'Services offered by Greenfield Estates.',
            layout: 'half',
          },
          {
            src: '/images/work/greenfield-estates/client-testimonials.png',
            alt: 'Greenfield Estates client testimonials',
            caption: 'Client testimonials from Greenfield Estates.',
            layout: 'full',
          },
          {
            src: '/images/work/greenfield-estates/property-detail-page.png',
            alt: 'Property details page',
            caption: 'Property details page for a specific property.',
            layout: 'full',
          },
          {
            src: '/images/work/greenfield-estates/contact.png',
            alt: 'Contact form',
            caption: 'Contact form for enquiries with different options.',
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
          { value: '2×', label: 'Faster page load times' },
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
            src: '/images/work/faith/homepage.png',
            alt: 'Homepage',
            caption: 'Introducing the organisation and its mission.',
          },
          {
            src: '/images/work/faith/challenge.png',
            alt: 'Challenge page',
            caption: 'Explaining the vision, purpose and community impact.',
            layout: 'half',
          },
          {
            src: '/images/work/faith/mission.png',
            alt: 'Mission page',
            caption:
              "Providing clarity on the organisation's purpose and community impact.",
            layout: 'half',
          },
          {
            src: '/images/work/faith/survey-section.png',
            alt: 'Survey section',
            caption:
              'Encouraging visitors to participate in the nationwide survey.',
            layout: 'full',
          },
          {
            src: '/images/work/faith/enquiry.png',
            alt: 'Enquiry form',
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
            value: '+10%',
            label: 'More survey responses',
          },
          {
            value: 'UK-wide',
            label: 'More survey responses from the UK',
          },
          {
            value: 'Visbility',
            label: 'Increased visibility of the organisation online',
          },
        ],
        note: {
          label: 'Client note',
          body: "“The website successfully launched F.A.I.T.H's digital presence and provided a trusted platform to introduce the organisation while encouraging visitors to participate in its nationwide survey.”",
          attribution: 'Atia Lokhat, F.A.I.T.H',
        },
      },
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
