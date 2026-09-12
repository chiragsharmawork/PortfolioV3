import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data collection practices for Chirag Sharma's portfolio.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Privacy Policy</h1>
        <p className="text-muted-foreground mb-16 pb-8 border-b border-border/50">
          Last updated: September 2024
        </p>

        <div className="prose prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none space-y-12">
          
          <section>
            <h2 className="text-2xl mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy applies to the personal developer portfolio of Chirag Sharma. I believe in minimal data collection. This website does not use tracking cookies, analytics pixels, or advertising frameworks. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">2. Information Collected</h2>
            <p className="text-muted-foreground leading-relaxed">
              The only information collected on this website is the information you explicitly provide when using the Contact form. This includes:
            </p>
            <ul className="list-disc pl-5 mt-4 text-muted-foreground space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The contents of your message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">3. How Information is Used</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information submitted via the contact form is sent directly to my personal email inbox (or securely processed by Netlify Forms) solely for the purpose of reading and responding to your inquiry. Your information is never sold, shared, or used for marketing lists.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is hosted on Netlify. Netlify may collect standard server access logs (such as IP addresses and user agents) for security and operational purposes. Please refer to Netlify's Privacy Policy for more details. The ASTA AI assistant communicates with an AI backend, but it does not store personally identifiable data from your chat session beyond processing the immediate response.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">5. Data Retention & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Contact form submissions are kept in my email archive indefinitely for professional record-keeping unless you request their deletion. This website is secured via HTTPS to protect data in transit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to request the deletion of any personal correspondence you have sent me through this website. You can do so by emailing me directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please reach out via the <Link href="/contact">Contact form</Link> or email me directly at chiragsharmawork95@gmail.com.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
