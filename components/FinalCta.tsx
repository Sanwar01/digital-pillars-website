import { Reveal } from '@/components/Reveal';
import { CtaButton } from '@/components/CtaButton';

export const FinalCta = () => {
  return (
    <section data-testid="final-cta" className="bg-[#D3FF24] text-[#050506]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="overline">Let&apos;s build something</p>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Ready to outgrow your competitors?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[#050506]/70">
            Book a free discovery call and we&apos;ll map out exactly how
            Digital Pillars can move your business forward.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton
              href="/contact"
              testId="final-cta-book"
              variant="secondary"
              className="border-[#050506]/30 text-[#050506] hover:bg-[#050506] hover:text-[#D3FF24]"
            >
              Book a call
            </CtaButton>
            <CtaButton
              href="/listings"
              testId="final-cta-work"
              variant="secondary"
              className="border-[#050506]/30 text-[#050506] hover:bg-[#050506] hover:text-[#D3FF24]"
            >
              See our work
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
