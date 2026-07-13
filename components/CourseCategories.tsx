import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { courseTracks, courses } from "@/lib/data";

export default function CourseCategories() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Curriculum"
        title="A clear path, from first letter to full understanding"
        description="Every student starts at the track that matches where they are today — not where a generic syllabus assumes they should be."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {courseTracks.map((track) => {
          const trackCourses = courses.filter((c) => c.track === track.key);
          return (
            <div
              key={track.key}
              className="flex flex-col rounded-xl2 border border-green-900/10 bg-surface p-7 shadow-card"
            >
              <h3 className="font-display text-xl text-green-950">{track.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
                {track.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-green-900/10 pt-5">
                {trackCourses.map((c) => (
                  <li key={c.slug} className="flex items-center justify-between gap-3">
                    <span className="font-body text-sm text-ink">{c.name}</span>
                    <span className="whitespace-nowrap font-body text-xs font-semibold text-gold-600">
                      {c.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/courses"
          className="focus-ring font-body text-sm font-semibold text-green-900 underline-offset-4 hover:underline"
        >
          See full curriculum &amp; fees →
        </Link>
      </div>
    </section>
  );
}
