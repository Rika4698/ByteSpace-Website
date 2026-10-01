import { CourseSection } from "@/components/home-section/courses/CourseSection";
import { CtaSection } from "@/components/home-section/cta-section/CtaSection";
import { ExploreLearning } from "@/components/home-section/explore-learning/ExploreLearning";
import { Footer } from "@/components/home-section/footer/Footer";
import { Hero } from "@/components/home-section/hero/Hero";
import { Navbar } from "@/components/home-section/navbar/Navbar";
import { ProfessionalGrowth } from "@/components/home-section/professional-growth/ProfessionalGrowth";
import { Sponsors } from "@/components/home-section/sponsors/Sponsors";
import { Testimonial } from "@/components/home-section/testimonial/Testimonial";

export default function Home() {
  return (
   <main>
      <Navbar/>
      <Hero/>
      <Sponsors/>
      <CourseSection/>
      <ExploreLearning/>
      <ProfessionalGrowth/>
      <CtaSection/>
      <Testimonial/>
      <Footer/>
    </main>
  );
 
}