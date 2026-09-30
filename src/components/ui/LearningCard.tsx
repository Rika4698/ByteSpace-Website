import { FloatingCard } from "@/components/ui/FloatingCard";

type LearningCardProps = {
  value: number; 
  className?: string;
};


export function LearningCard({ value, className = "" }: LearningCardProps) {
  return (
    <FloatingCard className={`w-58 ${className}`}>
      <p className="text-body-s text-neutral-700">Learning Progress</p>
      <p className="font-heading text-heading-s font-semibold">{value}%</p>
      
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 overflow-hidden rounded-full bg-neutral-100"
      >
        <div className="h-full rounded-full bg-secondary-500" style={{ width: `${value}%` }} />
      </div>
    </FloatingCard>
  );
}
