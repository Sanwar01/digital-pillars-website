'use client';

import { KineticHeadline, Reveal } from '@/components/Reveal';
import { DesignRequestForm } from '@/components/DesignRequestForm';
import { design } from '@/content/design';

export default function FreeHomepageDesign() {

  return (
    <div data-testid="design-page">
      <section className="mx-auto max-w-[800px] px-6 pb-24 pt-40 md:px-10 md:pt-52">
        <p className="overline text-brand-cyan">{design.hero.eyebrow}</p>
        <h1 className="mt-6 font-display text-[11vw] leading-[0.9] sm:text-5xl lg:text-6xl">
          <KineticHeadline lines={[...design.hero.lines]} />
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-lg text-white/65">
            {design.hero.body}
          </p>
        </Reveal>

        <Reveal delay={0.4} className="mt-12">
          <div
            data-testid="design-form-section"
            className="border border-white/10 bg-brand-navy-light p-6 md:p-8"
          >
            <DesignRequestForm />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/40">
            {design.scope.note}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
