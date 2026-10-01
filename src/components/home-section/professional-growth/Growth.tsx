import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { LearningCard } from "@/components/ui/LearningCard";
import { courses } from "@/data-info/courses";




export function Growth() {


    const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

   
  return (
    <section className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[63px] min-[1400px]:-mr-[58px]">
      <div className="flex max-w-[574px] flex-col items-center gap-10 text-center xl:items-start xl:text-left">
        <h2 className="text-heading-s tracking-[-0.01em] md:text-heading-m">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="max-w-[477px] text-body-l text-neutral-700">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>

  
        <dl className="flex gap-14">
          {growthStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-body-l text-neutral-700">{stat.label}</dt>
              <dd className="font-heading text-heading-s font-medium tracking-[-0.01em] text-primary-800">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <GrowthPicture />
    </section>
  );
}


function GrowthPicture() {

     const learningProgress = 55;

  return (
    <div className="relative aspect-[621/552] w-full max-w-[621px] shrink-0">
      <div className="absolute top-0 left-0 w-[373px] hidden md:block">
        <Card course={courses[0]} />
      </div>

      <Image
        src="/student/growth-student.png"
        alt="Student with headphones holding a laptop"
        width={1158}
        height={1438}
        sizes="(min-width: 768px) 577px, 93vw"
        className="absolute top-[2.17%] left-0 h-auto w-[107.4%] max-w-none"
      />

      <LearningCard
        value={learningProgress}
        className="absolute top-[38.6%] left-[56.6%] hidden md:flex"
      />

      <Image
        src="/shapes/squiggle-lime.png"
        alt=""
        width={217}
        height={216}
        className="pointer-events-none absolute top-[12.1%] left-[65.4%] h-auto w-[34.6%]"
      />
    </div>
  );
}
