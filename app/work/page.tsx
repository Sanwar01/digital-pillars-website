import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredWork } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Digital Pillars case studies and demo projects for local business websites, software, AI automation and digital systems.",
};

const caseStudies = [
  {
    title: "Estate agent valuation enquiry journey",
    label: "Estate",
    text: "An estate agency needs more valuation conversations and faster follow-up after web forms are submitted. The demo system combines a focused valuation page, useful FAQs and a structured follow-up workflow.",
    focus: "Valuation leads, enquiry capture, CRM follow-up",
    outcome: "Clearer routes from website visit to booked conversation",
  },
  {
    title: "Home services quote assistant",
    label: "Trades",
    text: "A trades business needed faster quote handling across multiple job types. The demo captures postcode, job category, urgency and photos before sending a structured summary to the team.",
    focus: "Lead quality, routing, follow-up reminders",
    outcome: "Faster decisions on which jobs to quote first",
  },
  {
    title: "Client portal and dashboard",
    label: "Portal",
    text: "A professional services firm needed a clearer way to collect client details and show work status. The demo uses a simple portal and dashboard pattern for updates, documents and next actions.",
    focus: "Client portal, status visibility, document workflows",
    outcome: "Less chasing and clearer communication between client and team",
  },
] as const;

export default function WorkPage() {
  return (
    <PageShell>
      <section className="section bg-[radial-gradient(circle_at_80%_20%,rgba(11,107,255,0.26),transparent_30%),linear-gradient(135deg,#020b1d,#041a3a)] text-white">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Work</p>
          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
            Practical digital projects for local businesses.
          </h1>
          <p className="mt-5 text-lg text-blue-100">
            These representative demo projects show better websites, clearer enquiry
            journeys, useful tools and simple automations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Featured work" title="Solutions We’re Proud Of" />
          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
            {featuredWork.map((item) => (
              <article className="card overflow-hidden" key={item.title}>
                <div className={`min-h-36 bg-gradient-to-br ${item.thumb}`} />
                <div className="p-4">
                  <h2 className="text-base font-black">{item.title}</h2>
                  <p className="m-0 text-sm font-bold text-pillar-muted">{item.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pillar-soft">
        <div className="container-page grid gap-6">
          {caseStudies.map((item) => (
            <article className="card grid items-center gap-8 p-8 lg:grid-cols-[0.8fr_1.2fr]" key={item.title}>
              <div className="grid min-h-64 place-items-center rounded-[10px] bg-gradient-to-br from-pillar-blue to-navy-950 text-2xl font-black text-white">
                {item.label}
              </div>
              <div>
                <p className="eyebrow">Demo project</p>
                <h2 className="text-3xl font-black">{item.title}</h2>
                <p className="text-lg">{item.text}</p>
                <dl className="mt-5 grid gap-3">
                  <div className="rounded-lg bg-white p-4">
                    <dt className="font-black text-pillar-ink">Focus</dt>
                    <dd className="m-0 text-pillar-muted">{item.focus}</dd>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <dt className="font-black text-pillar-ink">Outcome</dt>
                    <dd className="m-0 text-pillar-muted">{item.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
