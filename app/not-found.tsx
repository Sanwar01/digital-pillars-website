import Link from 'next/link';
import { CtaButton } from '@/components/CtaButton';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-start justify-center px-6 py-32 md:px-10">
      <p className="overline text-brand-cyan">404</p>
      <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-xl text-lg text-white/65">
        That page doesn&apos;t exist or has moved. Try one of these instead.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <CtaButton href="/" className="px-6 py-3">
          Home
        </CtaButton>
        <Link
          href="/our-work"
          className="inline-flex items-center rounded border border-white/20 px-6 py-3 text-sm text-white/80 transition-colors hover:border-brand-cyan hover:text-brand-cyan"
        >
          Our work
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded border border-white/20 px-6 py-3 text-sm text-white/80 transition-colors hover:border-brand-cyan hover:text-brand-cyan"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
