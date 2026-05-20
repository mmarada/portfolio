export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "ai" | "fullstack" | "data" | "tools";
  github?: string;
  demo?: string;
  gradient: string;
  accentColor: string;
  span?: "wide";
};

// Projects with live demos first, then the rest
export const projects: Project[] = [
  // ── Live demo projects ──────────────────────────────────────────────────────
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
    gradient: "from-teal-950 via-cyan-900 to-sky-950",
    accentColor: "#2dd4bf",
  },
  {
    id: "elective-hub",
    title: "Elective Hub",
    tagline: "UW course planner",
    description:
      "AI-powered course planner for UW students — discovers electives, checks prerequisites, models scheduling constraints, and suggests paths by major and interest.",
    tags: ["TypeScript", "Gemini API", "Next.js", "EdTech"],
    category: "fullstack",
    github: "https://github.com/mmarada/elective_hub",
    demo: "https://electivedashboard.vercel.app/",
    gradient: "from-violet-950 via-fuchsia-900 to-purple-950",
    accentColor: "#c084fc",
  },
  {
    id: "fifa26",
    title: "FIFA 26 Odds",
    tagline: "Match prediction engine",
    description:
      "Models team form, player ratings, and head-to-head data to generate win/draw/loss probabilities for FIFA 26 matchups. Real-time sports analytics layer.",
    tags: ["TypeScript", "Gemini API", "Sports Analytics"],
    category: "data",
    github: "https://github.com/mmarada/FIFA26",
    demo: "https://fifa26odds.vercel.app/",
    gradient: "from-rose-950 via-red-900 to-pink-950",
    accentColor: "#fb7185",
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
    gradient: "from-yellow-950 via-orange-900 to-red-950",
    accentColor: "#fbbf24",
  },
  {
    id: "self-driving-car",
    title: "Self-Driving Car",
    tagline: "Neuroevolution in vanilla JS",
    description:
      "Neural network simulation built from scratch — spawns 1000 car mutations, selects the best-fit path, and persists winning weights to localStorage. No ML libraries.",
    tags: ["JavaScript", "Neural Networks", "Canvas API"],
    category: "ai",
    github: "https://github.com/mmarada/SelfDrivingCar",
    demo: "https://selfdrivingcar-seven.vercel.app/",
    gradient: "from-zinc-900 via-slate-800 to-zinc-900",
    accentColor: "#94a3b8",
  },
  // ── No live demo ────────────────────────────────────────────────────────────
  {
    id: "career-ops",
    title: "Career-Ops",
    tagline: "AI job search pipeline",
    description:
      "Turns Claude Code into a full job search command center — A–F scoring across 740+ offers, ATS-optimized CVs per JD, auto-scrapes 45+ portals via Playwright. Used to land a Head of Applied AI role.",
    tags: ["Claude Code", "Go", "Node.js", "Playwright"],
    category: "ai",
    github: "https://github.com/mmarada/career-ops",
    span: "wide",
    gradient: "from-violet-950 via-purple-900 to-indigo-950",
    accentColor: "#a78bfa",
  },
  {
    id: "portify",
    title: "Portify",
    tagline: "One-click portfolio builder",
    description:
      "Paste a GitHub URL → AI picks your best projects → choose a theme → deploy to Vercel in one click. Supports Claude, GPT-4o, and Gemini. Built and shipped in a day.",
    tags: ["Next.js", "Claude API", "Vercel API", "TypeScript"],
    category: "tools",
    github: "https://github.com/mmarada/portfolio-builder",
    gradient: "from-emerald-950 via-teal-900 to-cyan-950",
    accentColor: "#34d399",
  },
  {
    id: "contexto",
    title: "ContextO",
    tagline: "AI SRE Agent",
    description:
      "LangGraph + FastMCP agent that correlates live app errors with GitHub source, generates regression tests, and re-runs them when changed files overlap with past failures.",
    tags: ["LangGraph", "FastMCP", "Python", "SQLite"],
    category: "ai",
    github: "https://github.com/mmarada/testServerContextO",
    gradient: "from-cyan-950 via-sky-900 to-blue-950",
    accentColor: "#38bdf8",
  },
  {
    id: "case-grader",
    title: "Case Grader",
    tagline: "Consulting case AI evaluator",
    description:
      "GPT-4 Vision tool that grades consulting case solutions across Structure, Quant Analysis, Business Judgment & Communication. Accepts PDFs and images.",
    tags: ["GPT-4 Vision", "Node.js", "TypeScript"],
    category: "tools",
    gradient: "from-orange-950 via-amber-900 to-yellow-950",
    accentColor: "#fb923c",
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio",
    tagline: "Risk-aware stock optimizer",
    description:
      "Suggests a portfolio from a risk questionnaire, lets users add custom holdings, optimizes allocation via risk/return modeling, and runs what-if scenario analytics.",
    tags: ["TypeScript", "Gemini API", "Next.js", "Finance"],
    category: "ai",
    github: "https://github.com/mmarada/AI-portfolio",
    gradient: "from-lime-950 via-green-900 to-emerald-950",
    accentColor: "#86efac",
  },
  {
    id: "sharpey",
    title: "Sharpey",
    tagline: "AI-powered tool",
    description:
      "TypeScript AI application built on Google AI Studio — intelligent workflow automation with Gemini API.",
    tags: ["TypeScript", "Gemini API", "Google AI Studio"],
    category: "ai",
    github: "https://github.com/mmarada/sharpey",
    gradient: "from-sky-950 via-blue-900 to-indigo-950",
    accentColor: "#60a5fa",
  },
  {
    id: "recur8ion",
    title: "Recur8ion",
    tagline: "Active project",
    description:
      "Next.js application currently in development — most recently updated project in the repo.",
    tags: ["TypeScript", "Next.js"],
    category: "fullstack",
    github: "https://github.com/mmarada/Recur8ion",
    gradient: "from-pink-950 via-rose-900 to-red-950",
    accentColor: "#f472b6",
  },
];
