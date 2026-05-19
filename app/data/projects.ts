export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "ai" | "fullstack" | "data" | "tools";
  github?: string;
  demo?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    id: "career-ops",
    title: "Career-Ops",
    description:
      "AI-powered job search pipeline built on Claude Code agents — evaluates offers, generates tailored CVs, scrapes portals, and tracks everything.",
    longDescription:
      "Turns Claude Code into a full job search command center. Evaluates offers with an A–F scoring system across 10 weighted dimensions, generates ATS-optimized PDFs customized per JD, and auto-scans 45+ company portals via Playwright. Built by someone who used it to evaluate 740+ offers and land a Head of Applied AI role.",
    tags: ["Claude Code", "Go", "Node.js", "Playwright", "AI Agents"],
    category: "ai",
    github: "https://github.com/mmarada/career-ops",
    highlight: true,
  },
  {
    id: "contexto",
    title: "ContextO — AI SRE Agent",
    description:
      "Agentic SRE platform that correlates live application errors with GitHub source code, generates regression tests, and persists incidents in SQLite.",
    longDescription:
      "LangGraph ReAct agent orchestrated via FastMCP. The pipeline polls live logs, traces errors back to source files, stores incidents in SQLite, generates regression test cases, and auto-triggers reruns when changed files overlap with past failures.",
    tags: ["LangGraph", "FastMCP", "Python", "SQLite", "Flask", "Gemini"],
    category: "ai",
    github: "https://github.com/mmarada/testServerContextO",
    highlight: true,
  },
  {
    id: "case-grader",
    title: "Consulting Case Grader",
    description:
      "AI tool that evaluates consulting case solutions across Structure, Quantitative Analysis, Business Judgment, and Communication — accepts PDFs and images.",
    longDescription:
      "Drag-and-drop web app powered by GPT-4 Vision. Grades case papers section-by-section using a MECE framework. Outputs detailed feedback with specific strengths and improvement areas across four 25%-weighted dimensions. Built to help consulting candidates self-assess before interviews.",
    tags: ["GPT-4 Vision", "Node.js", "TypeScript", "OpenAI API"],
    category: "tools",
    highlight: true,
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio Manager",
    description:
      "Portfolio manager that suggests allocations based on risk profile, lets users add custom stocks, and runs what-if scenario analytics.",
    longDescription:
      "AI-driven portfolio optimizer built with Gemini. Suggests an initial portfolio from a user risk questionnaire, lets users add/remove holdings, then optimizes allocation using risk vs return tradeoff modeling. Includes advanced analytics for stress-testing portfolios against market scenarios.",
    tags: ["TypeScript", "Gemini API", "Next.js", "Finance"],
    category: "ai",
    github: "https://github.com/mmarada/AI-portfolio",
  },
  {
    id: "fifa26",
    title: "FIFA 26 Odds Engine",
    description:
      "Match prediction engine for FIFA 26 — models team and player stats to generate win/draw/loss probabilities.",
    longDescription:
      "TypeScript-based odds engine powered by Gemini AI. Ingests team form, player ratings, and head-to-head data to model outcome probabilities for FIFA 26 matchups. Designed as a real-time prediction layer for fantasy and sports analytics use cases.",
    tags: ["TypeScript", "Gemini API", "Sports Analytics", "Next.js"],
    category: "data",
    github: "https://github.com/mmarada/FIFA26",
    demo: "https://fifa26odds.vercel.app/",
  },
  {
    id: "elective-hub",
    title: "Elective Hub (UW)",
    description:
      "AI-powered course planner for University of Washington students — discovers electives, models scheduling conflicts, and suggests paths.",
    longDescription:
      "Built with TypeScript and Gemini AI. Helps UW students explore elective options, check prerequisites, model time constraints, and get AI-guided recommendations based on their major and interests. Large-scale TypeScript project (220K+ code).",
    tags: ["TypeScript", "Gemini API", "Next.js", "EdTech"],
    category: "fullstack",
    github: "https://github.com/mmarada/elective_hub",
    demo: "https://electivedashboard.vercel.app/",
  },
  {
    id: "nestdirect",
    title: "NestDirect",
    description:
      "Full-stack property platform — TypeScript frontend, PostgreSQL backend, connecting renters and landlords directly without agency fees.",
    longDescription:
      "End-to-end property listing and management platform. TypeScript/Next.js frontend with a PLpgSQL-backed database layer. Supports property search, direct landlord contact, and listing management — removing the middleman from the rental process.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Full-Stack"],
    category: "fullstack",
    github: "https://github.com/mmarada/mmv",
    demo: "https://nestdirect.vercel.app/",
  },
  {
    id: "self-driving-car",
    title: "Self-Driving Car Sim",
    description:
      "Neural network simulation of a self-driving car in vanilla JavaScript — trains 1000 mutation variants and persists the best-fit agent.",
    longDescription:
      "Implemented from scratch in vanilla JS/HTML with no ML libraries. Uses a neuroevolution approach — spawns 1000 car mutations per generation, selects the best path, and saves the winning weights to localStorage. The saved model is loaded on refresh, showing the car navigate without retraining.",
    tags: ["JavaScript", "Neural Networks", "Canvas API", "Neuroevolution"],
    category: "ai",
    github: "https://github.com/mmarada/SelfDrivingCar",
    demo: "https://selfdrivingcar-seven.vercel.app/",
  },
  {
    id: "chess",
    title: "Chess + Anime App",
    description:
      "Full-stack chess platform with a custom anime-inspired UI — React frontend, Node.js backend with real-time game logic.",
    longDescription:
      "Decoupled frontend/backend architecture. React client handles board rendering, move validation, and UI state. Node.js backend manages game sessions and socket connections. Styled with an anime aesthetic, blending chess strategy with a distinctive visual identity.",
    tags: ["React", "Node.js", "TypeScript", "WebSockets", "Full-Stack"],
    category: "fullstack",
    github: "https://github.com/mmarada/chess-anime-frontend",
    demo: "https://chess-anime-frontend-13xn.vercel.app/",
  },
];
