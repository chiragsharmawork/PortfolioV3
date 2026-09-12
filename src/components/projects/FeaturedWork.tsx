"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  // Exclude omnix and vertex-studio as they have their own sections
  const featured = projects.filter(p => p.featured && p.slug !== "omnix" && p.slug !== "vertex-studio").slice(0, 2);

  if (featured.length === 0) return null;

  return (
    <section className="py-32 bg-muted/10 relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Additional Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/work/${project.slug}`} className="block group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-md bg-card mb-6">
                  {project.img ? (
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-muted-foreground">[{project.title}]</div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Explore Project <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-muted-foreground">{project.tagline}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-mono font-bold bg-muted px-2 py-1 rounded border border-border">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 text-center"
        >
          <Link 
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border font-bold rounded-full hover:bg-muted hover:border-primary/50 transition-all shadow-sm"
          >
            View all {projects.length} projects <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
