"use client";

import { useEffect, useState } from "react";
import { CheckSquare } from "lucide-react";

const SERVICES = [
  {
    id: "social",
    title: "social-media-management",
    desc: "We engineer organic growth through data-backed content loops. Stop posting into the void; start building a high-retention audience.",
    includes: [
      "Audience Architecture & Persona Mapping",
      "Content Calendar Engineering",
      "Community Management & Response Protocols",
      "Weekly Analytics & Conversion Tracking"
    ],
    deliverables: "4x Reels/wk, 3x Carousels/wk, Daily Stories",
  },
  {
    id: "brand",
    title: "brand-identity-design",
    desc: "Precision visual systems that instantly communicate authority. We build identities that scale across all digital touchpoints.",
    includes: [
      "Logo System & Usage Guidelines",
      "Typography & Color Matrix",
      "Social Media Asset Templates",
      "Brand Voice & Messaging Framework"
    ],
    deliverables: "Comprehensive Brand Guidelines PDF, Figma Source Files",
  },
  {
    id: "content",
    title: "content-creation",
    desc: "High-fidelity assets engineered to stop the scroll. We produce visual content that converts attention into action.",
    includes: [
      "Short-form Video Production",
      "High-End Product Photography",
      "Motion Graphics & Animation",
      "Copywriting & Scripting"
    ],
    deliverables: "Monthly Content Batch (Ready to post)",
  },
  {
    id: "ads",
    title: "paid-ads-analytics",
    desc: "Algorithm-optimized campaigns for maximum ROI. We run continuous A/B testing to ensure your budget drives measurable growth.",
    includes: [
      "Meta & Google Ads Management",
      "Conversion Rate Optimization (CRO)",
      "Retargeting Funnels",
      "Custom Lookalike Audience Generation"
    ],
    deliverables: "Live ROI Dashboard, Bi-weekly Strategy Calls",
  },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState(SERVICES[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SERVICES.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200; // offset for sticky header

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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-brand-deep)] pt-20 pb-12 px-6 border-b border-cyan-thin/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            &gt; System_Services
          </h1>
          <p className="text-[var(--color-brand-cyan-muted)] max-w-2xl text-lg">
            Core modules available for deployment. Select a service to initiate processing.
          </p>
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 py-12 relative">
        {/* Sticky Side Nav (Desktop) */}
        <aside className="hidden md:block w-64 shrink-0 relative">
          <div className="sticky top-32 flex flex-col gap-4">
            <span className="text-xs text-[var(--color-brand-cyan-muted)] uppercase tracking-widest mb-2 font-bold">
              // Table of Contents
            </span>
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`text-sm py-2 px-4 border-l-2 transition-all duration-200 ${
                  activeSection === service.id
                    ? "border-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10"
                    : "border-transparent text-white/50 hover:text-white hover:border-white/20"
                }`}
              >
                {service.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow md:pl-16 flex flex-col gap-24">
          {SERVICES.map((service) => (
            <section key={service.id} id={service.id} className="scroll-mt-32">
              <div className="border border-cyan-thin/30 bg-[var(--color-brand-dark)] p-6 md:p-12 relative overflow-hidden group">
                {/* Decorative Terminal Header */}
                <div className="absolute top-0 left-0 w-full h-8 bg-black border-b border-cyan-thin/30 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <span className="text-[10px] text-white/30 ml-2 font-mono">bash - spark-media</span>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[var(--color-brand-cyan)] break-all">
                    $ ./{service.title}
                  </h2>
                  <p className="text-lg text-white/80 mb-10 max-w-3xl leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mb-10">
                    <h3 className="text-sm text-[var(--color-brand-cyan-muted)] uppercase tracking-widest mb-6 font-bold">
                      // parameters_included
                    </h3>
                    <ul className="flex flex-col gap-4">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckSquare className="w-5 h-5 text-[var(--color-brand-cyan)] shrink-0 mt-0.5" />
                          <span className="text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[var(--color-brand-deep)] border border-cyan-thin/20 p-6">
                    <span className="text-xs text-[var(--color-brand-cyan)] uppercase tracking-widest block mb-2 font-bold">
                      Expected Output:
                    </span>
                    <span className="text-sm text-white/90 font-mono">
                      {service.deliverables}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
