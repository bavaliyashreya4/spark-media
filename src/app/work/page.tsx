import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-[var(--color-brand-deep)] pt-20 pb-12 px-6 border-b border-cyan-thin/30">
        <div className="max-w-7xl mx-auto">
          <span className="text-[var(--color-brand-cyan-muted)] text-sm mb-2 block font-mono">
            // directory: /work/case-studies
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            &gt; Execution_Logs
          </h1>
          <p className="text-[var(--color-brand-cyan-muted)] max-w-2xl text-lg">
            Documented performance records. We don't sell ideas; we sell proven mathematical growth.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study) => (
            <Link 
              key={study.id} 
              href={`/work/${study.id}`}
              className="group block relative border border-cyan-thin/30 bg-[var(--color-brand-deep)] overflow-hidden"
            >
              <div className="relative h-96 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-300" />
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-[var(--color-brand-deep)] via-[var(--color-brand-deep)]/80 to-transparent">
                  <div className="flex items-center gap-3 mb-3 text-[var(--color-brand-cyan)] text-sm font-bold">
                    <span>[{study.category}]</span>
                    <span className="text-[var(--color-brand-cyan-muted)]">|</span>
                    <span className="text-white/70">{study.client}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                  
                  <div className="flex items-center gap-2 text-[var(--color-brand-cyan)] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
