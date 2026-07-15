import { SERVICES, MARQUEE_EXTRA } from '@/content/site';

const items = [...SERVICES.map((s) => s.title), ...MARQUEE_EXTRA];

type MarqueeProps = {
  testId?: string;
};

export function Marquee({ testId }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div
      data-testid={testId}
      className="relative flex overflow-hidden border-y border-white/10 bg-brand-navy py-8"
    >
      <div className="animate-marquee">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-10 text-3xl font-light text-white/50 md:text-4xl"
          >
            {t}
            <span className="text-brand-cyan">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
