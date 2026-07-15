'use client';

import { KineticHeadline, Reveal } from '@/components/Reveal';
import { FinalCta } from '@/components/FinalCta';
import { useSeo } from '@/hooks/useSeo';
import { SERVICES, STEPS, FAQS } from '@/lib/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check } from 'lucide-react';

export default function Services() {
  useSeo({
    title: 'Services | Web Design, Software & AI — Digital Pillars Manchester',
    description:
      'Website design & development, web applications, digital strategy and AI automation from Digital Pillars, a Manchester software and web design agency.',
  });

  return (
    <div data-testid="services-page">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <p className="overline text-[#D3FF24]">Services</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={['Everything you need', 'to win online.']} />
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-10 max-w-2xl text-lg text-white/70">
            Four connected disciplines that take you from idea to impact —
            strategy, design, engineering and automation under one Manchester
            roof.
          </p>
        </Reveal>
      </section>

      {/* DETAILED SERVICE LIST */}
      <section
        data-testid="services-detail"
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id}>
                <div
                  id={s.id}
                  className="grid grid-cols-1 gap-8 border-b border-white/10 py-16 md:grid-cols-12 md:gap-10 md:py-24"
                >
                  <div className="md:col-span-1">
                    <span className="font-display text-3xl text-stroke">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <Icon
                      className="mb-6 h-9 w-9 text-[#D3FF24]"
                      strokeWidth={1.4}
                    />
                    <h2 className="font-display text-3xl leading-tight md:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 text-white/60 md:text-lg">{s.long}</p>
                  </div>
                  <div className="md:col-span-6">
                    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded border border-white/10 bg-white/10 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-3 bg-[#050506] p-5 text-white/80"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#D3FF24]" />{' '}
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        data-testid="services-process"
        className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32"
      >
        <Reveal className="mb-14">
          <p className="overline text-[#D3FF24]">How it works</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            A process built for momentum.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded border border-white/10 bg-white/10 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="h-full bg-[#050506] p-8 md:p-10">
                <span className="font-display text-5xl text-stroke md:text-6xl">
                  {step.no}
                </span>
                <h3 className="mt-10 font-display text-2xl">{step.title}</h3>
                <p className="mt-4 text-white/55">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section data-testid="services-faq" className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-4">
              <p className="overline text-[#D3FF24]">FAQ</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Questions, answered.
              </h2>
            </Reveal>
            <div className="md:col-span-8">
              <Accordion className="w-full">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-white/10"
                  >
                    <AccordionTrigger
                      data-testid={`faq-trigger-${i}`}
                      className="py-6 text-left font-display text-xl text-white hover:text-[#D3FF24] hover:no-underline md:text-2xl"
                    >
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-white/60 md:text-lg">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
