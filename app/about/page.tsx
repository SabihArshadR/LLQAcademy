import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StarMotif from "@/components/StarMotif";
import FinalCta from "@/components/FinalCta";
import { whyChooseUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — LLQAcademy",
  description:
    "Meet LLQAcademy: certified, English-speaking female Quran teachers serving students in the USA, UK, and Canada.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 pt-14 pb-4 text-center md:pt-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          About LLQAcademy
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl text-balance text-green-950 md:text-5xl">
          Teachers your family can actually trust
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-soft md:text-lg">
          LLQAcademy began with a simple frustration: too many online Quran
          platforms hire whoever is available, not whoever is qualified. We
          built a smaller academy on purpose — every teacher is certified,
          fluent in English, and chosen for how she teaches, not just what she
          knows.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-xl2 border border-green-900/10 bg-surface p-8 shadow-card">
            <StarMotif className="h-8 w-8" tone="gold" />
            <h2 className="mt-4 font-display text-2xl text-green-950">Our Teachers</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
              Every tutor at LLQAcademy is a certified, English-speaking
              woman with formal training in Tajweed and, for our advanced
              tracks, Tafsir and Hadith studies. We prioritize teachers who
              have taught children before — patience is a qualification here,
              not a nice-to-have.
            </p>
          </div>
          <div className="rounded-xl2 border border-green-900/10 bg-surface p-8 shadow-card">
            <StarMotif className="h-8 w-8" tone="gold" />
            <h2 className="mt-4 font-display text-2xl text-green-950">Our Students</h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
              We teach families across the USA, UK, and Canada, from
              five-year-olds starting Noorani Qaida to adults returning to the
              Quran after years away. Every class is one-on-one, so the pace
              is always set by the student, never the syllabus.
            </p>
          </div>
        </div>
      </section>

      <section className="lattice-wash">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="What We Promise"
            title="The standards behind every class"
            tone="dark"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl2 border border-cream-100/15 bg-cream-100/5 p-6"
              >
                <h3 className="font-display text-lg text-cream-100">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-cream-100/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Meet a teacher before you enroll"
        description="Every free trial is with a real teacher, in a real class — the same person your child would learn with every week."
      />
    </>
  );
}
