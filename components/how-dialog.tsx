"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";

export function HowDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="border-white dark:border-white text-white dark:text-white hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors"
      >
        How?
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              How ZOELA Works
            </DialogTitle>
            <DialogDescription>
              Learn about our revolutionary approach to the African market.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p>
              ZOELA is pioneering a new approach to business in Africa,
              connecting entrepreneurs, businesses, and communities through
              innovative technology and strategic partnerships.
            </p>
            <p>
              Our platform provides tools, resources, and networks that help
              break down barriers and create opportunities across the continent.
            </p>
            <p>
              By leveraging cutting-edge technology and deep local insights,
              we&apos;re building solutions that address the unique challenges
              and opportunities of the African market.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-[#D0B30C] hover:bg-[#B89A0A] text-black font-bold"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
