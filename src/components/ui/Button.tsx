import Link from "next/link";


const variantStyles = {
  primary: "bg-secondary-400 text-neutral-950 hover:bg-secondary-300",
};

type Variant = keyof typeof variantStyles;


type ButtonAsLink = React.ComponentProps<typeof Link> & { variant?: Variant };


type ButtonAsButton = React.ComponentProps<"button"> & {
  variant?: Variant;
  href?: undefined;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-label-l font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${className}`;

  if (props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  // type="button" by default .
  return <button type="button" className={classes} {...props} />;
}
