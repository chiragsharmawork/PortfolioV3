"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X, Command, Zap } from "lucide-react";
import { profile } from "@/data/profile";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Lab", href: "/lab" },
    { name: "Notes", href: "/notes" },
    { name: "Guestbook", href: "/guestbook" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  if (pathname === "/terminal") return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? "max-w-4xl px-4" : "container px-6 md:px-12"}`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg" 
            : ""
        }`}>
          <Link href="/" className="font-black text-xl tracking-tighter flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-sm bg-primary text-primary-foreground flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
              CS
            </div>
            {!isScrolled && <span>{profile.name.split(' ')[0]}</span>}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/50"
              title="Command Palette (Ctrl+K)"
              onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            >
              <Command className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                if (theme === "light") setTheme("dark");
                else if (theme === "dark") setTheme("matrix");
                else setTheme("light");
              }}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (
                theme === "light" ? <Moon className="h-5 w-5" /> : 
                theme === "dark" ? <Zap className="h-5 w-5 text-primary" /> : 
                <Sun className="h-5 w-5" />
              )}
            </button>
            
            <button 
              className="md:hidden flex p-2 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border overflow-hidden shadow-2xl"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
