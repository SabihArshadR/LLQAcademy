import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FinalCta from "@/components/FinalCta";
import { courseTracks, courses, whatsappLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses & Fees — LLQAcademy",
  description:
    "Noorani Qaida, Tajweed, Hifz, Tafsir, and kids' courses with clear USD pricing. One-on-one online Quran classes.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-4 text-center md:pt-20">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          Curriculum &amp; Fees
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl text-balance text-green-950 md:text-5xl">
          Every course, one clear price
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
          Fair fee structure for all students from all over the world, one-on-one sessions, and a teacher who stays
          with your child from their first letter to their last surah.
        </p>
      </section>

      {courseTracks.map((track, i) => (
        <section
          key={track.key}
          className={`mx-auto max-w-6xl px-5 py-14 md:py-16 ${i !== 0 ? "border-t border-green-900/10" : ""}`}
        >
          <SectionHeading
            eyebrow={`Track ${i + 1}`}
            title={track.title}
            description={track.description}
            align="left"
          />

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {courses
              .filter((c) => c.track === track.key)
              .map((course) => (
                <div
                  key={course.slug}
                  className="flex flex-col justify-between rounded-xl2 border border-green-900/10 bg-surface p-6 shadow-card overflow-hidden"
                >
                  {course.image && (
                    <div className="relative h-60 w-full overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg text-green-950">{course.name}</h3>
                      {course.level && (
                        <span className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 font-body text-[11px] font-semibold text-green-700">
                          {course.level}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
                      {course.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-green-900/10 pt-4">
                    <div>
                      <p className="font-display text-xl text-green-950">{course.price}</p>
                      <p className="font-body text-xs text-ink-soft">{course.duration}</p>
                    </div>
                    <Button
                      href={whatsappLink(`Assalamu Alaikum! I'd like to enroll in ${course.name}.`)}
                      external
                      variant="ghost"
                      className="!px-4 !py-2 !text-xs"
                    >
                      Enroll
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}

      <FinalCta />
    </>
  );
}
