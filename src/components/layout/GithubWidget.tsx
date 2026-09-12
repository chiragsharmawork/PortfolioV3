"use client";

import { useEffect, useState } from "react";
import { GitCommit } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function GithubWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/github-status");
        const json = await res.json();
        if (!json.error) setData(json);
      } catch (e) {
        console.error("Failed to fetch GitHub status");
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-muted/30 border border-border/50 rounded-full text-sm w-max max-w-full overflow-hidden">
      <GitCommit className="w-4 h-4 text-primary shrink-0" />
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 truncate">
        <span className="font-bold text-foreground">Latest Commit:</span>
        <span className="text-muted-foreground truncate" title={data.message}>
          "{data.message}"
        </span>
        <span className="text-primary/70 text-xs sm:ml-2 font-mono shrink-0">
          in {data.repo.replace('chirag-x/', '')}
        </span>
      </div>
    </div>
  );
}
