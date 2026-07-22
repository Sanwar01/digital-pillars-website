'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';
import { Reveal, KineticHeadline } from '@/components/Reveal';
import { CtaButton } from '@/components/CtaButton';
import { Marquee } from '@/components/Marquee';
import { FinalCta } from '@/components/FinalCta';
import { SERVICES } from '@/content/site';
import { home } from '@/content/home';
import { ourWork } from '@/content/our-work';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.4, 0.8]);

  const featuredWork = home.workPreview.projectIds
    .map((id) => ourWork.projects.find((p) => p.id === id))
    .filter((p): p is (typeof ourWork.projects)[number] => Boolean(p));

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-end overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 h-[128%] w-full"
        >
          <Image
            src={home.hero.image}
            alt={home.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlay }}
          className="absolute inset-0 z-0 bg-brand-navy"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-40 md:px-10 md:pb-24">
          <Reveal y={0} delay={0.2}>
            <p className="overline text-brand-cyan font-medium">
              {home.hero.eyebrow}
            </p>
          </Reveal>
          <h1 className="mt-6 font-display text-[13vw] leading-[0.95] tracking-tight text-white sm:text-[10vw] lg:text-[7.6vw]">
            {' '}
            <KineticHeadline delay={0.35} lines={[...home.hero.lines]} />
            <span className="block overflow-hidden">
              <motion.span
                className="block text-brand-cyan"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 1,
                  delay: 0.35 + 3 * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {home.hero.accentLine}
              </motion.span>
            </span>
          </h1>

          <Reveal
            delay={1}
            className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-lg text-white/70">{home.hero.body}</p>
            <div className="flex flex-wrap gap-4">
              <CtaButton
                href={home.hero.primaryCta.href}
                testId="hero-book-call"
              >
                {home.hero.primaryCta.label}
              </CtaButton>
              <CtaButton
                href={home.hero.secondaryCta.href}
                testId="hero-see-work"
                variant="secondary"
              >
                {home.hero.secondaryCta.label}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <Marquee testId="home-marquee" />

      {/* MANIFESTO / BENEFITS */}
      <section data-testid="home-benefits" className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {home.benefits.map((b, i) => (
            <Reveal key={b.no}>
              <div
                className={`grid grid-cols-1 gap-6 border-b border-white/10 py-14 md:grid-cols-12 md:gap-10 md:py-20 ${i === 0 ? 'border-t-0' : ''}`}
              >
                <div className="md:col-span-3">
                  <span className="font-display text-6xl text-stroke md:text-7xl">
                    {b.no}
                  </span>
                </div>
                <h3 className="font-display text-3xl leading-tight md:col-span-5 md:text-4xl">
                  {b.title}
                </h3>
                <p className="text-white/60 md:col-span-4 md:text-lg">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW - BENTO */}
      <section
        data-testid="home-services"
        className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="overline text-brand-cyan font-medium">
              {home.servicesPreview.eyebrow}
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {home.servicesPreview.headline}
            </h2>
          </div>
          <Link
            href={home.servicesPreview.viewAllHref}
            data-testid="services-view-all"
            className="link-underline shrink-0 text-white/70 hover:text-white"
          >
            {home.servicesPreview.viewAllLabel}
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-white/10 bg-white/10 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={i * 0.06}>
                <Link
                  href="/services"
                  data-testid={`home-service-${s.id}`}
                  className="group flex h-full flex-col justify-between bg-brand-navy p-8 transition-colors duration-500 hover:bg-brand-navy-light md:p-12"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className="h-8 w-8 text-brand-cyan"
                      strokeWidth={1.4}
                    />
                    <ArrowUpRight className="h-6 w-6 text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-cyan" />
                  </div>
                  <div className="mt-16">
                    <h3 className="font-display text-2xl md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-md text-white/55">{s.short}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* OUR WORK PREVIEW */}
      <section
        data-testid="home-work"
        className="border-t border-white/10 bg-brand-navy-light"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="overline text-brand-cyan font-medium">
                {home.workPreview.eyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {home.workPreview.headline}
              </h2>
            </div>
            <Link
              href={home.workPreview.viewAllHref}
              data-testid="work-view-all"
              className="link-underline shrink-0 text-white/70 hover:text-white"
            >
              {home.workPreview.viewAllLabel}
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {featuredWork.map((p, i) => {
              const hasCaseStudy = Boolean(p.caseStudy);
              const card = (
                <>
                  <div className="overflow-hidden rounded border border-white/10">
                    <div
                      className={`relative aspect-[4/3] w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        hasCaseStudy ? 'group-hover:scale-105' : ''
                      }`}
                    >
                      <Image
                        src={p.image}
                        alt={`${p.title} — ${p.type} project by Digital Pillars`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        unoptimized={p.image.endsWith('.svg')}
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        {p.category} · {p.year}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-white/65">
                        {p.description}
                      </p>
                    </div>
                    {hasCaseStudy && (
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-cyan" />
                    )}
                  </div>
                </>
              );

              return (
                <Reveal key={p.id} delay={i * 0.08}>
                  {hasCaseStudy ? (
                    <Link
                      href={`/our-work/${p.slug}`}
                      data-testid={`home-project-${p.id}`}
                      className="group block"
                    >
                      {card}
                    </Link>
                  ) : (
                    <div
                      data-testid={`home-project-${p.id}`}
                      className="block"
                    >
                      {card}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        data-testid="home-testimonials"
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="mb-4 flex gap-1 text-brand-cyan">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-cyan" />
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
            {home.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure>
                  <blockquote className="font-display text-2xl leading-snug text-white md:text-[1.7rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-5">
                    <span className="block text-white">{t.name}</span>
                    <span className="block text-sm text-white/50">
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section
        data-testid="home-about"
        className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="group overflow-hidden rounded border border-white/10">
              <div className="relative aspect-[4/3] w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                <Image
                  src={home.aboutPreview.image}
                  alt={home.aboutPreview.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="overline text-brand-cyan font-medium">
              {home.aboutPreview.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              {home.aboutPreview.headline}
            </h2>
            <p className="mt-6 text-lg text-white/60">
              {home.aboutPreview.body}
            </p>
            <div className="mt-10">
              <CtaButton
                href={home.aboutPreview.cta.href}
                testId="home-about-cta"
                variant="secondary"
              >
                {home.aboutPreview.cta.label}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
