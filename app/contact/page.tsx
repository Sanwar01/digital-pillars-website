import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Digital Pillars to discuss AI automation, web design, software or digital strategy for your UK local business.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section bg-[radial-gradient(circle_at_80%_20%,rgba(11,107,255,0.26),transparent_30%),linear-gradient(135deg,#020b1d,#041a3a)] text-white">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
            Tell us what you want your website or systems to do better.
          </h1>
          <p className="mt-5 text-lg text-blue-100">
            Use the form to share your business, website and main challenge, or email
            directly at{" "}
            <a className="font-black text-white" href="mailto:hello@digitalpillars.co.uk">
              hello@digitalpillars.co.uk
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1fr_0.85fr]">
          <ContactForm />
          <aside className="card p-6 md:p-8" aria-label="Contact details">
            <h2 className="text-3xl font-black">What to include</h2>
            <ul className="mt-5 grid gap-3">
              {[
                "Your current website, if you have one.",
                "The area or regions you serve.",
                "How enquiries usually arrive.",
                "Where your team loses time or opportunities.",
              ].map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="font-black text-pillar-blue">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-pillar-line pt-6">
              <h3 className="text-xl font-black">Direct contact</h3>
              <p>
                <a className="font-black text-pillar-blue" href="mailto:hello@digitalpillars.co.uk">
                  hello@digitalpillars.co.uk
                </a>
              </p>
              <p>Based in the UK. Supporting estate agents and local service businesses.</p>
            </div>
            <div className="mt-8 border-t border-pillar-line pt-6">
              <h3 className="text-xl font-black">Typical first step</h3>
              <p>
                A short discovery call followed by a written recommendation: audit,
                project or ongoing support.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
