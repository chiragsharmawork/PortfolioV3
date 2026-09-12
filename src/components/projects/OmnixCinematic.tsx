"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { projects } from "@/data/projects";

const architectureNodes = [
  { id: "user", label: "User Goal", detail: '"Open notepad and check weather"' },
  { id: "perception", label: "Perception", detail: "YOLO detects screen state & UI bounding boxes" },
  { id: "reasoning", label: "Agent Brain", detail: "LLM analyzes intent vs current screen" },
  { id: "planning", label: "Planner", detail: "Generates execution step sequence" },
  { id: "action", label: "Tool Execution", detail: "Mouse, Keyboard, OS control via Playwright" },
  { id: "memory", label: "Memory", detail: "Stores contextual execution context for next turns" },
  { id: "result", label: "Result", detail: "Task successfully completed" }
];

export default function OmnixCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flagship = projects.find(p => p.slug === 'omnix');
  const [activeNode, setActiveNode] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for animations
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      const nodeIndex = Math.min(
        Math.floor(latest * architectureNodes.length),
        architectureNodes.length - 1
      );
      setActiveNode(nodeIndex);
    });
  }, [smoothProgress]);

  if (!flagship) return null;

  return (
    <section ref={containerRef} id="omnix" className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Grid & Vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

        <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              Flagship System
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">{flagship.title}</h2>
            <p className="text-xl text-muted-foreground">{flagship.tagline}</p>
          </motion.div>

          <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Architecture Diagram */}
            <div className="relative flex flex-col space-y-4">
              {architectureNodes.map((node, i) => {
                const isActive = activeNode === i;
                const isPast = activeNode > i;
                
                return (
                  <div key={node.id} className="relative flex items-center">
                    {/* Connecting Line */}
                    {i !== architectureNodes.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-[-16px] w-0.5 bg-border -z-10">
                        {isPast && (
                          <motion.div 
                            layoutId="pathPulse"
                            className="w-full bg-primary absolute top-0 bottom-0 origin-top shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                          />
                        )}
                      </div>
                    )}

                    {/* Node */}
                    <div 
                      className={`
                        w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold z-10 transition-all duration-500
                        ${isActive ? 'border-primary bg-primary/20 text-primary scale-110 shadow-[0_0_20px_rgba(var(--primary),0.3)]' : 
                          isPast ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground'}
                      `}
                    >
                      {isPast ? '✓' : i + 1}
                    </div>

                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-primary' : isPast ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {node.label}
                      </h3>
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isActive || isPast ? 1 : 0.4, height: 'auto' }}
                        className="text-sm text-muted-foreground mt-1"
                      >
                        {node.detail}
                      </motion.p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Terminal Simulation */}
            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-xl overflow-hidden shadow-2xl h-[400px] flex flex-col">
              <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="mx-auto text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  OMNIX Runtime
                </div>
              </div>
              <div className="flex-1 p-6 font-mono text-sm flex flex-col gap-3 overflow-hidden relative">
                {activeNode >= 0 && <div className="text-foreground"><span className="text-blue-500">System:</span> Waiting for goal...</div>}
                {activeNode >= 0 && <div className="text-foreground"><span className="text-blue-500">User:</span> {architectureNodes[0].detail}</div>}
                
                {activeNode >= 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-muted-foreground">
                    <span className="text-yellow-500">[Vision]</span> Taking screenshot...<br/>
                    <span className="text-yellow-500">[Vision]</span> Detected 14 interactive bounding boxes.
                  </motion.div>
                )}

                {activeNode >= 2 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-muted-foreground">
                    <span className="text-purple-500">[Brain]</span> Analyzing intent.<br/>
                    <span className="text-purple-500">[Brain]</span> Goal requires: OS interaction + Text entry.
                  </motion.div>
                )}

                {activeNode >= 3 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-muted-foreground">
                    <span className="text-orange-500">[Planner]</span> Generating execution steps:<br/>
                    &nbsp;&nbsp;1. Press Win Key<br/>
                    &nbsp;&nbsp;2. Type &quot;Notepad&quot;<br/>
                    &nbsp;&nbsp;3. Press Enter
                  </motion.div>
                )}

                {activeNode >= 4 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-muted-foreground">
                    <span className="text-red-500">[Action]</span> Executing step 1... OK<br/>
                    <span className="text-red-500">[Action]</span> Executing step 2... OK
                  </motion.div>
                )}

                {activeNode >= 5 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-muted-foreground">
                    <span className="text-teal-500">[Memory]</span> Archiving execution context.<br/>
                    <span className="text-teal-500">[Memory]</span> Semantic index updated.
                  </motion.div>
                )}

                {activeNode >= 6 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-500 font-bold">
                    [Result] Task executed successfully.
                  </motion.div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-card/50 to-transparent"></div>
              </div>
            </div>

          </div>

          <motion.div 
            className="mt-16 transition-opacity duration-500"
            style={{ opacity: activeNode >= 6 ? 1 : 0 }}
          >
            <Link
              href={`/work/${flagship.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 h-12 px-8 py-2"
            >
              Read Full Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
