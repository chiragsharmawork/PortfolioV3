import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Beaker, Terminal, Code2, Bot } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import InteractiveGeometry from "@/components/canvas/InteractiveGeometry";
import MatrixTriggerButton from "@/components/layout/MatrixTriggerButton";

export const metadata: Metadata = {
  title: "Lab — Experiments in AI, Automation & Software",
  description: "A space for experiments, prototypes, ideas, AI explorations, and automation tests.",
};

const CATEGORIES = [
  { name: "AI Experiments", icon: Bot, desc: "Testing LLM capabilities, vision models, and local inferencing." },
  { name: "Automation", icon: Terminal, desc: "Browser scripts, Python bots, and desktop automation tools." },
  { name: "UI / Motion", icon: Code2, desc: "Framer Motion tests, canvas experiments, and interactive components." },
  { name: "Prototypes", icon: Beaker, desc: "Proof-of-concept builds before they become full products." }
];

export default function LabPage() {
  // Extract clones/redesigns as 'experiments' or prototypes
  const prototypes = projects.filter(p => p.type === "CLONE" || p.type === "REDESIGN");

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase flex items-center gap-4">
              The Lab <Beaker className="w-10 h-10 md:w-14 md:h-14 text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where I experiment. A space for prototypes, ideas, AI explorations, automation scripts, and things that may eventually become larger products.
            </p>
          </div>
          <div className="h-[400px] w-full border border-border/50 rounded-2xl bg-muted/30 overflow-hidden relative group">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-background/80 shadow-md border border-border/50 rounded-full text-xs text-foreground font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              asta_neural_core.ai
            </div>
            <InteractiveGeometry />
            <div className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-background/80 shadow-md border border-border/50 rounded-full text-xs text-muted-foreground pointer-events-none">
              [ Drag to Interact ]
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/10 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.name} className="p-6 bg-card border border-border rounded-2xl">
                  <Icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secret Access Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-4">Classified Access</h2>
          <p className="text-muted-foreground mb-10">
            You found the lab. These are the experimental access points to the mainframe. Proceed with caution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/terminal" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
              <Terminal className="w-5 h-5" />
              CHIRAG-OS
            </Link>
            <MatrixTriggerButton />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-32 text-center max-w-2xl">
        <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">Building in Public</h2>
        <h3 className="text-2xl font-bold mb-6">Current Focus: Agentic Architecture & System Design</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Most of my recent experimental work has been channeled into building <strong>OMNIX</strong> and refining AI workflows. Smaller scripts and prototypes are currently hosted on my GitHub.
        </p>
        <a 
          href="https://github.com/chirag-x" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-bold hover:underline"
        >
          View all lab work on GitHub <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </section>

      {prototypes.length > 0 && (
        <section className="container mx-auto px-6 md:px-12 border-t border-border/50 pt-24">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-12">Archived UI Prototypes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prototypes.map((project) => (
              <Link 
                href={`/work/${project.slug}`} 
                key={project.slug}
                className="group block"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mb-4 bg-muted">
                  {project.img ? (
                    <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-muted-foreground">[{project.title}]</div>
                  )}
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded uppercase">{project.type}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1">{project.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
