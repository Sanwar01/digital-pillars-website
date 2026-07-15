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
    'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-[transform,background-color,color,box-shadow] duration-300 will-change-transform';
  const styles =
    variant === 'primary'
      ? 'bg-brand-gradient text-white hover:scale-[1.03] hover:shadow-brand-glow'
      : 'border border-white/20 text-white hover:bg-white hover:text-brand-navy hover:scale-[1.03]';
  const cls = `${base} ${styles} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (href) {
    return (
      <Link href={href || ''} data-testid={testId} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} data-testid={testId} className={cls} {...rest}>
      {inner}
    </a>
  );
}
