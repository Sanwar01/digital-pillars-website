'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';
import { Reveal, KineticHeadline } from '@/components/Reveal';
import { CtaButton } from '@/components/CtaButton';
import { Marquee } from '@/components/Marquee';
import { FinalCta } from '@/components/FinalCta';
import { useSeo } from '@/hooks/useSeo';
import { SERVICES, BENEFITS, TESTIMONIALS, INDUSTRIES } from '@/lib/content';

const HERO_IMG =
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600';

export default function Home() {
  useSeo({
    title: 'Digital Pillars | Web Design & Software Agency Manchester',
    description:
      'Digital Pillars is a Manchester web design and software agency building websites, web apps, digital strategy and AI automation for ambitious businesses.',
  });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.4, 0.8]);

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-end overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Abstract dark architecture representing digital foundations"
            className="h-[128%] w-full object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlay }}
          className="absolute inset-0 z-0 bg-[#050506]"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050506] via-[#050506]/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-40 md:px-10 md:pb-24">
          <Reveal y={0} delay={0.2}>
            <p className="overline text-[#D3FF24]">
              Digital Agency · Manchester, UK
            </p>
          </Reveal>
          <h1 className="mt-6 font-display text-[13vw] leading-[0.95] tracking-tight text-white sm:text-[10vw] lg:text-[7.6vw]">
            {' '}
            <KineticHeadline
              delay={0.35}
              lines={['We build the', 'digital pillars', 'your business']}
            />
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[#D3FF24]"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 1,
                  delay: 0.35 + 3 * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                stands on.
              </motion.span>
            </span>
          </h1>

          <Reveal
            delay={1}
            className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-lg text-white/70">
              Websites, software, strategy and AI automation — engineered to
              beat your competitors and win you more leads.
            </p>
            <div className="flex flex-wrap gap-4">
              <CtaButton href="/contact" testId="hero-book-call">
                Book a call
              </CtaButton>
              <CtaButton
                href="/listings"
                testId="hero-see-work"
                variant="secondary"
              >
                See our work
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <Marquee testId="home-marquee" />
      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="overline text-white/40">Trusted across industries</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {INDUSTRIES.map((i) => (
              <span key={i} className="text-white/60">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO / BENEFITS */}
      <section data-testid="home-benefits" className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {BENEFITS.map((b, i) => (
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
            <p className="overline text-[#D3FF24]">What we do</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Four services, one obsession: results.
            </h2>
          </div>
          <Link
            href="/services"
            data-testid="services-view-all"
            className="link-underline shrink-0 text-white/70 hover:text-white"
          >
            View all services
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
                  className="group flex h-full flex-col justify-between bg-[#050506] p-8 transition-colors duration-500 hover:bg-[#0c0c0d] md:p-12"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className="h-8 w-8 text-[#D3FF24]"
                      strokeWidth={1.4}
                    />
                    <ArrowUpRight className="h-6 w-6 text-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D3FF24]" />
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

      {/* TESTIMONIALS */}
      <section
        data-testid="home-testimonials"
        className="border-y border-white/10 bg-[#0a0a0b]"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="mb-4 flex gap-1 text-[#D3FF24]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#D3FF24]" />
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure>
                  <blockquote className="font-display text-2xl leading-snug text-white md:text-[1.7rem]">
                    "{t.quote}"
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
            <div className="overflow-hidden rounded border border-white/10">
              <motion.img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&q=85&w=1100"
                alt="Digital Pillars studio workspace in Manchester"
                className="aspect-[4/3] w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="overline text-[#D3FF24]">Who we are</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              A Manchester studio with a builder&apos;s mindset.
            </h2>
            <p className="mt-6 text-lg text-white/60">
              We&apos;re a tight-knit team of designers, engineers and
              strategists. No bloated account layers, no jargon — just senior
              people who care about your outcomes as much as you do.
            </p>
            <div className="mt-10">
              <CtaButton
                href="/about"
                testId="home-about-cta"
                variant="secondary"
              >
                Our story
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
