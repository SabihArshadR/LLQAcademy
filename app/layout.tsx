import type { Metadata } from "next";
import { Amiri, Work_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeTrialBanner from "@/components/FreeTrialBanner";
import FloatingSocialLinks from "@/components/FloatingWhatsApp";

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

export const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nastaliq",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LLQAcademy — Learn Quran Online With Certified Female Teachers",
  description:
    "One-on-one online Quran classes for kids and adults. Certified female teachers, flexible timings, and a 3-day free trial. Zoom, Skype, and Google Meet.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${amiri.variable} ${workSans.variable} ${notoNastaliq.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg font-body text-ink">
        <FreeTrialBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSocialLinks />
      </body>
    </html>
  );
}
