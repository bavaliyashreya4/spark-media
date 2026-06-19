"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckSquare } from "lucide-react";
import { useInView, animate } from "framer-motion";
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
    <div className="flex flex-col min-h-screen">
      {/* Back Link */}
      <div className="bg-[var(--color-brand-deep)] pt-8 pb-4 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-[var(--color-brand-cyan-muted)] hover:text-[var(--color-brand-cyan)] transition-colors text-sm font-bold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Return to directory
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[var(--color-brand-deep)] pt-12 pb-24 px-6 border-b border-cyan-thin/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-[var(--color-brand-cyan)] text-sm font-bold">
            <span>[{study.category}]</span>
            <span className="text-[var(--color-brand-cyan-muted)]">|</span>
            <span className="text-white/70">Client: {study.client}</span>
            <span className="text-[var(--color-brand-cyan-muted)]">|</span>
            <span className="text-white/70">Duration: {study.duration}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 uppercase leading-tight">
            {study.title}
          </h1>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[60vh] w-full border-b border-cyan-thin/30 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 bg-[var(--color-brand-deep)]/20 mix-blend-overlay z-10" />
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover grayscale opacity-80"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-24 w-full flex flex-col gap-24">
        
        {/* Challenge */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[var(--color-brand-cyan)] font-mono text-xl">01</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase">&gt; The Challenge</h2>
          </div>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-cyan-thin/30 pl-6">
            {study.challenge}
          </p>
        </section>

        {/* Strategy */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[var(--color-brand-cyan)] font-mono text-xl">02</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase">&gt; System Strategy</h2>
          </div>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed border-l-2 border-cyan-thin/30 pl-6">
            {study.strategy}
          </p>
        </section>

        {/* Execution */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[var(--color-brand-cyan)] font-mono text-xl">03</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase">&gt; Execution Steps</h2>
          </div>
          <ul className="flex flex-col gap-6 pl-6">
            {study.execution.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckSquare className="w-6 h-6 text-[var(--color-brand-cyan)] shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-white/80">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Results Matrix */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[var(--color-brand-cyan)] font-mono text-xl">04</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase">&gt; Final Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.results.map((result, idx) => (
              <div key={idx} className="bg-[var(--color-brand-dark)] border border-cyan-thin/30 p-8 flex flex-col justify-between">
                <span className="text-sm text-[var(--color-brand-cyan-muted)] uppercase tracking-widest font-bold mb-8">
                  // {result.label}
                </span>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/50">BEFORE</span>
                    <span className="text-lg text-white/70 line-through">
                      {result.prefix}{result.before.toLocaleString()}{result.suffix}
                    </span>
                  </div>
                  <div className="w-full h-px bg-cyan-thin/10 mb-4" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-brand-cyan)] font-bold">AFTER</span>
                    <span className="text-4xl font-bold text-[var(--color-brand-cyan)]">
                      {result.prefix}
                      <AnimatedNumber from={0} to={result.after} />
                      {result.suffix}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Step CTA */}
        <section className="mt-12 pt-12 border-t border-cyan-thin/30 flex justify-between items-center">
          <p className="text-xl font-bold">WANT SIMILAR OUTPUT?</p>
          <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold uppercase hover:bg-[var(--color-brand-cyan)] transition-colors flex items-center gap-2 group">
            Initiate Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

      </div>
    </div>
  );
}
