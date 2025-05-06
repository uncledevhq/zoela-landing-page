import { HowDialog } from "@/components/how-dialog";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-4">
          <HowDialog />
        </div>
      </div>
    </header>
  );
}
