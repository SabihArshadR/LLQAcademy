import { whatsappLink } from "@/lib/data";

export default function FreeTrialBanner() {
  return (
    <div className="bg-green-950 px-5 py-2.5 text-center">
      <a
        href={whatsappLink("Assalamu Alaikum! I'd like to book 3 free trial classes.")}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring font-body text-xs font-semibold tracking-wide text-cream-100 underline-offset-4 hover:underline md:text-sm"
      >
        Book 3 Free Trial Classes — no card, no commitment →
      </a>
    </div>
  );
}
