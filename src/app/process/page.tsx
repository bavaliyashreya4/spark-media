"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "DISCOVER",
    command: "$ ./initiate_discovery",
    icon: <Database className="w-6 h-6" />,
    logs: [
      "[SYS] Initializing deep dive into brand architecture...",
      "[OK] Competitor matrices mapped.",
      "[OK] Audience behavioral patterns analyzed.",
      "[OK] Baseline metrics captured.",
      "[SYS] Discovery phase complete. Output generated."
    ]
  },
  {
    id: "02",
    title: "STRATEGIZE",
    command: "$ ./compile_strategy --verbose",
    icon: <Cpu className="w-6 h-6" />,
    logs: [
      "[SYS] Compiling growth algorithms...",
      "[OK] Content pillars defined (3 parameters).",
      "[OK] Visual identity framework locked.",
      "[WARN] Current ad spend efficiency sub-optimal. Rerouting...",
      "[OK] 90-day execution roadmap approved."
    ]
  },
  {
    id: "03",
    title: "EXECUTE",
    command: "$ ./run_campaign --force",
    icon: <Terminal className="w-6 h-6" />,
    logs: [
      "[SYS] Deploying assets to production...",
      "[OK] High-fidelity creatives rendered.",
      "[OK] Copywriting frameworks injected.",
      "[OK] Ad sets launched across 3 networks.",
      "[SYS] All systems online. Monitoring incoming traffic..."
    ]
  },
  {
    id: "04",
    title: "GROW",
    command: "$ watch -n 1 ./track_metrics",
    icon: <Rocket className="w-6 h-6" />,
    logs: [
      "[SYS] Real-time analytics streaming enabled.",
      "[OK] A/B test results positive. Scaling winning ad set.",
      "[OK] Organic reach velocity increasing.",
      "[OK] Retention loop activated.",
      "[SYS] Growth targets exceeded. Ready for next cycle."
    ]
  }
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-brand-deep)] pt-20 pb-12 px-6 border-b border-cyan-thin/30">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[var(--color-brand-cyan-muted)] text-sm mb-4 block font-mono">
            // sys.architecture.process
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
            &gt; Operating System
          </h1>
          <p className="text-[var(--color-brand-cyan-muted)] max-w-2xl mx-auto text-lg">
            A precise, sequential approach to brand scaling. No guesswork, just documented output.
          </p>
        </div>
      </div>

      {/* Process Sequence */}
      <div className="flex-grow max-w-4xl mx-auto w-full px-6 py-24 relative z-10">
        <div className="absolute left-6 md:left-1/2 top-24 bottom-24 w-px bg-cyan-thin/20 hidden md:block" />

        <div className="flex flex-col gap-16 md:gap-32">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Center Node (Desktop) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-12 h-12 bg-[var(--color-brand-deep)] border border-[var(--color-brand-cyan)] rounded-none items-center justify-center text-[var(--color-brand-cyan)] z-10 shadow-[0_0_15px_rgba(0,229,200,0.2)]">
                {step.icon}
              </div>

              {/* Title Block */}
              <div className={`md:w-1/2 flex flex-col pt-8 ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"}`}>
                <span className="text-[var(--color-brand-cyan)] font-mono text-xl md:text-3xl font-bold mb-2">
                  {step.id}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{step.title}</h2>
              </div>

              {/* Terminal Log Block */}
              <div className="md:w-1/2">
                <div className="bg-black border border-cyan-thin/30 rounded-none overflow-hidden">
                  <div className="bg-[#111] px-4 py-2 border-b border-cyan-thin/20 flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="ml-4 text-xs text-white/40 font-mono">terminal - root@spark</span>
                  </div>
                  
                  <div className="p-6 font-mono text-sm md:text-base leading-relaxed bg-[var(--color-brand-dark)]">
                    <div className="text-[var(--color-brand-cyan)] mb-4 font-bold">
                      {step.command}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      {step.logs.map((log, logIdx) => (
                        <motion.div
                          key={logIdx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (logIdx * 0.4) }}
                          className={`${
                            log.includes("[OK]") ? "text-green-400" :
                            log.includes("[WARN]") ? "text-yellow-400" :
                            "text-white/70"
                          }`}
                        >
                          {log}
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-3 h-5 bg-[var(--color-brand-cyan)] mt-4 inline-block"
                    />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
