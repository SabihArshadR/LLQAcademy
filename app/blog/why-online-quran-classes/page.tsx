import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { blogPosts } from "@/lib/data";

const post = blogPosts.find((p) => p.slug === "why-online-quran-classes")!;

export const metadata: Metadata = {
  title: `${post.title} — LLQAcademy Blog`,
  description: post.excerpt,
};

export default function Post() {
  return (
    <>
      <article className="mx-auto max-w-2xl px-5 py-16 md:py-24">
        <Link
          href="/blog"
          className="focus-ring font-body text-sm font-semibold text-green-900 hover:underline"
        >
          ← Back to Blog
        </Link>

        <div className="mt-6 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-wide text-gold-600">
          <span>{post.category}</span>
          <span className="text-ink-soft/50">·</span>
          <span className="font-normal normal-case tracking-normal text-ink-soft">{post.date}</span>
          <span className="text-ink-soft/50">·</span>
          <span className="font-normal normal-case tracking-normal text-ink-soft">{post.readTime}</span>
        </div>

        <h1 className="mt-4 font-display text-3xl text-balance text-green-950 md:text-4xl">
          {post.title}
        </h1>

        <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-ink">
          <p>
            Parents often start looking into online classes reluctantly, as a
            second choice after a local teacher fell through. Most are
            surprised by how quickly that changes once classes actually
            start.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">
            Attention a group class can&rsquo;t give
          </h2>
          <p>
            In a shared class, a teacher&rsquo;s attention is split five or
            six ways. One-on-one online classes remove that math entirely —
            every minute of the session belongs to one student, which means
            mistakes get corrected the moment they happen, not weeks later.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">A record you can actually see</h2>
          <p>
            A written progress report after every few classes tells you
            exactly what was covered, what needs more work, and what&rsquo;s
            ready to move on. Compare that to picking up a child from a
            mosque class and asking &ldquo;how was it&rdquo; — the answer is
            almost always &ldquo;fine.&rdquo;
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">
            A schedule built around your life
          </h2>
          <p>
            Time zones stop being a problem when a teacher is available at 7
            a.m. and 9 p.m. alike. Families juggling school runs, work shifts,
            and multiple children finally get to pick a time that fits them,
            instead of rearranging their week around one fixed class slot.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">
            What parents usually worry about first
          </h2>
          <p>
            The most common concern is screen time replacing real connection
            with a teacher. In practice, a webcam and a shared reading app
            close that gap faster than expected — a teacher can still point,
            correct, and encourage in real time, just through a different
            window than a classroom door.
          </p>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
