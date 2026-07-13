import Link from "next/link";
import StarMotif from "@/components/StarMotif";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-28 text-center">
      <StarMotif className="h-14 w-14" tone="gold" />
      <h1 className="mt-6 font-display text-3xl text-green-950">Page not found</h1>
      <p className="mt-3 font-body text-base text-ink-soft">
        This page doesn&rsquo;t exist. Let&rsquo;s get you back to the academy.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-green-900 px-6 py-3 font-body text-sm font-semibold text-cream-100 hover:bg-green-700"
      >
        Back to Home
      </Link>
    </section>
  );
}
