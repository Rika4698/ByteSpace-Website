import { Avatar, AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { SmallStarIcon } from "../all-icons/SmallStarIcon";


type HappyStudentsCardProps = {
  rating: number;
  reviews: number;
  className?: string;
};

 const happyStudents: Avatar[] = [
  { src: "/avatars/avatar-1.png", alt: "" },
  { src: "/avatars/avatar-2.png", alt: "" },
  { src: "/avatars/avatar-3.png", alt: "" },
  { src: "/avatars/avatar-4.png", alt: "" },
  { src: "/avatars/avatar-5.png", alt: "" },
  { src: "/avatars/avatar-6.png", alt: "" },
  { src: "/avatars/avatar-7.png", alt: "" },
];



export function HappyStudentsCard({ rating, reviews, className = "" }: HappyStudentsCardProps) {
  return (
    <FloatingCard className={`w-[258px] ${className}`}>
      <div className="">
        <p className="text-label-m font-medium ">Happy Students</p>
        <p className="flex items-center gap-1 text-body-xs text-neutral-500 leading-tight">
          {rating} ({reviews}) <SmallStarIcon
            className="text-[18px] font-bold text-secondary-400" aria-hidden="true"
          /> 
        </p>
      </div>
      <AvatarGroup avatars={happyStudents} more="2K+" />
    </FloatingCard>
  );
}