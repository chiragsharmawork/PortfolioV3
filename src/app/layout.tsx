import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import PageTransition from "@/components/layout/PageTransition";
import EasterEggProvider from "@/components/layout/EasterEggProvider";
import AstaAssistant from "@/components/asta/AstaAssistant";
import CommandPalette from "@/components/layout/CommandPalette";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://chirag-portfolio-v3.netlify.app'),
  title: {
    default: "Chirag Sharma | Full Stack Gen AI Developer",
    template: "%s | Chirag Sharma"
  },
  description: "I build intelligent software systems across Web, AI, and Automation. Gwalior-based Full Stack Gen AI Developer.",
  keywords: [
    "Chirag Sharma", "Chirag Sharma Portfolio", "Chirag Sharma Gwalior", "Chirag Sharma RJIT", 
    "Chirag Sharma Full Stack Developer", "Chirag Sharma Gen AI Developer", "Chirag Sharma MERN Developer", 
    "Full Stack Gen AI Developer", "Generative AI Developer Portfolio", "MERN Stack Developer Portfolio", 
    "React Developer India", "Node.js Developer India", "MongoDB Developer India", "Express.js Developer India", 
    "Python Developer Portfolio", "AI Powered Web Developer", "AI Chatbot Developer", "DeepSeek API Integration", 
    "OpenRouter AI Integration", "Voice AI Assistant Website", "AI Integrated Portfolio Website", 
    "Smart Campus WiFi Monitoring System", "Mobile Attendance System Project", "Full Stack Developer in Gwalior", 
    "Web Developer in Gwalior", "Gen AI Developer in India", "Indian Full Stack Developer", 
    "Indian Gen AI Developer", "Full Stack Developer Internship Portfolio", "Gen AI Developer Internship Candidate", 
    "BTech IT Student Portfolio", "RJIT IT Student Developer", "Final Year IT Student Portfolio", 
    "MERN Stack Internship Portfolio", "AI Projects Portfolio", "Modern Web Development Portfolio", 
    "Frontend Backend Developer Portfolio", "Full Stack Dashboard Project", "AI Integrated Web Applications", 
    "React Node Mongo Developer", "Portfolio Website with AI Assistant", "Vertex Studio Gwalior", "Web Agency Gwalior"
  ],
  authors: [{ name: "Chirag Sharma", url: "https://chirag-portfolio-v3.netlify.app" }],
  creator: "Chirag Sharma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chirag-portfolio-v3.netlify.app/",
    title: "Chirag Sharma | Full Stack Gen AI Developer",
    description: "I build intelligent software systems across Web, AI, and Automation.",
    siteName: "Chirag Sharma Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Chirag Sharma | Full Stack Gen AI Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Sharma | Full Stack Gen AI Developer",
    description: "I build intelligent software systems across Web, AI, and Automation.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification=fDmtOxIxWhLUqu4r_PYUZTa4C7fW2NHRNihINJgb-_Q",
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Gwalior",
    "geo.position": "26.2183;78.1828",
    "ICBM": "26.2183, 78.1828"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chirag Sharma",
  "url": "https://chirag-portfolio-v3.netlify.app/",
  "jobTitle": "Full-Stack AI Developer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gwalior",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "RJIT Gwalior"
  },
  "sameAs": [
    "https://github.com/chirag-x",
    "https://www.linkedin.com/in/chirag-sharma-aa1132329/",
    "https://leetcode.com/u/TheChirag__X/"
  ],
  "knowsAbout": ["Web Development", "Artificial Intelligence", "Next.js", "React", "Python", "Autonomous Agents"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="fDmtOxIxWhLUqu4r_PYUZTa4C7fW2NHRNihINJgb-_Q" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark", "matrix"]}
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CustomCursor />
          <EasterEggProvider />
          <AstaAssistant />
          <CommandPalette />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
