'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { KineticHeadline, Reveal } from '@/components/Reveal';
import { FinalCta } from '@/components/FinalCta';
import { useSeo } from '@/hooks/useSeo';
import { ourWork, type Project, type CaseStudy } from '@/content/our-work';

type CaseStudyViewProps = {
  project: Project & { caseStudy: CaseStudy };
};

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const { caseStudy } = project;
  const copy = ourWork.caseStudy;
  useSeo(caseStudy.seo);

  const [leadVisual, ...moreVisuals] = caseStudy.visuals;

  return (
    <div data-testid="case-study-page">
      {/* 1. CASE STUDY HERO */}
      <section className="relative min-h-[70vh] overflow-hidden md:min-h-[85vh]">
        <img
          src={caseStudy.heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/75 to-brand-navy/35" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-40 md:min-h-[85vh] md:px-10 md:pb-24 md:pt-52">
          <Link
            href="/our-work"
            data-testid="case-study-back"
            className="mb-auto inline-flex w-fit items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            {copy.backLabel}
          </Link>
          <p className="mt-16 overline text-brand-cyan md:mt-0">
            {project.type} · {project.year}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[12vw] leading-[0.9] sm:text-6xl lg:text-7xl">
            <KineticHeadline lines={[project.title]} />
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-2xl text-xl text-white/80 md:text-2xl">
              {caseStudy.headline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section
        data-testid="case-study-overview"
        className="border-b border-white/10 bg-brand-navy-light"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-12">
          <p className="overline text-white/40">{copy.overviewEyebrow}</p>
          <dl className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {caseStudy.overview.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-white/40">{item.label}</dt>
                <dd className="mt-2 font-display text-lg text-white md:text-xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. THE CHALLENGE */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="overline text-brand-cyan">{copy.challengeEyebrow}</p>
          <p className="mt-6 font-display text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">
            {caseStudy.challenge}
          </p>
        </Reveal>
      </section>

      {/* 4. THE SOLUTION */}
      <section className="border-y border-white/10 bg-brand-navy-light">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="overline text-brand-cyan">{copy.solutionEyebrow}</p>
            <p className="mt-6 text-xl leading-relaxed text-white/75 md:text-2xl">
              {caseStudy.solution}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. KEY FEATURES */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="overline text-brand-cyan">{copy.featuresEyebrow}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {caseStudy.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <p className="font-display text-sm text-brand-cyan">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-display text-2xl">{feature.title}</h3>
              <p className="mt-3 text-white/60">{feature.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. VISUAL BREAKDOWN */}
      <section
        data-testid="case-study-visuals"
        className="border-t border-white/10 bg-brand-navy-light"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <p className="overline text-brand-cyan">{copy.visualsEyebrow}</p>
          </Reveal>
          {leadVisual && (
            <Reveal delay={0.1} className="mt-10">
              <div className="overflow-hidden rounded border border-white/10">
                <img
                  src={leadVisual.src}
                  alt={leadVisual.alt}
                  className="aspect-[16/10] w-full object-cover md:aspect-[2.2/1]"
                />
              </div>
              {leadVisual.caption && (
                <p className="mt-4 text-sm text-white/45">{leadVisual.caption}</p>
              )}
            </Reveal>
          )}
          {moreVisuals.length > 0 && (
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {moreVisuals.map((visual, i) => (
                <Reveal key={visual.src} delay={0.12 + i * 0.06}>
                  <div className="overflow-hidden rounded border border-white/10">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  {visual.caption && (
                    <p className="mt-4 text-sm text-white/45">{visual.caption}</p>
                  )}
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. USER JOURNEY */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="overline text-brand-cyan">{copy.journeyEyebrow}</p>
        </Reveal>
        <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {caseStudy.journey.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <li>
                <p className="font-display text-4xl text-brand-cyan/40">
                  {item.step}
                </p>
                <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-white/60">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 8. TOOLS & TECHNOLOGY */}
      <section className="border-y border-white/10 bg-brand-navy-light">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-16">
          <Reveal>
            <p className="overline text-brand-cyan">{copy.toolsEyebrow}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {caseStudy.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. OUTCOME */}
      <section
        data-testid="case-study-outcome"
        className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24"
      >
        <Reveal>
          <p className="overline text-brand-cyan">{copy.outcomeEyebrow}</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {caseStudy.outcomes.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <p className="font-display text-5xl text-brand-cyan md:text-6xl lg:text-7xl">
                {item.value}
              </p>
              <p className="mt-4 text-lg text-white/55">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. TESTIMONIAL / DEMO NOTE */}
      <section className="border-t border-white/10 bg-brand-navy-light">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="overline text-brand-cyan">{caseStudy.note.label}</p>
            <p className="mt-6 font-display text-2xl leading-snug text-white md:text-3xl lg:text-4xl">
              {caseStudy.note.body}
            </p>
            {caseStudy.note.attribution && (
              <p className="mt-8 text-sm text-white/45">
                — {caseStudy.note.attribution}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <FinalCta />
    </div>
  );
}
