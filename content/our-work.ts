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
    title: 'Portfolio & Case Studies | Digital Pillars',
    description:
      "Browse Digital Pillars' portfolio — websites, portals and digital projects for estate agents, charities, startups, energy and housing associations.",
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
      slug: 'world-quran-awareness-day',
      title: 'World Quran Awareness Day',
      category: 'Charity & Community',
      type: 'Website Design & Development',
      year: '2026',
      image: '/images/work/wqad/card-hero.png',
      description:
        'A welcoming digital platform bringing together global awareness campaigns, community stories and opportunities to participate.',
      deliverables: [
        'Web Design',
        'Web Development',
        'Responsive Design',
        'Donation Integration',
      ],
      caseStudy: {
        seo: {
          title:
            'World Quran Awareness Day | Website Design & Development | Digital Pillars',
          description:
            'Discover how we created a responsive website for World Quran Awareness Day, bringing together annual campaigns, community stories, donations and participation.',
        },
        headline:
          'A digital home connecting communities through awareness, learning and participation.',
        heroImage: '/images/work/wqad/hero.png',
        overview: [
          {
            label: 'Client',
            value: 'World Quran Awareness Day',
          },
          {
            label: 'Industry',
            value: 'Charity & Community',
          },
          {
            label: 'Services',
            value: 'Website Design & Development',
          },
          {
            label: 'Platform',
            value: 'WordPress',
          },
          {
            label: 'Year',
            value: '2026',
          },
        ],
        challenge: [
          'World Quran Awareness Day needed a welcoming digital platform to communicate its mission, showcase annual awareness themes and encourage people from different backgrounds to get involved.',
          'With educational content, community stories and multiple ways to participate, the challenge was to bring everything together into a clear, engaging experience that visitors could easily explore.',
          'The website also needed a consistent visual identity across its pages, with layouts that could support both current campaigns and future initiatives.',
        ],
        solution: [
          "We created a responsive, multi-page website that brings together the initiative's mission, annual themes, community stories and opportunities to participate in one accessible digital experience.",

          'Starting with a clear visual direction, we designed additional page layouts around the supplied content, creating a consistent look and feel throughout the website.',

          'The finished platform combines purposeful storytelling, intuitive navigation, multimedia content, donation functionality and newsletter registration, helping visitors discover the initiative and take meaningful action.',
        ],
        features: [
          {
            title: 'Purpose-Led Homepage',
            body: "A visually engaging introduction that communicates the initiative's mission and guides visitors towards exploring its themes and getting involved.",
          },
          {
            title: 'Annual Awareness Campaigns',
            body: "Dedicated content showcasing previous and current themes, helping visitors understand the initiative's journey and the message behind each campaign.",
          },
          {
            title: 'Community Voices',
            body: 'An interactive video experience that brings together community perspectives and personal stories, making the initiative more relatable and engaging.',
          },
          {
            title: 'Ways to Get Involved',
            body: 'Clear participation pathways for individuals, families, schools, workplaces and communities, making it easier to discover how to take part.',
          },
          {
            title: 'Donations & Newsletter',
            body: 'Donation functionality and newsletter registration provide opportunities to support the initiative and stay connected with future activities.',
          },
          {
            title: 'Responsive Experience',
            body: 'Carefully adapted layouts ensure the website remains easy to navigate and visually consistent across desktop, tablet and mobile devices.',
          },
        ],
        visuals: [
          {
            src: '/images/work/wqad/hero.png',
            alt: 'World Quran Awareness Day homepage featuring the main campaign introduction',
            caption:
              "A welcoming homepage designed to communicate the initiative's purpose.",
            layout: 'full',
          },
          {
            src: '/images/work/wqad/theme.png',
            alt: 'Annual awareness themes displayed in the World Quran Awareness Day website',
            caption:
              "Exploring the initiative's journey through its annual themes.",
            layout: 'half',
          },
          {
            src: '/images/work/wqad/community.png',
            alt: 'Community Voices video gallery on the World Quran Awareness Day website',
            caption:
              'Sharing real perspectives through an interactive video experience.',
            layout: 'half',
          },
          {
            src: '/images/work/wqad/take-part.png',
            alt: 'Participation opportunities for individuals and communities',
            caption:
              'Helping visitors discover meaningful ways to get involved.',
            layout: 'full',
          },
          {
            src: '/images/work/wqad/mobile.png',
            alt: 'Mobile responsive design of the World Quran Awareness Day website',
            caption:
              'A consistent experience across desktop and mobile devices.',
            layout: 'half',
          },
          {
            src: '/images/work/wqad/donation.png',
            alt: 'Donation and supporter engagement functionality on the website',
            caption:
              'Making it easier for visitors to support and stay connected.',
            layout: 'half',
          },
        ],
        journey: [
          {
            step: '01',
            title: 'Understanding the Vision',
            body: "We explored the initiative's mission, audiences and content requirements to establish a clear website structure and user journey.",
          },
          {
            step: '02',
            title: 'Designing the Experience',
            body: 'We developed a cohesive visual direction and designed page layouts around the content, creating a consistent experience across the website.',
          },
          {
            step: '03',
            title: 'Building the Website',
            body: 'We implemented the responsive website, integrating campaign content, community videos, participation opportunities, forms and donation functionality.',
          },
          {
            step: '04',
            title: 'Refining & Launching',
            body: 'We incorporated feedback, refined the layouts and functionality, and completed testing and deployment to deliver the live website.',
          },
        ],
        tools: [
          'WordPress',
          'Elementor',
          'Responsive Web Design',
          'Content Management',
          'Donation Integration',
        ],
        outcomes: [
          {
            value: '1',
            label: 'Central platform for campaigns and community engagement',
          },
          {
            value: 'Multi-page',
            label: 'Consistent website experience',
          },
          {
            value: 'Responsive',
            label: 'Designed for desktop, tablet and mobile',
          },
          {
            value: 'Live',
            label: 'Website launched and ready for future campaigns',
          },
        ],
        note: {
          label: 'Project Highlight',
          body: 'A thoughtfully designed digital platform that brings together awareness, storytelling and participation, giving World Quran Awareness Day a foundation for future campaigns and community engagement.',
        },
      },
    },
    {
      id: 2,
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
          title: 'F.A.I.T.H — Charity & Community Website Case Study',
          description:
            'How Digital Pillars designed and built the F.A.I.T.H launch website to build credibility, explain the mission and drive nationwide survey participation.',
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
            alt: 'F.A.I.T.H homepage introducing the organisation and its mission',
            caption: 'Introducing the organisation and its mission.',
          },
          {
            src: '/images/work/faith/challenge.png',
            alt: 'F.A.I.T.H challenge page explaining the problem the organisation addresses',
            caption: 'Explaining the vision, purpose and community impact.',
            layout: 'half',
          },
          {
            src: '/images/work/faith/mission.png',
            alt: 'F.A.I.T.H mission page outlining purpose and community impact',
            caption:
              "Providing clarity on the organisation's purpose and community impact.",
            layout: 'half',
          },
          {
            src: '/images/work/faith/survey-section.png',
            alt: 'F.A.I.T.H survey call-to-action encouraging nationwide participation',
            caption:
              'Encouraging visitors to participate in the nationwide survey.',
            layout: 'full',
          },
          {
            src: '/images/work/faith/enquiry.png',
            alt: 'F.A.I.T.H enquiry form for visitor contact and participation',
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
            value: 'Visibility',
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
    {
      id: 3,
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
          title: 'Greenfield Estates — Estate Agent Website Case Study',
          description:
            'How Digital Pillars built a conversion-led estate agent website and portal that turned more browsers into viewings and valuation requests.',
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
            alt: 'Greenfield Estates homepage with property search hero',
            caption:
              'A simple, clean homepage that leads with the offer, not fluff.',
          },
          {
            src: '/images/work/greenfield-estates/homepage-listing-section.png',
            alt: 'Greenfield Estates latest property listings grid',
            caption: 'Property listings designed for scannability on mobile.',
            layout: 'half',
          },
          {
            src: '/images/work/greenfield-estates/services.png',
            alt: 'Greenfield Estates property services section',
            caption: 'Services offered by Greenfield Estates.',
            layout: 'half',
          },
          {
            src: '/images/work/greenfield-estates/client-testimonials.png',
            alt: 'Greenfield Estates client testimonials carousel',
            caption: 'Client testimonials from Greenfield Estates.',
            layout: 'full',
          },
          {
            src: '/images/work/greenfield-estates/property-detail-page.png',
            alt: 'Greenfield Estates property details page for a listing',
            caption: 'Property details page for a specific property.',
            layout: 'full',
          },
          {
            src: '/images/work/greenfield-estates/contact.png',
            alt: 'Greenfield Estates contact and enquiry form',
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
      id: 4,
      title: 'Drip',
      category: 'Restaurants',
      type: 'Logo & Branding',
      year: '2022',
      image: '/images/work/drip/logo.svg',
      description: 'A logo and brand system for a new restaurant.',
      deliverables: ['Logo design', 'Branding'],
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
