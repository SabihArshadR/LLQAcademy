export const whatsappNumber = "923092910019";
export const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const socialLinks = {
  whatsapp: "https://whatsapp.com/channel/0029VaJK9zgFy72ESabczX2C",
  youtube: "https://youtube.com/@onlinellqacademy?si=PWW0BwhDIuEaB_UD",
  facebook: "https://www.facebook.com/llqacademyofficial?mibextid=ZbWKwL",
  instagram: "https://www.instagram.com/llqacademy/profilecard/?igsh=MWE0aGp4d2F0OTc0dg==",
};

export type Course = {
  slug: string;
  name: string;
  track: "Foundations" | "Advanced" | "Kids Special" | "Group Courses" | "Whatsapp";
  level?: string;
  summary: string;
  duration: string;
  price: string;
  image?: string;
};
 
export const courseTracks = [
  {
    key: "Foundations",
    title: "Foundations",
    description:
      "Master Quranic reading, accurate pronunciation, and the rules of Tajweed through a structured, step-by-step curriculum",
    images: ["/images/f2.jpeg", "/images/f1.jpeg", "/images/f3.jpeg", "/images/f4.jpeg", "/images/f5.jpeg"],
  },
  {
    key: "Advanced",
    title: "Advanced Study",
    description:
      "Advance beyond recitation through in-depth study of the Quran, authentic Hadith, Tafsir, and essential Islamic sciences",
    images: ["/images/a3.jpeg", "/images/a2.jpeg", "/images/a1.jpeg", "/images/a4.jpeg"],
  },
  {
    key: "Kids Special",
    title: "Kids Special",
    description:
      "Inspire young learners through engaging lessons that build Quranic skills, Islamic character, and a lifelong love for Islam",
    images: ["/images/k4.jpeg", "/images/k3.jpeg", "/images/k2.jpeg", "/images/k1.jpeg"],
  },
  {
    key: "Group Courses",
    title: "Group Courses",
    description:
      "Learn alongside fellow students through interactive group classes that foster consistency, confidence, and shared progress",
    images: ["/images/g3.jpeg", "/images/g2.jpeg", "/images/g6.jpeg", "/images/g1.jpeg", "/images/g4.jpeg", "/images/g5.jpeg"],
  },
   {
    key: "Whatsapp",
    title: "WhatApp Free Courses",
    description:
      "Learn anytime, anywhere through free WhatsApp lessons designed to strengthen your Quranic knowledge and daily practice",
    images: ["/images/w1.jpeg", "/images/w2.jpeg", "/images/w4.jpeg", "/images/w3.jpeg"],
  },
] as const;

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    name: "Noorani Qaida (Urdu)",
    track: "Foundations",
    level: "Level 01",
    summary:
      "The starting point for every reader — Arabic letters, joining rules, and correct sounds from day one.",
    duration: "30 min / session",
    price: "",
    image: "/images/f2.jpeg",
  },
   {
    slug: "qaida-noorania",
    name: "Qaida Noorania (Arabic)",
    track: "Foundations",
    level: "Level 02",
    summary:
      "The gateway to Quranic Arabic — mastering letters, pronunciation, and reading the Arabic script with confidence.",
    duration: "30 min / session",
    price: "",
    image: "/images/f1.jpeg",
  },
  {
    slug: "nazra-quran-tajweed",
    name: "Nazra Quran with Tajweed",
    track: "Foundations",
    level: "Level 03",
    summary:
      "From reading to reciting — perfecting fluency, Tajweed, and every verse with precision.",
    duration: "30 min / session",
    price: "",
    image: "/images/f3.jpeg",
  },
  {
    slug: "tajweed-master-course",
    name: "Tajweed Master Course",
    track: "Foundations",
    level: "Level 04",
    summary:
      "Beyond recitation — mastering the rules, precision, and beauty of authentic Tajweed.",
    duration: "30 min / session",
    price: "",
    image: "/images/f4.jpeg",
  },
  {
    slug: "hifz-ul-quran",
    name: "Hifz-ul-Quran",
    track: "Foundations",
    level: "Level 05",
    summary:
      "A journey of memorization — preserving the Quran with accuracy, consistency, and confidence.",
    duration: "30 min / session",
    price: "",
    image: "/images/f5.jpeg",
  },
  {
    slug: "fahmul-quran",
    name: "Fahmul Quran",
    track: "Advanced",
    summary:
      "Beyond recitation — understanding the meanings, message, and guidance of the Quran.",
    duration: "30 min / session",
    price: "",
    image: "/images/a3.jpeg",
  },
  {
    slug: "detailed-tafsir",
    name: "Detailed Tafsir",
    track: "Advanced",
    summary:
      "Beyond the words — exploring the context, wisdom, and deeper meanings of every verse.",
    duration: "30 min / session",
    price: "",
    image: "/images/a2.jpeg",
  },
  {
    slug: "quran-translation",
    name: "Quran Translation",
    track: "Advanced",
    summary:
      "Bringing every verse to life — understanding the Quran through clear and authentic translation.",
    duration: "30 min / session",
    price: "",
    image: "/images/a1.jpeg",
  },
  {
    slug: "100-ahadith",
    name: "100 Ahadith Course",
    track: "Advanced",
    summary:
      "A collection of timeless guidance — learning 100 authentic Ahadith with meaning and practical lessons.",
    duration: "30 min / session",
    price: "",
    image: "/images/a4.jpeg",
  },
  {
    slug: "islamic-stories",
    name: "Islamic Stories",
    track: "Kids Special",
    summary:
      "Where faith comes to life — inspiring hearts through timeless stories of the Prophets and righteous people.",
    duration: "30 min / session",
    price: "",
    image: "/images/k4.jpeg",
  },
  {
    slug: "namaz-course",
    name: "Namaz Course",
    track: "Kids Special",
    summary:
      "The foundation of every believer — learning Salah with accuracy, confidence, and devotion.",
    duration: "30 min / session",
    price: "",
    image: "/images/k3.jpeg",
  },
  {
    slug: "masnoon-duas",
    name: "Masnoon Duas",
    track: "Kids Special",
    summary:
      "The words of everyday worship — learning authentic Sunnah Duas for every moment of life.",
    duration: "20–30 min / session",
    price: "",
    image: "/images/k2.jpeg",
  },
  {
    slug: "kids-tajweed-course",
    name: "Kids Tajweed Course",
    track: "Kids Special",
    summary:
      "Building young reciters — learning Tajweed through engaging lessons, clear guidance, and confident practice.",
    duration: "30 min / session",
    price: "",
    image: "/images/k1.jpeg",
  },
  {
    slug: "qaida-nooraniya",
    name: "Qaida Nooraniya(Arabic)",
    track: "Group Courses",
    summary:
      "The gateway to Quranic Arabic — mastering letters, pronunciation, and reading the Arabic script with confidence.",
    duration: "",
    price: "",
    image: "/images/g3.jpeg",
  },
  {
    slug: "kids-tajweed-course",
    name: "Kids Tajweed Course",
    track: "Group Courses",
    summary:
      "The perfect start for young reciters — mastering Tajweed through engaging lessons and correct pronunciation.",
    duration: "",
    price: "",
    image: "/images/g2.jpeg",
  },
  {
    slug: "ladies-tajweed-course",
    name: "Ladies Tajweed Course",
    track: "Group Courses",
    summary:
      "Designed for women — mastering Tajweed with confidence, precision, and authentic guidance.",
    duration: "",
    price: "",
    image: "/images/g6.jpeg",
  },
  {
    slug: "husne-ikhlaq-series",
    name: "Husne Ikhkaq Course",
    track: "Group Courses",
    summary:
      "Building noble character — cultivating honesty, kindness, and Islamic manners in everyday life.",
    duration: "",
    price: "",
    image: "/images/g1.jpeg",
  },
  {
    slug: "selected-surahs-detailed-tafseer",
    name: "Selected Surahs – Detailed Tafseer",
    track: "Group Courses",
    summary:
      "Exploring selected Surahs — uncovering their context, wisdom, and timeless guidance verse by verse.",
    duration: "",
    price: "",
    image: "/images/g4.jpeg",
  },
  {
    slug: "selected-surahs-hifz-course",
    name: "Selected Surahs_ Hifz Course",
    track: "Group Courses",
    summary:
      "Memorizing selected Surahs — building a lasting connection with the Quran through guided Hifz.",
    duration: "",
    price: "",
    image: "/images/g5.jpeg",
  },
  {
    slug: "tafsir-ul-quran",
    name: "Tafsir-ul-Quran",
    track: "Whatsapp",
    summary:
      "Unlocking the Quran's wisdom — exploring every verse through authentic Tafsir and scholarly guidance.",
    duration: "",
    price: "",
    image: "/images/w1.jpeg",
  },
  {
    slug: "seerat-un-nabi",
    name: "Seerat-un-Nabi",
    track: "Whatsapp",
    summary:
      "Following the best example — exploring the life, character, and legacy of the Prophet.",
    duration: "",
    price: "",
    image: "/images/w2.jpeg",
  },
  {
    slug: "tajweed-course",
    name: "Tajweed Course (Females)",
    track: "Whatsapp",
    summary:
      "Designed for sisters — mastering Tajweed with confidence, precision, and authentic guidance.",
    duration: "",
    price: "",
    image: "/images/w4.jpeg",
  },
  {
    slug: "tarbiyah-courses",
    name: "Tarbiyah Courses",
    track: "Whatsapp",
    summary:
      "Nurturing faith and character — building strong Islamic values through practical everyday guidance.",
    duration: "",
    price: "",
    image: "/images/w3.jpeg",
  },
];

