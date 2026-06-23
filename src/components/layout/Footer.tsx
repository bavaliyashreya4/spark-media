import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-brand-surface)] pt-32 pb-8 overflow-hidden z-10 border-t border-white/10">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-pink)] to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[var(--color-brand-pink)] blur-[120px] opacity-20 pointer-events-none rounded-[100%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Large CTA Section */}
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white">
              LET'S CREATE
            </h2>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--color-brand-bg)] drop-shadow-sm">
              MAGIC.
            </h2>
          </div>
          <Link 
            href="/contact"
            className="px-8 py-5 rounded-full bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center group mb-6 w-fit">
              <div className="flex flex-col">
                <span className="font-black text-4xl tracking-[0.2em] leading-none text-white transition-all duration-300 group-hover:text-[var(--color-brand-pink)]">
                  SPARK
                </span>
                <span className="text-[14px] tracking-[0.4em] font-medium text-white/50 leading-none mt-2">
                  MEDIA
                </span>
              </div>
            </Link>
            <p className="text-white/90 max-w-sm mb-6 text-lg font-medium">
              Bold, colorful, and beautiful. We build digital experiences that dominate their space and leave a lasting impression.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm text-white mb-6 uppercase tracking-widest font-bold">
              Directory
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors font-semibold">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white/80 hover:text-white transition-colors font-semibold">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white/80 hover:text-white transition-colors font-semibold">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm text-white mb-6 uppercase tracking-widest font-bold">
              Network
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="group text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="group text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" /> Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="group text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 text-sm text-white/80">
          <p>© {new Date().getFullYear()} Spark Media. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
