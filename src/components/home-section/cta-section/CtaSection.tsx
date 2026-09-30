import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";


const shapes = [
  { src: "/shapes/squiggle-lime.png", width: 385, height: 386, className: "-top-[164px] -left-[110px] rotate-[225deg]" },
  { src: "/shapes/squiggle-white.png", width: 177, height: 176, className: "top-[5px] left-[178px]" },
  { src: "/shapes/cone-white.png", width: 140, height: 189, className: "top-[225px] left-0" },
  { src: "/shapes/torus-lime.png", width: 346, height: 190, className: "bottom-0 left-[18px]" },
  { src: "/shapes/cone-lime.png", width: 190, height: 189, className: "top-0 right-[170px]" },
  { src: "/shapes/cylinder-white.png", width: 218, height: 372, className: "top-[5px] right-0" },
  { src: "/shapes/squiggle-lime.png", width: 330, height: 328, className: "top-[289px] right-0" },
];


export function CtaSection() {
  return (
    <section id="creators" className="relative overflow-hidden bg-primary-800 bg-grid py-21">
  
      {shapes.map((shape) => (
        <Image
          key={shape.className}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className={`pointer-events-none absolute hidden max-w-none xl:block ${shape.className}`}
        />
      ))}

      <Container className="relative flex flex-col items-center gap-10 text-center">
        <h2 className="max-w-[710px] text-heading-s tracking-[-0.01em] text-neutral-50 md:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-body-m text-neutral-50 md:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="/register">Join as Creator</Button>
      </Container>
    </section>
  );
}
