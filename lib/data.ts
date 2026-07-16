export const whatsappNumber = "923334549697";
export const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export type Course = {
  slug: string;
  name: string;
  track: "Foundations" | "Advanced" | "Kids Special";
  level?: string;
  summary: string;
  duration: string;
  price: string;
};

export const courseTracks = [
  {
    key: "Foundations",
    title: "Foundations",
    description:
      "Where every student begins — reading, pronunciation, and the rules of Tajweed, built one lesson at a time.",
      // "Build an unshakable foundation in Quranic reading through a structured curriculum focused on accurate pronunciation, fluent recitation, and the precise application of Tajweed rules—guided step by step by experienced teachers."
  },
  {
    key: "Advanced",
    title: "Advanced Study",
    description:
      "For students ready to move from reading to understanding — meaning, structure, and the Hadith tradition.",
  },
  {
    key: "Kids Special",
    title: "Kids Special",
    description:
      "Gentle, story-led lessons built for young learners, from first duas to their first surahs.",
  },
] as const;

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    name: "Noorani Qaida",
    track: "Foundations",
    level: "Level 01",
    summary:
      "The starting point for every reader — Arabic letters, joining rules, and correct sounds from day one.",
    duration: "30 min / session",
    price: "$25/week",
  },
  {
    slug: "quran-reading-tajweed",
    name: "Quran Reading with Tajweed",
    track: "Foundations",
    level: "Level 02",
    summary:
      "Fluent, correct recitation of the Quran with the rules of Tajweed applied naturally, not memorized abstractly.",
    duration: "30–45 min / session",
    price: "$30/week",
  },
  {
    slug: "tajweed-master-course",
    name: "Tajweed Master Course",
    track: "Foundations",
    level: "Level 03",
    summary:
      "A deep, rule-by-rule study of Tajweed for students who want precision, not just familiarity.",
    duration: "45 min / session",
    price: "$35/week",
  },
  {
    slug: "hifz-ul-quran",
    name: "Hifz-ul-Quran",
    track: "Foundations",
    level: "Level 04",
    summary:
      "Structured memorization with daily revision plans, tracked progress, and a teacher who remembers where you left off.",
    duration: "45–60 min / session",
    price: "$80/week",
  },
  {
    slug: "fahmul-quran",
    name: "Fahmul Quran",
    track: "Advanced",
    summary:
      "Understand what you recite — word-by-word meaning built into a habit of daily recitation.",
    duration: "45 min / session",
    price: "$35/week",
  },
  {
    slug: "detailed-tafsir",
    name: "Detailed Tafsir",
    track: "Advanced",
    summary:
      "A verse-by-verse study of context, meaning, and scholarly interpretation, guided by qualified teachers.",
    duration: "60 min / session",
    price: "$40/week",
  },
  {
    slug: "quran-translation",
    name: "Quran Translation",
    track: "Advanced",
    summary:
      "A structured pass through the full translation, built for students who want the meaning without the density of Tafsir.",
    duration: "45 min / session",
    price: "$35/week",
  },
  {
    slug: "100-ahadith",
    name: "100 Ahadith Course",
    track: "Advanced",
    summary:
      "A curated collection of a hundred hadith on daily life, character, and worship — memorized and understood.",
    duration: "30 min / session",
    price: "$30/week",
  },
  {
    slug: "islamic-stories",
    name: "Islamic Stories",
    track: "Kids Special",
    summary:
      "Prophets, companions, and moral lessons told the way children actually listen — as stories, not lectures.",
    duration: "30 min / session",
    price: "$20/week",
  },
  {
    slug: "namaz-course",
    name: "Namaz Course",
    track: "Kids Special",
    summary:
      "Step-by-step prayer instruction: movements, meaning, and the surahs a child needs to pray with confidence.",
    duration: "30 min / session",
    price: "$20/week",
  },
  {
    slug: "sunnah-duas",
    name: "Sunnah Duas",
    track: "Kids Special",
    summary:
      "Everyday duas for waking, eating, travelling, and sleeping — the small habits that build a child's day.",
    duration: "20–30 min / session",
    price: "$18/week",
  },
];

