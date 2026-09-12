"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Loader2, Activity } from "lucide-react";

export default function AnalyticsDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/views/all")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-primary">
        <Loader2 className="w-8 h-8 animate-spin mb-4" />
        <p className="font-mono text-sm tracking-widest uppercase">Booting Analytics Engine...</p>
      </div>
    );
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-12 border border-border/50 rounded-2xl bg-muted/10">
        No traffic data collected yet.
      </div>
    );
  }

  const totalViews = data.reduce((acc, curr) => acc + curr.views, 0);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border p-6 rounded-2xl">
          <div className="flex items-center gap-3 text-muted-foreground mb-2">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="font-bold uppercase tracking-widest text-xs">Total Page Views</h3>
          </div>
          <p className="text-4xl font-black text-foreground">{totalViews.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border p-6 rounded-2xl">
          <div className="flex items-center gap-3 text-muted-foreground mb-2">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="font-bold uppercase tracking-widest text-xs">Most Popular</h3>
          </div>
          <p className="text-xl font-bold text-foreground truncate">{data[0]?.name || "N/A"}</p>
        </div>
        <div className="bg-card border border-border p-6 rounded-2xl">
          <div className="flex items-center gap-3 text-muted-foreground mb-2">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="font-bold uppercase tracking-widest text-xs">Active Pages</h3>
          </div>
          <p className="text-4xl font-black text-foreground">{data.length}</p>
        </div>
      </div>

      <div className="bg-card border border-border p-6 md:p-8 rounded-3xl">
        <h3 className="text-lg font-bold uppercase tracking-widest mb-8 text-foreground flex items-center gap-2">
          Traffic Distribution
        </h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} opacity={0.5} />
              <XAxis 
                dataKey="name" 
                stroke="#666" 
                fontSize={12} 
                tickMargin={12}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => value.length > 10 ? value.substring(0, 10) + '...' : value}
              />
              <YAxis 
                stroke="#666" 
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '12px', fontWeight: 'bold' }}
                itemStyle={{ color: 'var(--primary)' }}
              />
              <Bar 
                dataKey="views" 
                fill="var(--primary)" 
                radius={[6, 6, 0, 0]} 
                maxBarSize={60}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
