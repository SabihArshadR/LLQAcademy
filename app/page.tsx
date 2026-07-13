import Hero from "@/components/Hero";
import PlatformsStrip from "@/components/PlatformsStrip";
import CourseCategories from "@/components/CourseCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformsStrip />
      <CourseCategories />
      <WhyChooseUs />
      <Testimonials />
      <FinalCta />
    </>
  );
}
