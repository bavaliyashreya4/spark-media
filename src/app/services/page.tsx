"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "social",
    title: "Social Media Growth",
    desc: "We engineer organic growth through data-backed content loops. Stop posting into the void; start building a high-retention audience.",
    includes: [
      "Audience Architecture & Persona Mapping",
      "Content Calendar Engineering",
      "Community Management & Response Protocols",
      "Weekly Analytics & Conversion Tracking"
    ],
    deliverables: "4x Reels/wk, 3x Carousels/wk, Daily Stories",
    color: "from-[var(--color-brand-pink)] to-rose-500",
    glow: "glow-pink"
  },
  {
    id: "brand",
    title: "Brand Identity Design",
    desc: "Precision visual systems that instantly communicate authority. We build identities that scale across all digital touchpoints.",
    includes: [
      "Logo System & Usage Guidelines",
      "Typography & Color Matrix",
      "Social Media Asset Templates",
      "Brand Voice & Messaging Framework"
    ],
    deliverables: "Comprehensive Brand Guidelines PDF, Figma Source Files",
    color: "from-[var(--color-brand-violet)] to-purple-600",
    glow: "glow-violet"
  },
  {
    id: "content",
    title: "Creative Content",
    desc: "High-fidelity assets engineered to stop the scroll. We produce visual content that converts attention into action.",
    includes: [
      "Short-form Video Production",
      "High-End Product Photography",
      "Motion Graphics & Animation",
      "Copywriting & Scripting"
    ],
    deliverables: "Monthly Content Batch (Ready to post)",
    color: "from-[var(--color-brand-orange)] to-yellow-500",
    glow: "glow-pink"
  },
  {
    id: "ads",
    title: "Performance Ads",
    desc: "Algorithm-optimized campaigns for maximum ROI. We run continuous A/B testing to ensure your budget drives measurable growth.",
    includes: [
      "Meta & Google Ads Management",
      "Conversion Rate Optimization (CRO)",
      "Retargeting Funnels",
      "Custom Lookalike Audience Generation"
    ],
    deliverables: "Live ROI Dashboard, Bi-weekly Strategy Calls",
    color: "from-[var(--color-brand-cyan)] to-blue-500",
    glow: "glow-cyan"
  },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState(SERVICES[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SERVICES.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 250; // offset for sticky header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(SERVICES[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Zap className="w-4 h-4 text-[var(--color-brand-cyan)]" />
            <span className="text-sm font-semibold text-white/90">Our Capabilities</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white"
          >
            SERVICES THAT <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-violet)]">
              DRIVE GROWTH.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-medium"
          >
            We don't just deliver assets. We build scalable systems designed to capture attention and convert it into revenue.
          </motion.p>
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 py-12 relative z-10">
        {/* Sticky Side Nav (Desktop) */}
        <aside className="hidden md:block w-72 shrink-0 relative">
          <div className="sticky top-32 flex flex-col gap-2">
            <span className="text-xs text-white/40 uppercase tracking-widest mb-4 font-bold pl-4">
              Directory
            </span>
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`py-3 px-6 rounded-2xl transition-all duration-300 font-bold ${
                  activeSection === service.id
                    ? "bg-white/10 text-white shadow-lg border border-white/10"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {service.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow md:pl-16 flex flex-col gap-16 md:gap-32">
          {SERVICES.map((service, index) => (
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={service.id} 
              id={service.id} 
              className="scroll-mt-32 relative"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 ${service.glow} opacity-20 pointer-events-none rounded-full blur-[100px]`} />
              
              <div className="glass p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden border border-white/10 group hover:border-white/30 transition-colors">
                
                <div className="relative z-10">
                  <div className={`w-20 h-2 bg-gradient-to-r ${service.color} rounded-full mb-8`} />
                  
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-white/70 mb-12 max-w-3xl leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mb-12 bg-white/5 rounded-3xl p-8 border border-white/10">
                    <h3 className="text-sm text-white/40 uppercase tracking-widest mb-6 font-bold">
                      What's Included
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <CheckCircle2 className={`w-6 h-6 text-[var(--color-brand-cyan)] shrink-0 mt-0.5`} />
                          <span className="text-white/90 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-gradient-to-r ${service.color} p-[1px] rounded-2xl`}>
                    <div className="bg-[var(--color-brand-surface)] rounded-2xl p-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <span className="text-sm text-white/60 uppercase tracking-widest font-bold">
                        The Deliverable
                      </span>
                      <span className="text-lg text-white font-bold md:text-right">
                        {service.deliverables}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
