import { getNoteBySlug, getAllNotesMeta } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ViewCounter from "@/components/layout/ViewCounter";
import NoteSummarizer from "@/components/notes/NoteSummarizer";

export async function generateStaticParams() {
  const notes = await getAllNotesMeta();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) return { title: "Note Not Found" };
  return {
    title: note.meta.title,
    description: note.meta.summary,
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/notes" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Notes
        </Link>
        
        <header className="mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-6 mb-4">
            <div className="text-sm text-primary font-mono">
              {new Date(note.meta.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <ViewCounter slug={slug} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            {note.meta.title}
          </h1>
        </header>

        <NoteSummarizer content={note.content} />

        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
          <MDXRemote source={note.content} />
        </article>
      </div>
    </div>
  );
}
