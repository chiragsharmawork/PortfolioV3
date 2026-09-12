"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { Search, Home, Briefcase, Code, FileText, Mail, Moon, Sun, FolderGit2, X, Activity } from "lucide-react";
import { projects } from "@/data/projects";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<any[]>([]);
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const { playSwoosh, playClick } = useSoundEffects();

  useEffect(() => {
    fetch('/api/search')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => {
          if (!open) playSwoosh();
          return !open;
        });
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isOpen) return null;

  // Base system commands
  const commands = [
    { name: "Go to Home", icon: <Home className="h-4 w-4" />, action: () => router.push("/") },
    { name: "View All Work", icon: <Briefcase className="h-4 w-4" />, action: () => router.push("/work") },
    { name: "Lab / Experiments", icon: <Code className="h-4 w-4" />, action: () => router.push("/lab") },
    { name: "View Resume", icon: <FileText className="h-4 w-4" />, action: () => router.push("/resume") },
    { name: "Contact Me", icon: <Mail className="h-4 w-4" />, action: () => router.push("/contact") },
    { 
      name: "Copy Email Address", 
      icon: <Mail className="h-4 w-4" />, 
      action: () => { navigator.clipboard.writeText("contact@chirag.com"); alert("Email copied!"); } 
    },
    { 
      name: `Switch to Light Mode`, 
      icon: <Sun className="h-4 w-4" />, 
      action: () => setTheme('light') 
    },
    { 
      name: `Switch to Dark Mode`, 
      icon: <Moon className="h-4 w-4" />, 
      action: () => setTheme('dark') 
    },
    { 
      name: `Initialize Matrix Theme`, 
      icon: <Code className="h-4 w-4 text-primary" />, 
      action: () => setTheme('matrix') 
    },
    { name: "View Visitor Analytics (Hidden)", icon: <Activity className="h-4 w-4" />, action: () => router.push("/analytics") },
  ];

  // Dynamically append all projects for global search
  projects.forEach((p) => {
    commands.push({
      name: `Project: ${p.title}`,
      icon: <FolderGit2 className="h-4 w-4" />,
      action: () => router.push(`/work/${p.slug}`)
    });
  });

  // Dynamically append all MDX notes for global search
  notes.forEach((n) => {
    commands.push({
      name: `Read: ${n.title}`,
      icon: <FileText className="h-4 w-4" />,
      action: () => router.push(`/notes/${n.slug}`)
    });
  });

  commands.push({
    name: "Initialize CHIRAG-OS (Terminal)",
    icon: <Code className="h-4 w-4 text-green-500" />,
    action: () => router.push("/terminal")
  });

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <div className="w-full max-w-xl bg-card border border-border shadow-2xl rounded-xl overflow-hidden flex flex-col">
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground mr-3" />
          <input
            autoFocus
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-lg"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border"
          >
            ESC
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-6 text-center text-muted-foreground text-sm">
              No results found.
            </div>
          ) : (
            <ul className="space-y-1">
              {filteredCommands.map((cmd, i) => (
                <li key={i}>
                  <button
                    className="w-full flex items-center gap-3 px-3 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors text-left"
                    onClick={() => {
                      playClick();
                      setIsOpen(false);
                      cmd.action();
                    }}
                  >
                    <span className="text-muted-foreground">{cmd.icon}</span>
                    {cmd.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
