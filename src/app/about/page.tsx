import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Brain, Layers, Globe, Code, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import GithubGraph from "@/components/about/GithubGraph";

export const metadata: Metadata = {
  title: "About Chirag Sharma — Full Stack Gen AI Developer",
  description: "Learn more about Chirag Sharma, my engineering journey, philosophy, and what I build.",
};

const PHILOSOPHIES = [
  { title: "Build useful things.", desc: "Software should solve real problems, not just exist for the sake of it." },
  { title: "Learn by shipping.", desc: "Theoretical knowledge is good. Deploying code to production is better." },
  { title: "Understand systems, not just frameworks.", desc: "Frameworks come and go. Architectural patterns and fundamentals stay." },
  { title: "Combine product thinking with engineering.", desc: "Writing good code isn't enough; the user experience is paramount." },
  { title: "Experiment with new technology.", desc: "Stay curious. If an emerging tech (like LLMs) can improve a product, I test it." },
  { title: "Keep improving.", desc: "Write better code than yesterday. Ship faster. Learn more." },
];

const JOURNEY = [
  { title: "Early Web Development", desc: "Started with the fundamentals. HTML, CSS, and basic JavaScript. Learning how the web is structured." },
  { title: "Frontend Development", desc: "Mastering React and modern UI development. Building interactive, state-driven interfaces." },
  { title: "Full Stack Development", desc: "Connecting the pieces. Building REST APIs, integrating databases (MongoDB), and deploying full apps." },
  { title: "AI & Automation", desc: "Exploring the boundary of what code can do alone vs. what AI can augment." },
  { title: "Agentic / Intelligent Systems", desc: "Building systems like OMNIX that perceive environments and execute tasks autonomously." },
];

const WHAT_I_BUILD = [
  { title: "WEB", desc: "Fast, responsive, accessible web applications.", liveUrl: "/work?tech=React" },
  { title: "AI", desc: "Integrating LLMs and generative capabilities into products.", liveUrl: "/work/omnix" },
  { title: "AUTOMATION", desc: "Scripts and systems that eliminate repetitive tasks.", liveUrl: "/lab" },
  { title: "AI AGENTS", desc: "Autonomous software that can reason and execute.", liveUrl: "/work/omnix" },
  { title: "FULL-STACK SYSTEMS", desc: "End-to-end products, from database to UI.", liveUrl: "/work" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      {/* 1. ABOUT HERO */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Building systems, <span className="text-primary">learning constantly,</span> and turning ideas into software.
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I am <strong className="text-foreground">Chirag Sharma</strong>, a Full Stack Gen AI Developer and B.Tech IT student at RJIT, Gwalior.
              </p>
              <p>
                My journey began with a simple curiosity about how websites worked. Today, I build end-to-end digital products, explore autonomous AI agents, and operate real-world systems like Vertex Studio.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/work" className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors">
                View my work
              </Link>
              <Link href="/services" className="px-6 py-3 bg-muted text-foreground font-bold rounded-full hover:bg-border transition-colors">
                Explore services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 bg-muted/20">
            {/* If portrait exists, place here. Otherwise fallback pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-muted-foreground/30 text-sm">
              [ PORTRAIT / AVATAR ]
            </div>
            <Image 
              src="/images/hero.png" 
              alt="Chirag Sharma" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover z-10" 
            />
          </div>
        </div>
      </section>

      {/* 2. WHAT I BUILD */}
      <section className="border-y border-border/50 bg-muted/10 py-24 mb-24">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-12">What I Build</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHAT_I_BUILD.map((item) => (
              <Link 
                key={item.title} 
                href={item.liveUrl}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors flex flex-col"
              >
                <h3 className="font-bold text-lg mb-3 flex items-center justify-between">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground mt-auto">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MY JOURNEY */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-12">My Journey</h2>
          <div className="relative border-l border-border/50 ml-4 space-y-12 pb-4">
            {JOURNEY.map((step, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary group-hover:scale-150 transition-all" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGINEERING PHILOSOPHY */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-12 text-center">Engineering Philosophy</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHILOSOPHIES.map((phil) => (
            <div key={phil.title} className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="font-bold text-lg mb-4 text-foreground">{phil.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{phil.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDUCATION & DISCIPLINE */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-8">Education</h2>
            <div className="space-y-8">
              {profile.education.map((edu) => (
                <div key={edu.degree} className="border-b border-border/50 pb-8 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">{edu.period}</span>
                  </div>
                  <div className="text-sm font-medium text-foreground mb-3">{edu.school}</div>
                  <p className="text-sm text-muted-foreground">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">Problem Solving</h2>
              <div className="p-6 bg-card border border-border rounded-2xl flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-2xl mb-1">300+</h3>
                  <p className="text-sm text-muted-foreground">DSA problems solved across platforms.</p>
                </div>
                <Code className="w-10 h-10 text-muted-foreground/20" />
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">Currently Learning</h2>
              <ul className="space-y-3 mb-10">
                {profile.learning.map((l) => (
                  <li key={l.topic} className="flex items-start gap-3 text-sm">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">{l.topic}</strong>
                      <span className="text-muted-foreground">{l.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">Currently Building</h2>
              <ul className="space-y-4">
                <li className="p-4 bg-muted/20 border border-border rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <strong className="text-foreground">OMNIX Agent</strong>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">Building</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Adding continuous voice-mode and smarter UI-grounding for Windows automation.</p>
                </li>
                <li className="p-4 bg-muted/20 border border-border rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <strong className="text-foreground">Vertex Studio Systems</strong>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-green-500 bg-green-500/10 px-2 py-0.5 rounded">Live</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Scaling the business operations and launching new digital product offerings.</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">Beyond Coding</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium text-muted-foreground">Competitive Gaming</span>
                <span className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium text-muted-foreground">Anime</span>
                <span className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium text-muted-foreground">System Design Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 GITHUB ACTIVITY */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <GithubGraph />
      </section>

      {/* 6. ABOUT CTA */}
      <section className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Let's build something.</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/work" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors">
            View my work
          </Link>
          <Link href="/services" className="px-8 py-4 bg-card border border-border text-foreground font-bold rounded-full hover:border-primary/50 transition-colors">
            Explore services
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-transparent text-foreground font-bold rounded-full hover:underline transition-all">
            Let's connect <ArrowRight className="inline-block w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
