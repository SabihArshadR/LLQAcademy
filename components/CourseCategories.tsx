"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { courseTracks, courses } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function CourseCategories() {
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});

  const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
  },
  [
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  ]
);

const scrollPrev = () => emblaApi?.scrollPrev();

const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices((prev) => {
        const newIndices = { ...prev };
        courseTracks.forEach((track) => {
          const currentIndex = prev[track.key] || 0;
          newIndices[track.key] = (currentIndex + 1) % track.images.length;
        });
        return newIndices;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Curriculum"
        title="A clear path, from first letter to full understanding"
        description="Every student starts at the track that matches where they are today — not where a generic syllabus assumes they should be."
      />

      {/* <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {courseTracks.map((track) => {
          const trackCourses = courses.filter((c) => c.track === track.key);
          const currentImageIndex = currentImageIndices[track.key] || 0;
          const currentImage = track.images[currentImageIndex];

          return (
            <div
              key={track.key}
              className="flex flex-col overflow-hidden rounded-xl2 border border-green-900/10 bg-surface shadow-card"
            >
              {currentImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={currentImage}
                    alt={track.title}
                    className="h-full w-full object-cover transition-opacity duration-300"
                  />
                </div>
              )}
              <div className="p-7">
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
            </div>
          );
        })}
      </div> */}

      <div className="relative mt-14">

  {/* Left */}
  <button
    onClick={scrollPrev}
    className="absolute left-0 top-1/2 z-20 -translate-x-5 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
  >
    <ChevronLeft className="h-6 w-6" />
  </button>

  {/* Right */}
  <button
    onClick={scrollNext}
    className="absolute right-0 top-1/2 z-20 translate-x-5 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:scale-110"
  >
    <ChevronRight className="h-6 w-6" />
  </button>

  <div className="overflow-hidden" ref={emblaRef}>
    <div className="flex">
      {courseTracks.map((track) => {
        const trackCourses = courses.filter(
          (c) => c.track === track.key
        );

        const currentImageIndex =
          currentImageIndices[track.key] || 0;

        const currentImage =
          track.images[currentImageIndex];

        return (
          <div
            key={track.key}
            className="
              min-w-0
              flex-[0_0_100%]
              md:flex-[0_0_50%]
              lg:flex-[0_0_33.333%]
              px-3
            "
          >
            <div className="flex h-full flex-col overflow-hidden rounded-xl2 border border-green-900/10 bg-surface shadow-card">

              {currentImage && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={currentImage}
                    alt={track.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl text-green-950">
                  {track.title}
                </h3>

                <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
                  {track.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-green-900/10 pt-5">
                  {trackCourses.map((c) => (
                    <li
                      key={c.slug}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="font-body text-sm text-ink">
                        {c.name}
                      </span>

                      <span className="whitespace-nowrap font-body text-xs font-semibold text-gold-600">
                        {c.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  </div>

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
