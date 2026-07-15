import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE, FOOTER_NAV, FOOTER_COPY } from '@/content/site';
import { Logo } from '@/components/Logo';

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/10 bg-brand-navy"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo wordmarkClassName="font-display text-2xl text-white" />
            <p className="mt-6 max-w-sm text-white/50">{SITE.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {SITE.socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${s.label.split(' ')[0].toLowerCase()}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="overline text-white/40">
              {FOOTER_COPY.navigateLabel}
            </p>
            <ul className="mt-5 space-y-3">
              {FOOTER_NAV.map((q) => (
                <li key={q.to}>
                  <Link
                    href={q.to}
                    data-testid={`footer-link-${q.label.toLowerCase()}`}
                    className="link-underline text-white/70 transition-colors hover:text-white"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline text-white/40">{FOOTER_COPY.contactLabel}</p>
            <ul className="mt-5 space-y-4 text-white/70">
              <li>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 hover:text-brand-cyan"
                >
                  <Mail className="h-4 w-4 text-brand-cyan" /> {SITE.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-cyan" />{' '}
                {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {FOOTER_COPY.rightsSuffix}
          </p>
          <p>{SITE.footerBlurb}</p>
        </div>
      </div>
    </footer>
  );
};
