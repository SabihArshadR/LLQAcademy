import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { blogPosts } from "@/lib/data";

const post = blogPosts.find((p) => p.slug === "islamic-parenting-tips")!;

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
            Children rarely fall in love with the Quran through obligation
            alone. The families who raise genuinely enthusiastic readers tend
            to share a few small, repeatable habits — none of which require a
            complete lifestyle overhaul.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">Make the story land before the rule</h2>
          <p>
            A child who hears the story behind a surah before memorizing it
            remembers both the words and why they matter. Five minutes of
            context turns memorization from a task into something closer to a
            favorite bedtime story.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">Protect a fixed, short time</h2>
          <p>
            Fifteen focused minutes at the same time every day beats an hour
            that happens whenever it happens. Consistency teaches a child
            that Quran time is simply part of the day, not a special event to
            resist.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">Let progress be visible</h2>
          <p>
            A simple chart, a sticker, or just saying out loud &ldquo;that&rsquo;s
            three surahs now&rdquo; gives a child something to be proud of.
            Progress that only lives in a teacher&rsquo;s notes never feels
            real to the student doing the work.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">Recite together, not just apart</h2>
          <p>
            Children copy what they see modeled. A parent who recites
            alongside them, even imperfectly, teaches more than any
            instruction to &ldquo;go practice&rdquo; alone in another room.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">Separate correction from character</h2>
          <p>
            A mispronounced letter is a Tajweed note, not a reflection of
            effort or character. Kids who feel safe making mistakes in front
            of a teacher progress faster than kids afraid of getting it
            wrong.
          </p>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
