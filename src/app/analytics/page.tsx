import PageTransition from "@/components/layout/PageTransition";
import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";

export const metadata = {
  title: "Analytics | Chirag Sharma",
  description: "Live traffic and engagement metrics.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnalyticsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <header className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
              Command <span className="text-primary">Center</span>.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Real-time telemetry and visitor analytics across all projects and intelligence logs.
            </p>
          </header>

          <AnalyticsDashboard />
        </div>
      </div>
    </PageTransition>
  );
}
