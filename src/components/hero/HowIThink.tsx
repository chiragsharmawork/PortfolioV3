"use client";

import { motion } from "framer-motion";
import { Wrench, Eye, Zap, RefreshCcw } from "lucide-react";

export default function HowIThink() {
  const principles = [
    {
      icon: Eye,
      title: "UNDERSTAND",
      desc: "Before writing a single line of code, understand the true problem. Technology is just a tool; the goal is solving a human or business need."
    },
    {
      icon: Wrench,
      title: "BUILD",
      desc: "Architect systems, not just features. Write clean, maintainable, and typed code that can scale beyond a prototype."
    },
    {
      icon: Zap,
      title: "AUTOMATE",
      desc: "If it requires repetitive manual effort, it should be automated. Delegate mechanical work to AI agents and scripts."
    },
    {
      icon: RefreshCcw,
      title: "ITERATE",
      desc: "Launch early. Observe how the system breaks or behaves in the real world. Improve and harden the execution loops continuously."
    }
  ];

  return (
    <section className="py-32 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Engineering Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter">HOW I THINK</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 mb-6">
                <p.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">{p.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
