import Image from "next/image";

export type Avatar = { src: string; alt: string };

const toneStyles = {
  lime: "bg-secondary-500 font-bold text-neutral-950",
  dark: "bg-black font-medium text-white",
};


const sizeStyles = {
  md: { list: "-space-x-3", item: "size-8", px: 32 },
  lg: { list: "-space-x-4", item: "size-[43px]", px: 43 },
};

type AvatarGroupProps = {
  avatars: Avatar[];
  size?: keyof typeof sizeStyles;
  more?: string;
  style?: keyof typeof toneStyles;
  className?: string;
};


export function AvatarGroup({
  avatars,
  more,
  style = "lime",
  size = "md",
  className = "",
}: AvatarGroupProps) {
  const sizes = sizeStyles[size];

  return (
    <ul className={`flex items-center ${sizes.list} ${className}`}>
      {avatars.map((avatar) => (
        <li key={avatar.src} className="relative shrink-0">
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={sizes.px}
            height={sizes.px}
            className={`${sizes.item} rounded-full object-cover`}
          />
        </li>
      ))}
      {more && (
        <li
          className={`relative flex ${sizes.item} shrink-0 items-center justify-center rounded-full text-label-xs ${toneStyles[style]}`}
        >
          {more}
        </li>
      )}
    </ul>
  );
}
