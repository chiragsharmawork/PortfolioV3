import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for Chirag Sharma's developer portfolio.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-16 pb-8 border-b border-border/50">
          Last updated: September 2024
        </p>

        <div className="prose prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none space-y-12">
          
          <section>
            <h2 className="text-2xl mb-4 text-foreground">1. Website Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website (chirag-portfolio-v3.netlify.app), you agree to these Terms and Conditions. This is a personal portfolio website intended to showcase my software engineering work, projects, and services. You agree to use the site for lawful, informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">2. Portfolio and Project Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              The projects displayed on this website represent my personal and professional work. While some projects are open-source and their code is available on GitHub for educational purposes, others are proprietary or belong to respective clients (such as Vertex Studio projects). 
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The design, original content, architecture, and brand identity of this website are the intellectual property of Chirag Sharma. You may not copy, scrape, or reproduce the website's code or visual design for your own portfolio without explicit permission. Open-source code linked via GitHub is governed by its respective repository license.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">4. External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website contains links to external sites, including GitHub repositories, client websites, and social media platforms. I am not responsible for the content, privacy practices, or availability of these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">5. Accuracy of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              I strive to ensure the information on this website (including project descriptions, metrics, and capabilities) is accurate and up-to-date. However, software is constantly evolving, and some project links or technical details may become outdated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website and its content are provided "as is". I make no warranties regarding the continuous availability of the site or that the code snippets provided are free of errors. I shall not be liable for any damages arising from the use or inability to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns regarding these Terms, please contact me via the <Link href="/contact">Contact page</Link> or email me at chiragsharmawork95@gmail.com.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
