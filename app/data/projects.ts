export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "ai" | "fullstack" | "data" | "tools";
  github?: string;
  demo?: string;
  gradient: string;       // light-mode gradient for tiles without demo
  borderColor: string;    // top accent border
  accentColor: string;    // text accent color (dark enough for light bg)
  span?: "wide";
};

export const projects: Project[] = [
  // ── Row 1 ────────────────────────────────────────────────────────────────
  {
    id: "nestdirect",
    title: "NestDirect",
    tagline: "Property rental platform",
    description:
      "Full-stack rental platform connecting landlords and renters directly — TypeScript/Next.js frontend with a PostgreSQL backend. Removes the agency middleman.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com/mmarada/mmv",
    demo: "https://nestdirect.vercel.app/",
    gradient: "from-teal-100 to-cyan-100",
    borderColor: "#0d9488",
    accentColor: "#0f766e",
  },
  {
    id: "stockriskmgr",
    title: "Stock Risk Manager",
    tagline: "Portfolio risk analyzer",
    description:
      "Risk-aware stock portfolio optimizer — suggests allocations from a risk questionnaire, models returns, and runs what-if scenario analytics.",
    tags: ["TypeScript", "Next.js", "Finance"],
    category: "ai",
    github: "https://github.com/mmarada/stockriskmgr",
    demo: "https://stockriskmgr.vercel.app/",
    gradient: "from-green-100 to-emerald-100",
    borderColor: "#16a34a",
    accentColor: "#15803d",
  },
  {
    id: "contexto",
    title: "ContextO",
    tagline: "AI SRE Agent",
    description:
      "LangGraph + FastMCP agent correlating live app errors with GitHub source, generates regression tests, re-runs when changed files overlap with past failures.",
    tags: ["LangGraph", "FastMCP", "Python", "SQLite"],
    category: "ai",
    github: "https://github.com/mmarada/testServerContextO",
    demo: "https://contexto-dev.lovable.app",
    gradient: "from-sky-100 to-blue-100",
    borderColor: "#0284c7",
    accentColor: "#0369a1",
  },
  // ── Row 2 ────────────────────────────────────────────────────────────────
  {
    id: "fifa26",
    title: "FIFA 26 Odds",
    tagline: "Match prediction engine",
    description:
      "Models team form, player ratings, and head-to-head data to generate win/draw/loss probabilities for FIFA 26 matchups.",
    tags: ["TypeScript", "Gemini API", "Sports Analytics"],
    category: "data",
    github: "https://github.com/mmarada/FIFA26",
    demo: "https://fifa26odds.vercel.app/",
    gradient: "from-rose-100 to-pink-100",
    borderColor: "#e11d48",
    accentColor: "#be123c",
  },
  {
    id: "elective-hub",
    title: "Elective Hub",
    tagline: "UW course planner",
    description:
      "AI-powered course planner for UW students — discovers electives, checks prerequisites, models scheduling, and suggests paths by major and interest.",
    tags: ["TypeScript", "Gemini API", "Next.js"],
    category: "fullstack",
    github: "https://github.com/mmarada/elective_hub",
    demo: "https://electivedashboard.vercel.app/",
    gradient: "from-violet-100 to-purple-100",
    borderColor: "#7c3aed",
    accentColor: "#6d28d9",
  },
  {
    id: "chess",
    title: "Chess + Anime",
    tagline: "Full-stack chess platform",
    description:
      "Decoupled React/Node.js chess platform with real-time game logic via WebSockets and a distinctive anime-inspired visual identity.",
    tags: ["React", "Node.js", "WebSockets"],
    category: "fullstack",
    github: "https://github.com/mmarada/chess-anime-frontend",
    demo: "https://chess-anime-frontend-13xn.vercel.app/",
    gradient: "from-amber-100 to-orange-100",
    borderColor: "#d97706",
    accentColor: "#b45309",
  },
  {
    id: "self-driving-car",
    title: "Self-Driving Car",
    tagline: "Neuroevolution in vanilla JS",
    description:
      "Neural network simulation from scratch — 1000 car mutations per generation, selects the best-fit path, persists weights to localStorage. No ML libraries.",
    tags: ["JavaScript", "Neural Networks", "Canvas API"],
    category: "ai",
    github: "https://github.com/mmarada/SelfDrivingCar",
    demo: "https://selfdrivingcar-seven.vercel.app/",
    gradient: "from-slate-100 to-zinc-200",
    borderColor: "#64748b",
    accentColor: "#475569",
  },
  // ── Row 3 ────────────────────────────────────────────────────────────────
  {
    id: "portify",
    title: "Portify",
    tagline: "One-click portfolio builder",
    description:
      "Paste a GitHub URL → AI curates your best projects → pick a theme → deploy to Vercel in one click. Supports Claude, GPT-4o, and Gemini.",
    tags: ["Next.js", "Claude API", "Vercel API", "TypeScript"],
    category: "tools",
    github: "https://github.com/mmarada/portfolio-builder",
    demo: "https://oneclickportfoliobuilder.vercel.app/",
    gradient: "from-emerald-100 to-teal-100",
    borderColor: "#059669",
    accentColor: "#047857",
  },
  {
    id: "case-grader",
    title: "Case Grader",
    tagline: "Consulting case AI evaluator",
    description:
      "GPT-4 Vision tool grading consulting cases across Structure, Quant Analysis, Business Judgment & Communication. Drag-and-drop PDFs and images.",
    tags: ["GPT-4 Vision", "Node.js", "TypeScript"],
    category: "tools",
    gradient: "from-orange-100 to-red-100",
    borderColor: "#ea580c",
    accentColor: "#c2410c",
  },
  {
    id: "recur8ion",
    title: "Recur8ion",
    tagline: "Active project",
    description:
      "Next.js application currently in development — most actively updated project in the repo.",
    tags: ["TypeScript", "Next.js"],
    category: "fullstack",
    github: "https://github.com/mmarada/Recur8ion",
    gradient: "from-pink-100 to-rose-100",
    borderColor: "#db2777",
    accentColor: "#be185d",
  },
];
