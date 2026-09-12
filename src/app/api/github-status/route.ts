import { NextResponse } from "next/server";

export async function GET() {
  try {
    // We use the GitHub public events API (no auth required)
    // We fetch the latest events for the user chirag-x
    const res = await fetch("https://api.github.com/users/chirag-x/events/public", {
      next: { revalidate: 60 }, // Cache for 60 seconds to prevent rate limiting
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-V3-Chirag"
      }
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch GitHub status" }, { status: 500 });
    }

    const events = await res.json();
    
    // Find the latest PushEvent
    const pushEvent = events.find((event: any) => event.type === "PushEvent");

    if (!pushEvent) {
      return NextResponse.json({ 
        repo: "chirag-x/Portfolio_V3", 
        message: "Building intelligence...",
        time: new Date().toISOString()
      });
    }

    const repoName = pushEvent.repo.name;
    const commits = pushEvent.payload.commits || [];
    const latestCommit = commits.length > 0 ? commits[commits.length - 1] : null;
    const commitMessage = latestCommit ? latestCommit.message.split('\n')[0] : "Pushed to repository";
    const time = pushEvent.created_at;

    return NextResponse.json({
      repo: repoName,
      message: commitMessage,
      time: time
    });

  } catch (error: any) {
    return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 });
  }
}
