'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { KineticHeadline, Reveal } from '@/components/Reveal';
import { useSeo } from '@/hooks/useSeo';
import { SITE, SERVICES } from '@/content/site';
import { contact } from '@/content/contact';

export default function Contact() {
  useSeo(contact.seo);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      console.error(contact.form.validationMessage);
      return;
    }
    setSubmitting(true);
    try {
      console.log(form);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-40 md:px-10 md:pb-16 md:pt-52">
        <p className="overline text-brand-cyan">{contact.hero.eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={[...contact.hero.lines]} />
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-16 border-t border-white/10 pt-16 md:grid-cols-12 md:gap-10">
          {/* FORM */}
          <Reveal className="md:col-span-7">
            <form
              data-testid="contact-form"
              onSubmit={submit}
              className="space-y-10"
            >
              {contact.form.fields.map((f) => (
                <div key={f.name} className="group">
                  <label
                    htmlFor={f.name}
                    className="overline block text-white/40"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    data-testid={`contact-${f.name}`}
                    type={f.type}
                    required={f.required}
                    value={form[f.name as keyof typeof form]}
                    onChange={update(f.name)}
                    placeholder={f.placeholder}
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors duration-300 focus:border-brand-cyan"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="service"
                  className="overline block text-white/40"
                >
                  {contact.form.serviceLabel}
                </label>
                <select
                  id="service"
                  data-testid="contact-service"
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white outline-none transition-colors duration-300 focus:border-brand-cyan [&>option]:bg-brand-navy-light [&>option]:text-white "
                >
                  <option value="">{contact.form.servicePlaceholder}</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="overline block text-white/40"
                >
                  {contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  data-testid="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder={contact.form.messagePlaceholder}
                  className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors duration-300 focus:border-brand-cyan"
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit"
                disabled={submitting}
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-medium text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-brand-glow disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting
                  ? contact.form.submittingLabel
                  : contact.form.submitLabel}
              </button>
            </form>
          </Reveal>

          {/* INFO + MAP */}
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="space-y-8">
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
                      <Mail className="h-5 w-5 text-brand-cyan" /> {SITE.email}
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
                      data-testid={`contact-social-${s.label.split(' ')[0].toLowerCase()}`}
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
      </section>
    </div>
  );
}
