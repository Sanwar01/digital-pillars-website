'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Handshake, Zap } from 'lucide-react';
import { Reveal, KineticHeadline } from '@/components/Reveal';
import { FinalCta } from '@/components/FinalCta';
import { useSeo } from '@/hooks/useSeo';
import { INDUSTRIES } from '@/lib/content';

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: 'Outcome-obsessed',
    body: 'We tie every decision to a business result — leads, revenue, efficiency — not vanity metrics.',
  },
  {
    icon: Zap,
    title: 'Senior, fast, hands-on',
    body: 'You work directly with the people building your project. No hand-offs, no telephone game.',
  },
  {
    icon: Handshake,
    title: 'Radically transparent',
    body: 'Fixed quotes, honest timelines and plain English. You always know where things stand.',
  },
  {
    icon: Eye,
    title: 'Design that competes',
    body: "Award-level craft as standard. Your brand should look like the leader you're becoming.",
  },
];

export default function About() {
  useSeo({
    title: 'About | Digital Pillars — Web Design Agency Manchester',
    description:
      'Meet Digital Pillars, a Manchester-based web design and software agency helping estate agents, charities, startups, energy and housing businesses grow.',
  });

  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <p className="overline text-[#D3FF24]">About Digital Pillars</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={['Foundations for', 'ambitious brands.']} />
        </h1>
        <Reveal
          delay={0.4}
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20"
        >
          <p className="text-lg text-white/70">
            Digital Pillars started with a simple frustration: too many agencies
            over-promise, over-charge and under-deliver. We set out to be the
            opposite — a Manchester studio that treats your business like our
            own.
          </p>
          <p className="text-lg text-white/70">
            Today we design and build websites, software and AI-powered
            automation for organisations that refuse to blend in. From estate
            agents to charities and energy innovators, our work shares one
            thing: it performs.
          </p>
        </Reveal>
      </section>

      {/* STATS / MISSION */}
      <section className="border-y border-white/10 bg-[#0a0a0b]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {[
            { k: '60+', v: 'Projects delivered' },
            { k: '5', v: 'Core industries served' },
            { k: '100%', v: 'UK-based team' },
            { k: '4.9★', v: 'Average client rating' },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 0.05}>
              <div className="bg-[#0a0a0b] p-8 md:p-12">
                <span className="font-display text-4xl text-[#D3FF24] md:text-6xl">
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
            <p className="overline text-[#D3FF24]">Our mission</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="font-display text-3xl leading-tight md:text-5xl">
              To give every client an unfair advantage online — through design
              that demands attention and technology that quietly does the heavy
              lifting.
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
              What makes us different
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.title} delay={i * 0.06}>
                  <div className="h-full bg-[#050506] p-8 md:p-12">
                    <Icon
                      className="h-8 w-8 text-[#D3FF24]"
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
          {[
            {
              src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1100',
              alt: 'Modern meeting room at Digital Pillars Manchester',
              cls: 'md:mt-16',
            },
            {
              src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=srgb&fm=jpg&q=85&w=1100',
              alt: 'Design team collaborating on a project',
            },
          ].map((img, i) => (
            <Reveal key={i} delay={i * 0.1} className={img.cls || ''}>
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
          <p className="overline text-white/40">Industries we serve</p>
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
