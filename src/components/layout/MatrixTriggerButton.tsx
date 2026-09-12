"use client";

import { Bot } from "lucide-react";

export default function MatrixTriggerButton() {
  return (
    <button 
      onClick={() => window.dispatchEvent(new CustomEvent('trigger_konami'))}
      className="w-full sm:w-auto px-8 py-4 bg-muted text-foreground font-bold uppercase tracking-widest rounded-full hover:bg-red-500/10 hover:text-red-500 hover:border-red-500 transition-colors flex items-center justify-center gap-2 border border-border"
    >
      <Bot className="w-5 h-5" />
      Matrix Override
    </button>
  );
}
