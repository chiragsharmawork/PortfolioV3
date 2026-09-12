"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function FeaturedProject() {
  const flagship = projects.find(p => p.flagship);

  if (!flagship) return null;

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Flagship Build</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">Deep dive into my best work — architecture, stack, and product thinking.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 w-fit">
                Featured Case Study
              </div>
              <h3 className="text-3xl font-bold mb-2">{flagship.title}</h3>
              <p className="text-xl text-muted-foreground mb-6 font-medium">{flagship.tagline}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {flagship.desc}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🎨</span>
                    <div>
                      <strong className="block text-foreground">Perception</strong>
                      <span className="text-sm text-muted-foreground">Computer vision reads screen state and UI elements</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-border ml-[11px]"></div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">⚙️</span>
                    <div>
                      <strong className="block text-foreground">Agent Brain</strong>
                      <span className="text-sm text-muted-foreground">LLM reasoning turns goals into structured plans</span>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-border ml-[11px]"></div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🚀</span>
                    <div>
                      <strong className="block text-foreground">Automation</strong>
                      <span className="text-sm text-muted-foreground">Controls apps, browser, keyboard, mouse, and files</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                <Link
                  href={`/work/${flagship.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2"
                >
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {flagship.githubUrl && (
                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                )}
              </div>
            </div>
            
            <div className="relative bg-muted/50 border-l border-border hidden lg:block">
              {/* Using a structural representation instead of a raw image for a more premium feel, 
                  or an optimized next/image if the asset exists. The user provided an SVG previously. */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-full aspect-square max-w-md bg-background rounded-xl border border-border shadow-2xl overflow-hidden flex flex-col">
                  {/* Fake UI Header */}
                  <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="mx-auto text-xs font-mono text-muted-foreground">OMNIX Agent Controller</div>
                  </div>
                  {/* Fake UI Body */}
                  <div className="flex-1 p-4 font-mono text-xs flex flex-col gap-2 overflow-hidden relative">
                    <div className="text-muted-foreground">Initializing perception module... <span className="text-green-500">OK</span></div>
                    <div className="text-muted-foreground">Connecting to LLM brain... <span className="text-green-500">OK</span></div>
                    <div className="mt-2 text-foreground">&gt; User: "Open notepad and write a python script to fetch weather"</div>
                    <div className="text-primary mt-1">[Thinking] Intent parsed. Strategy: OS Control + Text Generation.</div>
                    <div className="text-muted-foreground mt-1">↳ Action: Pressing Win Key</div>
                    <div className="text-muted-foreground">↳ Action: Typing "Notepad"</div>
                    <div className="text-muted-foreground">↳ Action: Pressing Enter</div>
                    <div className="text-yellow-500 mt-1">[Vision] Waiting for Notepad window...</div>
                    <div className="text-green-500">[Vision] Notepad detected at (100, 100).</div>
                    <div className="text-muted-foreground mt-1">↳ Action: Typing generated python script...</div>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
