import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Bot, Cog, Layout, Database, Smartphone, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Full Stack, AI & Automation",
  description: "What I can build. Full-stack development, AI automation, and digital products.",
};

const SERVICES = [
  {
    icon: Layers,
    title: "Full-Stack Web Development",
    desc: "End-to-end development of modern web applications. From database architecture and backend APIs to responsive, high-performance React/Next.js interfaces. I build robust systems that scale.",
    proof: { label: "See Vertex Studio", liveUrl: "/work/vertex-studio" }
  },
  {
    icon: Bot,
    title: "AI Integration & Workflows",
    desc: "Integrating large language models (LLMs) and intelligent capabilities into existing products. Building AI-assisted applications, intelligent features, and generative workflows."
  },
  {
    icon: Cog,
    title: "AI Agents & Automation",
    desc: "Designing autonomous software that can perceive, reason, and execute tasks. Browser automation, desktop automation, and intelligent background workers.",
    proof: { label: "See OMNIX Architecture", liveUrl: "/work/omnix" }
  },
  {
    icon: Layout,
    title: "Website Design & Redesign",
    desc: "Modernizing outdated websites or building them from scratch. Focusing on responsive UI, UX improvements, performance optimization, and high-converting landing pages."
  },
  {
    icon: Database,
    title: "Backend & API Development",
    desc: "Architecting server-side logic and database structures. Building REST APIs, integrating third-party services, and ensuring secure data flow."
  },
  {
    icon: Smartphone,
    title: "Product & UI Development",
    desc: "Translating complex logic into intuitive SaaS interfaces, interactive dashboards, and polished product experiences that users actually want to engage with."
  },
  {
    icon: Activity,
    title: "Maintenance & Growth",
    desc: "Ongoing development for existing projects. Bug fixing, feature additions, performance monitoring, and ensuring the product evolves with its users."
  }
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "Understand the problem, business goals, and technical requirements." },
  { step: "02", title: "Plan", desc: "Define the product/system direction, architecture, and tech stack." },
  { step: "03", title: "Build", desc: "Develop the experience and technical system." },
  { step: "04", title: "Test", desc: "Validate behavior and quality." },
  { step: "05", title: "Iterate", desc: "Improve based on feedback and results." },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      {/* HERO */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">What I can build.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I take ideas and turn them into working digital systems. Whether it's a full-stack SaaS product, a high-performance business website, or integrating autonomous AI workflows, I handle the engineering from database to deployment.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="border-t border-border/50 bg-muted/10">
        <div className="container mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{service.desc}</p>
                  
                  {service.proof && (
                    <Link href={service.proof.liveUrl} className="inline-flex items-center text-sm font-bold text-primary group/link">
                      {service.proof.label}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="container mx-auto px-6 md:px-12 py-32 border-t border-border/50">
        <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-16 text-center">The Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PROCESS.map((p) => (
            <div key={p.step} className="relative">
              <div className="text-6xl font-black text-muted-foreground/10 absolute -top-10 -left-4 pointer-events-none select-none">
                {p.step}
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground relative z-10">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-primary text-primary-foreground py-24 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Have something in mind?</h2>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-background text-foreground font-bold rounded-full hover:bg-muted transition-colors">
            Let's talk <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
