import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Import Poppins
import {Montserrat} from "next/font/google"
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

// 2. Initialize the font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atis Nama Foundation",
  description: "Nurturing the intergenerational bond in Ethiopia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* We remove the Poppins <link> because next/font handles it now */}
        {/* Material Symbols remains here */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        // 3. Apply montserrat.className here
        className={`${montserrat.className} bg-background text-on-background min-h-screen flex flex-col antialiased`}
        suppressHydrationWarning={true}
      >
        <NavBar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
