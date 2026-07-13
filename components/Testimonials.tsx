import SectionHeading from "./SectionHeading";
import StarMotif from "./StarMotif";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Parents &amp; Students"
        title="Reviews from families across three continents"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-xl2 border border-green-900/10 bg-surface p-7 shadow-card"
          >
            <StarMotif className="h-6 w-6" tone="gold" />
            <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-green-950">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-green-900/10 pt-4 font-body text-sm">
              <span className="font-semibold text-ink">{t.name}</span>
              <span className="text-ink-soft"> — {t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
