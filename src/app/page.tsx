"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal } from "lucide-react";

const STATS = [
  { label: "Brands Scaled", value: "50+" },
  { label: "Avg Reach Increase", value: "3.2x" },
  { label: "Retention Rate", value: "87%" },
  { label: "Campaigns Launched", value: "120+" },
  { label: "Data Points Analyzed", value: "10M+" },
];

const SERVICES = [
  {
    id: "social",
    title: "Social Media Management",
    desc: "Data-driven organic growth and community building.",
    icon: "$ ./social",
  },
  {
    id: "brand",
    title: "Brand Identity Design",
    desc: "Precision engineering for your visual presence.",
    icon: "$ ./brand",
  },
  {
    id: "content",
    title: "Content Creation",
    desc: "High-conversion assets engineered for engagement.",
    icon: "$ ./content",
  },
  {
    id: "ads",
    title: "Paid Ads & Analytics",
    desc: "Algorithm-optimized campaigns for maximum ROI.",
    icon: "$ ./ads",
  },
];

const CASE_STUDIES = [
  {
    id: "fintech-startup",
    title: "ScalePay App Launch",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    beforeStat: "1.2k Users",
    afterStat: "45k Users",
  },
  {
    id: "ecommerce-brand",
    title: "Lumina Gear Global",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    beforeStat: "$40k/mo",
    afterStat: "$1.8L/mo",
  },
];

// Typing Text Component
const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    setDisplayedText(""); // Reset text on mount
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return (
    <span className="inline-block relative">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-3 md:w-6 h-[1em] bg-[var(--color-brand-cyan)] ml-2 align-middle -mt-2"
      />
    </span>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
            alt="Abstract dark grid"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-deep)] to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start">
          <div className="flex items-center gap-3 text-[var(--color-brand-cyan)] mb-6 text-sm md:text-base font-bold">
            <Terminal className="w-5 h-5" />
            <span>SYSTEM_READY_</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <TypingText text="WE DON'T GUESS. WE GROW." />
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-brand-cyan-muted)] max-w-2xl mb-12">
            Data-driven execution. Sharp design. Precision marketing that scales your brand with algorithmic certainty.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[var(--color-brand-cyan)] text-[var(--color-brand-deep)] font-bold uppercase tracking-wider hover:bg-white transition-colors duration-200 border border-[var(--color-brand-cyan)] flex items-center justify-center gap-2 group"
            >
              Initiate sequence
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/work" 
              className="px-8 py-4 bg-transparent text-[var(--color-brand-cyan)] border border-[var(--color-brand-cyan)] font-bold uppercase tracking-wider hover:bg-[var(--color-brand-cyan)] hover:text-[var(--color-brand-deep)] transition-colors duration-200 flex items-center justify-center"
            >
              View Output log
            </Link>
          </div>
        </div>
      </section>

      {/* STATS TICKER */}
      <div className="border-y border-cyan-thin/30 bg-[var(--color-brand-dark)] overflow-hidden py-4 flex relative z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap"
        >
          {/* Double the stats to create seamless loop */}
          {[...STATS, ...STATS].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 px-8 md:px-16 border-r border-cyan-thin/20 last:border-none">
              <span className="text-[var(--color-brand-cyan)] font-bold text-xl md:text-3xl">{stat.value}</span>
              <span className="text-xs md:text-sm text-white/50 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* WHAT WE DO */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[var(--color-brand-cyan-muted)] text-sm mb-2 block">// core_modules</span>
            <h2 className="text-4xl md:text-5xl font-bold">WHAT WE DO.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-brand-cyan)]/20 border border-[var(--color-brand-cyan)]/20">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-[var(--color-brand-deep)] p-10 md:p-16 group hover:bg-[var(--color-brand-dark)] transition-colors duration-200"
              >
                <div className="text-[var(--color-brand-cyan)] text-sm mb-6 opacity-60 font-bold group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[var(--color-brand-cyan-muted)]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-32 px-6 bg-[var(--color-brand-dark)] relative z-10 border-t border-cyan-thin/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[var(--color-brand-cyan-muted)] text-sm mb-2 block">// execution_results</span>
              <h2 className="text-4xl md:text-5xl font-bold">PROVEN OUTPUT.</h2>
            </div>
            <Link href="/work" className="text-[var(--color-brand-cyan)] hover:text-white transition-colors flex items-center gap-2 group border-b border-transparent hover:border-white pb-1 w-fit">
              View full directory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <Link 
                key={study.id} 
                href={`/work/${study.id}`}
                className="group block relative border border-cyan-thin/30 bg-[var(--color-brand-deep)] overflow-hidden"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Hover Stat Reveal Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-[var(--color-brand-deep)] via-[var(--color-brand-deep)]/80 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3 text-[var(--color-brand-cyan)] text-sm font-bold">
                      <span>[{study.category}]</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-6">{study.title}</h3>
                    
                    {/* Before/After stat swipe */}
                    <div className="flex items-center gap-6 border-t border-cyan-thin/30 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div>
                        <p className="text-xs text-white/50 mb-1">BEFORE</p>
                        <p className="text-xl line-through text-red-400/70">{study.beforeStat}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[var(--color-brand-cyan)]" />
                      <div>
                        <p className="text-xs text-white/50 mb-1">AFTER</p>
                        <p className="text-2xl text-[var(--color-brand-cyan)] font-bold">{study.afterStat}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-8 max-w-3xl leading-tight">
          READY TO UPGRADE YOUR BRAND'S OPERATING SYSTEM?
        </h2>
        <Link 
          href="/contact" 
          className="px-10 py-5 bg-[var(--color-brand-cyan)] text-[var(--color-brand-deep)] font-bold uppercase tracking-wider hover:bg-white transition-colors duration-200 flex items-center justify-center gap-3 group text-lg"
        >
          Start a project
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
