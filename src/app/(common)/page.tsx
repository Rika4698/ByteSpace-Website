import { CourseSection } from "@/components/home-section/courses/CourseSection";
import { CtaSection } from "@/components/home-section/cta-section/CtaSection";
import { ExploreLearning } from "@/components/home-section/explore-learning/ExploreLearning";
import { Hero } from "@/components/home-section/hero/Hero";
import { ProfessionalGrowth } from "@/components/home-section/professional-growth/ProfessionalGrowth";
import { Sponsors } from "@/components/home-section/sponsors/Sponsors";
import { Testimonial } from "@/components/home-section/testimonial/Testimonial";

export default function Home() {
  return (
     <main>
       
          <Hero/>
          <Sponsors/>
          <CourseSection/>
          <ExploreLearning/>
          <ProfessionalGrowth/>
          <CtaSection/>
          <Testimonial/>
      
        </main>
  );
}