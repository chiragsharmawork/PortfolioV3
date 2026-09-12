"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe2, Zap } from "lucide-react";
import { projects } from "@/data/projects";

export default function VertexStory() {
  const vertex = projects.find(p => p.slug === "vertex-studio");
  if (!vertex) return null;

  return (
    <section className="py-32 bg-card relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl group"
          >
            {vertex.img && (
              <Image src={vertex.img} alt="Vertex Studio" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            )}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20">
              Real Business Operations
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">VERTEX</h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">Digital Growth Studio</h3>
            
            <p className="text-lg leading-relaxed mb-10 max-w-xl">
              An active digital agency bridging the gap between high-performance web development and tangible business growth. 
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">The Business</h4>
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-primary" /> Web Development</li>
                  <li className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-primary" /> Local SEO & Growth</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">My Role</h4>
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Technical Architecture</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Operations & Strategy</li>
                </ul>
              </div>
            </div>

            <Link 
              href={`/work/${vertex.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-all group shadow-xl"
            >
              Explore Business <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
