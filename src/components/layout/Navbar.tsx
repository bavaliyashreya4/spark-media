"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "/services", href: "/services" },
  { name: "/work", href: "/work" },
  { name: "/process", href: "/process" },
  { name: "/contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-brand-deep)] border-b border-cyan-thin/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <Zap className="w-5 h-5 text-[var(--color-brand-cyan)] group-hover:scale-110 transition-transform duration-200" />
          <span className="font-bold text-lg tracking-wider">
            SPARK MEDIA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-[var(--color-brand-cyan)]",
                  isActive ? "text-[var(--color-brand-cyan)]" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white hover:text-[var(--color-brand-cyan)] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[var(--color-brand-deep)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold hover:text-[var(--color-brand-cyan)] hover:glow-cyan transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
