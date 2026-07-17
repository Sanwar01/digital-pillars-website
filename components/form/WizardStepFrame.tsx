'use client';

import { motion } from 'framer-motion';
import { EASE } from '@/components/Reveal';
import { cn } from '@/lib/utils';

type WizardStepFrameProps = {
  title: string;
  subtitle?: string;
  hint?: string;
  optional?: boolean;
  optionalLabel?: string;
  children: React.ReactNode;
  className?: string;
};

export function WizardStepFrame({
  title,
  subtitle,
  hint,
  optional,
  optionalLabel = 'Optional',
  children,
  className,
}: WizardStepFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={cn('w-full', className)}
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
        {optional && (
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide text-white/45">
            {optionalLabel}
          </span>
        )}
      </div>
      {subtitle && <p className="mt-3 text-lg text-white/65">{subtitle}</p>}
      {hint && <p className="mt-2 text-sm text-white/40">{hint}</p>}
      <div className="mt-6">{children}</div>
    </motion.div>
  );
}
