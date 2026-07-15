import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '@/lib/content';

const QUICK = [
  { label: 'Home', to: '' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Listings', to: 'listings' },
  { label: 'Contact', to: 'contact' },
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white10 bg-[#050506]"
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-2xl text-white"
          >
            <span className="inline-block h-3 w-3 rounded-full bg-[#D3FF24]" />
            Digital Pillars
          </Link>
          <p className="mt-6 max-w-sm text-white50">{SITE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {SITE.socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-social-${s.label.split(' ')[0].toLowerCase()}`}
                className="rounded-full border border-white15 px-4 py-2 text-xs text-white70 transition-colors hover:border-[#D3FF24] hover:text-[#D3FF24]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="overline text-white40">Navigate</p>
          <ul className="mt-5 space-y-3">
            {QUICK.map((q) => (
              <li key={q.to}>
                <Link
                  href={q.to}
                  data-testid={`footer-link-${q.label.toLowerCase()}`}
                  className="link-underline text-white70 transition-colors hover:text-white"
                >
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="overline text-white40">Get in touch</p>
          <ul className="mt-5 space-y-4 text-white70">
            <li>
              <Link
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 hover:text-[#D3FF24]"
              >
                <Mail className="h-4 w-4 text-[#D3FF24]" /> {SITE.email}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 hover:text-[#D3FF24]"
              >
                <Phone className="h-4 w-4 text-[#D3FF24]" /> {SITE.phone}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#D3FF24]" />{' '}
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white10 pt-8 text-sm text-white40 md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} Digital Pillars. All rights reserved.
        </p>
        <p>Web design agency · Software agency · Manchester, UK</p>
      </div>
    </footer>
  );
};
