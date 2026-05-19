"use client";

import { useState } from "react";
import { projects, type Project } from "./data/projects";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = {
  "AI & Agents": [
    "Claude Code",
    "LangGraph",
    "FastMCP",
    "OpenAI API",
    "Gemini API",
    "RAG",
    "Prompt Engineering",
  ],
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Node.js", "Go", "Python", "Flask", "PostgreSQL", "SQLite"],
  "Tooling & Infra": [
    "Playwright",
    "Docker",
    "Vercel",
    "GitHub Actions",
    "REST APIs",
  ],
  "Product": [
    "Roadmap planning",
    "User research",
    "A/B testing",
    "Stakeholder mgmt",
    "MECE frameworks",
  ],
};

const CATEGORY_LABELS: Record<Project["category"], string> = {
  ai: "AI / Agents",
  fullstack: "Full-Stack",
  data: "Data & Analytics",
  tools: "Tools",
};

const TAG_ICONS: Record<string, string> = {};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a] bg-[#080808]/90 backdrop-blur-sm">
      <span className="font-mono text-sm text-[#6ee7b7] tracking-wider">
        mm.dev
      </span>
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="https://github.com/mmarada"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-[#888] hover:text-[#f0f0f0] transition-colors"
      >
        <GithubIcon />
        <span className="hidden sm:inline">GitHub</span>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-[#6ee7b7] mb-6 tracking-widest uppercase">
          Available for opportunities
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight mb-6 leading-tight">
          Mohan Marada
        </h1>
        <p className="text-xl sm:text-2xl text-[#888] mb-8 leading-relaxed">
          Tech PM &amp; Full-Stack Engineer
          <br />
          <span className="text-[#6ee7b7]">building AI-powered products</span>
        </p>
        <p className="text-base text-[#666] max-w-xl mx-auto mb-12 leading-7">
          I ship end-to-end systems at the intersection of product strategy and
          engineering — from agentic AI pipelines to real-time data platforms.
          Currently exploring applied AI, LangGraph agents, and full-stack TypeScript.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#6ee7b7] text-black text-sm font-medium rounded-full hover:bg-[#34d399] transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#333] text-[#aaa] text-sm font-medium rounded-full hover:border-[#555] hover:text-[#f0f0f0] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-[#444]"
        >
          <path
            d="M8 4v16M2 14l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const categoryColor: Record<Project["category"], string> = {
    ai: "text-[#6ee7b7] bg-[#6ee7b7]/10",
    fullstack: "text-blue-400 bg-blue-400/10",
    data: "text-purple-400 bg-purple-400/10",
    tools: "text-orange-400 bg-orange-400/10",
  };

  return (
    <div
      className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-200 bg-[#111] hover:bg-[#141414] ${
        project.highlight
          ? "border-[#6ee7b7]/30 hover:border-[#6ee7b7]/60"
          : "border-[#1e1e1e] hover:border-[#333]"
      }`}
    >
      {project.highlight && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-mono text-[#6ee7b7] bg-[#6ee7b7]/10 px-2 py-1 rounded-full uppercase tracking-widest">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-center gap-2 mb-4">
        <span
          className={`text-xs font-mono px-2 py-1 rounded-full ${categoryColor[project.category]}`}
        >
          {CATEGORY_LABELS[project.category]}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-3 group-hover:text-[#6ee7b7] transition-colors pr-16">
        {project.title}
      </h3>

      <p className="text-sm text-[#888] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#666] bg-[#1a1a1a] px-2 py-1 rounded-md font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#888] hover:text-[#f0f0f0] transition-colors"
          >
            <GithubIcon size={14} />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#6ee7b7] hover:text-[#34d399] transition-colors ml-auto"
          >
            Live Demo
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    Project["category"] | "all"
  >("all");

  const categories: Array<Project["category"] | "all"> = [
    "all",
    "ai",
    "fullstack",
    "data",
    "tools",
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto w-full">
      <div className="mb-12">
        <p className="font-mono text-xs text-[#6ee7b7] tracking-widest uppercase mb-3">
          Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Projects
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
              activeCategory === cat
                ? "bg-[#6ee7b7] text-black"
                : "bg-[#1a1a1a] text-[#888] hover:text-[#f0f0f0] hover:bg-[#222]"
            }`}
          >
            {cat === "all" ? "All" : CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-[#6ee7b7] tracking-widest uppercase mb-3">
          Toolkit
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-mono text-[#6ee7b7] mb-4 uppercase tracking-widest">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-[#bbb] bg-[#111] border border-[#1e1e1e] px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 border-t border-[#111]"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-[#6ee7b7] tracking-widest uppercase mb-3">
          Background
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">
          About
        </h2>

        <div className="space-y-5 text-[#aaa] leading-8 text-base">
          <p>
            I'm a software engineer and tech product manager with a deep focus on
            applied AI. I build things that bridge product thinking with
            engineering execution — from multi-agent pipelines to data platforms
            to full-stack web products.
          </p>
          <p>
            My work spans the full stack: TypeScript/React frontends, Go and
            Node.js backends, Python AI pipelines with LangGraph and FastMCP, and
            everything wired together with intent. I care about systems that are
            fast, understandable, and actually used by people.
          </p>
          <p>
            On the product side, I think in MECE frameworks, define success
            metrics before writing code, and treat product decisions as
            first-class engineering concerns.
          </p>
          <p>
            Currently exploring agentic AI, real-time SRE tooling, and
            AI-first consumer products.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 border-t border-[#111]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs text-[#6ee7b7] tracking-widest uppercase mb-3">
          Let's talk
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
          Get in touch
        </h2>
        <p className="text-[#888] mb-10 text-base leading-7">
          Open to PM roles, engineering positions, and consulting engagements
          at the intersection of AI and product.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:mokarma@uw.edu"
            className="flex items-center gap-2 px-6 py-3 bg-[#6ee7b7] text-black text-sm font-medium rounded-full hover:bg-[#34d399] transition-colors"
          >
            <MailIcon />
            Email me
          </a>
          <a
            href="https://github.com/mmarada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#333] text-[#aaa] text-sm font-medium rounded-full hover:border-[#555] hover:text-[#f0f0f0] transition-colors"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-marada/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#333] text-[#aaa] text-sm font-medium rounded-full hover:border-[#555] hover:text-[#f0f0f0] transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#111] px-6 py-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-mono text-sm text-[#444]">
          © {new Date().getFullYear()} Mohan Marada
        </span>
        <span className="font-mono text-xs text-[#333]">
          Built with Next.js + Tailwind
        </span>
      </div>
    </footer>
  );
}

// Icons
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
