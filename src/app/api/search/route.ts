import { NextResponse } from "next/server";
import { getAllNotesMeta } from "@/lib/mdx";

export async function GET() {
  const notes = await getAllNotesMeta();
  return NextResponse.json(notes);
}
