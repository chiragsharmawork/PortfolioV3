import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "notes");

export type NoteMeta = {
  title: string;
  date: string;
  slug: string;
  summary?: string;
};

export const getNoteBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  return { meta: { ...data, slug: realSlug } as NoteMeta, content };
};

export const getAllNotesMeta = async (): Promise<NoteMeta[]> => {
  if (!fs.existsSync(rootDirectory)) {
    fs.mkdirSync(rootDirectory, { recursive: true });
    return [];
  }
  
  const files = fs.readdirSync(rootDirectory);
  const notes = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(rootDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return { ...data, slug: file.replace(/\.mdx$/, "") } as NoteMeta;
    })
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
    
  return notes;
};
