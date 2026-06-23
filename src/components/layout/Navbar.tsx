"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Process", href: "/process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 z-50 w-full transition-all duration-300 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group z-50">
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-[0.2em] leading-none text-white transition-all duration-300 group-hover:text-[var(--color-brand-pink)]">
              SPARK
            </span>
            <span className="text-[10px] tracking-[0.4em] font-medium text-white/50 leading-none mt-1">
              MEDIA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-black/40 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                  isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-pink)] to-[var(--color-brand-cyan)]" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link 
            href="/contact"
            className="px-6 py-3 rounded-full bg-transparent border border-white/30 text-white font-bold text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors backdrop-blur-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[var(--color-brand-surface)]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-8 text-center items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-white hover:text-[var(--color-brand-pink)] transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
