import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StarMotif from "@/components/StarMotif";
import FinalCta from "@/components/FinalCta";
import { teachers, additionalTeachers } from "@/lib/data";
import { FemaleTeacherIcon } from "./Femaleicon";



export const metadata: Metadata = {
  title: "Our Teachers — LLQAcademy",
  description:
    "Meet our certified female Quran teachers. Qualified in Tajweed, Tafsir, and Islamic studies with years of experience teaching women and children.",
};

export default function TeachersPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-4 text-center md:pt-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          Our Faculty
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl text-balance text-green-950 md:text-5xl">
          Meet Our Certified Teachers
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
          Qualified female teachers with expertise in Tajweed, Tafsir, and Islamic
          studies — dedicated to helping you and your family connect with the Quran.
        </p>
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
                  {/* {teacher.name} */}
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

      <FinalCta />
    </>
  );
}
