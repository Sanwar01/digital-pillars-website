import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Digital Pillars services: web design, software, AI automation and digital strategy for UK local businesses.",
};

const serviceDetails = [
  {
    title: "Websites and landing pages built for local enquiries",
    eyebrow: "Web Design & Development",
    text: "We create or improve the pages that matter most: service pages, location pages, FAQs, proof sections and enquiry paths.",
    items: [
      "WordPress websites, custom websites and landing pages",
      "Redesigns, SEO-friendly builds and buyer FAQs",
      "Performance optimisation, maintenance and clearer forms",
      "Website reviews and page recommendations",
    ],
  },
  {
    title: "Business tools for teams outgrowing spreadsheets",
    eyebrow: "Software & Web Applications",
    text: "We build practical tools that match your workflow: dashboards, client portals, booking systems, internal tools and database-driven applications.",
    items: [
      "Dashboards, client portals and booking systems",
      "Workflow systems and business tools",
      "Database-driven apps and API integrations",
      "SaaS MVP planning and development",
    ],
  },
  {
    title: "Automation that helps your team respond faster",
    eyebrow: "AI & Automation",
    text: "We use AI and automation to support the parts of the sales journey that slow teams down: triage, routing, reminders and reporting.",
    items: [
      "Lead qualification and routing workflows",
      "Automated email responses and WhatsApp integrations",
      "CRM automation, booking automation and reminders",
      "Form-to-database workflows and process automation",
    ],
  },
  {
    title: "Clear digital direction before you commit to build work",
    eyebrow: "Consulting & Strategy",
    text: "We help you decide what is worth building, improving or automating first, with recommendations that fit your team, tools and budget.",
    items: [
      "Website audits and practical digital advice",
      "Digital transformation planning",
      "Platform recommendations and user journey mapping",
      "Automation roadmaps and MVP planning",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="section bg-[radial-gradient(circle_at_80%_20%,rgba(11,107,255,0.26),transparent_30%),linear-gradient(135deg,#020b1d,#041a3a)] text-white">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Services</p>
          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
            Websites, applications and automations built around your business.
          </h1>
          <p className="mt-5 text-lg text-blue-100">
            Digital Pillars helps local businesses improve their online presence,
            capture more enquiries and reduce the manual work that slows teams down.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article className="card p-6" key={service.title}>
              <span className={`mb-4 grid h-13 w-13 place-items-center rounded-[10px] ${service.tone} font-black text-white`}>
                {service.icon}
              </span>
              <h2 className="text-xl font-black">{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-pillar-soft">
        <div className="container-page grid gap-6">
          {serviceDetails.map((item) => (
            <article className="card grid gap-8 p-8 lg:grid-cols-[0.85fr_1.15fr]" key={item.title}>
              <div>
                <p className="eyebrow">{item.eyebrow}</p>
                <h2 className="text-3xl font-black leading-tight">{item.title}</h2>
              </div>
              <div>
                <p className="text-lg">{item.text}</p>
                <ul className="mt-5 grid gap-2">
                  {item.items.map((feature) => (
                    <li className="flex gap-3" key={feature}>
                      <span className="font-black text-pillar-blue">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page card p-8 text-center md:p-12">
          <SectionHeading
            title="Want to know which service fits first?"
            text="Share your current website and enquiry challenge. We will recommend a sensible starting point."
          />
          <Link className="button button-primary" href="/contact">
            Ask for a recommendation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
