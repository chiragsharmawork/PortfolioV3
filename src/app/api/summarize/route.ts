import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured." }, { status: 500 });
    }

    const body = await req.json();
    const { text } = body;

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `You are an AI assistant on Chirag Sharma's portfolio. Summarize the following technical article/note in exactly 3 short bullet points. Do not use any markdown bolding. Keep it highly concise.\n\nText: ${text.substring(0, 5000)}`,
    });

    return NextResponse.json({ summary: response.text });
  } catch (error: any) {
    console.error("Summarization error:", error);
    return NextResponse.json({ error: "Failed to generate summary: " + error.message }, { status: 500 });
  }
}
