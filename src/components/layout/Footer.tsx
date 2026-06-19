import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-brand-deep)] pt-24 pb-8 border-t border-cyan-thin/30 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Large CTA Section */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white">
            LET'S TALK.
          </h2>
          <div className="w-full h-[1px] bg-[var(--color-brand-cyan)] opacity-20 relative">
            <span className="absolute -top-6 text-xs text-[var(--color-brand-cyan-muted)]">
              // initiate_project
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4 w-fit">
              <Zap className="w-6 h-6 text-[var(--color-brand-cyan)]" />
              <span className="font-bold text-2xl tracking-wider text-white">
                SPARK MEDIA
              </span>
            </Link>
            <p className="text-[var(--color-brand-cyan-muted)] max-w-sm mb-6">
              Digital · Creative · Bold. We build brands that dominate their space.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm text-white mb-4 uppercase tracking-widest font-bold">
              Directory
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services" className="text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm">
                  /services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm">
                  /work
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm">
                  /process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm">
                  /contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm text-white mb-4 uppercase tracking-widest font-bold">
              Network
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="https://instagram.com/sparkmedia.in" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[var(--color-brand-cyan)] opacity-50">&gt;</span> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[var(--color-brand-cyan)] opacity-50">&gt;</span> Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm flex items-center gap-2">
                  <span className="text-[var(--color-brand-cyan)] opacity-50">&gt;</span> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cyan-thin/10 text-xs text-[var(--color-brand-cyan-muted)]">
          <p>© {new Date().getFullYear()} Spark Media. All rights reserved.</p>
          <p className="mt-2 md:mt-0">System Status: <span className="text-[var(--color-brand-cyan)]">Online</span></p>
        </div>
      </div>
    </footer>
  );
}
