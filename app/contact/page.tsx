import type { Metadata } from "next";
import Button from "@/components/Button";
import StarMotif from "@/components/StarMotif";
import { whatsappLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — LLQAcademy",
  description: "Message LLQAcademy on WhatsApp to book a free trial class or ask a question.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Get in Touch
          </p>
          <h1 className="mt-3 font-display text-4xl text-balance text-green-950 md:text-5xl">
            Let&rsquo;s find your child&rsquo;s first class
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-soft">
            Send a message on WhatsApp with a little about your student — age,
            experience level, and preferred time zone — and a teacher will
            reply within a day with times that work.
          </p>

          <div className="mt-8 space-y-5 border-t border-green-900/10 pt-6">
            <div className="flex items-center gap-3">
              <StarMotif className="h-5 w-5 shrink-0" tone="green" />
              <span className="font-body text-sm text-ink">
                WhatsApp: <span className="font-semibold">+92 333 4549697</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <StarMotif className="h-5 w-5 shrink-0" tone="green" />
              <span className="font-body text-sm text-ink">Classes on Zoom, Skype, and Google Meet</span>
            </div>
            <div className="flex items-center gap-3">
              <StarMotif className="h-5 w-5 shrink-0" tone="green" />
              <span className="font-body text-sm text-ink">Replies within 24 hours, every day of the week</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl2 border border-green-900/10 bg-surface p-7 shadow-card md:p-8">
          <h2 className="font-display text-xl text-green-950">Tell us about your student</h2>
          <p className="mt-2 font-body text-sm text-ink-soft">
            This opens WhatsApp with your details filled in — nothing is sent
            until you press send there.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="font-body text-xs font-semibold text-ink-soft" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Sarah Ahmed"
                className="focus-ring mt-1.5 w-full rounded-lg border border-green-900/15 bg-bg px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink-soft/50"
              />
            </div>
            <div>
              <label className="font-body text-xs font-semibold text-ink-soft" htmlFor="course">
                Course of interest
              </label>
              <input
                id="course"
                type="text"
                placeholder="Noorani Qaida, Hifz, Tajweed…"
                className="focus-ring mt-1.5 w-full rounded-lg border border-green-900/15 bg-bg px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink-soft/50"
              />
            </div>
            <div>
              <label className="font-body text-xs font-semibold text-ink-soft" htmlFor="timezone">
                Time zone
              </label>
              <input
                id="timezone"
                type="text"
                placeholder="EST, GMT, PST…"
                className="focus-ring mt-1.5 w-full rounded-lg border border-green-900/15 bg-bg px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink-soft/50"
              />
            </div>

            <Button
              href={whatsappLink(
                "Assalamu Alaikum! I'd like to book a free trial class.\n\nName: \nStudent age: \nCourse of interest: \nTime zone: \nPreferred days: "
              )}
              external
              variant="primary"
              className="w-full"
            >
              Continue on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
