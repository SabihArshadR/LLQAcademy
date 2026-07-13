import type { Metadata } from "next";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { blogPosts } from "@/lib/data";

const post = blogPosts.find((p) => p.slug === "tajweed-common-mistakes")!;

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

        <div className="prose-none mt-8 space-y-5 font-body text-base leading-relaxed text-ink">
          <p>
            Almost every new reader makes the same handful of mistakes, not
            because Tajweed is unusually difficult, but because these habits
            feel natural until someone points them out. Here are the five we
            correct most often in the first month of lessons.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">1. Swallowing the Madd</h2>
          <p>
            A long vowel held for two counts often gets clipped to one,
            especially when a student is reading quickly to sound fluent.
            Slowing down for the first few weeks — and counting the stretch
            out loud — fixes this faster than any explanation.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">2. Rushing the Ghunnah</h2>
          <p>
            The nasal sound on noon and meem with a shaddah needs a full two
            counts through the nose, not a quick hum. Students who read
            silently at home tend to lose this first, since there is no
            teacher to catch it in the moment.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">3. Flattening the Qalqalah letters</h2>
          <p>
            Qaf, Ta, Ba, Jeem, and Dal need a distinct bounce when they carry
            a sukoon. Many readers pronounce them as flat, unstressed sounds,
            which quietly erases a rule that changes how a verse is heard.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">4. Merging similar letters</h2>
          <p>
            Letters like Seen and Sad, or Ha and Haa, sound close enough that
            new readers often blur them. The fix isn&rsquo;t memorizing rules
            but repeating minimal pairs until the mouth remembers the
            difference on its own.
          </p>

          <h2 className="pt-3 font-display text-xl text-green-950">5. Ignoring waqf signs</h2>
          <p>
            Stopping mid-verse where a continuation sign appears — or
            continuing through a mandatory stop — changes meaning more often
            than students expect. Waqf signs are worth learning early, not
            treated as an advanced detail.
          </p>

          <p>
            None of these mistakes are signs a student is bad at Tajweed. They
            are simply what happens without a teacher listening in real time
            — which is the entire reason one-on-one classes correct them so
            much faster than self-study.
          </p>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
