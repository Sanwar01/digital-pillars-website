import { Reveal } from '@/components/Reveal';
import { CtaButton } from '@/components/CtaButton';
import { FINAL_CTA } from '@/content/site';

export const FinalCta = () => {
  return (
    <section data-testid="final-cta" className="bg-brand-gradient text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="overline text-white/80">{FINAL_CTA.eyebrow}</p>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            {FINAL_CTA.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            {FINAL_CTA.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton
              href={FINAL_CTA.primary.href}
              testId="final-cta-book"
              variant="secondary"
              className="border-white/40 text-white hover:bg-white hover:text-brand-blue"
            >
              {FINAL_CTA.primary.label}
            </CtaButton>
            <CtaButton
              href={FINAL_CTA.secondary.href}
              testId="final-cta-work"
              variant="secondary"
              className="border-white/40 text-white hover:bg-white hover:text-brand-blue"
            >
              {FINAL_CTA.secondary.label}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
