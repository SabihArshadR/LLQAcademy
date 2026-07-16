"use client";

import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

const quotes = [
  {
    type: "Hadith",
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    english:
      "The best among you are those who learn the Qur'an and teach it.",
    urdu:
      "تم میں سب سے بہتر وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔",
    reference: "Sahih al-Bukhari 5027",
  },
  {
    type: "Quran",
    arabic: "﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾",
    english:
      "And recite the Qur'an with measured, clear recitation.",
    urdu:
      "اور قرآن کو ٹھہر ٹھہر کر، خوب واضح انداز میں پڑھو۔",
    reference: "Surah Al-Muzzammil (73:4)",
  },
];

export default function HeroQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const quote = quotes[index];

  return (
    <div className="mt-8 max-w-2xl rounded-2xl p-5 backdrop-blur transition-all duration-700">
      <div className="mb-10 flex items-center gap-2 text-green-700">
        <BookOpen size={18} />
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
          {quote.type}
        </span>
      </div>

      <div
        key={index}
        className="animate-[fade_0.7s_ease] space-y-4"
      >
        <p
          dir="rtl"
          className="text-center text-2xl leading-loose font-semibold text-green-950 md:text-3xl"
        >
          {quote.arabic}
        </p>

        <p className="text-center text-base italic text-gray-700">
          "{quote.english}"
        </p>

        <p
          dir="rtl"
          className="text-center text-lg text-gray-700 font-urdu"
        >
          {quote.urdu}
        </p>

        <div className="mx-auto h-px w-20 bg-green-200" />

        <p className="text-center text-sm font-medium text-green-700">
          {quote.reference}
        </p>
      </div>
    </div>
  );
}