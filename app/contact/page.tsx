'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, ChevronRight, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { KineticHeadline, Reveal } from '@/components/Reveal';
import { EnquiryWizard } from '@/components/EnquiryWizard';
import { useSeo } from '@/hooks/useSeo';
import { SITE } from '@/content/site';
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
      {/* HERO + ACTIONS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: copy */}
          <div className="lg:col-span-5">
            <p className="overline text-brand-cyan">{contact.hero.eyebrow}</p>
            <h1 className="mt-6 font-display text-[13vw] leading-[0.9] sm:text-[9vw] lg:text-[5.5vw]">
              <KineticHeadline lines={[...contact.hero.lines]} />
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-md text-lg text-white/70">
                {contact.hero.body}
              </p>
            </Reveal>

            {/* <Reveal delay={0.35}>
              <ul className="mt-10 space-y-4">
                {contact.hero.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg text-white/80"
                  >
                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-brand-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal> */}

            <Reveal delay={0.4}>
              <div className="mt-6 border-t border-white/10 pt-6">
                <a
                  href={`mailto:${SITE.email}`}
                  data-testid="contact-email-link"
                  className="mt-3 inline-flex items-center gap-3 text-lg text-white/80 hover:text-brand-cyan"
                >
                  <Mail className="h-5 w-5 text-brand-cyan" />
                  {SITE.email}
                </a>
                <p className="mt-4 flex items-start gap-3 text-white/80 text-lg">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-cyan" />
                  {SITE.address}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FREE HOMEPAGE DESIGN CTA */}
            <Reveal delay={0.45}>
              <div
                data-testid="contact-homepage-design-cta"
                className="mt-10 border border-brand-cyan/50 bg-brand-navy-light p-6 md:p-8"
              >
                <p className="overline text-brand-cyan font-bold">
                  {contact.designCta.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-2xl leading-tight uppercase tracking-tight text-white sm:text-3xl">
                  {contact.designCta.headline}
                </h2>
                <p className="mt-4 max-w-md text-base text-white/55 font-medium">
                  {contact.designCta.body}
                </p>
                <Link
                  href={contact.designCta.ctaHref}
                  data-testid="contact-homepage-design-cta-button"
                  className="group mt-8 inline-flex items-center gap-2 border rounded-full border-brand-cyan px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-cyan transition-colors hover:bg-brand-cyan hover:text-brand-navy"
                >
                  <span>{contact.designCta.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: book call + enquiry */}
          <Reveal delay={0.2} className="lg:col-span-7">
            <div
              data-testid="contact-panel-enquiry"
              className="border border-white/10 bg-brand-navy-light p-6 md:p-8"
            >
              <a
                href={contact.calendly.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-book-call-cta"
                className="group flex w-full items-center justify-between rounded-full gap-4 bg-brand-cyan px-6 py-4 text-left text-sm roudnr font-bold tracking-wide text-brand-navy transition-[transform,box-shadow] duration-300 hover:scale-[1.01] hover:shadow-brand-glow"
              >
                <span>{contact.hero.bookCallCta}</span>
                <Calendar className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <div className="relative my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                  {contact.hero.orLabel}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <p className="mb-6 text-sm text-white/50">
                {contact.hero.formIntro}
              </p>
              <EnquiryWizard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQS */}
      <section data-testid="contact-faq" className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
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
