'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Check, Plus, X } from 'lucide-react';
import { CtaButton } from '@/components/CtaButton';
import {
  ChoiceGrid,
  FormField,
  WizardNav,
  WizardProgress,
  WizardStepFrame,
  formControlClass,
  formSelectClass,
  formTextareaClass,
} from '@/components/form';
import {
  design,
  type DesignImproveId,
  type DesignIndustryId,
  type DesignRequest,
} from '@/content/design';
import { contact } from '@/content/contact';

type StepId =
  | 'business'
  | 'improve'
  | 'about'
  | 'customer'
  | 'inspiration'
  | 'threeWords'
  | 'contact';

const STEPS: StepId[] = [
  'business',
  'improve',
  'about',
  'customer',
  'inspiration',
  'threeWords',
  'contact',
];

const OPTIONAL_STEPS: StepId[] = ['inspiration', 'threeWords'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<keyof DesignRequest | 'goals', string>>;

const emptyForm = (): DesignRequest => ({
  businessName: '',
  website: '',
  industry: null,
  industryOther: '',
  goals: [],
  about: '',
  idealCustomer: '',
  inspirationUrls: [''],
  threeWords: '',
  name: '',
  email: '',
  phone: '',
});

const { wizard } = design;

export function DesignRequestForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<DesignRequest>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const step = STEPS[stepIndex];
  const isOptional = OPTIONAL_STEPS.includes(step);

  const update = <K extends keyof DesignRequest>(
    field: K,
    value: DesignRequest[K],
  ) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleGoal = (id: string) => {
    const goalId = id as DesignImproveId;
    setForm((f) => {
      const has = f.goals.includes(goalId);
      if (has) return { ...f, goals: f.goals.filter((g) => g !== goalId) };
      if (f.goals.length >= wizard.steps.improve.max) return f;
      return { ...f, goals: [...f.goals, goalId] };
    });
    setErrors((e) => ({ ...e, goals: undefined }));
  };

  const validateStep = (target: StepId): FieldErrors => {
    const e: FieldErrors = {};
    if (target === 'business') {
      if (form.businessName.trim().length < 2)
        e.businessName = 'Please enter your business name.';
      if (!form.industry) e.industry = 'Please select an industry.';
      if (form.industry === 'other' && form.industryOther.trim().length < 2)
        e.industryOther = 'Please tell us your industry.';
      if (form.website.trim()) {
        try {
          // Allow bare domains by prefixing
          const raw = form.website.trim();
          const url = raw.startsWith('http') ? raw : `https://${raw}`;
          new URL(url);
        } catch {
          e.website = 'Please enter a valid website URL.';
        }
      }
    } else if (target === 'improve') {
      if (form.goals.length < 1)
        e.goals = 'Please choose at least one improvement.';
    } else if (target === 'about') {
      if (form.about.trim().length < 10)
        e.about = 'Please add one or two sentences about what you do.';
    } else if (target === 'customer') {
      if (form.idealCustomer.trim().length < 5)
        e.idealCustomer = 'Please describe your ideal customer.';
    } else if (target === 'contact') {
      if (form.name.trim().length < 2) e.name = 'Please enter your name.';
      if (!EMAIL_RE.test(form.email.trim()))
        e.email = 'Please enter a valid business email.';
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

  const goSkip = () => {
    if (!isOptional) return;
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep('contact');
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setSubmitting(true);
    setFormError(null);
    try {
      const payload = {
        ...form,
        inspirationUrls: form.inspirationUrls
          .map((u) => u.trim())
          .filter(Boolean),
      };
      const res = await fetch('/api/design-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        if (data?.errors) {
          setErrors(data.errors as FieldErrors);
          setStepIndex(STEPS.length - 1);
        } else {
          setFormError(data?.error ?? wizard.errors.generic);
        }
        return;
      }
      setSent(true);
    } catch {
      setFormError(wizard.errors.generic);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div data-testid="design-success">
        <p className="overline text-brand-cyan">{wizard.success.eyebrow}</p>
        <h3 className="mt-4 font-display text-3xl md:text-4xl">
          {wizard.success.title}
        </h3>
        <p className="mt-8 text-sm font-medium tracking-wide text-white/45">
          {wizard.success.nextLabel}
        </p>
        <ul className="mt-5 space-y-4">
          {wizard.success.nextSteps.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-white/80">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand-cyan" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="font-display text-xl text-white">
            {wizard.success.waitingLabel}
          </p>
          <p className="mt-3 text-white/55">{wizard.success.waitingBody}</p>
          <div className="mt-6">
            <CtaButton
              href={contact.calendly.url}
              testId="design-success-book-call"
            >
              {wizard.success.ctaLabel}
            </CtaButton>
          </div>
        </div>
      </div>
    );
  }

  const s = wizard.steps;

  return (
    <form
      data-testid="design-request-form"
      onSubmit={submit}
      className="w-full"
      noValidate
    >
      <WizardProgress
        label={wizard.progressLabel}
        current={stepIndex + 1}
        total={STEPS.length}
      />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          {step === 'business' && (
            <WizardStepFrame
              key="business"
              title={s.business.title}
              subtitle={s.business.subtitle}
            >
              <div className="space-y-8">
                <FormField
                  id="design-business-name"
                  label={s.business.businessNameLabel}
                  required
                  error={errors.businessName}
                  errorTestId="design-error-business-name"
                >
                  <input
                    id="design-business-name"
                    data-testid="design-business-name"
                    value={form.businessName}
                    onChange={(e) => update('businessName', e.target.value)}
                    placeholder={s.business.businessNamePlaceholder}
                    className={formControlClass(Boolean(errors.businessName))}
                  />
                </FormField>

                <FormField
                  id="design-website"
                  label={s.business.websiteLabel}
                  hint={s.business.websiteHint}
                  error={errors.website}
                  errorTestId="design-error-website"
                >
                  <input
                    id="design-website"
                    data-testid="design-website"
                    type="url"
                    value={form.website}
                    onChange={(e) => update('website', e.target.value)}
                    placeholder={s.business.websitePlaceholder}
                    className={formControlClass(Boolean(errors.website))}
                  />
                </FormField>

                <FormField
                  id="design-industry"
                  label={s.business.industryLabel}
                  required
                  error={errors.industry}
                  errorTestId="design-error-industry"
                >
                  <select
                    id="design-industry"
                    data-testid="design-industry"
                    value={form.industry ?? ''}
                    onChange={(e) => {
                      const v = e.target.value as DesignIndustryId | '';
                      update('industry', v || null);
                      if (v !== 'other') update('industryOther', '');
                    }}
                    className={formSelectClass(Boolean(errors.industry))}
                  >
                    <option value="" className="bg-brand-navy text-white">
                      {s.business.industryPlaceholder}
                    </option>
                    {s.business.industries.map((ind) => (
                      <option
                        key={ind.id}
                        value={ind.id}
                        className="bg-brand-navy text-white"
                      >
                        {ind.label}
                      </option>
                    ))}
                  </select>
                </FormField>

                {form.industry === 'other' && (
                  <FormField
                    id="design-industry-other"
                    label={s.business.industryOtherLabel}
                    required
                    error={errors.industryOther}
                    errorTestId="design-error-industry-other"
                  >
                    <input
                      id="design-industry-other"
                      data-testid="design-industry-other"
                      value={form.industryOther}
                      onChange={(e) => update('industryOther', e.target.value)}
                      placeholder={s.business.industryOtherPlaceholder}
                      className={formControlClass(Boolean(errors.industryOther))}
                    />
                  </FormField>
                )}
              </div>
            </WizardStepFrame>
          )}

          {step === 'improve' && (
            <WizardStepFrame
              key="improve"
              title={s.improve.title}
              subtitle={s.improve.subtitle}
              hint={s.improve.hint}
            >
              <ChoiceGrid
                options={s.improve.options}
                value={form.goals}
                onChange={toggleGoal}
                multiple
                max={s.improve.max}
                columns={2}
                testIdPrefix="design-goal"
                error={errors.goals}
                errorTestId="design-error-goals"
              />
            </WizardStepFrame>
          )}

          {step === 'about' && (
            <WizardStepFrame
              key="about"
              title={s.about.title}
              subtitle={s.about.subtitle}
              hint={s.about.hint}
            >
              <FormField
                id="design-about"
                label={s.about.label}
                required
                error={errors.about}
                errorTestId="design-error-about"
              >
                <textarea
                  id="design-about"
                  data-testid="design-about"
                  rows={4}
                  value={form.about}
                  onChange={(e) => update('about', e.target.value)}
                  placeholder={s.about.placeholder}
                  className={formTextareaClass(Boolean(errors.about))}
                />
              </FormField>
              <p className="mt-4 text-sm text-white/40">
                <span className="text-white/55">{s.about.exampleLabel}: </span>
                {s.about.example}
              </p>
            </WizardStepFrame>
          )}

          {step === 'customer' && (
            <WizardStepFrame
              key="customer"
              title={s.customer.title}
              subtitle={s.customer.subtitle}
              hint={s.customer.hint}
            >
              <FormField
                id="design-customer"
                label={s.customer.label}
                required
                error={errors.idealCustomer}
                errorTestId="design-error-customer"
              >
                <input
                  id="design-customer"
                  data-testid="design-customer"
                  value={form.idealCustomer}
                  onChange={(e) => update('idealCustomer', e.target.value)}
                  placeholder={s.customer.placeholder}
                  className={formControlClass(Boolean(errors.idealCustomer))}
                />
              </FormField>
              <div className="mt-4 space-y-1 text-sm text-white/40">
                <p className="text-white/55">{s.customer.exampleLabel}</p>
                {s.customer.examples.map((ex) => (
                  <p key={ex}>“{ex}”</p>
                ))}
              </div>
            </WizardStepFrame>
          )}

          {step === 'inspiration' && (
            <WizardStepFrame
              key="inspiration"
              title={s.inspiration.title}
              subtitle={s.inspiration.subtitle}
              hint={s.inspiration.hint}
              optional
              optionalLabel={wizard.optionalHint}
            >
              <div className="space-y-4">
                {form.inspirationUrls.map((url, i) => (
                  <div key={i} className="flex items-end gap-3">
                    <FormField
                      id={`design-inspiration-${i}`}
                      label={
                        i === 0
                          ? s.inspiration.label
                          : `${s.inspiration.label} ${i + 1}`
                      }
                      className="flex-1"
                    >
                      <input
                        id={`design-inspiration-${i}`}
                        data-testid={`design-inspiration-${i}`}
                        type="url"
                        value={url}
                        onChange={(e) => {
                          const next = [...form.inspirationUrls];
                          next[i] = e.target.value;
                          update('inspirationUrls', next);
                        }}
                        placeholder={s.inspiration.placeholder}
                        className={formControlClass()}
                      />
                    </FormField>
                    {form.inspirationUrls.length > 1 && (
                      <button
                        type="button"
                        aria-label={s.inspiration.removeLabel}
                        data-testid={`design-inspiration-remove-${i}`}
                        onClick={() =>
                          update(
                            'inspirationUrls',
                            form.inspirationUrls.filter((_, idx) => idx !== i),
                          )
                        }
                        className="mb-1 rounded-full border border-white/15 p-3 text-white/50 transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                {form.inspirationUrls.length < 5 && (
                  <button
                    type="button"
                    data-testid="design-inspiration-add"
                    onClick={() =>
                      update('inspirationUrls', [...form.inspirationUrls, ''])
                    }
                    className="inline-flex items-center gap-2 text-sm text-brand-cyan hover:underline"
                  >
                    <Plus className="h-4 w-4" />
                    {s.inspiration.addLabel}
                  </button>
                )}
              </div>
            </WizardStepFrame>
          )}

          {step === 'threeWords' && (
            <WizardStepFrame
              key="threeWords"
              title={s.threeWords.title}
              subtitle={s.threeWords.subtitle}
              hint={s.threeWords.hint}
              optional
              optionalLabel={wizard.optionalHint}
            >
              <FormField
                id="design-three-words"
                label={s.threeWords.label}
              >
                <input
                  id="design-three-words"
                  data-testid="design-three-words"
                  value={form.threeWords}
                  onChange={(e) => update('threeWords', e.target.value)}
                  placeholder={s.threeWords.placeholder}
                  className={formControlClass()}
                />
              </FormField>
              <div className="mt-4 space-y-1 text-sm text-white/40">
                <p className="text-white/55">{s.threeWords.exampleLabel}</p>
                {s.threeWords.examples.map((ex) => (
                  <p key={ex}>{ex}</p>
                ))}
              </div>
            </WizardStepFrame>
          )}

          {step === 'contact' && (
            <WizardStepFrame
              key="contact"
              title={s.contact.title}
              subtitle={s.contact.subtitle}
            >
              <div className="space-y-8">
                <FormField
                  id="design-name"
                  label={s.contact.nameLabel}
                  required
                  error={errors.name}
                  errorTestId="design-error-name"
                >
                  <input
                    id="design-name"
                    data-testid="design-name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder={s.contact.namePlaceholder}
                    className={formControlClass(Boolean(errors.name))}
                  />
                </FormField>
                <FormField
                  id="design-email"
                  label={s.contact.emailLabel}
                  required
                  error={errors.email}
                  errorTestId="design-error-email"
                >
                  <input
                    id="design-email"
                    data-testid="design-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder={s.contact.emailPlaceholder}
                    className={formControlClass(Boolean(errors.email))}
                  />
                </FormField>
                <FormField
                  id="design-phone"
                  label={s.contact.phoneLabel}
                  hint={s.contact.phoneHint}
                >
                  <input
                    id="design-phone"
                    data-testid="design-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder={s.contact.phonePlaceholder}
                    className={formControlClass()}
                  />
                </FormField>
              </div>
            </WizardStepFrame>
          )}
        </AnimatePresence>
      </div>

      {formError && (
        <p
          data-testid="design-form-error"
          className="mt-6 text-sm text-red-400"
          role="alert"
        >
          {formError}
        </p>
      )}

      <WizardNav
        backLabel={wizard.backLabel}
        nextLabel={wizard.nextLabel}
        skipLabel={wizard.skipLabel}
        submitLabel={wizard.submitLabel}
        submittingLabel={wizard.submittingLabel}
        showBack={stepIndex > 0}
        showSkip={isOptional}
        isSubmit={step === 'contact'}
        submitting={submitting}
        onBack={goBack}
        onNext={goNext}
        onSkip={goSkip}
        backTestId="design-back"
        nextTestId="design-next"
        skipTestId="design-skip"
        submitTestId="design-submit"
      />
    </form>
  );
}
