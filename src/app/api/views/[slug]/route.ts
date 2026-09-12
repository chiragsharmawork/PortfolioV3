import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Simple file-based view tracker for MVP. 
// In production, swap this out with Upstash Redis or Supabase.
const viewsFile = path.join(process.cwd(), "content", "views.json");

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  let views: Record<string, number> = {};
  if (fs.existsSync(viewsFile)) {
    try {
      views = JSON.parse(fs.readFileSync(viewsFile, "utf8"));
    } catch(e) {}
  }

  views[slug] = (views[slug] || 0) + 1;
  
  // Only write in development to avoid Vercel/Netlify read-only filesystem errors
  if (process.env.NODE_ENV === "development") {
    fs.writeFileSync(viewsFile, JSON.stringify(views, null, 2));
  }

  return NextResponse.json({ views: views[slug] });
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  let views: Record<string, number> = {};
  if (fs.existsSync(viewsFile)) {
    try {
      views = JSON.parse(fs.readFileSync(viewsFile, "utf8"));
    } catch(e) {}
  }

  return NextResponse.json({ views: views[slug] || 0 });
}
