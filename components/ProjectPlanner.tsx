'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Check, Loader2, Mail } from 'lucide-react';
import {
  contact,
  getRecommendationId,
  type BudgetId,
  type NeedId,
  type PlannerAnswers,
  type TimelineId,
} from '@/content/contact';
import { SITE } from '@/content/site';
import { EASE } from '@/components/Reveal';

type Step = 'need' | 'timeline' | 'budget' | 'result' | 'email';

const STEPS: Step[] = ['need', 'timeline', 'budget'];

export function ProjectPlanner() {
  const [step, setStep] = useState<Step>('need');
  const [answers, setAnswers] = useState<PlannerAnswers>({
    need: null,
    timeline: null,
    budget: null,
  });
  const [emailForm, setEmailForm] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const stepIndex = STEPS.indexOf(step as (typeof STEPS)[number]);
  const question =
    step === 'need' || step === 'timeline' || step === 'budget'
      ? contact.planner.questions.find((q) => q.id === step)
      : null;

  const recommendationId = getRecommendationId(answers);
  const recommendation = contact.recommendations[recommendationId];

  const selectOption = (optionId: string) => {
    if (step === 'need') {
      setAnswers((a) => ({ ...a, need: optionId as NeedId }));
      setStep('timeline');
    } else if (step === 'timeline') {
      setAnswers((a) => ({ ...a, timeline: optionId as TimelineId }));
      setStep('budget');
    } else if (step === 'budget') {
      setAnswers((a) => ({ ...a, budget: optionId as BudgetId }));
      setStep('result');
    }
  };

  const goBack = () => {
    if (step === 'timeline') setStep('need');
    else if (step === 'budget') setStep('timeline');
    else if (step === 'result') setStep('budget');
    else if (step === 'email') setStep('result');
  };

  const restart = () => {
    setAnswers({ need: null, timeline: null, budget: null });
    setEmailForm({ name: '', email: '' });
    setEmailSent(false);
    setStep('need');
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailForm.name.trim() || !emailForm.email.includes('@')) {
      console.error(contact.emailCapture.validationMessage);
      return;
    }
    setSubmitting(true);
    try {
      console.log({
        ...emailForm,
        answers,
        recommendationId,
      });
      setEmailSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="project-planner" className="w-full">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="overline text-brand-cyan">{contact.planner.title}</p>
          {stepIndex >= 0 && (
            <p className="mt-3 text-sm text-white/45">
              {contact.planner.progressLabel} {stepIndex + 1} of {STEPS.length}
            </p>
          )}
        </div>
        {step !== 'need' && (
          <div className="flex gap-4">
            {(step === 'timeline' ||
              step === 'budget' ||
              step === 'result' ||
              step === 'email') && (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                data-testid="planner-back"
              >
                <ArrowLeft className="h-4 w-4" />
                {contact.planner.backLabel}
              </button>
            )}
            {(step === 'result' || step === 'email') && (
              <button
                type="button"
                onClick={restart}
                className="text-sm text-white/50 transition-colors hover:text-white"
                data-testid="planner-restart"
              >
                {contact.planner.restartLabel}
              </button>
            )}
          </div>
        )}
      </div>

      {stepIndex >= 0 && (
        <div className="mb-10 h-px w-full bg-white/10">
          <div
            className="h-px bg-brand-gradient transition-[width] duration-500"
            style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {question && (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              {question.prompt}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {question.options.map((opt) => {
                const selected =
                  answers[question.id as keyof PlannerAnswers] === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    data-testid={`planner-option-${opt.id}`}
                    onClick={() => selectOption(opt.id)}
                    className={`group border px-6 py-5 text-left transition-colors duration-300 ${
                      selected
                        ? 'border-brand-cyan bg-brand-navy-light'
                        : 'border-white/10 bg-transparent hover:border-white/30 hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className="block font-display text-xl text-white">
                      {opt.label}
                    </span>
                    <span className="mt-2 block text-sm text-white/50">
                      {opt.hint}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-8 text-sm text-white/40">
              <a
                href={`mailto:${SITE.email}`}
                className="link-underline text-white/55 hover:text-brand-cyan"
              >
                {contact.planner.skipToEmail}
              </a>
            </p>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            data-testid="planner-result"
          >
            <p className="overline text-brand-cyan">
              {recommendation.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              {recommendation.title}
            </h2>
            <p className="mt-3 font-display text-2xl text-brand-cyan">
              {recommendation.price}
            </p>
            <p className="mt-6 max-w-2xl text-lg text-white/60">
              {recommendation.summary}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {recommendation.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 border-b border-white/10 pb-3 text-white/75"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-cyan" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="overline text-white/40">
                  {recommendation.bookLabel}
                </p>
                <p className="mt-3 text-white/55">{contact.calendly.note}</p>
                <div className="mt-6 overflow-hidden rounded border border-white/10 bg-white">
                  <iframe
                    title={contact.calendly.embedTitle}
                    data-testid="calendly-embed"
                    src={`${contact.calendly.url}?embed_domain=localhost&embed_type=Inline`}
                    className="h-[680px] w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-white/10 bg-brand-navy-light p-8">
                  <Mail className="h-6 w-6 text-brand-cyan" strokeWidth={1.4} />
                  <h3 className="mt-5 font-display text-2xl">
                    {contact.emailCapture.title}
                  </h3>
                  <p className="mt-3 text-white/55">
                    {contact.emailCapture.body}
                  </p>
                  <button
                    type="button"
                    data-testid="planner-open-email"
                    onClick={() => {
                      setEmailSent(false);
                      setStep('email');
                    }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                  >
                    {recommendation.emailLabel}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'email' && (
          <motion.div
            key="email"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            data-testid="planner-email"
            className="max-w-xl"
          >
            {emailSent ? (
              <div>
                <p className="overline text-brand-cyan">Sent</p>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  {contact.emailCapture.successTitle}
                </h2>
                <p className="mt-5 text-lg text-white/60">
                  {contact.emailCapture.successBody}
                </p>
                <button
                  type="button"
                  onClick={() => setStep('result')}
                  className="mt-8 text-sm text-brand-cyan hover:underline"
                >
                  Back to booking
                </button>
              </div>
            ) : (
              <form onSubmit={submitEmail} className="space-y-8">
                <div>
                  <p className="overline text-brand-cyan">
                    {recommendation.title}
                  </p>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl">
                    {contact.emailCapture.title}
                  </h2>
                  <p className="mt-4 text-white/60">
                    {contact.emailCapture.body}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="planner-name"
                    className="overline block text-white/40"
                  >
                    {contact.emailCapture.nameLabel}
                  </label>
                  <input
                    id="planner-name"
                    data-testid="planner-name"
                    required
                    value={emailForm.name}
                    onChange={(e) =>
                      setEmailForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder={contact.emailCapture.namePlaceholder}
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
                  />
                </div>
                <div>
                  <label
                    htmlFor="planner-email"
                    className="overline block text-white/40"
                  >
                    {contact.emailCapture.emailLabel}
                  </label>
                  <input
                    id="planner-email"
                    data-testid="planner-email"
                    type="email"
                    required
                    value={emailForm.email}
                    onChange={(e) =>
                      setEmailForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder={contact.emailCapture.emailPlaceholder}
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-lg text-white placeholder-white/25 outline-none transition-colors focus:border-brand-cyan"
                  />
                </div>
                <button
                  type="submit"
                  data-testid="planner-email-submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-medium text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-brand-glow disabled:opacity-60"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {submitting
                    ? contact.emailCapture.submittingLabel
                    : contact.emailCapture.submitLabel}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
