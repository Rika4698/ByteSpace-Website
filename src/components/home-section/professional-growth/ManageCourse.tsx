import Image from "next/image";
import { CheckCircleIcon } from "@/components/all-icons/CheckCircleIcon";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";


const creatorRevenue = {
  total: { label: "Total Revenue", period: "July 1-28", amount: "$120.29", progress: 60 },
  yearToDate: { label: "Year to Date", period: "2023", amount: "$1,200.38", change: "+12$" },
};
 
export function ManageCourse() {

    const creatorFeatures = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];



  return (
    <section className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[79px]">
      <CreatorPicture />

      <div className="flex max-w-[580px] flex-col items-center gap-10 text-center xl:items-start xl:text-left">
      
        <h2 className="max-w-[400px] text-heading-s tracking-[-0.01em] md:text-heading-m">
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="text-body-l text-neutral-700">
          <strong className="font-bold text-neutral-950">ByteSpace</strong>{" "}
          supports individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <ul className="flex flex-col gap-4">
          {creatorFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-label-l font-medium"
            >
              <CheckCircleIcon className="shrink-0 text-primary-800" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}





function CreatorPicture() {
  const { total, yearToDate } = creatorRevenue;

  return (
    <div className="relative order-last aspect-[541/596] w-full max-w-[541px] shrink-0 xl:order-first">
      <div className={`top-[7.38%] left-0 w-58 absolute  flex-col gap-2 rounded-2xl bg-primary-800 p-4 text-neutral-50 shadow-lg flex`}>
        <StatHeading label={total.label} period={total.period} />
        <p className="font-heading text-2xl leading-8 font-semibold">
          {total.amount}
        </p>
    
        <div
          aria-hidden="true"
          className="h-2 w-50 overflow-hidden rounded-full bg-neutral-50"
        >
          <div
            className="h-full rounded-full bg-secondary-400"
            style={{ width: `${total.progress}%` }}
          />
        </div>
      </div>

      <div className={`top-[30.55%] left-0 w-[134px] absolute  flex-col gap-2 rounded-2xl bg-primary-800 p-4 text-neutral-50 shadow-lg flex`}>
        <StatHeading label={yearToDate.label} period={yearToDate.period} />
        <p className="font-heading text-2xl leading-8 font-semibold whitespace-nowrap">
          {yearToDate.amount}
        </p>
        <span className="inline-flex h-6 w-fit items-center rounded-full bg-secondary-400 px-2 text-label-xs font-medium text-neutral-950">
          {yearToDate.change}
        </span>
      </div>

      
      <Image
        src="/student/creator-student.png"
        alt="Smiling course creator with headphones holding a tablet"
        width={1158}
        height={1438}
        sizes="(min-width: 768px) 581px, 100vw"
        className="absolute top-[-0.82%] left-[1.18%] h-auto w-[107.4%] max-w-none"
      />

      <HappyStudentsCard
        rating={4.5}
        reviews={240}
        className="absolute top-[69.3%] left-[52.3%] hidden md:flex"
      />

     
      <Image
        src="/shapes/squiggle-lime.png"
        alt=""
        width={217}
        height={216}
        className="pointer-events-none absolute top-[19.1%] left-[56.4%] h-auto w-[39.7%] rotate-45"
      />
    </div>
  );
}

function StatHeading({ label, period }: { label: string; period: string }) {
  return (
    <div>
      <p className="text-label-m font-medium">{label}</p>
      <p className="text-[10px] leading-[1.2]">{period}</p>
    </div>
  );
}
