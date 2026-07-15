'use client';

import { motion } from 'framer-motion';
import { Reveal, KineticHeadline } from '@/components/Reveal';
import { FinalCta } from '@/components/FinalCta';
import { useSeo } from '@/hooks/useSeo';
import { INDUSTRIES } from '@/content/site';
import { about } from '@/content/about';

export default function About() {
  useSeo(about.seo);

  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <p className="overline text-brand-cyan">{about.hero.eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={[...about.hero.lines]} />
        </h1>
        <Reveal
          delay={0.4}
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20"
        >
          {about.hero.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg text-white/70">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* STATS / MISSION */}
      <section className="border-y border-white/10 bg-brand-navy-light">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.05}>
              <div className="bg-brand-navy-light p-8 md:p-12">
                <span className="font-display text-4xl text-brand-cyan md:text-6xl">
                  {s.k}
                </span>
                <p className="mt-3 text-sm text-white/55">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="overline text-brand-cyan">{about.mission.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="font-display text-3xl leading-tight md:text-5xl">
              {about.mission.statement}
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section
        data-testid="about-difference"
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal className="py-14">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              {about.difference.headline}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
            {about.difference.items.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={i * 0.06}>
                  <div className="h-full bg-brand-navy p-8 md:p-12">
                    <Icon
                      className="h-8 w-8 text-brand-cyan"
                      strokeWidth={1.4}
                    />
                    <h3 className="mt-8 font-display text-2xl">{d.title}</h3>
                    <p className="mt-4 text-white/55">{d.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFICE PHOTOS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {about.officeImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.1} className={img.className}>
              <div className="overflow-hidden rounded border border-white/10">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/5] w-full object-cover md:aspect-[4/3]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16">
          <p className="overline text-white/40">{about.industries.eyebrow}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {INDUSTRIES.map((i) => (
              <span
                key={i}
                className="rounded-full border border-white/15 px-5 py-2 text-white/70"
              >
                {i}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </div>
  );
}
