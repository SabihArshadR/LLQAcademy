import Link from "next/link";
import StarMotif from "./StarMotif";
import { whatsappLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="lattice-wash text-cream-100">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <StarMotif className="h-7 w-7" tone="gold" />
              <span className="font-display text-xl">
                LLQ<span className="text-gold-300">Academy</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream-100/75">
              One-on-one online Quran classes with certified female teachers,
              built for students in the USA, UK, and Canada — flexible timings,
              real progress reports, and a free trial before you commit.
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-cream-100/80">
              <li><Link className="focus-ring hover:text-white" href="/courses">Courses</Link></li>
              <li><Link className="focus-ring hover:text-white" href="/about">About Us</Link></li>
              <li><Link className="focus-ring hover:text-white" href="/blog">Blog</Link></li>
              <li><Link className="focus-ring hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Talk to Us
            </h3>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-cream-100/80">
              <li>
                <a
                  className="focus-ring hover:text-white"
                  href={whatsappLink("Assalamu Alaikum! I have a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +92 326 5566969
                </a>
              </li>
              <li>Zoom · Skype · Google Meet</li>
              <li>Classes available around the clock</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-100/15 pt-6 font-body text-xs text-cream-100/60 md:flex-row">
          <p>© {new Date().getFullYear()} LLQAcademy. All rights reserved.</p>
          <p>Built with care, for students everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
