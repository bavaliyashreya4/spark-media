"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, Palette, Target } from "lucide-react";

const STATS = [
  { label: "Brands Elevated", value: "150+" },
  { label: "Avg Revenue Growth", value: "3.5x" },
  { label: "Client Retention", value: "94%" },
  { label: "Global Campaigns", value: "200+" },
];

const SERVICES = [
  {
    id: "social",
    title: "Social Growth",
    desc: "Viral campaigns and community building that drives real engagement and loyalty.",
    icon: <TrendingUp className="w-8 h-8 text-[var(--color-brand-pink)]" />,
    color: "from-[var(--color-brand-pink)] to-rose-500"
  },
  {
    id: "brand",
    title: "Brand Identity",
    desc: "Unforgettable visual identities that make your competitors irrelevant.",
    icon: <Palette className="w-8 h-8 text-[var(--color-brand-violet)]" />,
    color: "from-[var(--color-brand-violet)] to-purple-600"
  },
  {
    id: "ads",
    title: "Performance Ads",
    desc: "High-ROI paid campaigns engineered for maximum conversion and scale.",
    icon: <Target className="w-8 h-8 text-[var(--color-brand-cyan)]" />,
    color: "from-[var(--color-brand-cyan)] to-blue-500"
  },
  {
    id: "content",
    title: "Creative Content",
    desc: "Scroll-stopping assets, from 3D motion graphics to cinematic video production.",
    icon: <Sparkles className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    color: "from-[var(--color-brand-orange)] to-yellow-500"
  },
];

const CASE_STUDIES = [
  {
    id: "ecommerce-brand",
    title: "Lumina Cosmetics",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    result: "+300% Online Sales",
  },
  {
    id: "fintech-startup",
    title: "Nimbus Tech App",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
    result: "100k+ Active Users",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-brand-pink)] rounded-full mix-blend-screen filter blur-[150px] opacity-30"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[var(--color-brand-cyan)] rounded-full mix-blend-screen filter blur-[150px] opacity-20"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-[var(--color-brand-cyan)]" />
            <span className="text-sm font-semibold text-white/90">Award Winning Agency 2026</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]"
          >
            IGNITE YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-pink)] via-[var(--color-brand-violet)] to-[var(--color-brand-cyan)] pb-4 block">
              BRAND.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-medium"
          >
            We blend breathtaking design with data-driven strategy to create digital experiences that refuse to be ignored.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center"
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              Start Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/work" 
              className="px-8 py-4 rounded-full glass text-white border border-white/10 font-bold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="border-y border-white/5 bg-black/40 backdrop-blur-md overflow-hidden py-8 flex relative z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap"
        >
          {[...STATS, ...STATS, ...STATS].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center px-16 md:px-24 border-r border-white/10 last:border-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-violet)] font-black text-4xl md:text-5xl mb-2">{stat.value}</span>
              <span className="text-sm md:text-base text-white/60 uppercase tracking-widest font-semibold">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* WHAT WE DO / BENTO BOX */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">OUR EXPERTISE</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Everything you need to dominate your market, housed under one creative roof.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.id} 
                className="glass p-10 md:p-12 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden border border-white/10 hover:border-white/30"
              >
                {/* Hover Gradient Splash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white transition-colors duration-300 relative z-10">{service.title}</h3>
                <p className="text-lg text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-300 relative z-10">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-32 px-6 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">LATEST WORK</h2>
              <p className="text-xl text-white/60">Ideas that changed the game.</p>
            </div>
            <Link href="/work" className="text-lg font-bold text-[var(--color-brand-pink)] hover:text-white transition-colors flex items-center gap-2 group w-fit">
              View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={study.id}
              >
                <Link 
                  href={`/work/${study.id}`}
                  className="group block relative rounded-3xl overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold mb-4 w-fit border border-white/20">
                      {study.category}
                    </span>
                    <h3 className="text-4xl font-bold mb-2 text-white">{study.title}</h3>
                    <div className="flex items-center gap-2 text-[var(--color-brand-cyan)] font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <TrendingUp className="w-6 h-6" /> {study.result}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
