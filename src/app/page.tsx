import { CtaSection } from "@/components/home-section/cta-section/CtaSection";
import { Footer } from "@/components/home-section/footer/Footer";
import { Hero } from "@/components/home-section/hero/Hero";
import { Navbar } from "@/components/home-section/navbar/Navbar";

export default function Home() {
  return (
   <main>
      <Navbar/>
      <Hero/>
      <CtaSection/>
      <Footer/>
    </main>
  );
 
}