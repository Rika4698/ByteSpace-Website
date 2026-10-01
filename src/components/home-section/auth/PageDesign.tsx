import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { courses } from "@/data-info/courses";


const cardSlugs = ["build-digital-asset", "the-power-of-big-data"];
const cards = cardSlugs.map((slug) =>
  courses.find((course) => course.slug === slug)!,
);


const positions = ["top-[89px] left-[25px]", "top-0 left-[136px]"];


const shapes = [
  {
    src: "/shapes/squiggle-white.png",
    width: 175,
    height: 174,
    className: "top-[321px] left-[373px]",
  },
  {
    src: "/shapes/torus-lime-full.png",
    width: 146,
    height: 145,
    className: "top-[15px] left-[54px]",
  },
  {
    src: "/shapes/cone-lime.png",
    width: 188,
    height: 187,
    className: "top-[391px] left-0",
  },
];

type Props = {
  className?: string;
};

export function PageDesign({ className = "relative" }: Props) {
  return (
    <div aria-hidden="true" className={`h-[585px] w-[548px] ${className}`}>
      {cards.map((course, index) => (
        <div
          key={course.slug}
          className={`absolute w-[373px] ${positions[index]}`}
        >
          
          <Card course={course} variant="auth" eager />
        </div>
      ))}

      <HappyStudentsCard
        rating={4.5}
        reviews={240}
        variant="auth"
        className="absolute top-[435px] left-[251px]"
      />

      {shapes.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className={`pointer-events-none absolute ${shape.className}`}
        />
      ))}
    </div>
  );
}
