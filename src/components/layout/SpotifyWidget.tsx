"use client";

import { useEffect, useState } from "react";
import { Music2 } from "lucide-react";
import Image from "next/image";

export default function SpotifyWidget() {
  const [data, setData] = useState<any>(null);
  const [sessionSeconds, setSessionSeconds] = useState(0);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify?t=" + Date.now(), { cache: "no-store" });
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Failed to load Spotify data");
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 15000); // Check every 15s
    return () => clearInterval(interval);
  }, []);

  // Timer logic using localStorage to persist across reloads
  useEffect(() => {
    let interval: any;
    if (data?.isPlaying) {
      if (!localStorage.getItem("working_session_start")) {
        localStorage.setItem("working_session_start", Date.now().toString());
      }
      
      interval = setInterval(() => {
        const start = parseInt(localStorage.getItem("working_session_start") || "0", 10);
        if (start > 0) {
          setSessionSeconds(Math.floor((Date.now() - start) / 1000));
        }
      }, 1000);
    } else if (data && !data.isPlaying) {
      // If we confirmed they are not playing, clear the session
      localStorage.removeItem("working_session_start");
      setSessionSeconds(0);
    }
    return () => clearInterval(interval);
  }, [data?.isPlaying]);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    if (h > 0) return `${h}:${m}:${s}`;
    return `${m}:${s}`;
  };

  if (!data?.isPlaying) {
    return (
      <div className="flex items-center gap-3 px-4 py-2 bg-muted/30 border border-border/50 rounded-full text-sm text-muted-foreground w-max">
        <Music2 className="w-4 h-4" />
        <span>Not listening to anything right now.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Deep Work Timer (Separate text) */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-bold text-foreground uppercase tracking-widest">
          Working Session running - <span className="text-primary font-mono ml-1">{formatTime(sessionSeconds)}</span>
        </span>
      </div>

      {/* Original Spotify Widget (Medium) */}
      <a 
        href={data.songUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3.5 px-4 py-2 bg-black dark:bg-card border border-[#1DB954]/30 hover:border-[#1DB954] rounded-full text-sm w-max transition-all group shadow-lg shadow-[#1DB954]/10"
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 animate-pulse group-hover:animate-none border border-[#1DB954]/30">
          <Image src={data.albumImageUrl} alt={data.albumImageUrl} fill sizes="32px" className="object-cover" />
        </div>
        <div className="flex flex-col max-w-[180px] md:max-w-[200px]">
          <span className="font-bold text-[#1DB954] truncate text-[13px]">Listening on Spotify</span>
          <span className="text-foreground/90 truncate text-xs mt-0.5">{data.title} - {data.artist}</span>
        </div>
      </a>
    </div>
  );
}
