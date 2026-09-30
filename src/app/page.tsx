import { CtaSection } from "@/components/home-section/cta-section/CtaSection";
import { ExploreLearning } from "@/components/home-section/explore-learning/ExploreLearning";
import { Footer } from "@/components/home-section/footer/Footer";
import { Hero } from "@/components/home-section/hero/Hero";
import { Navbar } from "@/components/home-section/navbar/Navbar";
import { Testimonial } from "@/components/home-section/testimonial/Testimonial";

export default function Home() {
  return (
   <main>
      <Navbar/>
      <Hero/>
      <ExploreLearning/>
      <CtaSection/>
      <Testimonial/>
      <Footer/>
    </main>
  );
 
}