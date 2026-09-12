import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.log("No Discord Webhook URL found. Skipping Discord notification.");
      return NextResponse.json({ success: true });
    }

    const embed = {
      title: "🚀 New Contact Form Submission",
      color: 3447003, // Blue
      fields: [
        { name: "Name", value: name || "Unknown", inline: true },
        { name: "Email", value: email || "Unknown", inline: true },
        { name: "Message", value: message || "No message provided", inline: false }
      ],
      timestamp: new Date().toISOString()
    };

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Discord webhook error:", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}
