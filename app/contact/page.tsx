'use client';

import { useEffect, useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { KineticHeadline, Reveal } from '@/components/Reveal';
import { ProjectPlanner } from '@/components/ProjectPlanner';
import { useSeo } from '@/hooks/useSeo';
import { SITE, INDUSTRIES } from '@/content/site';
import { contact } from '@/content/contact';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Contact() {
  useSeo(contact.seo);
  const [faqReady, setFaqReady] = useState(false);
  useEffect(() => setFaqReady(true), []);

  return (
    <div data-testid="contact-page">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-40 md:px-10 md:pb-16 md:pt-52">
        <p className="overline text-brand-cyan">{contact.hero.eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={[...contact.hero.lines]} />
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-10 max-w-2xl text-lg text-white/70">
            {contact.hero.body}
          </p>
        </Reveal>
      </section>

      {/* PLANNER */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <ProjectPlanner />
            </div>
            <Reveal delay={0.1} className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-10">
                <div>
                  <p className="overline text-white/40">
                    {contact.sidebar.directLabel}
                  </p>
                  <ul className="mt-5 space-y-4 text-lg">
                    <li>
                      <a
                        href={`mailto:${SITE.email}`}
                        data-testid="contact-email-link"
                        className="flex items-center gap-3 text-white/80 hover:text-brand-cyan"
                      >
                        <Mail className="h-5 w-5 text-brand-cyan" />{' '}
                        {SITE.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-cyan" />{' '}
                      {SITE.address}
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="overline text-white/40">
                    {contact.sidebar.followLabel}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {SITE.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section
        data-testid="contact-trust"
        className="border-y border-white/10 bg-brand-navy-light"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
          <Reveal>
            <p className="overline text-brand-cyan">{contact.trust.eyebrow}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {contact.trust.items.map((item, i) => (
              <Reveal key={item.v} delay={i * 0.05}>
                <div className="bg-brand-navy-light p-8 md:p-10">
                  <span className="font-display text-4xl text-brand-cyan md:text-5xl">
                    {item.k}
                  </span>
                  <p className="mt-3 text-sm text-white/55">{item.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <p className="overline text-white/40">
              {contact.trust.industriesLabel}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {INDUSTRIES.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/70"
                >
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQS */}
      <section data-testid="contact-faq" className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-4">
              <p className="overline text-brand-cyan">{contact.faqs.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                {contact.faqs.headline}
              </h2>
            </Reveal>
            <div className="md:col-span-8">
              {faqReady ? (
                <Accordion className="w-full">
                  {contact.faqs.items.map((f, i) => (
                    <AccordionItem
                      key={f.q}
                      value={`item-${i}`}
                      className="border-white/10"
                    >
                      <AccordionTrigger
                        data-testid={`contact-faq-trigger-${i}`}
                        className="py-6 text-left font-display text-xl text-white hover:text-brand-cyan hover:no-underline md:text-2xl"
                      >
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-white/60 md:text-lg">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <ul className="space-y-6">
                  {contact.faqs.items.map((f) => (
                    <li key={f.q} className="border-b border-white/10 pb-6">
                      <p className="font-display text-xl md:text-2xl">{f.q}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
