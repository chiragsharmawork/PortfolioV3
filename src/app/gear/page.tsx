import { Monitor, Cpu, Keyboard, Terminal, Package, Headphones, Mouse } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";

export const metadata = {
  title: "Gear & Setup | Chirag Sharma",
  description: "My hardware, software, and daily driver desk setup.",
};

const setup = [
  {
    category: "Hardware & Desk",
    icon: <Monitor className="w-6 h-6 text-primary" />,
    items: [
      { name: "MacBook Pro 16\"", desc: "M3 Max, 64GB RAM — The primary brain." },
      { name: "Studio Display", desc: "27\" 5K Retina — Because pixels matter." },
      { name: "Keychron Q1 Pro", desc: "Custom Mechanical with Banana switches." },
      { name: "Logitech MX Master 3S", desc: "The undisputed champion of mice." },
      { name: "Sony WH-1000XM5", desc: "For noise-cancelled deep work sessions." },
    ]
  },
  {
    category: "Coding Environment",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    items: [
      { name: "VS Code", desc: "The editor of choice. Heavily customized." },
      { name: "Vercel Theme", desc: "Clean, dark, high contrast." },
      { name: "Geist Mono", desc: "My primary coding font with ligatures." },
      { name: "Warp Terminal", desc: "Rust-based, lightning fast terminal." },
    ]
  },
  {
    category: "Software & Services",
    icon: <Package className="w-6 h-6 text-primary" />,
    items: [
      { name: "Raycast", desc: "Spotlight replacement. Saves me 2 hours a week." },
      { name: "Notion", desc: "Second brain and project management." },
      { name: "Figma", desc: "For UI/UX and architectural diagrams." },
      { name: "Spotify", desc: "Fuel for the code." },
    ]
  }
];

export default function GearPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <header className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
              Gear <span className="text-primary">&</span> Setup.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A curated list of the hardware, software, and tools I use daily to build intelligent systems and web applications.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {setup.map((section, i) => (
              <div key={i} className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-widest">{section.category}</h2>
                </div>
                
                <ul className="space-y-6">
                  {section.items.map((item, j) => (
                    <li key={j} className="group">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
