"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, Activity } from "lucide-react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "DISCOVER",
    subtitle: "Mapping the Blueprint",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    color: "from-[var(--color-brand-pink)] to-rose-500",
    glow: "glow-pink",
    items: [
      "Deep dive into brand architecture",
      "Competitor matrices & positioning",
      "Audience behavioral patterns",
      "Defining the 90-day execution roadmap"
    ]
  },
  {
    id: "02",
    title: "STRATEGIZE",
    subtitle: "Engineering the Growth Engine",
    icon: <Target className="w-8 h-8 text-white" />,
    color: "from-[var(--color-brand-violet)] to-purple-600",
    glow: "glow-violet",
    items: [
      "Content pillars & creative direction",
      "Visual identity framework locked",
      "Ad spend efficiency optimization",
      "Platform-specific tactical playbooks"
    ]
  },
  {
    id: "03",
    title: "EXECUTE",
    subtitle: "Deploying High-Fidelity Assets",
    icon: <Rocket className="w-8 h-8 text-white" />,
    color: "from-[var(--color-brand-cyan)] to-blue-500",
    glow: "glow-cyan",
    items: [
      "High-converting creatives rendered",
      "Persuasive copywriting injected",
      "Ad sets launched across targeted networks",
      "Community engagement protocols active"
    ]
  },
  {
    id: "04",
    title: "SCALE",
    subtitle: "Data-Driven Acceleration",
    icon: <Activity className="w-8 h-8 text-white" />,
    color: "from-[var(--color-brand-violet)] to-[var(--color-brand-cyan)]",
    glow: "glow-pink",
    items: [
      "Real-time analytics & performance tracking",
      "A/B testing and creative iteration",
      "Scaling winning campaigns",
      "Activating long-term retention loops"
    ]
  }
];

export default function ProcessPage() {
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
            <Activity className="w-4 h-4 text-[var(--color-brand-violet)]" />
            <span className="text-sm font-semibold text-white/90">Our Methodology</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white"
          >
            HOW WE <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-pink)] via-[var(--color-brand-violet)] to-[var(--color-brand-cyan)]">
              SCALE BRANDS.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-medium"
          >
            A precise, sequential approach to brand scaling. No guesswork, just data-driven creativity and proven frameworks.
          </motion.p>
        </div>
      </div>

      {/* Process Sequence */}
      <div className="flex-grow max-w-5xl mx-auto w-full px-6 py-12 relative z-10">
        <div className="absolute left-[39px] md:left-1/2 top-12 bottom-12 w-px bg-white/10 hidden sm:block" />

        <div className="flex flex-col gap-12 md:gap-24 relative">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col sm:flex-row gap-8 md:gap-16 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Center Node (Desktop) */}
              <div className="hidden sm:flex absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-8 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-20 blur-md`} />
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color}`} />
              </div>

              {/* Title Block */}
              <div className={`sm:w-1/2 flex flex-col pt-6 sm:pt-8 ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"}`}>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color} font-black text-6xl md:text-8xl opacity-60 absolute top-0 ${index % 2 === 0 ? "left-0 md:left-auto md:right-4" : "left-0 md:-left-4"} -z-10`}>
                  {step.id}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">{step.title}</h2>
                <p className={`text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                  {step.subtitle}
                </p>
              </div>

              {/* Content Block */}
              <div className="sm:w-1/2 relative">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${step.glow} opacity-20 pointer-events-none rounded-full blur-[100px]`} />
                
                <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} />
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  <ul className="flex flex-col gap-4">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-2 shrink-0`} />
                        <span className="text-white/80 font-medium text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
