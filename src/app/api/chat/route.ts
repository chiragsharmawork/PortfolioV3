import { NextResponse } from "next/server";
import { ASTA_SYSTEM_PROMPT } from "@/data/asta";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ reply: "Please send a valid message array for ASTA." }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ reply: "ASTA is currently offline. Please add the OPENROUTER_API_KEY in the environment variables." }, { status: 500 });
    }

    // Combine system prompt with user history
    const apiMessages = [
      { role: "system", content: ASTA_SYSTEM_PROMPT },
      ...messages.map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content
      }))
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://chirag-portfolio-v3.netlify.app", 
        "X-Title": "ASTA Portfolio AI"
      },
      body: JSON.stringify({
        model: "cohere/north-mini-code:free",
        max_tokens: 300,
        temperature: 0.7,
        messages: apiMessages
      })
    });

    if (!response.ok) {
      console.error("API error:", await response.text());
      throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    let reply = data.choices[0]?.message?.content || "ASTA is thinking...";
    
    // Clean up <think> tags if the model uses them (some models like deepseek do)
    reply = reply.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("ASTA Error:", error);
    return NextResponse.json({ reply: "⚔ ASTA lost connection temporarily. Please try again." }, { status: 500 });
  }
}
