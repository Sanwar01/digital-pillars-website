'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { CtaButton } from '@/components/CtaButton';
import { EASE } from '@/components/Reveal';
import {
  concept,
  type ConceptGoalId,
  type ConceptRequest,
} from '@/content/concept';

export function ConceptRequestForm() {
  const [form, setForm] = useState<ConceptRequest>({
    business: '',
    website: '',
    goal: null,
    name: '',
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: keyof ConceptRequest, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.business.trim() ||
      !form.name.trim() ||
      !form.email.includes('@')
    ) {
      console.error(concept.form.validationMessage);
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
    <div data-testid="concept-request-form" className="w-full">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            data-testid="concept-success"
          >
            <p className="overline text-brand-cyan">Sent</p>
            <h3 className="mt-4 font-display text-3xl md:text-4xl">
              {concept.form.successTitle}
            </h3>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              {concept.form.successBody}
            </p>
            <div className="mt-10">
              <CtaButton
                href={concept.form.successCtaHref}
                testId="concept-success-book-call"
              >
                {concept.form.successCtaLabel}
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
                htmlFor="concept-business"
                className="overline block text-white/40"
              >
                {concept.form.businessLabel}
              </label>
              <input
                id="concept-business"
                data-testid="concept-business"
                required
                value={form.business}
                onChange={(e) => update('business', e.target.value)}
                placeholder={concept.form.businessPlaceholder}
                className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
              />
            </div>

            <div>
              <label
                htmlFor="concept-website"
                className="overline block text-white/40"
              >
                {concept.form.websiteLabel}
              </label>
              <input
                id="concept-website"
                data-testid="concept-website"
                type="url"
                value={form.website}
                onChange={(e) => update('website', e.target.value)}
                placeholder={concept.form.websitePlaceholder}
                className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
              />
            </div>

            <div>
              <p className="overline text-white/40">{concept.form.goalLabel}</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {concept.form.goals.map((g) => {
                  const selected = form.goal === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      data-testid={`concept-goal-${g.id}`}
                      onClick={() => update('goal', g.id as ConceptGoalId)}
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
                  {concept.form.nameLabel}
                </label>
                <input
                  id="concept-name"
                  data-testid="concept-name"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder={concept.form.namePlaceholder}
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
                />
              </div>
              <div>
                <label
                  htmlFor="concept-email"
                  className="overline block text-white/40"
                >
                  {concept.form.emailLabel}
                </label>
                <input
                  id="concept-email"
                  data-testid="concept-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder={concept.form.emailPlaceholder}
                  className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
                />
              </div>
            </div>

            <button
              type="submit"
              data-testid="concept-submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-medium text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-brand-glow disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting
                ? concept.form.submittingLabel
                : concept.form.submitLabel}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
