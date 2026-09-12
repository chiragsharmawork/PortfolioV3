import Contact from "@/components/layout/Contact";

export const metadata = {
  title: "Contact",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Let's build something useful.</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          I'm currently open to freelance projects, AI integration work, and technical roles. Let's discuss your next system.
        </p>
      </div>
      <Contact />
    </div>
  );
}
