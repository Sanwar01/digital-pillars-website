'use client';

import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type WizardNavProps = {
  backLabel: string;
  nextLabel?: string;
  skipLabel?: string;
  submitLabel?: string;
  submittingLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
  showBack?: boolean;
  showSkip?: boolean;
  isSubmit?: boolean;
  submitting?: boolean;
  backTestId?: string;
  nextTestId?: string;
  skipTestId?: string;
  submitTestId?: string;
  className?: string;
};

export function WizardNav({
  backLabel,
  nextLabel = 'Continue',
  skipLabel = 'Skip',
  submitLabel = 'Submit',
  submittingLabel = 'Sending…',
  onBack,
  onNext,
  onSkip,
  showBack = true,
  showSkip = false,
  isSubmit = false,
  submitting = false,
  backTestId = 'wizard-back',
  nextTestId = 'wizard-next',
  skipTestId = 'wizard-skip',
  submitTestId = 'wizard-submit',
  className,
}: WizardNavProps) {
  const secondaryBtn =
    'inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-brand-cyan hover:text-brand-cyan disabled:cursor-not-allowed disabled:opacity-50';
  const primaryBtn =
    'inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-4 text-sm font-bold text-brand-navy transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-brand-glow disabled:opacity-60';

  return (
    <div
      className={cn(
        'mt-10 flex flex-wrap items-center justify-between gap-4',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            type="button"
            onClick={onBack}
            disabled={submitting}
            data-testid={backTestId}
            className={secondaryBtn}
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </button>
        )}
        {showSkip && (
          <button
            type="button"
            onClick={onSkip}
            disabled={submitting}
            data-testid={skipTestId}
            className="text-sm text-white/45 underline-offset-4 transition-colors hover:text-brand-cyan hover:underline"
          >
            {skipLabel}
          </button>
        )}
      </div>

      {isSubmit ? (
        <button
          type="submit"
          disabled={submitting}
          data-testid={submitTestId}
          className={primaryBtn}
        >
          {submitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
          {submitting ? submittingLabel : submitLabel}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={submitting}
          data-testid={nextTestId}
          className={primaryBtn}
        >
          {nextLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
