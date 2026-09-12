"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub as Github, FaInstagram as Instagram, FaLinkedin as Linkedin } from "react-icons/fa";
import Link from "next/link";
import { profile } from "@/data/profile";
import Image from "next/image";
import { useRef } from "react";
import ParticleNetwork from "@/components/canvas/ParticleNetwork";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-20">
      <ParticleNetwork />
      {/* Background System */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Identity */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Full-Stack Gen AI Developer
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] mb-6"
            >
              CHIRAG <br className="hidden lg:block"/> SHARMA<span className="text-primary">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-4 mb-8 max-w-xl"
            >
              <p className="text-xl md:text-2xl text-foreground font-medium">
                I build web products, AI systems & automation that actually do things.
              </p>
              <div className="text-muted-foreground text-sm font-mono flex flex-col md:flex-row md:items-center gap-2 justify-center lg:justify-start">
                <span>B.Tech IT Student · RJIT, Gwalior</span>
                <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-border"></span>
                <span className="text-green-500 flex items-center gap-2 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Open to internships & freelance
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
            >
              <Link 
                href="/work"
                className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 group shadow-xl"
                data-cursor="view"
              >
                Explore my work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/resume"
                className="w-full sm:w-auto px-8 py-4 bg-muted/50 backdrop-blur-md border border-border font-bold rounded-full hover:bg-muted transition-all flex items-center justify-center gap-2 group"
              >
                <FileText className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-muted-foreground" />
                Download resume
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex items-center gap-4 text-muted-foreground"
            >
              <a href={profile.socials.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-7 h-7" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-7 h-7" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div 
            style={{ y: y2, opacity }}
            className="relative w-full max-w-[500px] aspect-[4/5] mx-auto z-10 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 rounded-3xl overflow-hidden border border-border/50 shadow-2xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
              <div className="absolute inset-0 opacity-20 mix-blend-overlay z-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <Image
                src="/images/hero.png"
                alt={profile.name}
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-1000"
                sizes="(max-w-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Technical Metadata Floating Labels */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-1/4 -right-6 md:-right-12 z-30 bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-xl shadow-lg hidden md:block"
            >
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Domain</div>
              <div className="text-sm font-bold">AI Automation</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-1/4 -left-6 md:-left-12 z-30 bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-xl shadow-lg hidden md:block"
            >
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Architecture</div>
              <div className="text-sm font-bold">Full-Stack Systems</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
