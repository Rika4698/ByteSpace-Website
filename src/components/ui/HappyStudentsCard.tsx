import { Avatar, AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";


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
        <p className="text-body-xs text-neutral-500 leading-tight">
          {rating} ({reviews}) <span className="text-[18px] font-bold text-secondary-400" aria-hidden="true">★</span>
        </p>
      </div>
      <AvatarGroup avatars={happyStudents} more="2K+" />
    </FloatingCard>
  );
}