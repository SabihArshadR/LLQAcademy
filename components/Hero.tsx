import Button from "./Button";
import HeroQuote from "./HeroQuote";
import StarMotif from "./StarMotif";
import { whatsappLink } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-green-900/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="relative">
          <StarMotif
            className="pointer-events-none absolute -left-8 -top-10 h-20 w-20 opacity-40 md:-left-12 md:-top-14 md:h-28 md:w-28"
            tone="gold"
          />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Online Quran Academy · Kids &amp; Adults
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-balance text-green-950 md:text-5xl lg:text-[3.4rem]">
            Learn Quran Online With Certified Female Teachers
          </h1>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-ink-soft md:text-lg">
            {/* One-on-one classes, group classes, flexible timings across every time zone, and
            three free trial sessions before you spend a single dollar — for
            kids and adults alike. */}
            Experience personalized one-on-one or interactive group classes 
            with certified female teachers. We offer flexible schedules for
           students worldwide and 3 free trial classes before you enroll.
          </p>
          <HeroQuote/>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink("Assalamu Alaikum! I'd like to start a free trial class.")}
              external
              variant="primary"
            >
              Start Free Trial
            </Button>
            <Button
              href={whatsappLink("Assalamu Alaikum! I'd like to know more about your classes.")}
              external
              variant="secondary"
            >
              WhatsApp Now
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-green-900/10 pt-6">
            <div>
              <dt className="font-display text-2xl text-green-950">1:1</dt>
              <dd className="font-body text-xs text-ink-soft">Private classes</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-green-950">24/7</dt>
              <dd className="font-body text-xs text-ink-soft">Class timings</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-green-950">3-day</dt>
              <dd className="font-body text-xs text-ink-soft">Free trial</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="lattice-wash relative aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-soft md:aspect-[3/4]">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-xs rounded-xl border border-cream-100/25 bg-green-950/40 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-cream-100/20 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 font-body text-[11px] text-cream-100/70">
                    Live Class — Zoom
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gold-500/80" />
                    <div>
                      <p className="font-body text-xs font-semibold text-cream-100">
                        Ustadha Amina
                      </p>
                      <p className="font-body text-[11px] text-cream-100/60">Tajweed Teacher</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-green-500/70" />
                    <div>
                      <p className="font-body text-xs font-semibold text-cream-100">
                        Zainab, age 9
                      </p>
                      <p className="font-body text-[11px] text-cream-100/60">Noorani Qaida</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 rounded-lg bg-cream-100/10 p-3">
                  <p className="font-display text-sm italic text-cream-100/90">
                    &ldquo;Ma sha Allah, beautiful recitation today.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
