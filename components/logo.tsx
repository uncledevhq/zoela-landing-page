import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* White logo for dark mode */}
      <Image
        src="/logo-dark.png"
        alt="ZOELA"
        width={200}
        height={40}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
