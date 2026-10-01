const styles = {
  white: "bg-white shadow-lg",
  lime: "bg-secondary-400 backdrop-blur-[20px]",
};

type FloatingCardProps = {
  children: React.ReactNode;
  style?: keyof typeof styles;
  className?: string;
};



export function FloatingCard({ children, style = "white", className = "" }: FloatingCardProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl p-4 ${styles[style]} ${className}`}>
      {children}
    </div>
  );
}
