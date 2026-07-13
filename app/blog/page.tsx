import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — LLQAcademy",
  description: "Notes on Tajweed, online learning, and raising children close to the Quran.",
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
      <p className="text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
        The Blog
      </p>
      <h1 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl text-balance text-green-950 md:text-5xl">
        Notes on Tajweed, teaching, and raising Quran-loving kids
      </h1>

      <div className="mt-14 space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="focus-ring group block rounded-xl2 border border-green-900/10 bg-surface p-7 shadow-card transition-colors hover:border-gold-500/40"
          >
            <div className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-wide text-gold-600">
              <span>{post.category}</span>
              <span className="text-ink-soft/50">·</span>
              <span className="font-normal normal-case tracking-normal text-ink-soft">
                {post.date}
              </span>
              <span className="text-ink-soft/50">·</span>
              <span className="font-normal normal-case tracking-normal text-ink-soft">
                {post.readTime}
              </span>
            </div>
            <h2 className="mt-3 font-display text-2xl text-green-950 group-hover:text-green-700">
              {post.title}
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-block font-body text-sm font-semibold text-green-900">
              Read article →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
