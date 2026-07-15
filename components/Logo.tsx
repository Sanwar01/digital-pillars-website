import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/content/site';

type LogoProps = {
  className?: string;
  iconSize?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  testId?: string;
};

export function Logo({
  className = '',
  iconSize = 54,
  showWordmark = false,
  wordmarkClassName = 'font-display text-lg text-white',
  testId,
}: LogoProps) {
  return (
    <Link
      href="/"
      data-testid={testId}
      className={`flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/favicon.png"
        alt={SITE.name}
        width={iconSize}
        height={iconSize}
        className="shrink-0"
        priority
      />
      {showWordmark ? (
        <span className={wordmarkClassName}>{SITE.name}</span>
      ) : null}
    </Link>
  );
}
