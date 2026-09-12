"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">WHO I AM</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {profile.about[0]}
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                {profile.about[1]}
              </motion.p>
            </div>
            
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors">
                Read full story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground mb-6">Current Learning</h3>
            {profile.learning.map((learn, i) => (
              <motion.div 
                key={learn.topic}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <h4 className="font-bold text-lg mb-2">{learn.topic}</h4>
                <p className="text-sm text-muted-foreground">{learn.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
