'use client';

import { Check } from 'lucide-react';
import { KineticHeadline, Reveal } from '@/components/Reveal';
import { DesignRequestForm } from '@/components/DesignRequestForm';
import { useSeo } from '@/hooks/useSeo';
import { design } from '@/content/design';

export default function FreeHomepageDesign() {
  useSeo(design.seo);

  return (
    <div data-testid="design-page">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-40 md:px-10 md:pb-16 md:pt-52">
        <p className="overline text-brand-cyan">{design.hero.eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={[...design.hero.lines]} />
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-10 max-w-2xl text-lg text-white/70">
            {design.hero.body}
          </p>
        </Reveal>
      </section>

      {/* HOW IT WORKS */}
      <section data-testid="design-steps" className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <Reveal className="mb-12">
            <p className="overline text-brand-cyan">{design.steps.eyebrow}</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-white/10 bg-white/10 md:grid-cols-3">
            {design.steps.items.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.08}>
                <div className="h-full bg-brand-navy p-8 md:p-10">
                  <span className="font-display text-5xl text-stroke md:text-6xl">
                    {step.no}
                  </span>
                  <h3 className="mt-8 font-display text-2xl">{step.title}</h3>
                  <p className="mt-4 text-white/55">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SCOPE */}
      <section
        data-testid="design-form-section"
        className="border-t border-white/10 bg-brand-navy-light"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal className="mb-12">
                <p className="overline text-brand-cyan">
                  {design.form.eyebrow}
                </p>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  {design.form.headline}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <DesignRequestForm />
              </Reveal>
            </div>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="border border-white/10 bg-brand-navy p-8 md:p-10">
                  <p className="overline text-white/40">
                    {design.scope.eyebrow}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {design.scope.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/50">
                    {design.scope.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
