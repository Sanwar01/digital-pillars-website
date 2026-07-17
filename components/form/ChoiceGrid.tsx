'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ChoiceOption = {
  id: string;
  label: string;
  hint?: string;
};

type ChoiceGridProps = {
  options: readonly ChoiceOption[] | ChoiceOption[];
  value: string | string[] | null;
  onChange: (id: string) => void;
  multiple?: boolean;
  max?: number;
  columns?: 1 | 2 | 3;
  testIdPrefix?: string;
  error?: string;
  errorTestId?: string;
};

export function ChoiceGrid({
  options,
  value,
  onChange,
  multiple = false,
  max,
  columns = 2,
  testIdPrefix = 'choice',
  error,
  errorTestId,
}: ChoiceGridProps) {
  const selected = Array.isArray(value)
    ? value
    : value
      ? [value]
      : [];

  const colClass =
    columns === 3
      ? 'sm:grid-cols-3'
      : columns === 1
        ? 'sm:grid-cols-1'
        : 'sm:grid-cols-2';

  return (
    <div>
      <div className={cn('grid grid-cols-1 gap-3', colClass)}>
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          const atMax =
            multiple &&
            typeof max === 'number' &&
            selected.length >= max &&
            !isSelected;

          return (
            <button
              key={opt.id}
              type="button"
              disabled={atMax}
              data-testid={`${testIdPrefix}-${opt.id}`}
              onClick={() => onChange(opt.id)}
              className={cn(
                'border px-5 py-4 text-left transition-colors duration-300',
                isSelected
                  ? 'border-brand-cyan bg-brand-navy-light'
                  : 'border-white/10 bg-transparent hover:border-white/30 hover:bg-white/[0.03]',
                atMax && 'cursor-not-allowed opacity-40',
              )}
            >
              <span className="flex items-start justify-between gap-3">
                <span>
                  <span className="block font-display text-lg text-white">
                    {opt.label}
                  </span>
                  {opt.hint && (
                    <span className="mt-1 block text-sm text-white/50">
                      {opt.hint}
                    </span>
                  )}
                </span>
                {isSelected && (
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                )}
              </span>
            </button>
          );
        })}
      </div>
      {error && (
        <p
          data-testid={errorTestId}
          className="mt-4 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
