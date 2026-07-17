import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  testId?: string;
  variant?: 'primary' | 'secondary';
};

export function CtaButton({
  href,
  children,
  className = '',
  testId,
  variant = 'primary',
  ...rest
}: CtaButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-[transform,background-color,color,box-shadow] duration-300 will-change-transform';
  const styles =
    variant === 'primary'
      ? 'bg-brand-gradient text-white hover:scale-[1.03] hover:shadow-brand-glow'
      : 'border border-white/20 text-white hover:bg-white hover:text-brand-navy/80 hover:scale-[1.03]';
  const cls = `${base} ${styles} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
    </>
  );
  const external = Boolean(href?.startsWith('http'));
  if (href && !external) {
    return (
      <Link href={href} data-testid={testId} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      data-testid={testId}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {inner}
    </a>
  );
}
