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

  const [hero, ...gallery] = caseStudy.showcase;

  return (
    <div data-testid="case-study-page">
      {/* 1. HERO SUMMARY */}
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
            {project.category} · {project.year}
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

      {/* 2. PROJECT SNAPSHOT */}
      <section
        data-testid="case-study-snapshot"
        className="border-b border-white/10 bg-brand-navy-light"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-12">
          <p className="overline text-white/40">{copy.snapshotEyebrow}</p>
          <dl className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {caseStudy.snapshot.map((item) => (
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

      {/* 3. PROBLEM */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="overline text-brand-cyan">{copy.problemEyebrow}</p>
          <p className="mt-6 font-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            {caseStudy.problem}
          </p>
        </Reveal>
      </section>

      {/* 4. WHAT WE BUILT */}
      <section className="border-y border-white/10 bg-brand-navy-light">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <Reveal>
            <p className="overline text-brand-cyan">{copy.builtEyebrow}</p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {caseStudy.built.map((item, i) => (
              <Reveal key={item} delay={i * 0.08}>
                <li className="border-t border-brand-cyan/40 pt-6">
                  <span className="font-display text-4xl text-brand-cyan/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-white/80">
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. VISUAL SHOWCASE */}
      <section
        data-testid="case-study-showcase"
        className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24"
      >
        <Reveal>
          <p className="overline text-brand-cyan">{copy.showcaseEyebrow}</p>
        </Reveal>

        {hero && (
          <Reveal delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded border border-white/10">
              <img
                src={hero.src}
                alt={hero.alt}
                className="aspect-[16/10] w-full object-cover md:aspect-[2.2/1]"
              />
            </div>
          </Reveal>
        )}

        {gallery.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
            {gallery.map((img, i) => (
              <Reveal key={img.src} delay={0.12 + i * 0.06}>
                <div className="overflow-hidden rounded border border-white/10">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* 6. RESULTS / IMPACT */}
      <section
        data-testid="case-study-results"
        className="border-t border-white/10 bg-brand-navy-light"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <p className="overline text-brand-cyan">{copy.resultsEyebrow}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
            {caseStudy.results.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <p className="font-display text-5xl text-brand-cyan md:text-6xl lg:text-7xl">
                  {item.value}
                </p>
                <p className="mt-4 text-lg text-white/55">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <FinalCta />
    </div>
  );
}
