type StarMotifProps = {
  className?: string;
  tone?: "gold" | "green" | "cream";
};

/**
 * A single eight-point khatam star, drawn as line art.
 * This is the site's one recurring signature mark — used as a corner
 * flourish, a divider ornament, or the mark in the wordmark. It never
 * appears more than once per section.
 */
export default function StarMotif({ className = "", tone = "gold" }: StarMotifProps) {
  const stroke =
    tone === "gold" ? "#C9A227" : tone === "green" ? "#0B3D2E" : "#F3EEDF";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Two overlapping squares, echoing the rub el hizb mark used to
          divide sections in Quran manuscripts. */}
      <path
        d="M50 8 L92 50 L50 92 L8 50 Z"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M20.3 20.3 L79.7 20.3 L79.7 79.7 L20.3 79.7 Z"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="3" fill={stroke} />
    </svg>
  );
}
