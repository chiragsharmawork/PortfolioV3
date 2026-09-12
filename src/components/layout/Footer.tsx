"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaDiscord as Discord } from "react-icons/fa";
import SpotifyWidget from "./SpotifyWidget";
import GithubWidget from "./GithubWidget";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/terminal") return null;

  return (
    <footer className="border-t border-border bg-background pt-20 pb-12 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter uppercase block">
              CHIRAG SHARMA<span className="text-primary">.</span>
            </Link>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Full-Stack Gen AI Developer
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              {profile.tagline}
            </p>
            <div className="mt-6 space-y-4">
              <SpotifyWidget />
              <GithubWidget />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-primary transition-colors">All Work</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/lab" className="hover:text-primary transition-colors">Lab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Featured Work</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/work/vertex-studio" className="hover:text-primary transition-colors">Vertex Studio</Link></li>
              <li><Link href="/work/omnix" className="hover:text-primary transition-colors">OMNIX</Link></li>
            </ul>
            <h4 className="text-sm font-bold uppercase tracking-widest mt-8 mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/gear" className="hover:text-primary transition-colors">Gear & Setup</Link></li>
              <li><Link href="/analytics" className="hover:text-primary transition-colors">Analytics (Hidden)</Link></li>
              <li><Link href="/notes" className="hover:text-primary transition-colors">Notes</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/resume" className="hover:text-primary transition-colors">Resume</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              <li><a href={profile.socials.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
            </a></li>
              <li><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a></li>
              <li><a href={`mailto:${profile.email}`} className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="Email Me">
              <Mail className="w-5 h-5" />
            </a></li>
            </ul>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50">
          <div className="flex items-center gap-4">
            <a href={profile.socials.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="Instagram Profile">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={profile.socials.discord} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="Discord Profile">
              <Discord className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="Email Me">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
