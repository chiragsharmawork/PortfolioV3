"use client";

import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import { useRef, useEffect, useState } from "react";

function Odometer({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl shadow-sm text-center">
      <div className="text-4xl md:text-5xl font-black text-foreground mb-2 tabular-nums tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function QuickProof() {
  return (
    <section className="py-24 relative z-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {profile.stats.map(stat => {
            const num = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
            const suffix = stat.value.includes('+') ? '+' : '';
            return <Odometer key={stat.label} value={num} label={stat.label} suffix={suffix} />;
          })}
        </div>
      </div>
    </section>
  );
}
