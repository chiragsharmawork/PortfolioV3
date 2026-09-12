"use client";

import { useEffect, useState } from "react";
import { TerminalSquare } from "lucide-react";

export default function HackerBadge() {
  const [isHacker, setIsHacker] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("hacker_badge") === "true") {
      setIsHacker(true);
    }
  }, []);

  if (!isHacker) return null;

  return (
    <div className="flex items-center gap-2 mt-4 px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full w-fit animate-fade-in">
      <TerminalSquare className="w-4 h-4" />
      <span className="text-xs font-bold uppercase tracking-widest">Verified Hacker</span>
    </div>
  );
}
