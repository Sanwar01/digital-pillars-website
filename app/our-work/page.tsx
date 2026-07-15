'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { KineticHeadline, Reveal } from '@/components/Reveal';
import { FinalCta } from '@/components/FinalCta';
import { useSeo } from '@/hooks/useSeo';
import { ourWork } from '@/content/our-work';

export default function Listings() {
  useSeo(ourWork.seo);
  const [filter, setFilter] = useState<string>(ourWork.filters[0]);
  const projects =
    filter === 'All'
      ? ourWork.projects
      : ourWork.projects.filter((p) => p.category === filter);

  return (
    <div data-testid="listings-page">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-40 md:px-10 md:pb-16 md:pt-52">
        <p className="overline text-brand-cyan">{ourWork.hero.eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={[...ourWork.hero.lines]} />
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-10 max-w-2xl text-lg text-white/70">
            {ourWork.hero.body}
          </p>
        </Reveal>
      </section>

      {/* FILTER BAR */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div
          data-testid="filter-bar"
          className="flex flex-wrap gap-3 border-y border-white/10 py-6"
        >
          {ourWork.filters.map((f) => (
            <button
              key={f}
              data-testid={`filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors duration-300 ${
                filter === f
                  ? 'border-brand-cyan bg-brand-gradient text-white'
                  : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={i % 2 === 1 ? 'md:mt-16' : ''}
              >
                <Link
                  href="/contact"
                  data-testid={`project-${p.id}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded border border-white/10">
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.type} project by Digital Pillars`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/50">
                        {p.type} · {p.year}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-6 w-6 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-cyan" />
                  </div>
                  <span className="mt-3 inline-block rounded-full border border-white/15 px-3 py-1 text-xs text-white/50">
                    {p.category}
                  </span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {projects.length === 0 && (
          <p
            data-testid="no-results"
            className="py-20 text-center text-white/50"
          >
            {ourWork.emptyState}
          </p>
        )}
      </section>

      <FinalCta />
    </div>
  );
}
