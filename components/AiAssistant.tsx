"use client";

import { FormEvent, useState } from "react";

export function AiAssistant() {
  const [result, setResult] = useState(
    "Enter your numbers to get a practical starting point.",
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiries = Number(formData.get("enquiries")) || 0;
    const adminHours = Number(formData.get("admin-hours")) || 0;
    const responseTime = String(formData.get("response-time"));

    if (responseTime === "slow" || adminHours >= 8) {
      setResult(
        "Start with enquiry triage and follow-up reminders. Your main opportunity is speed and consistency after leads arrive.",
      );
      return;
    }

    if (enquiries < 25) {
      setResult(
        "Start with your website pages and enquiry paths. The first priority is increasing qualified enquiry volume.",
      );
      return;
    }

    if (enquiries >= 60) {
      setResult(
        "Start with lead qualification and routing. You likely have enough volume to benefit from a structured enquiry workflow.",
      );
      return;
    }

    setResult(
      "Start with a website and enquiry audit so the highest-friction step is clear.",
    );
  }

  return (
    <form className="card p-6 md:p-8" onSubmit={onSubmit}>
      <label className="mt-0 block font-extrabold text-pillar-ink" htmlFor="enquiries">
        Approximate enquiries per month
      </label>
      <input
        className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
        id="enquiries"
        name="enquiries"
        type="number"
        min="0"
        defaultValue="40"
      />
      <label className="mt-4 block font-extrabold text-pillar-ink" htmlFor="response-time">
        Typical first response time
      </label>
      <select
        className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
        id="response-time"
        name="response-time"
        defaultValue="same-day"
      >
        <option value="fast">Under 1 hour</option>
        <option value="same-day">Same day</option>
        <option value="slow">Next day or later</option>
      </select>
      <label className="mt-4 block font-extrabold text-pillar-ink" htmlFor="admin-hours">
        Weekly admin hours spent on lead handling
      </label>
      <input
        className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
        id="admin-hours"
        name="admin-hours"
        type="number"
        min="0"
        defaultValue="6"
      />
      <button className="button button-primary mt-5 w-full" type="submit">
        Get suggestion
      </button>
      <output
        className="mt-4 block rounded-lg bg-emerald-50 p-4 font-bold text-emerald-800"
        aria-live="polite"
      >
        {result}
      </output>
    </form>
  );
}
