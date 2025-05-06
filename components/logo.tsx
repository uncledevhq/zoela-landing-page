"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the logo based on the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mounting, show a placeholder to avoid hydration mismatch
  if (!mounted) {
    return <div className="h-8 w-24" />;
  }

  return (
    <Link href="/" className="flex items-center">
      {resolvedTheme === "dark" ? (
        // White logo for dark mode
        <Image
          src="/logo-white.png"
          alt="ZOELA"
          width={120}
          height={40}
          className="h-8 w-auto"
          priority
        />
      ) : (
        // Dark logo for light mode
        <Image
          src="/logo-dark.png"
          alt="ZOELA"
          width={120}
          height={40}
          className="h-8 w-auto"
          priority
        />
      )}
    </Link>
  );
}
