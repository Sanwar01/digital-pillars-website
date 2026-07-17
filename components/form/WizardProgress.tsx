import { cn } from '@/lib/utils';

type WizardProgressProps = {
  label: string;
  current: number;
  total: number;
  className?: string;
};

export function WizardProgress({
  label,
  current,
  total,
  className,
}: WizardProgressProps) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className={cn('w-full', className)}>
      <p className="mb-6 text-sm text-white/45">
        {label} {current} of {total}
      </p>
      <div className="h-px w-full bg-white/10">
        <div
          className="h-px bg-brand-cyan transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
