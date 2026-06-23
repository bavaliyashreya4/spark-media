import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Image from "next/image";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Spark Media | Bold, Futuristic Digital Marketing",
  description: "We create magic. Spark Media is a premium digital marketing & branding agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] relative overflow-x-hidden">
        {/* Global Abstract Background Image */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
          <Image
            src="/bg-abstract.png"
            alt="Abstract Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Global Background Glow Orbs */}
        <div className="glow-orb glow-violet w-[600px] md:w-[800px] h-[600px] md:h-[800px] top-[-200px] left-[-200px] md:left-[-300px]" />
        <div className="glow-orb glow-pink w-[400px] md:w-[600px] h-[400px] md:h-[600px] top-[40%] right-[-100px] md:right-[-200px]" />
        
        <Navbar />
        <main className="flex-grow z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
