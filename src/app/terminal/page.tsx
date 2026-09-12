"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useSoundEffects } from "@/hooks/useSoundEffects";

type HistoryLine = {
  command: string;
  output: string | React.ReactNode;
};

const ASCII_ART = `
  ____ _   _ ___ ____      _    ____ 
 / ___| | | |_ _|  _ \\    / \\  / ___|
| |   | |_| || || |_) |  / _ \\| |  _ 
| |___|  _  || ||  _ <  / ___ \\ |_| |
 \\____|_| |_|___|_| \\_\\/_/   \\_\\____|
                                     
CHIRAG-OS v2.0.0 (Neural Kernel)
`;

const BOOT_SEQUENCE = [
  "Booting CHIRAG-OS...",
  "Loading Neural Kernel module... OK",
  "Mounting File System... OK",
  "Starting Asta AI Engine... OK",
  "Establishing Secure Connection... OK",
  "System Ready.",
];

export default function TerminalPage() {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [glitching, setGlitching] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { playTyping, playClick, playSwoosh } = useSoundEffects();

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    
    const boot = async () => {
      for (let i = 0; i < BOOT_SEQUENCE.length; i++) {
        timeoutIds.push(setTimeout(() => {
          setHistory(prev => [...prev, { command: "", output: BOOT_SEQUENCE[i] }]);
        }, i * 400));
      }
      
      timeoutIds.push(setTimeout(() => {
        setHistory(prev => [...prev, { command: "", output: ASCII_ART + "\nType 'help' to see available commands." }]);
        setIsBooting(false);
      }, BOOT_SEQUENCE.length * 400 + 500));
    };

    boot();

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!isBooting && !glitching) {
      inputRef.current?.focus();
    }
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isBooting, glitching]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isBooting && !glitching) {
      playClick();
      const cmd = input.trim().toLowerCase();
      let output: string | React.ReactNode = "";

      switch (cmd) {
        case "help":
          output = "Available commands:\n  neofetch  - Display system stats\n  ls        - List featured projects\n  cat <prj> - View project details (e.g. cat omnix)\n  cat hidden.txt - ?????\n  sudo rm -rf / - WARNING: DO NOT USE\n  contact   - Display email address\n  clear     - Clear terminal\n  exit      - Return to GUI";
          break;
        case "whoami":
        case "neofetch":
          output = `
OS: CHIRAG-OS v2.0
Host: Asta Neural Core
Uptime: ${Math.floor(Math.random() * 100)} days
Packages: 402 (npm)
Shell: zsh
Developer: ${profile.name}
Role: ${profile.role}
Stack: Next.js, React, TypeScript, Tailwind, Python, AI
`;
          break;
        case "ls":
          output = projects.filter(p => p.featured || p.flagship).map(p => `${p.slug} - ${p.title}`).join("\n");
          output += "\nhidden.txt";
          break;
        case "cat hidden.txt":
          output = "You found it! If you see this, message me on LinkedIn and say 'Asta sent me'.";
          break;
        case "sudo rm -rf /":
          setGlitching(true);
          playSwoosh(); // Add a glitch sound if available, otherwise swoosh
          output = "CRITICAL ERROR: SYSTEM DELETION INITIATED...\nDELETING ROOT...\nDELETING MEMORY...";
          setTimeout(() => {
            router.push("/");
          }, 3000);
          break;
        case "contact":
          output = `Reach out at: ${profile.email}`;
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "exit":
          router.push("/");
          return;
        default:
          if (cmd.startsWith("cat ")) {
            const slug = cmd.split(" ")[1];
            if (slug === "hidden.txt") break;
            
            const prj = projects.find(p => p.slug === slug);
            if (prj) {
              output = `${prj.title}\n======================\n${prj.desc}\n\nTech Stack: ${prj.stack.join(", ")}`;
            } else {
              output = `cat: ${slug}: No such file or directory`;
            }
          } else if (cmd) {
            output = `Command not found: ${cmd}. Type 'help' for available commands.`;
          }
      }

      setHistory(prev => [...prev, { command: input, output }]);
      setInput("");
    }
  };

  return (
    <div 
      className={`min-h-screen bg-black text-[#0F0] font-mono p-6 pt-12 cursor-text selection:bg-[#0F0] selection:text-black ${glitching ? 'animate-pulse blur-sm' : ''}`}
      onClick={() => !isBooting && inputRef.current?.focus()}
    >
      <div className={`max-w-4xl mx-auto pb-24 ${glitching ? 'skew-x-12 translate-x-4 opacity-50' : ''} transition-all duration-75`}>
        {history.map((line, i) => (
          <div key={i} className="mb-4 whitespace-pre-wrap break-words">
            {line.command && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-400">guest@chirag-os</span>
                <span className="text-white">~</span>
                <span className="text-gray-400">$</span>
                <span>{line.command}</span>
              </div>
            )}
            <div className="text-green-500 opacity-90">{line.output}</div>
          </div>
        ))}

        {!isBooting && (
          <div className="flex items-center gap-2">
            <span className="text-blue-400">guest@chirag-os</span>
            <span className="text-white">~</span>
            <span className="text-gray-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              disabled={glitching}
              className="flex-1 bg-transparent border-none outline-none text-[#0F0] font-mono shadow-none"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}
        <div ref={endRef} className="h-20" />
      </div>
      
      {/* Glitch Overlay */}
      {glitching && (
        <div className="fixed inset-0 pointer-events-none z-50 bg-red-500/20 mix-blend-overlay animate-bounce" />
      )}
    </div>
  );
}