export const whyChooseUs = [
  {
    title: "24/7 Availability",
    description: "Morning in New York, evening in Karachi — there is a class time that fits your day.",
  },
  {
    title: "Certified Female Tutors",
    description: "Every teacher is qualified, background-checked, and Expert in Quran Teaching.",
  },
  {
    title: "Progress Reports",
    description: "A short written update after every few classes, so you always know where your child stands.",
  },
  {
    title: "Affordable Fees",
    description: "Fair fee structure for all students from all over the world — no hidden charges, no long-term contracts.",
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
    name: "Sonia Shahzad Khan",
    location: "Spain",
    quote:
    "Asslam u alikum Alhamdulillah, choosing LLQ Academy for our son’s Quran education has been one of the best decisions. His teacher ( Madiha Hafeez) is caring, respectful, and very professional. She teaches with patience and makes every lesson easy to understand. Our son enjoys his classes and has made excellent progress. We are truly grateful for her dedication and support. May Allah bless her with the best rewards in this life and the Hereafter. Ameen. We highly recommend LLQ Academy to every family looking for quality online Quran classes. ",
  },
  {
    name: "Saima Mazhar",
    location: "Iraq",
    quote:
    "Assalam o alaikum wrwb I am very satisfied with my teacher (Humaira Hameed). The lessons are clear, well-organized, and easy to understand.Humaira is patient, supportive, and explains everything thoroughly. I have learned a lot and truly appreciate the dedication and effort put into every classMay Allah reward you abundantly. Ameen.",
  },
  {
    name: "Qudsia Mirza",
    location: "Canada",
    quote:
    "Assalam o alaikum  I've had a wonderful experience with LLQ academy. (Ms. Rija Ishtiaq) has been an amazing quran teacher for my daughter. She is very punctual and teaches with care and makes the lessons easy to understand. My daughter enjoys her classes and has made great progress with her quran reading. I truly appreciate Ms. Rija’s hard work and highly recommend LLQ academy to anyone looking for quality quran classes.",
  },
  {
    name: "Tayeeba",
    location: "Islamabad, Pakistan",
    quote:
      "Alhamdulillah, my experience with LLQ Academy has been excellent. The teacher ( Humaira Hameed) is patient, kind, and explains everything clearly. I have improved my Quran recitation and learned a lot. May Allah reward the entire team abundantly. Ameen. Jazakum Allahu Khairan. ",
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
    experience: "Almost 10+ Years of Experience Teaching Women and Children. Experienced in Teaching Quran with Tajweed in English. Experienced in Educational Leadership & Academy Management.",
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
    experience: "Almost 6+ Years of Experience Teaching Women and Children.",
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
    experience: "Almost 7+ years of Experience Teaching Women and Children",
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
    experience: "",
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
  "Sadia Gulzar",
];
