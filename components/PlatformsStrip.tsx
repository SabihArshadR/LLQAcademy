import { platforms } from "@/lib/data";

export default function PlatformsStrip() {
  return (
    <section className="border-y border-green-900/10 bg-cream-100/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-5 py-8 text-center sm:flex-row sm:gap-8">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Classes held over
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {platforms.map((p) => (
            <span key={p} className="font-display text-lg text-green-950">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
