// src/app/layout.js
import { Inter } from "next/font/google";
import { Libre_Baskerville } from 'next/font/google'; // Import Libre Baskerville
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import dynamic from "next/dynamic";

// Dynamically import WandCursor (client-only)
const WandCursor = dynamic(() => import("@/components/WandCursor"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Define Libre Baskerville font
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'], // Assuming you use regular and bold weights
  variable: '--font-libre-baskerville', // This creates a CSS variable for Tailwind
  display: 'swap', // Ensures text remains visible during font loading
});


export const metadata = {
  title: {
    template: "Next.js Portfolio | %s | Jagmeet",
    default: "Jagmeet Portfolio",
  },
  description:
    "Portfolio built with Next.js, Tailwind CSS, Three.js, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    // Apply both font variables to the html tag
    <html lang="en" className={clsx(inter.variable, libreBaskerville.variable)}>
      <body
        className={clsx(
          "bg-background text-foreground font-inter" // 'font-inter' here makes Inter the default sans-serif
        )}
      >
        <WandCursor />
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}