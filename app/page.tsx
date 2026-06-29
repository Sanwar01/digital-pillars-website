import Link from "next/link";
import { AiAssistant } from "@/components/AiAssistant";
import { HeroShowcase } from "@/components/HeroShowcase";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredWork, packages, processSteps, sectors, services } from "@/lib/content";

export default function HomePage() {
  return (
    <PageShell>
      <section className="overflow-hidden bg-[radial-gradient(circle_at_70%_35%,rgba(11,107,255,0.38),transparent_28%),radial-gradient(circle_at_16%_18%,rgba(18,200,255,0.16),transparent_25%),linear-gradient(135deg,#020814_0%,#031533_58%,#021023_100%)] py-16 text-white md:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <h1 className="max-w-[13ch] text-5xl font-black leading-tight text-white md:text-7xl">
              Websites, Software & Digital Systems Built for{" "}
              <span className="text-[#2f86ff]">Business Growth</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Digital Pillars helps local businesses modernise their online presence
              with high-performing websites, custom web applications, practical AI
              automation and clear digital consulting.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link className="button button-primary" href="/contact">
                Book a Free Consultation
              </Link>
              <Link className="button button-secondary" href="/work">
                View Our Work
              </Link>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 4 }, (_, index) => (
                  <span
                    key={index}
                    className="-ml-2 h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-amber-200 to-blue-300 first:ml-0"
                  />
                ))}
              </div>
              <div>
                <div className="font-black text-yellow-300" aria-label="Five star rating">
                  ★★★★★
                </div>
                <p className="m-0 text-sm leading-snug text-blue-100">
                  Trusted by growing local businesses across the UK
                </p>
              </div>
            </div>
          </div>
          <HeroShowcase />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Your digital partner for growth</p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                More Than a Website. A Digital Advantage.
              </h2>
              <p className="mt-5 text-lg text-pillar-text">
                We design and build digital solutions that help you attract more
                customers, capture enquiries, automate manual tasks and deliver a
                better online experience.
              </p>
              <ul className="mt-6 grid gap-3">
                {[
                  "Strategy-led approach",
                  "Bespoke solutions for your business",
                  "Built for performance and growth",
                  "Ongoing support and optimisation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-sm font-black text-pillar-blue">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="min-h-[355px] rounded-[10px] bg-[radial-gradient(circle_at_28%_35%,#173b67_0_7%,transparent_8%),radial-gradient(circle_at_52%_30%,#1d5b8f_0_8%,transparent_9%),radial-gradient(circle_at_73%_37%,#18395e_0_7%,transparent_8%),linear-gradient(145deg,rgba(2,11,29,0.08),rgba(2,11,29,0.16)),linear-gradient(135deg,#cfe0f5,#f6fafc)] shadow-lift"
              role="img"
              aria-label="Digital Pillars team planning a website and digital system"
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article className="card p-6" key={service.title}>
                <span
                  className={`mb-4 grid h-13 w-13 place-items-center rounded-[10px] ${service.tone} font-black text-white`}
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 text-pillar-text">{service.description}</p>
                <Link className="mt-4 inline-flex font-black text-pillar-blue no-underline after:ml-2 after:content-['→']" href="/services">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pillar-soft">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we help"
            title="We Work With Businesses That Want to Grow"
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-9">
            {sectors.map(([icon, label]) => (
              <article className="card grid min-h-24 place-items-center p-3 text-center text-sm font-extrabold text-pillar-ink" key={label}>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-pillar-blue" aria-hidden="true">
                  {icon}
                </span>
                {label}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Packages" title="Simple Packages. Real Results." />
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.title}
                className={`card relative p-8 ${item.featured ? "border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-[0_20px_60px_rgba(25,185,133,0.15)]" : ""} ${item.purple ? "bg-gradient-to-br from-purple-50 to-white" : ""}`}
              >
                {item.featured ? (
                  <span className="absolute right-6 top-0 rounded-b-lg bg-pillar-green px-3 py-1 text-xs font-black uppercase text-white">
                    Popular
                  </span>
                ) : null}
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p>{item.intro}</p>
                <p className="mt-6 text-4xl font-black leading-none text-pillar-ink">
                  <small className="mb-1 block text-sm font-bold text-pillar-muted">
                    {item.priceLabel}
                  </small>
                  {item.price}
                </p>
                <ul className="mt-6 grid gap-2">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="font-black text-pillar-blue">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link className="button button-primary mt-6 w-full" href="/contact">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pillar-soft">
        <div className="container-page">
          <SectionHeading eyebrow="Featured work" title="Solutions We’re Proud Of" />
          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
            {featuredWork.map((item) => (
              <article className="card overflow-hidden" key={item.title}>
                <div className={`min-h-36 bg-gradient-to-br ${item.thumb}`} />
                <div className="p-4">
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="m-0 text-sm font-bold text-pillar-muted">{item.category}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link className="button button-light" href="/work">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-[radial-gradient(circle_at_18%_18%,rgba(11,107,255,0.22),transparent_34%),radial-gradient(circle_at_86%_34%,rgba(18,200,255,0.16),transparent_28%),linear-gradient(135deg,#020b1d,#041a3a)] text-white">
        <div className="container-page">
          <SectionHeading eyebrow="Our process" title="A Clear Process. Better Outcomes." inverse />
          <ol className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li className="border-white/15 p-6 md:border-l" key={step.title}>
                <span className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-pillar-blue font-black text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-black text-white">{step.title}</h3>
                <p className="text-blue-100">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-blue-50 to-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="eyebrow">AI enquiry assistant</p>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Reply faster without adding more admin.
            </h2>
            <p className="mt-5 text-lg">
              A practical AI enquiry assistant can answer common questions, capture
              contact details, qualify leads and send the right information to your
              team.
            </p>
          </div>
          <AiAssistant />
        </div>
      </section>

      <section className="section bg-pillar-soft">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <div className="grid gap-3">
            {[
              [
                "Do we need a brand new website?",
                "Not always. If your current website is a good base, we can improve the pages, forms, speed and follow-up instead of rebuilding everything.",
              ],
              [
                "What does AI automation mean for my business?",
                "It usually means using simple systems to answer common questions, capture enquiries, send follow-up messages and update your tools automatically.",
              ],
              [
                "Can you work with small local businesses?",
                "Yes. The packages are designed for owner-led businesses and small teams that need practical help, clear communication and sensible costs.",
              ],
              [
                "What happens after I enquire?",
                "We review your goals, website and current process, then recommend a clear next step such as an audit, website project or automation build.",
              ],
            ].map(([question, answer]) => (
              <details className="rounded-lg border border-pillar-line bg-white" key={question}>
                <summary className="cursor-pointer p-4 font-black text-pillar-ink">
                  {question}
                </summary>
                <p className="px-4 pb-4 text-pillar-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page card p-8 text-center md:p-12">
          <p className="eyebrow">Ready to grow?</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-black md:text-5xl">
            Let’s build a better digital system for your business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Book a free consultation and we’ll help you identify the most useful
            next step for your website, enquiries or internal systems.
          </p>
          <Link className="button button-primary mt-6" href="/contact">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
