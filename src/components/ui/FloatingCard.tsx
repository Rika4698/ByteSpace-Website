type FloatingCardProps = {
  children: React.ReactNode;
  className?: string;
};


export function FloatingCard({ children, className = "" }: FloatingCardProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
