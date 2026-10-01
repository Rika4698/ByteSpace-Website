import { Avatar, AvatarGroup } from "@/components/ui/AvatarGroup";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { SmallStarIcon } from "../all-icons/SmallStarIcon";


type HappyStudentsCardProps = {
  rating: number;
  reviews: number;
  className?: string;
   variant?: "default" | "auth";
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



export function HappyStudentsCard({ rating, reviews, variant = "default", className = "" }: HappyStudentsCardProps) {
   const isAuth = variant === "auth";
  return (
    <FloatingCard  style={isAuth ? "lime" : "white"} className={`w-[258px] ${className}`}>
      <div className="">
        <p className="text-label-m font-medium ">Happy Students</p>
        <p className="flex items-center gap-1 text-body-xs text-neutral-500 leading-tight">
          {rating} ({reviews}) <SmallStarIcon
            className={`text-[18px] font-bold ${isAuth ? "text-primary-800" : "text-secondary-400"}`}
          /> 
        </p>
      </div>
      <AvatarGroup  avatars={happyStudents}
        more="2K+"
        style={isAuth ? "dark" : "lime"}
        size="lg" />
    </FloatingCard>
  );
}