import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/ui/SearchBar";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { LearningCard } from "@/components/ui/LearningCard";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";



export function Hero() {
         
    const learningProgress = 55; 

  return (
    <section id="home" className="relative overflow-hidden bg-primary-800 bg-grid pt-32 md:pt-40 lg:pt-42">
      <Container className="flex flex-col items-center gap-10 text-center lg:gap-15">
        <div className="flex max-w-[935px] flex-col gap-4 lg:gap-8">
          <h1 className="text-heading-s tracking-[-0.01em] text-neutral-50 md:text-heading-m lg:text-heading-l">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-body-m text-neutral-100 md:text-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

      <SearchBar/>
      </Container>

    {/* Avatar, progress bar */}

      <Container className="mt-10 lg:mt-0">
         <div className="relative mx-auto aspect-[578/512] w-full max-w-[578px]">
    
      <div
        aria-hidden="true"
        className="absolute top-[13.7%] left-[-49.5%] aspect-square w-[198.8%] rounded-full bg-[radial-gradient(circle_closest-side,transparent_44.3%,var(--color-secondary-500)_44.3%)]"
      />

      <Image
        src="/student/student-laptop.png"
        alt="Smiling student with headphones holding a laptop"
        width={578}
        height={541}
        sizes="(min-width: 640px) 578px, 100vw"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-x-0 top-0 h-auto w-full"
      />

     
      <FloatingCard className="absolute top-[24.4%] left-[-4.5%] hidden md:flex">
        <p className="text-label-m font-medium leading-3">UI/UX Design</p>
        <p className="text-body-xs text-neutral-500 leading-tight">200 Courses <span className="relative -top-[2px] mx-1">•</span> 1000+ Students</p>
      </FloatingCard>

      <LearningCard value={learningProgress} className="absolute top-[27.1%] left-[71.1%] hidden md:flex" />

      <HappyStudentsCard rating={4.5} reviews={240} className="absolute top-[63.5%] left-[-17.8%] hidden md:flex" />
    </div>
      </Container>


      <Image
        src="/shapes/3d-ornaments.png"
        alt=""
        width={1440}
        height={804}
        sizes="1440px"
       
        className="pointer-events-none absolute top-[221px] left-1/2 hidden w-[1440px] max-w-none -translate-x-1/2 md:block"
      />
    </section>
  );
}
