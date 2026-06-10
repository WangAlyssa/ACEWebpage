import Image from "next/image";

const sizes = {
  sm: 32,
  md: 40,
  lg: 56,
} as const;

interface AceLogoProps {
  size?: keyof typeof sizes;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export default function AceLogo({
  size = "md",
  className = "",
  imageClassName = "",
  priority = false,
}: AceLogoProps) {
  const px = sizes[size];

  return (
    <Image
      src="/ace-logo.png"
      alt="ACE"
      width={px}
      height={px}
      priority={priority}
      className={`rounded-lg object-contain shrink-0 ${imageClassName}`}
    />
  );
}
