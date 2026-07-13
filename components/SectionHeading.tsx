type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      <p
        className={`font-body text-xs font-semibold uppercase tracking-[0.2em] ${
          isDark ? "text-gold-300" : "text-gold-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl leading-tight text-balance md:text-4xl ${
          isDark ? "text-cream-100" : "text-green-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-body text-base leading-relaxed ${
            isDark ? "text-cream-100/80" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
