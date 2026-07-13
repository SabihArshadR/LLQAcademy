import Button from "./Button";
import StarMotif from "./StarMotif";
import { whatsappLink } from "@/lib/data";

type FinalCtaProps = {
  title?: string;
  description?: string;
};

export default function FinalCta({
  title = "Start with three free classes — no obligation",
  description = "Sit in on real one-on-one lessons before you decide on anything. Message us and we'll find a time that works for your family's schedule.",
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-green-950">
      <StarMotif
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-20"
        tone="gold"
      />
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-24">
        <h2 className="font-display text-3xl text-balance text-cream-100 md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-cream-100/75">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={whatsappLink("Assalamu Alaikum! I'd like to book 3 free trial classes.")}
            external
            variant="primary"
          >
            Book 3 Free Trial Classes
          </Button>
          <Button
            href={whatsappLink("Assalamu Alaikum! I have a question before I start.")}
            external
            variant="ghost"
            className="!border-cream-100/30 !text-cream-100 hover:!bg-cream-100 hover:!text-green-950"
          >
            Ask a Question First
          </Button>
        </div>
      </div>
    </section>
  );
}
