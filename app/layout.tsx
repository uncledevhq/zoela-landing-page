import type React from "react";
import "@/app/globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "ZOELA - Disrupting the African Market",
  description: "A new chapter is unfolding for the African continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${lato.variable} font-sans bg-black`}>{children}</body>
    </html>
  );
}
