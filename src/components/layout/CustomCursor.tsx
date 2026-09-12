"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isDesktop && !isReducedMotion) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const linkOrButton = target.closest("a, button");
      if (linkOrButton) {
        setIsHovered(true);
        if (target.closest("[data-cursor='view']")) setCursorText("VIEW");
        else if (target.closest("[data-cursor='ask']")) setCursorText("ASK");
        else setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference flex items-center justify-center text-[10px] font-bold tracking-widest text-black"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? (cursorText ? 64 : 48) : 16,
        height: isHovered ? (cursorText ? 64 : 48) : 16,
        backgroundColor: "#ffffff",
        borderRadius: "9999px",
        opacity: 1
      }}
      transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
    >
      <AnimatePresence>
        {cursorText && (
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="pointer-events-none"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Temporary inline import for AnimatePresence just to make the component self-contained
import { AnimatePresence } from "framer-motion";
