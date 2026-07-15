'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { KineticHeadline, Reveal } from '@/components/Reveal';
import { useSeo } from '@/hooks/useSeo';
import { SITE, SERVICES } from '@/lib/content';

const FIELDS = [
  {
    name: 'name',
    label: 'Full name',
    type: 'text',
    placeholder: 'Jane Smith',
    required: true,
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'jane@company.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone (optional)',
    type: 'tel',
    placeholder: '+44 7000 000000',
    required: false,
  },
];

export default function Contact() {
  useSeo({
    title: 'Contact | Digital Pillars — Book a Call, Manchester',
    description:
      'Get in touch with Digital Pillars, a Manchester web design and software agency. Book a free discovery call or send us a message about your project.',
  });

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
      console.error('Please fill in your name, email and message.');
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
        <p className="overline text-[#D3FF24]">Contact</p>
        <h1 className="mt-6 max-w-5xl font-display text-[12vw] leading-[0.9] sm:text-[9vw] lg:text-[7vw]">
          <KineticHeadline lines={["Let's start", 'something great.']} />
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
              {FIELDS.map((f) => (
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
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors duration-300 focus:border-[#D3FF24]"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="service"
                  className="overline block text-white/40"
                >
                  Service of interest (optional)
                </label>
                <select
                  id="service"
                  data-testid="contact-service"
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white outline-none transition-colors duration-300 focus:border-[#D3FF24] [&>option]:bg-[#0a0a0b] [&>option]:text-white "
                >
                  <option value="">Select a service…</option>
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
                  Tell us about your project
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
                  placeholder="What are you looking to build?"
                  className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors duration-300 focus:border-[#D3FF24]"
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit"
                disabled={submitting}
                className="group inline-flex items-center gap-2 rounded-full bg-[#D3FF24] px-8 py-4 text-sm font-medium text-[#050506] transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(211,255,36,0.35)] disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </Reveal>

          {/* INFO + MAP */}
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="space-y-8">
              <div>
                <p className="overline text-white/40">Direct</p>
                <ul className="mt-5 space-y-4 text-lg">
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      data-testid="contact-email-link"
                      className="flex items-center gap-3 text-white/80 hover:text-[#D3FF24]"
                    >
                      <Mail className="h-5 w-5 text-[#D3FF24]" /> {SITE.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE.phone}`}
                      data-testid="contact-phone-link"
                      className="flex items-center gap-3 text-white/80 hover:text-[#D3FF24]"
                    >
                      <Phone className="h-5 w-5 text-[#D3FF24]" /> {SITE.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D3FF24]" />{' '}
                    {SITE.address}
                  </li>
                </ul>
              </div>

              <div>
                <p className="overline text-white/40">Follow</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`contact-social-${s.label.split(' ')[0].toLowerCase()}`}
                      className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 transition-colors hover:border-[#D3FF24] hover:text-[#D3FF24]"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded border border-white/10">
                <iframe
                  title="Digital Pillars Manchester location"
                  data-testid="contact-map"
                  src="https://www.google.com/maps?q=Manchester+M4+4BF&output=embed"
                  className="h-72 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
