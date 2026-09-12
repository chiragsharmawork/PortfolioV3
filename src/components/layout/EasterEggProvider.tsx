"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import MatrixRain from "@/components/layout/MatrixRain";

export default function EasterEggProvider() {
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const { playSwoosh } = useSoundEffects();

  useKonamiCode(() => {
    // 1. Trigger global CSS glitch
    setGlitching(true);
    playSwoosh();
    document.body.classList.add('invert', 'hue-rotate-180', 'animate-pulse');

    // 2. Wait 1.5 seconds for dramatic effect, then drop the rain
    setTimeout(() => {
      setGlitching(false);
      document.body.classList.remove('invert', 'hue-rotate-180', 'animate-pulse');
      setIsMatrixMode(true);
      document.documentElement.classList.add('dark');
      
      // Store that they are a hacker
      localStorage.setItem("hacker_badge", "true");
    }, 1500);
  });

  return (
    <>
      {glitching && (
        <div className="fixed inset-0 z-[9999] bg-red-600/20 mix-blend-difference pointer-events-none flex items-center justify-center">
          <h1 className="text-[10vw] font-black text-red-500 animate-ping">SYSTEM OVERRIDE</h1>
        </div>
      )}
      
      <AnimatePresence>
        {isMatrixMode && (
          <MatrixRain onClose={() => {
            setIsMatrixMode(false);
            playSwoosh();
          }} />
        )}
      </AnimatePresence>
    </>
  );
}
