'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { CtaButton } from '@/components/CtaButton';
import { EASE } from '@/components/Reveal';
import {
  design,
  type DesignGoalId,
  type DesignRequest,
} from '@/content/design';

export function DesignRequestForm() {
  const [form, setForm] = useState<DesignRequest>({
    business: '',
    website: '',
    goal: null,
    name: '',
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: keyof DesignRequest, value: string) =>
    setForm((f: DesignRequest) => ({ ...f, [field]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.business.trim() ||
      !form.name.trim() ||
      !form.email.includes('@')
    ) {
      console.error(design.form.validationMessage);
      return;
    }
    setSubmitting(true);
    try {
      // TODO: wire to a real backend / email service
      console.log(form);
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="design-request-form" className="w-full">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            data-testid="design-success"
          >
            <p className="overline text-brand-cyan">Sent</p>
            <h3 className="mt-4 font-display text-3xl md:text-4xl">
              {design.form.successTitle}
            </h3>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              {design.form.successBody}
            </p>
            <div className="mt-10">
              <CtaButton
                href={design.form.successCtaHref}
                testId="design-success-book-call"
              >
                {design.form.successCtaLabel}
              </CtaButton>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            onSubmit={submit}
            className="space-y-10"
          >
            <div>
              <label
                htmlFor="design-business"
                className="overline block text-white/40"
              >
                {design.form.businessLabel}
              </label>
              <input
                id="design-business"
                data-testid="design-business"
                required
                value={form.business}
                onChange={(e) => update('business', e.target.value)}
                placeholder={design.form.businessPlaceholder}
                className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
              />
            </div>

            <div>
              <label
                htmlFor="concept-website"
                className="overline block text-white/40"
              >
                {design.form.websiteLabel}
              </label>
              <input
                id="design-website"
                data-testid="design-website"
                type="url"
                value={form.website}
                onChange={(e) => update('website', e.target.value)}
                placeholder={design.form.websitePlaceholder}
                className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
              />
            </div>

            <div>
              <p className="overline text-white/40">{design.form.goalLabel}</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {design.form.goals.map((g) => {
                  const selected = form.goal === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      data-testid={`design-goal-${g.id}`}
                      onClick={() => update('goal', g.id as DesignGoalId)}
                      className={`border px-5 py-4 text-left transition-colors duration-300 ${
                        selected
                          ? 'border-brand-cyan bg-brand-navy-light'
                          : 'border-white/10 bg-transparent hover:border-white/30 hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className="block font-display text-lg text-white">
                        {g.label}
                      </span>
                      <span className="mt-1 block text-sm text-white/50">
                        {g.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <label
                  htmlFor="concept-name"
                  className="overline block text-white/40"
                >
                  {design.form.nameLabel}
                </label>
                <input
                  id="design-name"
                  data-testid="design-name"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder={design.form.namePlaceholder}
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
                />
              </div>
              <div>
                <label
                  htmlFor="design-email"
                  className="overline block text-white/40"
                >
                  {design.form.emailLabel}
                </label>
                <input
                  id="design-email"
                  data-testid="design-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder={design.form.emailPlaceholder}
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
                />
              </div>
            </div>

            <button
              type="submit"
              data-testid="design-submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-medium text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-brand-glow disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting
                ? design.form.submittingLabel
                : design.form.submitLabel}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
