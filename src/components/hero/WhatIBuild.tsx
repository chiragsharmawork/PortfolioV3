"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function WhatIBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Calculate Opacity and Path length
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.2], [0.3, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4], [0.3, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [0.3, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.8], [0.3, 1]);
  const opacity5 = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);

  const scale1 = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);
  const scale4 = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-background relative border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-24 text-center">
          The Intersection
        </h2>

        <div className="max-w-3xl mx-auto relative">
          
          {/* Animated Vertical Line connecting nodes */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-muted -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-primary origin-top"
              style={{ scaleY: pathLength, height: '100%' }}
            />
          </div>

          <div className="space-y-32">
            {/* WEB */}
            <motion.div style={{ opacity: opacity1, scale: scale1 }} className="relative flex md:justify-end md:pr-12 md:text-right pl-20 md:pl-0">
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full top-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]"></div>
              <div className="max-w-sm">
                <div className="text-sm font-mono text-muted-foreground mb-2">01. FOUNDATION</div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Web</h3>
                <p className="text-muted-foreground mt-4">Building fast, responsive interfaces and robust backend architectures. The digital canvas.</p>
              </div>
            </motion.div>

            {/* AI */}
            <motion.div style={{ opacity: opacity2, scale: scale2 }} className="relative flex md:justify-start md:pl-12 pl-20">
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full top-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]"></div>
              <div className="max-w-sm">
                <div className="text-sm font-mono text-muted-foreground mb-2">02. REASONING</div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-primary">AI</h3>
                <p className="text-muted-foreground mt-4">Integrating Large Language Models and computer vision to give software the ability to understand and decide.</p>
              </div>
            </motion.div>

            {/* AUTOMATION */}
            <motion.div style={{ opacity: opacity3, scale: scale3 }} className="relative flex md:justify-end md:pr-12 md:text-right pl-20 md:pl-0">
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full top-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]"></div>
              <div className="max-w-sm">
                <div className="text-sm font-mono text-muted-foreground mb-2">03. EXECUTION</div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Automation</h3>
                <p className="text-muted-foreground mt-4">Creating pipelines, scripts, and programmatic controls that take action across environments without human intervention.</p>
              </div>
            </motion.div>

            {/* INTELLIGENT SYSTEMS */}
            <motion.div style={{ opacity: opacity4, scale: scale4 }} className="relative flex md:justify-start md:pl-12 pl-20">
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full top-1/2 -translate-y-1/2 z-10 shadow-[0_0_30px_rgba(var(--primary),0.8)] flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full animate-ping"></div>
              </div>
              <div className="max-w-sm">
                <div className="text-sm font-mono text-primary mb-2">THE INTERSECTION</div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Intelligent Systems</h3>
                <p className="text-foreground mt-4 font-medium">Software that perceives its environment, reasons about goals, and executes automated actions to achieve them.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          style={{ opacity: opacity5, y: useTransform(opacity5, [0, 1], [50, 0]) }}
          className="mt-32 flex flex-col items-center justify-center gap-6 text-center"
        >
          <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
            Flagship Example
          </div>
          <h4 className="text-5xl md:text-8xl font-black tracking-tighter">OMNIX.</h4>
          <ArrowDown className="w-8 h-8 text-primary animate-bounce mt-4" />
        </motion.div>
      </div>
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
