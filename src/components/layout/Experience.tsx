"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Experience() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Flatten skills
  const allSkills = profile.skills.flatMap(group => group.items);
  
  // Find projects using the hovered skill
  const relatedProjects = hoveredSkill 
    ? projects.filter(p => p.stack.some(s => s.toLowerCase().includes(hoveredSkill.toLowerCase())))
    : [];

  return (
    <section id="experience" className="py-32 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase">Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Hover over a technology to see how I've applied it in production.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              {allSkills.map((skill, index) => {
                const isActive = hoveredSkill === skill;
                const isDimmed = hoveredSkill !== null && !isActive;

                return (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`
                      cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                      ${isActive 
                        ? 'bg-primary text-primary-foreground border-primary scale-110 shadow-lg' 
                        : isDimmed 
                          ? 'bg-transparent text-muted-foreground/30 border-transparent scale-95' 
                          : 'bg-card text-foreground border-border hover:border-primary/50'}
                    `}
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative min-h-[300px]">
            <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredSkill ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                Applied in {relatedProjects.length} {relatedProjects.length === 1 ? 'Project' : 'Projects'}
              </h3>
              
              {relatedProjects.length > 0 ? (
                <div className="space-y-4">
                  {relatedProjects.map((project, i) => (
                    <motion.div 
                      key={project.slug}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        href={`/work/${project.slug}`}
                        className="group block p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{project.tagline}</p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm text-center">
                  Used internally for scripts, tooling, or pending public case studies.
                </div>
              )}
            </div>

            <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center text-muted-foreground/50 border border-dashed border-border/50 rounded-2xl ${hoveredSkill ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="text-center">
                <span className="block text-2xl mb-2">👆</span>
                <span className="text-sm">Hover a skill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