export const whyChooseUs = [
  {
    title: "24/7 Availability",
    description: "Morning in New York, evening in Karachi — there is a class time that fits your day.",
  },
  {
    title: "Certified Female Tutors",
    description: "Every teacher is qualified, background-checked, and fluent in English.",
  },
  {
    title: "Progress Reports",
    description: "A short written update after every few classes, so you always know where your child stands.",
  },
  {
    title: "Affordable Fees",
    description: "Clear, weekly pricing in USD — no hidden charges, no long-term contracts.",
  },
  {
    title: "3-Day Free Trial",
    description: "Sit in on three real classes before you commit to a single dollar.",
  },
  {
    title: "One-on-One Classes",
    description: "No shared slots. Every session is your child's, at their pace.",
  },
];

export const platforms = ["Zoom", "Skype", "Google Meet"];

export const testimonials = [
  {
    name: "Tania Shehzad",
    location: "New Jersey, USA",
    quote:
      "Sadia Arshad is an amazing teacher and mentor for me in my journey towards understanding my religion better. Her gentle way of explaining concepts, and making sure she relates the teachings of the Holy Quran to everyday things makes it very easy to understand. May Allah bless her for the time she is spending with me, Ameen",
  },
  {
    name: "Durdana Malik",
    location: "New Jersey, USA.",
    quote:
      "I am very satisfied with my teacher, Sadia Arshad  for my Quranic lessons.It has helped me a lot in improving my Quran reading with tajweed. I highly recommend her for all those people who want to learn and improve in Quran learning with correct tajweed.She is very knowledgeable and has great patience.",
  },
  {
    name: "Tayeeba",
    location: "Islamabad, Pakistan",
    quote:
      "Alhamdulillah, my experience with LLQ Academy has been excellent. The teacher ( Humaira Hameed) is patient, kind, and explains everything clearly. I have improved my Quran recitation and learned a lot. May Allah reward the entire team abundantly. Ameen. Jazakum Allahu Khairan. ",
  },
   {
    name: "Noor Ul Zuha",
    location: "Faisalabad, Pakistan",
    quote:
      "My tutor's name is Saria Tariq , and I am learning Tajweed from her. She is a very humble and kind teacher who teaches with great patience. She has an excellent Quranic accent, and her teaching techniques are very effective. I am very satisfied with my teacher and with LLQ Academy.",
  },
   {
    name: "Kanwal Javed",
    location: "Islamabad, Pakistan",
    quote:
      "Assalam o allium . I am nazra student of LLQ ACADEMY.i got admission 5 months ago and  I am fully satisfied with my ma'am Madiha Hafeez .Her method of teaching is great she has complete command on her subject my experience is great with LLQ .it's highly recommended.",
  },
  {
    name: "Komal",
    location: "Lahore, Pakistan",
    quote:
      "Assalamu Alaikum wa Rahmatullahi wa Barakatuh.. Alhamdulillah, my experience with LLQ Academy has been excellent. I am learning Nazra Quran and Tajweed with Teacher Hawra Fatima who is very kind, patient, supportive and explains the lessons very clearly. I truly appreciate her dedication and efforts. The academy management is also very cooperative and always helpful. May Allah reward the entire team for their sincere efforts. Ameen..",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tajweed-common-mistakes",
    title: "Five Tajweed Mistakes Almost Every New Reader Makes",
    excerpt:
      "From swallowed letters to rushed madd, these are the small habits that quietly work against fluent recitation — and how to unlearn them.",
    date: "June 2, 2026",
    readTime: "6 min read",
    category: "Tajweed",
  },
  {
    slug: "why-online-quran-classes",
    title: "Why Online Quran Classes Work Better Than Most Parents Expect",
    excerpt:
      "One-on-one attention, a recorded trail of progress, and a schedule built around your life rather than a mosque timetable.",
    date: "May 18, 2026",
    readTime: "5 min read",
    category: "Learning",
  },
  {
    slug: "islamic-parenting-tips",
    title: "Raising Children Who Love the Quran, Not Just Recite It",
    excerpt:
      "Practical, small changes at home that turn Quran time from an obligation into something a child asks for.",
    date: "April 30, 2026",
    readTime: "7 min read",
    category: "Parenting",
  },
];

