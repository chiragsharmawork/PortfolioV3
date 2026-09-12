"use client";

import { useState } from "react";
import { Sparkles, Loader2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NoteSummarizer({ content }: { content: string }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateSummary = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: content })
      });
      const data = await res.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setSummary(data.summary);
      }
    } catch (err) {
      setError("Failed to connect to AI core.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-10">
      {!summary && !isLoading && !error && (
        <button
          onClick={generateSummary}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm font-bold tracking-widest uppercase"
        >
          <Sparkles className="w-4 h-4" />
          Ask ASTA for Summary
        </button>
      )}

      {isLoading && (
        <div className="flex items-center gap-3 px-4 py-3 bg-muted/30 border border-border/50 rounded-lg text-sm text-muted-foreground w-max">
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
          ASTA is reading the article...
        </div>
      )}

      {error && (
        <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-500 max-w-2xl">
          {error} (Did you configure GEMINI_API_KEY in .env.local?)
        </div>
      )}

      <AnimatePresence>
        {summary && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="p-6 bg-primary/5 border border-primary/20 rounded-2xl max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4 text-primary font-bold tracking-widest uppercase text-xs">
              <Sparkles className="w-4 h-4" />
              ASTA Executive Summary
            </div>
            <ul className="space-y-3">
              {summary.split('\n').filter(line => line.trim().length > 0).map((line, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>{line.replace(/^[-*•]\s*/, '')}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
