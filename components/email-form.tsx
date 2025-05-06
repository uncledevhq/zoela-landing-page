"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
    // Reset form
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl">
      <Input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-opacity-20 bg-black border-gray-600 text-white placeholder:text-gray-400"
      />
      <Button
        type="submit"
        className="ml-2 bg-[#D0B30C] hover:bg-[#B89A0A] text-black font-bold"
      >
        NOTIFY ME
      </Button>
    </form>
  );
}
