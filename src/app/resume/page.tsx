import { profile } from "@/data/profile";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import PrintButton from "@/components/ui/PrintButton";

export const metadata = {
  title: "Resume",
  description: "Interactive resume of Chirag Sharma.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-muted/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">{profile.name}</h1>
            <p className="text-xl text-primary font-medium">{profile.role}</p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="/Chirag_Sharma_Resume.pdf" 
              download="Chirag_Sharma_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-bold transition-colors bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm h-10 px-6 py-2 print:hidden"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <PrintButton />
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl shadow-sm p-8 md:p-12 space-y-12">
          
          <header className="border-b border-border pb-8">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground mb-6">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <a href={profile.socials.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
            <p className="text-foreground leading-relaxed">
              {profile.description}
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {profile.skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="text-sm px-2.5 py-1 bg-muted border border-border/50 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Selected Projects</h2>
            <div className="space-y-8">
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-lg font-bold">OMNIX — Autonomous AI Desktop Agent</h3>
                  <span className="text-sm text-muted-foreground font-mono">Python, Playwright, YOLO, LLMs</span>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Engineered a multimodal Windows desktop agent that reasons about user intent, parses visual screen data, plans execution steps, and controls the OS natively. Implemented robust self-correction loops to recover from execution failures.
                </p>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-muted-foreground before:rounded-full">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-lg font-bold">Smart Campus WiFi System</h3>
                  <span className="text-sm text-muted-foreground font-mono">React, Node.js, MongoDB</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Developed a full-stack campus network monitoring dashboard with real-time active connection tracking and administrative controls. Built robust REST APIs for data ingestion and frontend visualization.
                </p>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-muted-foreground before:rounded-full">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-lg font-bold">ASTA AI Assistant</h3>
                  <span className="text-sm text-muted-foreground font-mono">Next.js, LLM APIs, Edge TTS</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Integrated an intelligent copilot into personal portfolio that utilizes OpenRouter APIs to answer queries based on custom context vectors and navigate the user seamlessly across the application.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Education</h2>
            <div className="space-y-6">
              {profile.education.map((edu) => (
                <div key={edu.degree} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Technical Certifications & Achievements</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Python Assessment Certification – LearnTube.ai (Feb 2026)</li>
              <li>Career Essentials in Generative AI – Microsoft & LinkedIn (Jul 2026)</li>
              <li>Build Your Generative AI Productivity Skills – Microsoft & LinkedIn (Jul 2026)</li>
              <li>Full Stack Web Engineering Certification – Tutedude</li>
              <li>Algorithmic Problem Solving: Solved 300+ DSA problems on LeetCode</li>
              <li>Currently exploring advanced PyTorch implementations and scalable system design</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
