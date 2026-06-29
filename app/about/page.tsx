import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Digital Pillars, a digital partner helping UK local businesses improve websites, software and enquiry operations.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section bg-[radial-gradient(circle_at_80%_20%,rgba(11,107,255,0.26),transparent_30%),linear-gradient(135deg,#020b1d,#041a3a)] text-white">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
            Digital Pillars helps local businesses make better use of the web.
          </h1>
          <p className="mt-5 text-lg text-blue-100">
            A good digital setup should help people find you, trust you and contact
            you. It should also make life easier for the team handling those
            enquiries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              We build around your customers, not a tool list.
            </h2>
          </div>
          <div className="space-y-5 text-lg">
            <p>
              Digital Pillars works with UK local businesses that need better
              enquiries, clearer positioning and less operational drag. We look at how
              people find you, what they need before contacting you and what happens
              after they do.
            </p>
            <p>
              The result is a practical roadmap across website, software, content and
              automation. Every recommendation should be explainable in commercial
              terms and usable by the people running the business day to day.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-pillar-soft">
        <div className="container-page">
          <SectionHeading eyebrow="Principles" title="How we make decisions" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Plain language first",
                "Clients should understand what is being built, why it matters and how it will be maintained.",
              ],
              [
                "Use AI where it fits",
                "AI is most useful when it improves speed, consistency or insight. It is not a substitute for a strong offer.",
              ],
              [
                "Measure behaviour",
                "We pay attention to enquiries, conversion points and operational time saved, not vanity metrics alone.",
              ],
            ].map(([title, text]) => (
              <article className="card p-6" key={title}>
                <h2 className="text-xl font-black">{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-4xl font-black">Who we are a strong fit for</h2>
          <ul className="mt-6 grid gap-3">
            {[
              "Local service businesses that rely on enquiries, consultations, quotes or appointments.",
              "Teams with an existing website that is not converting enough of the right visitors.",
              "Businesses receiving leads from several channels without a consistent follow-up process.",
              "Owners who want practical AI support without unnecessary complexity.",
            ].map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-black text-pillar-blue">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
