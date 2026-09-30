type HeadingProps = {
  title: React.ReactNode;
  description?: string;
  size?: "m" | "s";
  className?: string;
};

const titleSizes = {
  m: "text-heading-s md:text-heading-m",
  s: "text-heading-s",
};


export function Heading({ title, description, size = "m", className = "" }: HeadingProps) {
  return (
    <div className={`mx-auto flex max-w-[917px] flex-col gap-4 text-center ${className}`}>
      <h2 className={`tracking-[-0.01em] ${titleSizes[size]}`}>{title}</h2>
      {description && <p className="text-body-m text-neutral-400 md:text-body-l">{description}</p>}
    </div>
  );
}
