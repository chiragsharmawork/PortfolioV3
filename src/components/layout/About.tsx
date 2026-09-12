"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Hi, I'm Chirag.</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                I'm a Full Stack Developer from Gwalior, India, currently pursuing my B.Tech in IT at RJIT. I build intelligent web applications and automation systems that bridge the gap between complex engineering and human utility.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                My journey into development started with a fascination for how systems fit together. What began as building basic React interfaces evolved into designing architecture like OMNIX — an autonomous desktop agent powered by computer vision and LLMs.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                When I'm not writing code, I'm usually solving algorithmic challenges, reading up on system design, or exploring the bleeding edge of AI automation. I thrive in environments where I can build end-to-end solutions that solve real problems.
              </motion.p>
            </div>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {profile.education.map((edu, index) => (
              <motion.div 
                key={edu.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex items-start group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 z-10 group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <time className="font-mono text-sm text-primary bg-primary/10 px-2 py-0.5 rounded">{edu.period}</time>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-3">{edu.school}</div>
                  <p className="text-muted-foreground leading-relaxed">{edu.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