export type Teacher = {
  id: string;
  name: string;
  title?: string;
  expertise: string;
  certifications: string[];
  experience: string;
  hasDetails: boolean;
};

export const teachers: Teacher[] = [
  {
    id: "sadia-arshad",
    name: "Sadia Arshad",
    title: "Head of LLQ Academy",
    expertise: "Expert in Tafsir ul Quran & Tajweed",
    certifications: [
      "Certified in Quran Courses (Tajweed and Tafsir, Tafheem and Tadabur) – AlHuda International",
      "Certified in Hadith Studies – AlHuda International",
      "Master in Al-Qaida An-Nooraniyyah",
      "Completed Arabic Grammar under Ustadh Aamir Sohail",
      "Completed Fiqh ut Taharah under Shaykh Abu Bakr Mukhtar",
    ],
    experience: "10+ Years of Experience Teaching Women and Children. Experienced in Teaching Quran with Tajweed in English. Experienced in Educational Leadership & Academy Management.",
    hasDetails: true,
  },
  {
    id: "humaira-hameed",
    name: "Humaira Hameed",
    expertise: "Expert in Tafsir",
    certifications: [
      "Certified in Quran Courses (Tajweed, Tafsir & tafheem) – AlHuda International",
      "Certified in Hadith Studies – Alhuda International",
      "Teacher training in Fiqh ut Taharah – AlHuda International",
      "Arabic Grammar under Ustadh Aamir Sohail",
      "Tatbeeq courses from Quran college",
    ],
    experience: "6+ Years of Experience Teaching Women and Children.",
    hasDetails: true,
  },
  {
    id: "sumbla-ahmed",
    name: "Sumbla Ahmed",
    expertise: "Expert in Qaida Nooraniya",
    certifications: [
      "Certified in Quran Courses (Tajweed and Tafsir) – AlHuda International",
      "Certified in Al-Qaida An-Nooraniyyah – AlHuda International",
      "Arabic Grammar course under Aamir Sohail",
    ],
    experience: "Almost 12+ Years of Experience Teaching Women and Children.",
    hasDetails: true,
  },
  {
    id: "ayesha-fahad",
    name: "Ayesha Fahad",
    expertise: "Expert Tajweed Instructor",
    certifications: [
      "Certified in Tajweed – Quran College, Al Huda & LLQ Academy",
      "Certified in Selected Surah Tafseer – Quran College",
      "Completed Seerah-tun-Nabi course from Understand Quran Saudi Arabia",
      "Expert in Management",
    ],
    experience: "",
    hasDetails: true,
  },
  {
    id: "rija-ishtiaq",
    name: "Rija Ishtiaq",
    expertise: "Expert in Tafsir",
    certifications: [
      "Certified in Tajweed Courses – LLQ Academy",
      "Certified in Aama (Dara e Nizami) – Wifaq Ul Madaris Al Salfiyyah",
      "BS in Islamic Studies – University of Lahore",
      "Tafsir Course – LLQ Academy",
    ],
    experience: "2+ Years of Experience Teaching Women and Children in Urdu & English.",
    hasDetails: true,
  },
];

export const additionalTeachers = [
  "Naila Kaleem",
  "Amna Anees",
  "Ashna Ishtiaq",
  "Ayesha Akram",
  "Fariha Kausar",
  "Hira Zafar",
  "Kanwal Mehboob",
  "Madiha Hafiz",
  "Mehreen Gulzaar",
  "Madiha Zia",
  "Miss Mobeena",
  "Fatima Murtaza",
  "Rubina Rizwan",
  "Sania Halawat",
  "Saria Tariq",
  "Shaista Shaukat",
];
