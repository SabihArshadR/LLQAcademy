import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "@/lib/data";

const icons: Record<string, JSX.Element> = {
  "24/7 Availability": (
    <path d="M12 7v5l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  ),
  "Certified Female Tutors": (
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />
  ),
  "Progress Reports": (
    <path d="M4 19h16M7 15v-3m5 3V8m5 11v-6" />
  ),
  "Affordable Fees": (
    <path d="M12 3v18M6 8h8a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h9" />
  ),
  "3-Day Free Trial": (
    <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  ),
  "One-on-One Classes": (
    <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20c0-3 2-5 4-5s4 2 4 5M16 20c0-3 1.5-5 3.5-5" />
  ),
};

export default function WhyChooseUs() {
  return (
    <section className="lattice-wash">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="Why LLQAcademy"
          title="Built for parents who ask questions before they enroll"
          tone="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-xl2 border border-cream-100/15 bg-cream-100/5 p-6 backdrop-blur-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E4C878"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
                aria-hidden="true"
              >
                {icons[item.title]}
              </svg>
              <h3 className="mt-4 font-display text-lg text-cream-100">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-cream-100/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
