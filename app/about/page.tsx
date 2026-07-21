import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StarMotif from "@/components/StarMotif";
import FinalCta from "@/components/FinalCta";
import { whyChooseUs, teachers, additionalTeachers } from "@/lib/data";
import { FemaleTeacherIcon } from "@/components/TeachersSection";

export const metadata: Metadata = {
  title: "About Us — LLQAcademy",
  description:
    "Meet LLQAcademy: certified, English-speaking female Quran teachers serving students in the USA, UK, and Canada.",
};

export default function AboutPage() {
  return (
    <>


      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-50">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">
            About LLQAcademy
          </p>

          <h1 className="mt-4 font-display text-4xl text-green-950 md:text-5xl">
            About LLQAcademy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-ink-soft">
            A premier online institution preserving the authentic tradition of
            Quranic education while embracing innovative teaching methodologies
            for the digital age.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl2 border border-green-900/10 bg-surface p-8 shadow-card">
            <StarMotif className="h-8 w-8" tone="gold" />

            <h2 className="mt-4 font-display text-2xl text-green-950">
              Our Mission
            </h2>

            <p className="mt-4 font-body leading-relaxed text-ink-soft text-sm">
              Our mission is to provide authentic, accessible Quranic education
              that combines traditional Islamic scholarship with modern
              pedagogical approaches. We aim to nurture a generation deeply
              connected to the Quran through proper recitation, understanding,
              and implementation.
            </p>
          </div>

          <div className="rounded-xl2 border border-green-900/10 bg-surface p-8 shadow-card">
            <StarMotif className="h-8 w-8" tone="gold" />

            <h2 className="mt-4 font-display text-2xl text-green-950">
              Why Choose Us
            </h2>

            <p className="mt-4 font-body leading-relaxed text-ink-soft text-sm">
              We bridge the gap between classical Islamic education and
              contemporary learning needs with our unique approach.
            </p>
          </div>
        </div>
      </section>

      {/* Existing Introduction */}
      {/* <section className="mx-auto max-w-5xl px-5 pb-16">
        <SectionHeading
          eyebrow="About LLQAcademy"
          title="Teachers your family can actually trust"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center font-body leading-relaxed text-ink-soft">
          LLQAcademy began with a simple frustration: too many online Quran
          platforms hire whoever is available, not whoever is qualified. We
          built a smaller academy on purpose — every teacher is certified,
          fluent in English, and chosen for how she teaches, not just what she
          knows.
        </p>
      </section> */}

      {/* Everything below remains exactly the same */}
      <section className="mx-auto max-w-4xl px-5 pt-14 pb-4 text-center md:pt-20">
        {/* <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          About LLQAcademy
        </p> */}
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl text-balance text-green-950 md:text-5xl">
          Teachers your family can actually trust
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-soft md:text-base">
          LLQAcademy began with a simple frustration: too many online Quran
          platforms hire whoever is available, not whoever is qualified. We
          built a smaller academy on purpose — mostly teacher is certified,
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
              We teach families all over the world from
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

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <SectionHeading
          eyebrow="Lead Teachers"
          title="Our Senior Faculty"
          description="Experienced educators with advanced certifications and years of teaching expertise."
          align="left"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className="relative rounded-xl2 border border-green-900/10 bg-surface p-6 shadow-card"
            >
              <div className="absolute -top-3 -left-3 opacity-20">
                <StarMotif className="h-8 w-8" tone="gold" />
              </div>
              
              <div className="relative">
                {teacher.title && (
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {teacher.title}
                  </p>
                )}
                <h3 className="mt-2 font-display text-2xl text-green-950">
                  <div className="flex items-center gap-2">
                    <FemaleTeacherIcon className="h-7 w-7 text-emerald-600" />
                    <span>{teacher.name}</span>
                  </div>
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-green-700">
                  {teacher.expertise}
                </p>

                {teacher.experience && (
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                    {teacher.experience}
                  </p>
                )}

                <div className="mt-4 space-y-2">
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-ink-soft">
                    Certifications
                  </p>
                  <ul className="space-y-1.5">
                    {teacher.certifications.map((cert, certIndex) => (
                      <li
                        key={certIndex}
                        className="flex items-start gap-2 font-body text-sm text-ink-soft"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16 border-t border-green-900/10">
        <SectionHeading
          eyebrow="Teaching Team"
          title="All Our Teachers"
          description="A dedicated team of qualified female teachers ready to guide your Quranic journey."
          align="left"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {additionalTeachers.map((name, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-xl border border-green-900/10 bg-surface p-4 text-center shadow-sm transition-shadow hover:shadow-card"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="font-display text-sm text-green-700">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="font-body text-sm font-medium text-green-950">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCta
        title="Meet a teacher before you enroll"
        description="Every free trial is with a real teacher, in a real class — the same person your child would learn with every week."
      />
    </>
  );
}
