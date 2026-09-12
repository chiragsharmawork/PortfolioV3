import { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about my development process, services, and AI systems.",
};

const FAQ_DATA = [
  {
    category: "ABOUT",
    items: [
      {
        question: "Who is Chirag?",
        answer: "I am a Full Stack Gen AI Developer based in Gwalior, India. I build web applications, intelligent AI systems, and automation scripts. I'm currently pursuing my B.Tech in Information Technology at RJIT."
      },
      {
        question: "What does Chirag build?",
        answer: "I build a wide range of software including full-stack SaaS platforms, landing pages, business dashboards, and autonomous AI agents (like OMNIX)."
      },
      {
        question: "What technologies do you use?",
        answer: "My core stack is React, Next.js, TypeScript, and Node.js for the web. For AI and automation, I heavily use Python, PyTorch, LangChain, and Playwright. I use MongoDB or PostgreSQL for databases."
      }
    ]
  },
  {
    category: "DEVELOPMENT",
    items: [
      {
        question: "What kind of websites can you build?",
        answer: "I can build anything from high-converting marketing landing pages to complex, data-heavy web applications with user authentication, databases, and custom APIs."
      },
      {
        question: "Do you build full-stack applications?",
        answer: "Yes. I handle both the frontend (UI/UX, React) and the backend (servers, databases, logic) to deliver complete, functioning products."
      },
      {
        question: "Can you redesign an existing website?",
        answer: "Yes. If you have an outdated website, I can redesign it using modern frameworks (Next.js/Tailwind) to drastically improve performance, accessibility, and user experience."
      }
    ]
  },
  {
    category: "AI & AUTOMATION",
    items: [
      {
        question: "Do you work with AI?",
        answer: "Yes. Integrating AI into products is a major focus of mine. This includes building custom LLM wrappers, AI chat interfaces, and automated decision-making workflows."
      },
      {
        question: "What is OMNIX?",
        answer: (
          <>
            OMNIX is my flagship autonomous AI desktop agent. It uses computer vision to perceive the screen and LLMs to plan and execute tasks (like browsing or data extraction) automatically. You can read the full architecture in the <Link href="/work/omnix" className="text-primary hover:underline">OMNIX Case Study</Link>.
          </>
        )
      }
    ]
  },
  {
    category: "WORK & SERVICES",
    items: [
      {
        question: "Where can I see your projects?",
        answer: (
          <>
            You can view my complete archive of projects on the <Link href="/work" className="text-primary hover:underline">Work page</Link>.
          </>
        )
      },
      {
        question: "What is Vertex Studio?",
        answer: (
          <>
            Vertex Studio is a digital growth agency I operate. It represents the real-world business side of my development, where I provide end-to-end web services for clients. See the <Link href="/work/vertex-studio" className="text-primary hover:underline">Vertex Studio Case Study</Link>.
          </>
        )
      },
      {
        question: "How does your process work?",
        answer: "It generally follows six steps: Understand (requirements gathering), Plan (architecture & design), Build (development), Test (QA), Launch (deployment), and Improve (maintenance)."
      }
    ]
  },
  {
    category: "CONTACT",
    items: [
      {
        question: "How can I contact you?",
        answer: (
          <>
            The best way is to use the <Link href="/contact" className="text-primary hover:underline">Contact form</Link> on this website, or email me directly at chiragsharmawork95@gmail.com.
          </>
        )
      },
      {
        question: "Are you available for work/internships?",
        answer: "Yes, I am currently open to freelance projects, collaborations, and internship opportunities."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">FAQ</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Common questions about my background, technical capabilities, and how we can work together.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl space-y-24">
          {FAQ_DATA.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-8">{section.category}</h2>
              <Accordion items={section.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 mt-32 text-center border-t border-border/50 pt-24">
        <h2 className="text-2xl font-bold mb-4">Still have a question?</h2>
        <Link href="/contact" className="text-primary hover:underline font-medium">
          Send me a message
        </Link>
      </section>
    </div>
  );
}
