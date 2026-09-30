import Image from "next/image";
import { Container } from "@/components/ui/Container";



export function Hero() {
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
