export function ContactForm() {
  return (
    <form
      className="card p-6 md:p-8"
      action="mailto:hello@digitalpillars.co.uk"
      method="post"
      encType="text/plain"
    >
      <p className="mb-1 font-bold text-pillar-muted">Fields marked with * are required.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block font-extrabold text-pillar-ink" htmlFor="name">
            Name *
          </label>
          <input
            className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className="block font-extrabold text-pillar-ink" htmlFor="email">
            Email *
          </label>
          <input
            className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <label className="mt-4 block font-extrabold text-pillar-ink" htmlFor="business">
        Business name
      </label>
      <input
        className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
        id="business"
        name="business"
        autoComplete="organization"
      />
      <label className="mt-4 block font-extrabold text-pillar-ink" htmlFor="website">
        Website
      </label>
      <input
        className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
        id="website"
        name="website"
        type="url"
        placeholder="https://example.co.uk"
      />
      <label className="mt-4 block font-extrabold text-pillar-ink" htmlFor="interest">
        What do you need help with?
      </label>
      <select
        className="mt-2 min-h-12 w-full rounded-lg border border-slate-500 px-3"
        id="interest"
        name="interest"
      >
        <option>Website and conversion</option>
        <option>Software or web application</option>
        <option>AI enquiry automation</option>
        <option>Consulting or strategy</option>
        <option>Not sure yet</option>
      </select>
      <label className="mt-4 block font-extrabold text-pillar-ink" htmlFor="message">
        What is the main challenge? *
      </label>
      <textarea
        className="mt-2 w-full rounded-lg border border-slate-500 px-3 py-3"
        id="message"
        name="message"
        rows={6}
        required
      />
      <button className="button button-primary mt-5 w-full" type="submit">
        Send enquiry
      </button>
      <p className="mt-4 rounded-lg bg-emerald-50 p-4 font-bold text-emerald-800">
        This opens your email app so you can review the message before sending. A CRM
        or hosted form endpoint can be connected before launch.
      </p>
    </form>
  );
}
