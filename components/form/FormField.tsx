import { cn } from '@/lib/utils';

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  errorTestId?: string;
};

export function FormField({
  id,
  label,
  hint,
  error,
  required,
  children,
  className,
  errorTestId,
}: FormFieldProps) {
  return (
    <div className={cn('w-full', className)}>
      <label
        htmlFor={id}
        className="overline block font-medium text-white/60"
      >
        {label}
        {required && <span className="text-brand-cyan"> *</span>}
      </label>
      {hint && <p className="mt-2 text-sm text-white/40">{hint}</p>}
      {children}
      {error && (
        <p
          data-testid={errorTestId}
          className="mt-2 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function formControlClass(hasError?: boolean) {
  return cn(
    'mt-3 w-full border-b bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan',
    hasError ? 'border-red-400/70' : 'border-white/15',
  );
}

export function formTextareaClass(hasError?: boolean) {
  return cn(
    'mt-3 w-full resize-none border bg-transparent p-4 text-base text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan',
    hasError ? 'border-red-400/70' : 'border-white/15',
  );
}

export function formSelectClass(hasError?: boolean) {
  return cn(
    'mt-3 w-full appearance-none border-b bg-transparent pb-3 text-lg text-white outline-none transition-colors focus:border-brand-cyan',
    hasError ? 'border-red-400/70' : 'border-white/15',
  );
}
