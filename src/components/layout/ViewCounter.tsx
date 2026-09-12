"use client";

import { useEffect, useState, useRef } from "react";
import { Eye } from "lucide-react";

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    // Increment view on mount
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(console.error);
  }, [slug]);

  if (views === null) return <div className="h-6 w-20 animate-pulse bg-muted/50 rounded" />;

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-full border border-border/50 w-fit">
      <Eye className="w-4 h-4" />
      <span className="font-mono">{views.toLocaleString()}</span> views
    </div>
  );
}
