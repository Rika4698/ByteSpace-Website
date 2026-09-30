import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";


type Learning = {
  label: string;
  icon: string;
  width: number;
  height: number;
};

export function ExploreLearning() {
 
    const learning: Learning[] = [
  { label: "Design", icon: "/learning-icon/design.svg", width: 27, height: 27 },
  { label: "Development", icon: "/learning-icon/development.svg", width: 24, height: 33 },
  { label: "IT & Software", icon: "/learning-icon/it-software.svg", width: 36, height: 24 },
  { label: "Business", icon: "/learning-icon/business.svg", width: 30, height: 27 },
  { label: "Marketing", icon: "/learning-icon/marketing.svg", width: 30, height: 30 },
  { label: "Photography", icon: "/learning-icon/photography.svg", width: 30, height: 27 },
];


  return (
    <section className="pb-30">
      <Container>
        <Heading
          size="s"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />


        <ul className="mt-17 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 xl:gap-10">
          {learning.map((path) => (
            <li
              key={path.label}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 hover:border-2 hover:border-secondary-400 hover:shadow-lg transition-transform ease-in-out duration-300 shrink-0 cursor-pointer p-2 text-center"
            >

              <span className="flex size-15 items-center justify-center rounded-full bg-secondary-400">
                <Image src={path.icon} alt="" width={path.width} height={path.height} />
              </span>
              <span className="text-label-xl font-medium">{path.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
