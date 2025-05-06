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
        className="border-white text-white hover:bg-white hover:text-black transition-colors"
      >
        How?
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-gray-800 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              How ZOELA Works
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Empowering African entrepreneurs with AI-powered business
              solutions
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-6">
            <p>
              Zoela simplifies the process of identifying viable business
              opportunities, sourcing products, and managing logistics. Through
              its AI-powered solution, entrepreneurs input key business
              parameters such as investment budget, product interests, target
              markets, and desired profit margins. The system then generates
              tailored suggestions for high-potential business opportunities,
              complete with:
            </p>

            <ul className="space-y-2 list-disc pl-6">
              <li>Market demand insights</li>
              <li>Recommended products and price points</li>
              <li>Links to vetted local and international suppliers</li>
              <li>Estimated profit margins</li>
              <li>Shipping, import duties, and logistics support</li>
              <li>Detailed business plan where applicable</li>
            </ul>

            <p>
              This not only helps reduce operational inefficiencies but also
              eliminates market entry guesswork, especially for women with
              limited access to advisory networks and capital.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#D0B30C] mb-3">
                Zoela&apos;s Innovation
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#D0B30C] flex items-center justify-center text-black font-bold">
                    1
                  </div>
                  <div>
                    <span className="font-medium">AI Opportunity Engine</span>{" "}
                    that suggests the most viable business ventures based on
                    user inputs and market trends
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#D0B30C] flex items-center justify-center text-black font-bold">
                    2
                  </div>
                  <div>
                    <span className="font-medium">
                      Curated Supplier Network
                    </span>{" "}
                    with transparent pricing and shipping estimates
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#D0B30C] flex items-center justify-center text-black font-bold">
                    3
                  </div>
                  <div>
                    <span className="font-medium">End-to-End Support</span>{" "}
                    offering sourcing, procurement, and delivery coordination,
                    even for first-time importers
                  </div>
                </li>
              </ul>
            </div>
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
