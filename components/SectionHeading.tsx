type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-9 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`text-3xl font-black leading-tight md:text-5xl ${
          inverse ? "text-white" : "text-pillar-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-lg ${inverse ? "text-blue-100" : "text-pillar-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
