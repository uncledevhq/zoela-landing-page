import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
export function Header() {
  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          {/* Logo placeholder - will be replaced with actual logo */}
          <Image
            src="/logo.png"
            width="100"
            height="60"
            alt="Zoela - your trusted distrubutor"
          />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black transition-colors"
          >
            How?
          </Button>
        </div>
      </div>
    </header>
  );
}
