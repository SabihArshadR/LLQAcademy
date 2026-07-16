import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import StarMotif from "@/components/StarMotif";
import { teachers } from "@/lib/data";

export default function TeachersSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-16 border-t border-green-900/10">
      <SectionHeading
        eyebrow="Our Faculty"
        title="Meet Our Certified Teachers"
        description="Qualified female teachers with expertise in Tajweed, Tafsir, and Islamic studies — dedicated to helping you and your family connect with the Quran."
        align="center"
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.slice(0, 3).map((teacher, index) => (
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
              <h3 className="mt-2 font-display text-xl text-green-950">
                {teacher.name}
              </h3>
              <p className="mt-1 font-body text-sm font-medium text-green-700">
                {teacher.expertise}
              </p>

              {teacher.experience && (
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft line-clamp-2">
                  {teacher.experience}
                </p>
              )}

              <div className="mt-4">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-ink-soft">
                  Key Certifications
                </p>
                <ul className="mt-2 space-y-1">
                  {teacher.certifications.slice(0, 2).map((cert, certIndex) => (
                    <li
                      key={certIndex}
                      className="flex items-start gap-2 font-body text-xs text-ink-soft"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      {cert}
                    </li>
                  ))}
                  {teacher.certifications.length > 2 && (
                    <li className="font-body text-xs text-ink-soft/70">
                      +{teacher.certifications.length - 2} more certifications
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/teachers" variant="primary">
          View All Teachers
        </Button>
      </div>
    </section>
  );
}
