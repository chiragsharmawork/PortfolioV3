"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactCTA() {
  return (
    <section className="py-32 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 mix-blend-screen pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Let's Build Something Useful.</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm currently {profile.availability.toLowerCase()}. If you have a project that needs building or a problem that needs solving, let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto px-8 py-4 bg-card border border-border font-bold rounded-full hover:border-primary/50 hover:bg-muted transition-all flex items-center justify-center gap-2 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
