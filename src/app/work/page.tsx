import WorkClient from "./WorkClient";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects & Work",
  description: "Projects, experiments and systems I've built. Selected work from Chirag Sharma.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">WORK</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl flex flex-col md:flex-row md:items-center gap-2">
          <span>Projects, experiments and systems I've built.</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-border"></span>
          <span className="text-primary font-bold">{projects.length} PROJECTS</span>
        </p>
        <WorkClient />
      </div>
    </div>
  );
}
