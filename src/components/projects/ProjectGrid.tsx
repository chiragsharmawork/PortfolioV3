"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectGrid() {
  const selectedProjects = projects.filter(p => !p.flagship);

  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Selected Works</h2>
            <p className="text-muted-foreground text-xl max-w-2xl">Practical applications built across the stack.</p>
          </div>
        </div>

        <div className="space-y-32">
          {selectedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Image/Visual Container */}
              <div className="w-full md:w-1/2 group">
                <Link href={`/work/${project.slug}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border shadow-2xl" data-cursor="view">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  {project.img ? (
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-700 ease-out" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-muted-foreground/50 group-hover:scale-105 transition-transform duration-700">
                      [ {project.title} Interface ]
                    </div>
                  )}
                </Link>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary">
                    {project.category}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <Link href={`/work/${project.slug}`} className="group inline-block" data-cursor="view">
                  <h3 className="text-3xl md:text-5xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                </Link>
                
                <p className="text-xl font-medium text-foreground mb-4">{project.tagline}</p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-sm font-medium text-muted-foreground bg-muted/50 border border-border/50 px-3 py-1.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="group inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-4"
                  data-cursor="view"
                >
                  Read Case Study
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
