"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GithubGraph() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-[200px] w-full animate-pulse bg-muted/20 rounded-xl" />;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 border border-border/50 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden relative group"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-8 font-mono flex items-center gap-3">
          <span className="text-primary">~/</span>
          github-activity
          <div className="h-px bg-border flex-1 ml-4" />
        </h3>
        
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="min-w-[750px] pr-4">
            <GitHubCalendar 
              username="chirag-x" 
              colorScheme={isDark ? 'dark' : 'light'}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              blockSize={14}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
