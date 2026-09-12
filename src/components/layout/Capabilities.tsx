"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { CheckCircle2 } from "lucide-react";

export default function Capabilities({ leetCodeCount = 300 }: { leetCodeCount?: number }) {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">Technical Arsenal</h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-12">
              I don't just learn frameworks; I learn how systems work underneath. This is the stack I use to build scalable products.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl"
                >
                  <div className="text-3xl font-black text-foreground mb-1">
                    {stat.label.includes("DSA") ? `${leetCodeCount}+` : stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {profile.skills.map((skillGroup, i) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-muted/30 border border-border/50"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
