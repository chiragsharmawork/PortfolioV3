import { getAllNotesMeta } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "Build Logs",
  description: "Engineering notes, build logs, and thoughts on AI and web development.",
};

export default async function NotesPage() {
  const notes = await getAllNotesMeta();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Engineering Notes</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Thoughts, build logs, and lessons learned while developing intelligent systems.
        </p>

        <div className="space-y-12">
          {notes.length === 0 ? (
            <p className="text-muted-foreground">No notes published yet.</p>
          ) : (
            notes.map((note) => (
              <article key={note.slug} className="border-b border-border pb-12 group">
                <header className="mb-4">
                  <div className="text-sm text-primary font-mono mb-2">
                    {new Date(note.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <Link href={`/notes/${note.slug}`}>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors cursor-pointer">
                      {note.title}
                    </h2>
                  </Link>
                </header>
                {note.summary && (
                  <p className="text-muted-foreground mb-4">{note.summary}</p>
                )}
                <Link href={`/notes/${note.slug}`} className="text-primary font-bold text-sm hover:underline">
                  Read more →
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
