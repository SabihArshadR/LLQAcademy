# NoorAcademy

An online Quran academy website — Next.js 14 (App Router), TypeScript, Tailwind CSS.

Built as an original design for an Islamic Quran-learning platform (kids &
adults, one-on-one classes, certified female teachers), not a copy of any
existing site's code or assets.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — pages (Home, Courses, About, Contact, Blog + 3 posts), App Router
- `components/` — Navbar, Footer, Hero, WhyChooseUs, Testimonials, FloatingWhatsApp,
  FreeTrialBanner, StarMotif (signature mark), etc.
- `lib/data.ts` — all course, pricing, testimonial, and blog content in one place —
  edit this file first to update site copy
- `app/globals.css` — design tokens and the signature lattice background texture
- `tailwind.config.ts` — color palette (deep green / gold / cream) and fonts

## Before you launch

1. Replace the WhatsApp number in `lib/data.ts` (`whatsappNumber`) with your own.
2. Swap the placeholder "live class" mock in `components/Hero.tsx` for a real
   photo or screenshot (drop it in `public/images/` and use `next/image`).
3. Update course names, fees, and testimonials in `lib/data.ts`.
4. Set a real domain and update `metadata` in `app/layout.tsx`.
# LLQAcademy
