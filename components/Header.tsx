'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { CtaButton } from '@/components/CtaButton';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our work', to: '/our-work' },
  { label: 'Contact', to: '/contact' },
];

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
  console.log(pathname);
  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? 'border-white10 bg-[#050506]70 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          data-testid="logo-link"
          className="flex items-center gap-2 font-display text-lg text-white"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#D3FF24]" />
          Digital Pillars
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={`link-underline text-sm tracking-wide transition-colors ${
                pathname === n.to
                  ? 'text-[#D3FF24]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton href="contact" testId="header-cta" className="px-6 py-3">
            Book a call
          </CtaButton>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white15 text-white md:hidden"
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
            className="overflow-hidden border-t border-white10 bg-[#050506]95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  href={n.to}
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                  className={
                    pathname === n.to
                      ? 'text-[#D3FF24]'
                      : 'text-white70 hover:text-white'
                  }
                >
                  {n.label}
                </Link>
              ))}
              <CtaButton
                href="contact"
                testId="mobile-header-cta"
                className="mt-4 w-full justify-center"
              >
                Book a call
              </CtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
