"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { useInView, animate, motion } from "framer-motion";
import { CASE_STUDIES } from "@/data/case-studies";

// Animated Number Component
function AnimatedNumber({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            // Format with commas, e.g., 45000 -> 45,000
            nodeRef.current.textContent = Math.round(value).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from.toLocaleString()}</span>;
}

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = CASE_STUDIES.find((s) => s.id === slug);

  if (!study) {
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 relative">
      {/* Back Link */}
      <div className="pt-8 pb-4 px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-[var(--color-brand-pink)] transition-colors text-sm font-bold uppercase tracking-wider group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-8 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/10">
              {study.category}
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/80 font-medium">Client: <span className="text-white font-bold">{study.client}</span></span>
            <span className="text-white/40">|</span>
            <span className="text-white/80 font-medium">Duration: <span className="text-white font-bold">{study.duration}</span></span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 leading-tight text-white"
          >
            {study.title}
          </motion.h1>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[40vh] md:h-[70vh] w-full max-w-7xl mx-auto px-6 mb-24 z-10"
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-md border border-white/10">
          <div className="absolute inset-0 bg-[var(--color-brand-pink)]/10 z-10 mix-blend-multiply" />
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col gap-24 relative z-10">
        
        {/* Challenge */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-brand-pink)] to-[var(--color-brand-violet)] font-black text-4xl opacity-50">01</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Challenge</h2>
          </div>
          <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-pink)] opacity-10 rounded-full blur-3xl" />
            <p className="text-lg md:text-xl text-white/80 leading-relaxed relative z-10">
              {study.challenge}
            </p>
          </div>
        </motion.section>

        {/* Strategy */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-brand-violet)] to-[var(--color-brand-cyan)] font-black text-4xl opacity-50">02</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Strategy</h2>
          </div>
          <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-brand-violet)] opacity-10 rounded-full blur-3xl" />
            <p className="text-lg md:text-xl text-white/80 leading-relaxed relative z-10">
              {study.strategy}
            </p>
          </div>
        </motion.section>

        {/* Execution */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-pink)] font-black text-4xl opacity-50">03</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Execution</h2>
          </div>
          <ul className="flex flex-col gap-6">
            {study.execution.map((step, idx) => (
              <li key={idx} className="glass p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-cyan)] shrink-0 mt-0.5" />
                <span className="text-lg md:text-xl text-white/90">{step}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Results Matrix */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-brand-pink)] to-rose-500 font-black text-4xl opacity-50">04</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Results</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.results.map((result, idx) => {
              const gradients = [
                "from-[var(--color-brand-pink)] to-rose-300",
                "from-[var(--color-brand-violet)] to-orange-300",
                "from-[var(--color-brand-cyan)] to-teal-300",
              ];
              const color = gradients[idx % gradients.length];
              
              return (
                <div key={idx} className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-2xl`} />
                  
                  <div className="flex items-center gap-2 mb-8">
                    <TrendingUp className="w-5 h-5 text-white/50" />
                    <span className="text-sm text-white/50 uppercase tracking-widest font-bold">
                      {result.label}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/40 font-bold tracking-wider">BEFORE</span>
                      <span className="text-lg text-white/40 line-through decoration-white/20">
                        {result.prefix}{result.before.toLocaleString()}{result.suffix}
                      </span>
                    </div>
                    <div className="w-full h-px bg-white/10 mb-5" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80 font-bold tracking-wider">AFTER</span>
                      <span className={`text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
                        {result.prefix}
                        <AnimatedNumber from={0} to={result.after} />
                        {result.suffix}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Next Step CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-10 md:p-14 glass rounded-3xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden text-center md:text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-pink)]/10 to-[var(--color-brand-cyan)]/10 z-0" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-2">Ready to be our next success story?</h3>
            <p className="text-white/70 text-lg">Let's engineer growth for your brand.</p>
          </div>
          
          <Link href="/contact" className="relative z-10 px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group whitespace-nowrap">
            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.section>

      </div>
    </div>
  );
}
