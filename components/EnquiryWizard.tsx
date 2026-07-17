'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { contact, type EnquiryServiceId } from '@/content/contact';
import { EASE } from '@/components/Reveal';
import Link from 'next/link';

type StepId = 'service' | 'description' | 'details';
const STEPS: StepId[] = ['service', 'description', 'details'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  service: EnquiryServiceId | null;
  description: string;
  name: string;
  phone: string;
  email: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const { enquiry } = contact;

export function EnquiryWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<FormState>({
    service: null,
    description: '',
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const step = STEPS[stepIndex];

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validateStep = (target: StepId): FieldErrors => {
    const e: FieldErrors = {};
    if (target === 'service') {
      if (!form.service) e.service = 'Please choose a service.';
    } else if (target === 'description') {
      if (form.description.trim().length < 10)
        e.description = 'Please add a few words about what you need.';
    } else if (target === 'details') {
      if (form.name.trim().length < 2) e.name = 'Please enter your name.';
      if (form.phone.replace(/[^0-9]/g, '').length < 7)
        e.phone = 'Please enter a valid phone number.';
      if (!EMAIL_RE.test(form.email.trim()))
        e.email = 'Please enter a valid email.';
    }
    return e;
  };

  const goNext = () => {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const reset = () => {
    setForm({
      service: null,
      description: '',
      name: '',
      phone: '',
      email: '',
    });
    setErrors({});
    setFormError(null);
    setStepIndex(0);
    setSent(false);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep('details');
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setSubmitting(true);
    setFormError(null);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        if (data?.errors) {
          setErrors(data.errors as FieldErrors);
          // Jump back to the earliest step containing an error
          if (data.errors.service) setStepIndex(0);
          else if (data.errors.description) setStepIndex(1);
        } else {
          setFormError(data?.error ?? enquiry.errors.generic);
        }
        return;
      }
      setSent(true);
    } catch {
      setFormError(enquiry.errors.generic);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `mt-3 w-full border-b bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan ${
      errors[field] ? 'border-red-400/70' : 'border-white/15'
    }`;

  if (sent) {
    return (
      <div data-testid="enquiry-success">
        <p className="overline text-brand-cyan">Sent</p>
        <h3 className="mt-4 font-display text-3xl md:text-4xl">
          {enquiry.success.title}
        </h3>
        <p className="mt-5 text-lg text-white/60">{enquiry.success.body}</p>
        <button
          type="button"
          onClick={reset}
          data-testid="enquiry-reset"
          className="mt-8 text-sm text-brand-cyan hover:underline"
        >
          {enquiry.success.resetLabel}
        </button>
      </div>
    );
  }

  return (
    <form
      data-testid="enquiry-wizard"
      onSubmit={submit}
      className="w-full"
      noValidate
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-white/45">
          {enquiry.progressLabel} {stepIndex + 1} of {STEPS.length}
        </p>
      </div>

      <div className="mb-8 h-px w-full bg-white/10">
        <div
          className="h-px bg-brand-cyan transition-[width] duration-500"
          style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {step === 'service' && (
            <div>
              <h3 className="font-display text-2xl md:text-3xl">
                {enquiry.steps.service.title}
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {enquiry.steps.service.options.map((opt) => {
                  const selected = form.service === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      data-testid={`enquiry-service-${opt.id}`}
                      onClick={() =>
                        update('service', opt.id as EnquiryServiceId)
                      }
                      className={`border px-5 py-4 text-left transition-colors duration-300 ${
                        selected
                          ? 'border-brand-cyan bg-brand-navy-light'
                          : 'border-white/10 bg-transparent hover:border-white/30 hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className="block font-display text-lg text-white">
                        {opt.label}
                      </span>
                      <span className="mt-1 block text-sm text-white/50">
                        {opt.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.service && (
                <p
                  data-testid="enquiry-error-service"
                  className="mt-4 text-sm text-red-400"
                >
                  {errors.service}
                </p>
              )}
            </div>
          )}

          {step === 'description' && (
            <div>
              <h3 className="font-display text-2xl md:text-3xl">
                {enquiry.steps.description.title}
              </h3>
              <label
                htmlFor="enquiry-description"
                className="overline mt-6 block text-white/60 font-medium"
              >
                {enquiry.steps.description.label}
              </label>
              <textarea
                id="enquiry-description"
                data-testid="enquiry-description"
                rows={5}
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                placeholder={enquiry.steps.description.placeholder}
                className={`mt-3 w-full resize-none border bg-transparent p-4 text-base text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan ${
                  errors.description ? 'border-red-400/70' : 'border-white/15'
                }`}
              />
              {errors.description && (
                <p
                  data-testid="enquiry-error-description"
                  className="mt-2 text-sm text-red-400"
                >
                  {errors.description}
                </p>
              )}
            </div>
          )}

          {step === 'details' && (
            <div>
              <h3 className="font-display text-2xl md:text-3xl">
                {enquiry.steps.details.title}
              </h3>
              <div className="mt-6 space-y-8">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="overline block text-white/60 font-medium"
                  >
                    {enquiry.steps.details.nameLabel}
                  </label>
                  <input
                    id="enquiry-name"
                    data-testid="enquiry-name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder={enquiry.steps.details.namePlaceholder}
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p
                      data-testid="enquiry-error-name"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="overline block text-white/60 font-medium"
                  >
                    {enquiry.steps.details.phoneLabel}
                  </label>
                  <input
                    id="enquiry-phone"
                    data-testid="enquiry-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder={enquiry.steps.details.phonePlaceholder}
                    className={inputClass('phone')}
                  />
                  {errors.phone && (
                    <p
                      data-testid="enquiry-error-phone"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="enquiry-email"
                    className="overline block text-white/60 font-medium"
                  >
                    {enquiry.steps.details.emailLabel}
                  </label>
                  <input
                    id="enquiry-email"
                    data-testid="enquiry-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder={enquiry.steps.details.emailPlaceholder}
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p
                      data-testid="enquiry-error-email"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {formError && (
        <p
          data-testid="enquiry-form-error"
          className="mt-6 text-sm text-red-400"
        >
          {formError}
        </p>
      )}

      <div className="mt-10">
        {step !== 'details' ? (
          <div className="flex items-center justify-between gap-4">
            <button
              disabled={submitting || stepIndex === 0}
              type="button"
              onClick={goBack}
              data-testid="enquiry-back"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-brand-cyan hover:text-brand-cyan disabled:opacity-60 disabled:border-white/10 disabled:text-white/50"
            >
              <ArrowLeft className="h-4 w-4" />
              {enquiry.backLabel}
            </button>
            <button
              type="button"
              onClick={goNext}
              data-testid="enquiry-next"
              className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-4 text-sm font-bold text-brand-navy transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-brand-glow"
            >
              {enquiry.nextLabel}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goBack}
              data-testid="enquiry-back"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-brand-cyan hover:text-brand-cyan disabled:opacity-60 disabled:border-white/10 disabled:text-white/50"
            >
              <ArrowLeft className="h-4 w-4" />
              {enquiry.backLabel}
            </button>

            <button
              type="submit"
              data-testid="enquiry-submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-4 text-sm font-bold text-brand-navy transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-brand-glow disabled:opacity-60"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
              {submitting ? enquiry.submittingLabel : enquiry.submitLabel}
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
