"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function MatrixRain({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // We mix random matrix characters with the letters of CHIRAG and ASTA heavily weighted
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()CHIRAGASTACHIRAGASTA";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center cursor-crosshair"
      onClick={onClose}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />
      
      <div className="relative z-10 text-[#0F0] text-center pointer-events-none bg-black/50 p-8 rounded-lg border border-[#0F0]/30 backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-widest uppercase">System Overridden</h1>
        <p className="text-xl font-mono mb-8 opacity-80">Welcome to CHIRAG-OS Root Access.</p>
        <p className="text-sm font-mono opacity-50 animate-pulse">Click anywhere to terminate connection...</p>
      </div>
    </motion.div>
  );
}
