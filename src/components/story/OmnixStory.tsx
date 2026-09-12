"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Eye, BrainCircuit, Wrench, RefreshCw, Database } from "lucide-react";
import { projects } from "@/data/projects";

const OMNIX_STAGES = [
  { icon: Terminal, label: "Intent", desc: "User provides high-level natural language goal." },
  { icon: Eye, label: "Perception", desc: "Computer vision detects screen state and UI elements." },
  { icon: BrainCircuit, label: "Planning", desc: "LLM breaks down goal into actionable steps." },
  { icon: Wrench, label: "Execution", desc: "Playwright and PyAutoGUI execute actions." },
  { icon: RefreshCw, label: "Recovery", desc: "Verifies state; auto-corrects if execution fails." },
];

export default function OmnixStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const omnix = projects.find(p => p.slug === "omnix");

  if (!omnix) return null;

  return (
    <section ref={containerRef} className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-xs font-mono uppercase tracking-widest mb-8 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Autonomous AI Agent
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">OMNIX</h2>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
              An intelligent desktop agent that doesn't just chat—it observes, reasons, and controls your environment to complete tasks autonomously.
            </p>
            <Link 
              href={`/work/${omnix.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all group"
            >
              Read Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50"
          >
            {omnix.img && (
              <Image src={omnix.img} alt="OMNIX Interface" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
          </motion.div>
        </div>

        {/* The Execution Pipeline */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-12 text-center">Execution Pipeline</h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {OMNIX_STAGES.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center relative z-10 mb-6 group-hover:border-primary/50 group-hover:bg-white/5 transition-all">
                      <Icon className="w-6 h-6 text-white/70 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{stage.label}</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-mono">{stage.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
