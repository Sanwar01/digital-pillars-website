'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { CtaButton } from '@/components/CtaButton';
import { Logo } from '@/components/Logo';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV, HEADER_CTA } from '@/content/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? 'border-white/10 bg-brand-navy/70 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Logo testId="logo-link" />

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={`link-underline text-sm tracking-wide transition-colors ${
                pathname === n.to
                  ? 'text-brand-cyan'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton
            href={HEADER_CTA.href}
            testId="header-cta"
            className="px-6 py-3"
          >
            {HEADER_CTA.label}
          </CtaButton>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-brand-navy/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  href={n.to}
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                  className={cn(
                    'py-3 font-display text-2xl',
                    pathname === n.to
                      ? 'text-brand-cyan'
                      : 'text-white/70 hover:text-white',
                  )}
                >
                  {n.label}
                </Link>
              ))}
              <CtaButton
                href={HEADER_CTA.href}
                testId="mobile-header-cta"
                className="mt-4 w-full justify-center"
              >
                {HEADER_CTA.label}
              </CtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
