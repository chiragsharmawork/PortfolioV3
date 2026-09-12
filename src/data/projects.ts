export type ProjectCategory = "WEB" | "FULL-STACK" | "AI / ML" | "AUTOMATION" | "AI AGENTS" | "BACKEND" | "UI / FRONTEND" | "EXPERIMENTS" | "BUSINESS" | "AGENCY";
export type ProjectType = "PROJECT" | "SYSTEM" | "EXPERIMENT" | "CLONE" | "REDESIGN" | "AI SYSTEM" | "AUTOMATION" | "BUSINESS";
export type ProjectStatus = "LIVE" | "BUILDING" | "EXPERIMENT" | "ARCHIVED";

export type ProjectStory = {
  built: string;
  learned: string;
  broke: string;
};

export type CaseStudy = {
  problem?: string;
  solution?: string;
  approach?: string;
  outcome?: string;
  learnings?: string;
  highlights?: string[];
  metrics?: string[];
  architecture?: { label: string; detail: string }[];
  challenges?: string[];
};

export type Project = {
  id?: string;
  title: string;
  slug: string;
  tagline: string;
  shortDescription?: string;
  desc: string;
  category: ProjectCategory[];
  type: ProjectType;
  year: string;
  status: ProjectStatus;
  role?: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  img?: string;
  gallery?: string[];
  flagship?: boolean;
  featured?: boolean;
  story?: ProjectStory;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: 'omnix',
    title: 'OMNIX',
    tagline: 'Autonomous AI Desktop Agent',
    desc: 'Multimodal AI desktop agent that can understand natural-language goals, perceive a Windows screen, plan tasks, control apps, automate browsers, use memory, and recover during execution.',
    category: ['AI AGENTS', 'AI / ML', 'AUTOMATION'],
    type: 'SYSTEM',
    year: '2026',
    status: 'BUILDING',
    liveUrl: 'https://omnix-website.netlify.app/',
    githubUrl: 'https://github.com/chirag-x',
    stack: ['Python', 'PyQt6', 'Ultralytics YOLO', 'Playwright', 'PyAutoGUI', 'Sentence Transformers', 'Edge TTS', 'LLM APIs'],
    featured: true,
    flagship: true,
    img: '/images/Omnix_website.png',
    story: {
      built: 'A modular Windows desktop agent with reasoning, vision, memory, task planning, browser automation, voice input, and desktop control.',
      learned: 'How to design AI systems that combine reasoning, perception, memory, planning, and real-world tool execution instead of treating an LLM as a chat-only API.',
      broke: 'Dynamic desktop environments are unpredictable. OMNIX uses observe, understand, plan, act, verify, and recover loops to make execution more reliable.'
    },
    caseStudy: {
      problem: 'Most LLM tools are text-in, text-out chatbots. They don\'t natively understand the graphical interface of a computer, making them unable to automate real, dynamic desktop tasks where UI elements constantly change position and state.',
      approach: 'Instead of hardcoding macros, I built an architecture that combines computer vision (YOLO) with LLM reasoning. The agent takes a screenshot, detects UI elements, plans a sequence of actions, executes them via PyAutoGUI, and verifies the outcome before proceeding.',
      outcome: 'A working local AI desktop agent that can navigate Windows applications, read visual data, and execute multi-step workflows based purely on natural language goals.',
      metrics: ['Autonomous agent', 'Computer vision', 'Semantic memory', 'Browser automation', 'Voice pipeline'],
      architecture: [
        { label: 'Input + Context', detail: 'Natural-language and voice commands are combined with screen state, system context, memory, and user intent.' },
        { label: 'AI Brain + Task Planner', detail: 'LLM reasoning converts high-level goals into structured multi-step plans with skill selection and recovery paths.' },
        { label: 'Agent Controller', detail: 'Coordinates planning, observation, execution, verification, and recovery across skills, vision, and automation.' },
        { label: 'Skills / Vision / Automation', detail: 'PyQt6, Ultralytics YOLO, Playwright, PyAutoGUI, Sentence Transformers, LLM APIs, and Edge TTS work together to operate the desktop.' }
      ],
      challenges: [
        'Separating reasoning from execution so new capabilities can be added as independent skills instead of hard-coded commands.',
        'Making the agent understand a dynamic Windows environment through screen perception and UI-element detection.',
        'Designing a dependable Observe + Understand + Plan + Act + Verify + Recover loop for real computer-based tasks.'
      ]
    }
  },
  {
    slug: 'vertex-studio',
    title: 'Vertex Studio',
    tagline: 'Digital Growth Studio',
    desc: 'An agency/business I operate, focused on building websites, digital experiences and growth systems for real businesses. Vertex Studio provides end-to-end digital services including web development, marketing, and SEO.',
    category: ['BUSINESS', 'AGENCY', 'WEB', 'FULL-STACK'],
    type: 'BUSINESS',
    year: '2026',
    status: 'LIVE',
    liveUrl: 'https://vertex-studio-official.netlify.app/',
    githubUrl: 'https://github.com/chirag-x/portfolio',
    stack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Figma'],
    featured: true,
    flagship: true,
    img: '/images/vertex-studio.png',
    story: {
      built: 'Vertex Studio is a real digital growth agency I operate. I built the business infrastructure, client-facing portfolio, pricing calculator, and lead generation funnels from scratch to serve real-world clients.',
      learned: 'How to transition from purely writing code to operating a digital business. This project taught me product thinking, client conversion, and how to sell technical services (like SEO, maintenance, and web redesigns) to non-technical business owners.',
      broke: 'Initially, the offering was too broad. I had to refine the business system (Discovery -> Design -> Development -> Testing -> Launch) and focus on specific deliverables like Landing Pages, QR Menus, and Local SEO to streamline operations.'
    },
    caseStudy: {
      problem: 'Local businesses struggle to establish a professional digital presence. Agencies are either too expensive, or cheap templates fail to deliver performance and SEO.',
      approach: 'I started Vertex Studio to offer premium, full-stack digital solutions at competitive rates. I handle the entire pipeline: from sales and discovery, to UI/UX design in Figma, and high-performance development in React/Next.js.',
      outcome: 'A growing digital agency that has delivered production-grade websites, improved local search rankings for businesses, and generated measurable inbound leads.',
      metrics: [
        'Website Design & Redesign',
        'Landing Pages & Funnels',
        'QR Digital Menus',
        'Digital Marketing & Local SEO',
        'Google Business Profile Optimization',
        'Social Media Creatives',
        'Ecommerce & Maintenance'
      ],
      architecture: [
        { label: 'Discovery', detail: 'Understanding the client business, target audience, and digital goals.' },
        { label: 'Design', detail: 'Creating conversion-focused wireframes, visual branding, and UI prototypes in Figma.' },
        { label: 'Development', detail: 'Engineering fast, responsive, and accessible web experiences using modern stacks.' },
        { label: 'Testing', detail: 'Rigorous QA for performance (90+ speed target), mobile responsiveness, and SEO indexing.' },
        { label: 'Launch', detail: 'Deploying the system and initiating digital marketing/growth campaigns.' }
      ],
      challenges: [
        'Translating complex technical features into clear business value for potential clients.',
        'Building a scalable agency process that can handle 20+ projects without sacrificing quality.',
        'Integrating lead generation tools (WhatsApp CTA, Calendly, Cost Calculator) seamlessly into the user flow.'
      ]
    }
  },
  
  {
    slug: 'royal-fitness',
    title: 'Royal Fitness Club',
    tagline: 'Gym & Fitness Platform',
    desc: 'A modern, responsive website for Royal Fitness Club, Gwalior, featuring memberships and classes.',
    category: ['WEB', 'UI / FRONTEND'],
    type: 'PROJECT',
    year: '2025',
    status: 'LIVE',
    liveUrl: 'https://royal-fitness-club-gwalior.netlify.app/',
    stack: ['React', 'CSS', 'JavaScript', 'HTML5'],
    featured: true,
    img: '/images/royal-fitness.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'A local gym needed a digital presence to showcase memberships, classes, and facilities to attract new members.',
      approach: 'Designed and developed a modern, responsive landing page with engaging UI elements and clear calls to action.',
      metrics: ['Membership showcase', 'Class schedules', 'Responsive design', 'Modern UI']
    }
  },
  {
    slug: 'apex-details',
    title: 'Apex Details',
    tagline: 'Professional Services Platform',
    desc: 'A modern, responsive website for Apex Details, showcasing services and client testimonials.',
    category: ['WEB', 'UI / FRONTEND'],
    type: 'PROJECT',
    year: '2025',
    status: 'LIVE',
    liveUrl: 'https://jovial-brioche-f4f676.netlify.app/',
    stack: ['React', 'CSS', 'JavaScript', 'HTML5'],
    featured: true,
    img: '/images/apex-details.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'Apex Details needed a modern, responsive website to showcase their professional services and client testimonials.',
      approach: 'Developed a clean, user-friendly interface using React and CSS, focusing on service presentation and client engagement.',
      metrics: ['Service showcase', 'Client testimonials', 'Responsive design', 'User engagement']
    }
  },
  {
    slug: 'macro-meals',
    title: 'Macro Meals',
    tagline: 'Healthy Food Delivery UI',
    desc: 'A clean and responsive food delivery platform focused on healthy, macro-calculated meals.',
    category: ['WEB', 'UI / FRONTEND'],
    type: 'PROJECT',
    year: '2025',
    status: 'LIVE',
    liveUrl: 'https://macromeals.netlify.app/',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    featured: true,
    img: '/images/macro-meals.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'Health-conscious consumers need a fast, intuitive way to browse and order macro-calculated meals online.',
      approach: 'Created a clean, conversion-focused user interface using React and Tailwind CSS for optimal performance and aesthetics.',
      metrics: ['Food menu UI', 'Macro-nutrient display', 'Responsive layout', 'Fast load times']
    }
  },
  {
    slug: 'smart-campus',
    title: 'Smart Campus WiFi System',
    tagline: 'Real-world campus monitoring system',
    desc: 'Full-stack academic project with live dashboards for monitoring campus WiFi networks.',
    category: ['FULL-STACK', 'WEB'],
    type: 'PROJECT',
    year: '2025',
    status: 'LIVE',
    liveUrl: 'https://luminous-blini-2839b3.netlify.app/',
    githubUrl: 'https://github.com/chirag-x/Smart--campus',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    img: '/images/smart-campus.png',
    role: 'Full-Stack Developer',
    caseStudy: {
      problem: 'Managing and monitoring campus WiFi networks efficiently requires real-time dashboards and robust backend tracking.',
      approach: 'Built a full-stack academic project integrating a Node/Express backend with MongoDB, and a React frontend for live data visualization.',
      metrics: ['Real-time dashboard', 'Network monitoring', 'Database integration', 'Responsive UI']
    }
  },
  {
    slug: 'catering-project',
    title: 'Catering Services',
    tagline: 'Event Catering Platform',
    desc: 'A professional website for catering services, showcasing menus, events, and booking forms.',
    category: ['WEB', 'UI / FRONTEND'],
    type: 'PROJECT',
    year: '2024',
    status: 'LIVE',
    liveUrl: 'https://catering-project-chirag.netlify.app/',
    stack: ['HTML', 'CSS', 'JavaScript'],
    img: '/images/catering.png',
    role: 'Web Developer',
    caseStudy: {
      problem: 'A catering service required an online platform to display their menus, previous events, and allow clients to book services.',
      approach: 'Built a structured, accessible website using HTML, CSS, and JavaScript to handle booking forms and media galleries.',
      metrics: ['Event galleries', 'Booking forms', 'Menu presentation', 'Interactive UI']
    }
  },
  {
    slug: 'tutedude',
    title: 'Tute Dude Redesign',
    tagline: 'Platform Redesign',
    desc: 'Full-stack redesign of Tute Dude with improved navigation, layout, and user experience.',
    category: ['UI / FRONTEND', 'WEB'],
    type: 'REDESIGN',
    year: '2024',
    status: 'LIVE',
    liveUrl: 'https://tute-dude-clone-chirag.netlify.app/',
    githubUrl: 'https://github.com/chirag-x/portfolio',
    stack: ['HTML', 'CSS', 'JavaScript'],
    img: '/images/tutedude.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'The original Tute Dude platform lacked a modern, engaging user experience for students.',
      approach: 'Executed a complete redesign of the platform interface, focusing on improved navigation, layout consistency, and user flow.',
      metrics: ['UI Redesign', 'Improved navigation', 'Responsive layout', 'User flow optimization']
    }
  },
  {
    slug: 'netflix-clone',
    title: 'Netflix Clone',
    tagline: 'Streaming UI',
    desc: 'React-based streaming UI with dynamic content rendering and responsive layout.',
    category: ['UI / FRONTEND', 'WEB'],
    type: 'CLONE',
    year: '2024',
    status: 'LIVE',
    liveUrl: 'https://projectchirag-50.netlify.app/',
    githubUrl: 'https://github.com/chirag-x/portfolio',
    stack: ['React', 'CSS', 'JavaScript'],
    img: '/images/netflix.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'Learning to handle dynamic content rendering and complex state management in a large-scale media application.',
      approach: 'Developed a visually accurate Netflix clone using React, implementing horizontal scrolling lists and dynamic media loading.',
      metrics: ['Dynamic content rendering', 'Media galleries', 'Complex UI state', 'Responsive design']
    }
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel Booking System',
    tagline: 'API Backend',
    desc: 'Node.js + Express backend with booking logic and structured API design.',
    category: ['BACKEND', 'WEB'],
    type: 'PROJECT',
    year: '2024',
    status: 'LIVE',
    liveUrl: 'https://hotel-project-chirag.netlify.app/',
    githubUrl: 'https://github.com/chirag-x/portfolio',
    stack: ['Node.js', 'Express', 'JavaScript', 'MongoDB'],
    img: '/images/hotel.png',
    role: 'Backend Developer',
    caseStudy: {
      problem: 'A hotel booking system requires robust server-side logic to handle reservations, availability, and user data safely.',
      approach: 'Engineered a RESTful API backend using Node.js, Express, and MongoDB to manage the core booking logic and data persistence.',
      metrics: ['REST API design', 'Database schema', 'Booking logic', 'Server-side validation']
    }
  }
];
