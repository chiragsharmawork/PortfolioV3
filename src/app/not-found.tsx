import Link from "next/link";
import { ArrowLeft, LayoutGrid } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-8 max-w-lg">
        <h1 className="text-9xl font-black text-primary/20 select-none">404</h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
            Looks like this page doesn't exist.
          </h2>
          <p className="text-muted-foreground text-lg">
            The link you followed may be broken, or the page may have been removed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link 
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back home
          </Link>
          <Link 
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border font-bold rounded-full hover:bg-muted transition-colors group"
          >
            <LayoutGrid className="w-5 h-5" />
            View my work
          </Link>
        </div>
      </div>
    </div>
  );
}
