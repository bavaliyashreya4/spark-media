"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 relative">
      {/* Header */}
      <div className="pt-20 pb-16 px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-[var(--color-brand-pink)]" />
            <span className="text-sm font-semibold text-white/90">Featured Work</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white"
          >
            OUR <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-pink)] to-[var(--color-brand-violet)]">
              PORTFOLIO.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-medium"
          >
            We don't just sell ideas; we sell proven growth. Explore how we've scaled ambitious brands to new heights.
          </motion.p>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={study.id}
            >
              <Link 
                href={`/work/${study.id}`}
                className="group block relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-white/30 transition-all duration-500 shadow-xl"
              >
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                  {/* Decorative Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-brand-pink)] opacity-0 group-hover:opacity-20 rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none z-10" />
                  
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/10">
                          {study.category}
                        </span>
                        <span className="text-white/70 text-sm font-medium">{study.client}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                        {study.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-[var(--color-brand-pink)] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
