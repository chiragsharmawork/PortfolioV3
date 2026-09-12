"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectCategory, ProjectType } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

function WorkContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "ALL";
  const currentTech = searchParams.get("tech") || "ALL";
  const currentType = searchParams.get("type") || "ALL";
  const currentSort = searchParams.get("sort") || "featured";
  const currentStatus = searchParams.get("status") || "ALL";
  const currentSearch = searchParams.get("search") || "";

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(currentSearch);

  const allCategories = ["ALL", ...Array.from(new Set(projects.flatMap(p => p.category)))];
  
  const getCategoryCount = (cat: string) => {
    if (cat === "ALL") return projects.length;
    return projects.filter(p => p.category.includes(cat as ProjectCategory)).length;
  };

  const allTech = ["ALL", ...Array.from(new Set(projects.flatMap(p => p.stack)))];
  const allTypes = ["ALL", ...Array.from(new Set(projects.map(p => p.type)))];
  const allStatuses = ["ALL", ...Array.from(new Set(projects.map(p => p.status)))];

  const updateUrl = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "ALL" || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      updateUrl("search", searchValue);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchValue]);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filter Category
    if (currentCategory !== "ALL") {
      result = result.filter(p => p.category.includes(currentCategory as ProjectCategory));
    }

    // Filter Tech
    if (currentTech !== "ALL") {
      result = result.filter(p => p.stack.includes(currentTech));
    }

    // Filter Type
    if (currentType !== "ALL") {
      result = result.filter(p => p.type === currentType);
    }

    // Filter Status
    if (currentStatus !== "ALL") {
      result = result.filter(p => p.status === currentStatus);
    }

    // Search
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) || 
        p.stack.some(t => t.toLowerCase().includes(q))
      );
    }

    // Sort
    if (currentSort === "featured") {
      result.sort((a, b) => (b.flagship ? 1 : 0) - (a.flagship ? 1 : 0) || (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (currentSort === "newest") {
      result.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    } else if (currentSort === "oldest") {
      result.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    } else if (currentSort === "a-z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [currentCategory, currentTech, currentType, currentStatus, currentSort, currentSearch]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-card border border-border p-4 rounded-2xl shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search projects, technologies..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full bg-muted/50 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 transition-shadow outline-none"
          />
          {searchValue && (
            <button onClick={() => setSearchValue("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
          <div className="hidden lg:flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mr-2">Category:</span>
            {allCategories.slice(0, 5).map(cat => (
              <button
                key={cat}
                onClick={() => updateUrl("category", cat)}
                className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
                  currentCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${currentCategory === cat ? "bg-primary-foreground/20" : "bg-background/50"}`}>
                  {getCategoryCount(cat)}
                </span>
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2.5 bg-muted rounded-xl text-sm font-medium hover:bg-muted/80 transition-colors ml-auto lg:ml-4"
          >
            <SlidersHorizontal className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Expanded Filters */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-card border border-border rounded-2xl grid md:grid-cols-3 gap-8 shadow-sm">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary">Technology</h3>
                <div className="flex flex-wrap gap-2">
                  {allTech.map(tech => (
                    <button
                      key={tech}
                      onClick={() => updateUrl("tech", tech)}
                      className={`text-xs font-mono px-2 py-1 rounded transition-colors border ${
                        currentTech === tech ? "bg-primary/20 text-primary border-primary" : "bg-muted text-muted-foreground border-transparent hover:border-border"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary">Status & Type</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {allStatuses.map(status => (
                      <button
                        key={status}
                        onClick={() => updateUrl("status", status)}
                        className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                          currentStatus === status ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => updateUrl("type", type)}
                        className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
                          currentType === type ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-primary">Sort By</h3>
                <div className="flex flex-col gap-2 items-start">
                  {[
                    { id: "featured", label: "Featured First" },
                    { id: "newest", label: "Newest" },
                    { id: "oldest", label: "Oldest" },
                    { id: "a-z", label: "A - Z" }
                  ].map(sort => (
                    <button
                      key={sort.id}
                      onClick={() => updateUrl("sort", sort.id)}
                      className={`text-sm font-medium px-3 py-1 rounded-md transition-colors ${
                        currentSort === sort.id ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      {sort.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between text-muted-foreground text-sm font-mono">
        <div>SHOWING {filteredProjects.length} PROJECTS</div>
        {(currentCategory !== "ALL" || currentTech !== "ALL" || currentType !== "ALL" || currentStatus !== "ALL" || currentSearch) && (
          <button onClick={() => router.replace(pathname, { scroll: false })} className="hover:text-foreground hover:underline">
            Clear Filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {currentSort === "featured" && !currentSearch && currentCategory === "ALL" && currentTech === "ALL" && currentType === "ALL" ? (
          <>
            <div className="space-y-8">
              <h2 className="text-xl font-bold uppercase tracking-widest text-primary border-b border-border pb-4">Featured Work</h2>
              <div className="grid md:grid-cols-12 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.filter(p => p.flagship || p.featured).map(p => renderProjectCard(p, "featured"))}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">All Work</h2>
              <div className="grid md:grid-cols-12 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.filter(p => !p.flagship && !p.featured).map(p => renderProjectCard(p, "all"))}
                </AnimatePresence>
              </div>
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-12 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(p => renderProjectCard(p, "search"))}
            </AnimatePresence>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-24 text-center border border-dashed border-border rounded-2xl bg-muted/20">
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => router.replace(pathname, { scroll: false })}
              className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );

  function renderProjectCard(project: typeof projects[0], prefix: string) {
    const isFeatured = project.flagship || project.featured;
    const spanClass = isFeatured ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        key={`${prefix}-${project.slug}`}
        className={`group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${spanClass}`}
      >
        <Link href={`/work/${project.slug}`} className={`block relative ${isFeatured ? 'aspect-[21/9]' : 'aspect-video'} overflow-hidden bg-muted`} data-cursor="view">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          {project.img ? (
            <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-muted-foreground/50 group-hover:scale-110 transition-transform duration-700">
              [ {project.title} ]
            </div>
          )}
          {project.flagship && (
            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              Flagship System
            </div>
          )}
        </Link>
        
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                {project.type}
              </div>
              <div className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${project.status === 'LIVE' ? 'bg-green-500/10 text-green-500' : project.status === 'BUILDING' ? 'bg-orange-500/10 text-orange-500' : 'bg-muted text-muted-foreground'}`}>
                {project.status}
              </div>
            </div>
            <div className="text-xs font-mono text-muted-foreground">{project.year}</div>
          </div>

          <Link href={`/work/${project.slug}`} data-cursor="view" className="group/title inline-block mb-3">
            <h3 className={`font-black group-hover/title:text-primary transition-colors tracking-tight flex items-center gap-2 ${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
              {project.title}
            </h3>
          </Link>
          
          <p className="text-sm text-foreground font-medium mb-3">{project.tagline}</p>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1 max-w-2xl">{project.desc}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto mb-6">
            {project.stack.slice(0, 5).map(tech => (
              <button 
                key={tech} 
                onClick={(e) => { e.preventDefault(); updateUrl("tech", tech); }}
                className="text-[10px] font-mono border border-border/50 bg-muted/50 px-2 py-1 rounded text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                {tech}
              </button>
            ))}
            {project.stack.length > 5 && (
              <span className="text-[10px] font-mono border border-border/50 bg-muted/50 px-2 py-1 rounded text-muted-foreground">
                +{project.stack.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" aria-label="Live Demo">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <Link 
              href={`/work/${project.slug}`}
              className="flex items-center gap-1 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default function WorkClient() {
  return (
    <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-muted-foreground animate-pulse">LOADING ARCHIVE...</div>}>
      <WorkContent />
    </Suspense>
  );
}
