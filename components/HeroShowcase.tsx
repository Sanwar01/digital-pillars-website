export function HeroShowcase() {
  return (
    <div className="relative min-h-[370px] md:min-h-[510px]" aria-label="Digital Pillars service preview">
      <div className="absolute right-[4%] top-[3%] w-56 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
        <strong className="text-sm text-pillar-ink">AI Assistant</strong>
        <p className="mt-1 text-xs text-pillar-muted">Hi. How can we help you today?</p>
        <span className="absolute -bottom-5 -right-4 grid h-14 w-14 place-items-center rounded-2xl border-[6px] border-blue-50 bg-pillar-blue font-black text-white">
          AI
        </span>
      </div>

      <div className="absolute left-0 right-[6%] top-[18%] overflow-hidden rounded-2xl border-[10px] border-slate-900 bg-white shadow-[0_35px_80px_rgba(0,0,0,0.45)] md:left-[8%] md:right-[8%]">
        <div className="h-9 border-b border-slate-200 bg-slate-100" />
        <div className="min-h-36 bg-gradient-to-r from-navy-950/90 to-blue-900/50 p-5 text-white">
          <span className="block text-xs text-blue-200">Website redesign</span>
          <strong className="mt-2 block max-w-xs text-xl leading-tight">
            Trusted advice. Clear enquiries. Real results.
          </strong>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          <span className="h-14 rounded-lg bg-slate-100" />
          <span className="h-14 rounded-lg bg-slate-100" />
          <span className="h-14 rounded-lg bg-slate-100" />
        </div>
      </div>

      <div className="absolute left-0 top-[38%] hidden w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:block">
        <strong className="text-sm text-pillar-ink">New Lead Captured</strong>
        <p className="mt-1 text-xs text-pillar-muted">
          Sarah Johnson
          <br />
          Interested in local services
        </p>
        <span className="mt-3 inline-flex rounded-full bg-emerald-100 px-2 py-1 text-xs font-black text-emerald-700">
          New enquiry
        </span>
      </div>

      <div className="absolute right-0 top-[30%] w-28 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl md:w-36">
        <div className="min-h-56 rounded-xl bg-white">
          <strong className="mb-3 block text-xs text-pillar-ink">Book Appointment</strong>
          <div className="grid grid-cols-3 gap-1.5" aria-hidden="true">
            {Array.from({ length: 9 }, (_, index) => (
              <span
                key={index}
                className={`h-6 rounded ${index === 4 ? "bg-pillar-blue" : "bg-slate-100"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[5%] left-[4%] right-[4%] grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-center text-xs font-black text-pillar-text shadow-2xl md:left-[16%] md:right-[18%] md:grid-cols-4">
        <span>New Lead</span>
        <span>Send Email</span>
        <span>Add to CRM</span>
        <span>Notify Team</span>
      </div>
    </div>
  );
}
