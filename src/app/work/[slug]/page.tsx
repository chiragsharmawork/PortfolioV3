import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import ViewCounter from "@/components/layout/ViewCounter";
import { FaGithub as Github } from "react-icons/fa";
import OmnixCinematic from "@/components/projects/OmnixCinematic";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Not Found' };
  
  if (project.slug === 'omnix') {
    return { title: 'OMNIX — Autonomous AI Desktop Agent', description: project.desc };
  }
  if (project.slug === 'vertex-studio') {
    return { title: 'Vertex Studio — Digital Growth Studio', description: project.desc };
  }
  
  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.desc
  };
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-12">
          <Link href="/work" className="hover:text-foreground transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Work
          </Link>
          <span>/</span>
          <span className="text-foreground">{project.title}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
              {project.type}
            </div>
            <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${project.status === 'LIVE' ? 'bg-green-500/10 text-green-500' : project.status === 'BUILDING' ? 'bg-orange-500/10 text-orange-500' : 'bg-muted text-muted-foreground'}`}>
              {project.status}
            </div>
            <div className="text-muted-foreground font-mono text-sm">{project.year}</div>
            <ViewCounter slug={`work-${slug}`} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">{project.title}</h1>
          <p className="text-2xl text-muted-foreground font-medium mb-10">{project.tagline}</p>
          
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors">
                Visit Live Project <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border font-bold rounded-full hover:bg-muted hover:border-border/80 transition-colors">
                <Github className="w-4 h-4" /> View Source
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {project.img && (
          <div className="w-full aspect-[21/9] relative rounded-3xl overflow-hidden bg-muted border border-border shadow-2xl mb-24">
            <Image src={project.img} alt={project.title} fill sizes="100vw" className="object-cover" priority />
          </div>
        )}

        {/* OMNIX Special Architecture Narrative */}
        {project.slug === 'omnix' && (
          <div className="-mx-6 md:-mx-12 mb-32">
            <OmnixCinematic />
          </div>
        )}

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.desc}</p>
            </section>

            {project.story && (
              <section className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What I Built</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.story.built}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">What I Learned</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.story.learned}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Challenges & Insights</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.story.broke}</p>
                </div>
              </section>
            )}

            {project.caseStudy?.problem && (
              <section>
                <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.caseStudy.problem}</p>
              </section>
            )}

            {project.caseStudy?.approach && (
              <section>
                <h2 className="text-3xl font-bold mb-6">My Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.caseStudy.approach}</p>
              </section>
            )}

            {project.caseStudy?.metrics && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Key Features & Metrics</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground leading-relaxed">
                  {project.caseStudy.metrics.map((metric, i) => (
                    <li key={i}>{metric}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.caseStudy?.architecture && (
              <section>
                <h2 className="text-3xl font-bold mb-8">{project.slug === 'vertex-studio' ? 'Business System & Process' : 'System Architecture'}</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
                  {project.caseStudy.architecture.map((step, i) => (
                    <div key={i} className="relative flex items-start group">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card shadow shrink-0 z-10 group-hover:border-primary transition-colors">
                        <span className="text-xs font-bold text-muted-foreground group-hover:text-primary">0{i+1}</span>
                      </div>
                      <div className="ml-6 flex-1 pt-2 border border-transparent group-hover:border-border/50 group-hover:bg-muted/30 rounded-xl p-4 transition-colors">
                        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors uppercase tracking-widest">{step.label}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.caseStudy?.challenges && (
              <section>
                <h2 className="text-3xl font-bold mb-8">Technical Challenges</h2>
                <div className="grid gap-4">
                  {project.caseStudy.challenges.map((challenge, i) => (
                    <div key={i} className="p-6 bg-card border border-border rounded-2xl flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center shrink-0 font-bold">!</div>
                      <p className="text-muted-foreground leading-relaxed pt-1">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.caseStudy?.outcome && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Outcome</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.caseStudy.outcome}</p>
              </section>
            )}

            {project.caseStudy?.learnings && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Learnings</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.caseStudy.learnings}</p>
              </section>
            )}
            
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              
              {project.role && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">My Role</h3>
                  <div className="text-foreground font-medium">
                    {project.role}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-muted text-muted-foreground border border-border/50 rounded-md text-sm font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.category.map(cat => (
                    <span key={cat} className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {project.caseStudy?.metrics && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{project.slug === 'vertex-studio' ? 'Core Services' : 'Key Features'}</h3>
                  <ul className="space-y-3">
                    {project.caseStudy.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
            </div>
          </div>
          
        </div>

        {/* Previous / Next Navigation */}
        <div className="mt-32 pt-16 border-t border-border grid sm:grid-cols-2 gap-8">
          {(() => {
            const currentIndex = projects.findIndex(p => p.slug === project.slug);
            const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
            const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

            return (
              <>
                <div>
                  {prevProject && (
                    <Link href={`/work/${prevProject.slug}`} className="group flex flex-col items-start gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous Project
                      </span>
                      <span className="text-xl md:text-2xl font-black">{prevProject.title}</span>
                    </Link>
                  )}
                </div>
                <div className="flex sm:justify-end text-right">
                  {nextProject && (
                    <Link href={`/work/${nextProject.slug}`} className="group flex flex-col sm:items-end gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        Next Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-xl md:text-2xl font-black">{nextProject.title}</span>
                    </Link>
                  )}
                </div>
              </>
            );
          })()}
        </div>

      </div>
    </div>
  );
}
