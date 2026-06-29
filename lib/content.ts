export const services = [
  {
    title: "Web Design & Development",
    icon: "▣",
    tone: "bg-pillar-blue",
    description:
      "Modern, responsive websites built to represent your brand, engage visitors and convert them into customers.",
  },
  {
    title: "Software & Web Applications",
    icon: "▤",
    tone: "bg-pillar-green",
    description:
      "Custom web applications, dashboards, portals and tools that streamline operations and support growth.",
  },
  {
    title: "Digital Strategy & Consulting",
    icon: "◇",
    tone: "bg-pillar-purple",
    description:
      "Practical guidance to help you make the right digital decisions and build a clear roadmap for growth.",
  },
  {
    title: "AI & Automation",
    icon: "✦",
    tone: "bg-pillar-orange",
    description:
      "AI chatbots, workflow automations, CRM integrations and smart systems that save time and reduce admin.",
  },
] as const;

export const sectors = [
  ["▦", "Local Businesses"],
  ["⚒", "Tradespeople"],
  ["⌂", "Estate Agents"],
  ["▤", "Accountants"],
  ["⚖", "Solicitors"],
  ["◊", "Mosques"],
  ["♡", "Charities"],
  ["♨", "Restaurants"],
  ["△", "Startups"],
] as const;

export const packages = [
  {
    title: "Starter Website Package",
    intro: "For small businesses needing a professional online presence.",
    priceLabel: "From",
    price: "£750",
    cta: "Enquire Now",
    featured: false,
    purple: false,
    items: [
      "Responsive website",
      "Contact forms",
      "WhatsApp button",
      "Basic SEO setup",
      "Hosting support",
      "Maintenance option",
    ],
  },
  {
    title: "Growth Website + Automation Package",
    intro: "For businesses that want to capture more leads and save admin time.",
    priceLabel: "From",
    price: "£1,500",
    cta: "Book a Consultation",
    featured: true,
    purple: false,
    items: [
      "Everything in Starter",
      "AI chatbot",
      "Booking forms",
      "Lead capture",
      "CRM integration",
      "WhatsApp integration",
      "Analytics setup",
    ],
  },
  {
    title: "Custom Software Solution",
    intro: "For businesses needing bespoke tools or web applications.",
    priceLabel: "Custom",
    price: "Quote",
    cta: "Discuss a Project",
    featured: false,
    purple: true,
    items: [
      "Dashboards and portals",
      "Booking systems",
      "Internal tools",
      "Workflow automation",
      "AI integrations",
      "Custom development",
    ],
  },
] as const;

export const featuredWork = [
  {
    title: "Mosque Website & Donation Platform",
    category: "Charity / Non-Profit",
    thumb: "from-sky-100 via-white to-blue-200",
  },
  {
    title: "Local Trades Website with Lead Capture",
    category: "Trades",
    thumb: "from-orange-200 via-blue-100 to-white",
  },
  {
    title: "Business Dashboard Web App",
    category: "SaaS / Web Application",
    thumb: "from-white via-blue-50 to-slate-200",
  },
  {
    title: "Charity Website Redesign",
    category: "Charity",
    thumb: "from-blue-100 via-emerald-100 to-white",
  },
  {
    title: "Restaurant Booking Website",
    category: "Hospitality",
    thumb: "from-amber-900 via-orange-300 to-amber-100",
  },
  {
    title: "Consultancy Website Refresh",
    category: "Business Services",
    thumb: "from-slate-900 via-blue-200 to-white",
  },
] as const;

export const processSteps = [
  {
    title: "Discover",
    text: "We learn about your business, goals, audience and challenges.",
  },
  {
    title: "Design",
    text: "We plan the strategy, structure and user experience.",
  },
  {
    title: "Build",
    text: "We develop, integrate and test your digital solution.",
  },
  {
    title: "Support",
    text: "We provide ongoing support, maintenance and optimisation.",
  },
] as const;
