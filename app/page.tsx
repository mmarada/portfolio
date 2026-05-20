"use client";

import { useState } from "react";
import { projects, type Project } from "./data/projects";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-zinc-500 tracking-widest">mvm</span>
        <div className="flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 backdrop-blur-md rounded-full px-3 py-2">
          {[
            { label: "About",      href: "#about"      },
            { label: "Experience", href: "#experience" },
            { label: "Projects",   href: "#projects"   },
            { label: "Contact",    href: "#contact"    },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1 text-sm text-zinc-400 hover:text-zinc-100 rounded-full hover:bg-zinc-800 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/mmarada"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <GithubIcon size={16} />
        </a>
      </nav>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-zinc-400 font-mono">Open to PM & Engineering roles · Seattle, WA</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
          Mohan{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Vamshi
          </span>
          <br />Marada
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          MBA Candidate @ <span className="text-zinc-200 font-medium">UW Foster</span> ·{" "}
          ex-Software Architect @ <span className="text-zinc-200 font-medium">Oracle</span> ·{" "}
          Founding Engineer @ <span className="text-zinc-200 font-medium">Ansemble AI</span>
        </p>
        <p className="text-base text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed">
          7 years shipping enterprise systems at Oracle, then went early-stage to help raise $500k+.
          Now combining an MBA with hands-on AI engineering to build products that actually ship.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a href="#projects" className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-full transition-colors">
            View projects
          </a>
          <a href="mailto:mokarma@uw.edu" className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium rounded-full transition-colors">
            Get in touch
          </a>
          <a href="https://www.linkedin.com/in/mohan-marada/" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium rounded-full transition-colors flex items-center gap-2">
            <LinkedInIcon size={14} /> LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden max-w-2xl mx-auto">
          {[
            { value: "7 yrs",  label: "at Oracle"           },
            { value: "$500k+", label: "seed raised"          },
            { value: "MBA",    label: "Dean's Merit Scholar" },
            { value: "30%",    label: "cost reduction led"   },
          ].map((s) => (
            <div key={s.label} className="bg-zinc-900/60 px-6 py-5 text-center">
              <p className="text-2xl font-bold text-zinc-100 tracking-tight">{s.value}</p>
              <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    company: "Ansemble AI",
    role: "Founding Engineer",
    period: "2024 – 2025",
    location: "USA",
    color: "bg-violet-500",
    description: "All-in-one OS for indie artists to create, analyze, and market their music.",
    bullets: [
      "Led web/mobile development from founder vision to MVP, onboarding 6+ high-potential artists and securing >$500k seed funding.",
      "Built AI-assisted workflows and smart-versioning increasing artist productivity by 70% via real-time qualitative insights.",
      "Designed a high-authenticity data engine pulling from 10+ streaming platforms and soundcharts for data-driven marketing decisions.",
    ],
  },
  {
    company: "Oracle",
    role: "Software Architect → Application Developer",
    period: "2018 – 2025",
    location: "Hyderabad, India",
    color: "bg-red-500",
    description: "Core Framework team — enterprise batch microservices and cloud-native migrations.",
    bullets: [
      "Led cloud-native migration of enterprise batch microservices to OCI Kubernetes, reducing client operational costs by 30% and boosting batch throughput by ~20%.",
      "Developed secure data export from Oracle DB to OCI storage using parallel writes, reducing export time by ~25%.",
      "Improved customer dashboards and UX, saving ~$800k in annual support costs.",
      "Mitigated platform risk exposure of $1M+ annually by patching CVSS vulnerabilities, reducing issues by 80%.",
      "Optimized build times from 6+ hrs → ~4 hrs, saving ~1200 engineering hours/year.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-4xl font-bold tracking-tight mb-14">Where I've worked</h2>
        <div className="relative pl-6 border-l border-zinc-800 space-y-12">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="relative">
              <div className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full ${exp.color} ring-4 ring-[#060608]`} />
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">{exp.company}</h3>
                  <p className="text-sm text-zinc-400">{exp.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-zinc-500">{exp.period}</p>
                  <p className="text-xs text-zinc-600">{exp.location}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-500 italic mb-3">{exp.description}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                    <span className="text-zinc-600 mt-1 shrink-0">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Project card with live iframe preview ────────────────────────────────────

function LivePreview({ url }: { url: string }) {
  return (
    // Outer container defines the visible size of the preview
    <div className="relative w-full overflow-hidden rounded-t-none rounded-b-none bg-zinc-950" style={{ height: 210 }}>
      {/* Scale a full-width viewport down to fit the card */}
      <iframe
        src={url}
        title="Live preview"
        scrolling="no"
        style={{
          width: 1280,
          height: 840,
          transform: "scale(0.25)",
          transformOrigin: "top left",
          pointerEvents: "none",
          border: "none",
          display: "block",
        }}
      />
      {/* Invisible click shield so the whole card stays clickable */}
      <div className="absolute inset-0" />
    </div>
  );
}

function GradientPreview({ gradient }: { gradient: string }) {
  return (
    <div className={`w-full bg-gradient-to-br ${gradient} flex items-center justify-center`} style={{ height: 210 }}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXMiPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />
      <span className="text-white/20 text-4xl font-bold tracking-tighter">{"{  }"}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:-translate-y-1 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/50 transition-all duration-200">

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-zinc-100 text-base leading-tight truncate">{project.title}</h3>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[11px] text-zinc-500 font-mono">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors"
              style={{ color: project.accentColor, borderColor: `${project.accentColor}50` }}
            >
              Live Demo <ExternalLinkIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-300 transition-colors"
            >
              <GithubIcon size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Preview */}
      <div className="relative overflow-hidden border-t border-zinc-800">
        {project.demo ? (
          <LivePreview url={project.demo} />
        ) : (
          <GradientPreview gradient={project.gradient} />
        )}
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
      </div>

      {/* Description */}
      <div className="px-5 py-4 border-t border-zinc-800">
        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "data" | "tools">("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const FILTERS = [
    { id: "all",       label: "All"         },
    { id: "ai",        label: "AI / Agents" },
    { id: "fullstack", label: "Full-Stack"  },
    { id: "data",      label: "Data"        },
    { id: "tools",     label: "Tools"       },
  ] as const;

  return (
    <section id="projects" className="px-6 py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Work</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  filter === f.id
                    ? "bg-violet-600 text-white"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div key={project.id} className={project.span === "wide" ? "sm:col-span-2" : ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

const SKILL_GROUPS = [
  { label: "AI & Agents",       color: "text-violet-400", skills: ["Claude Code", "LangGraph", "FastMCP", "OpenAI API", "Gemini API", "RAG", "Prompt Engineering"] },
  { label: "Frontend",          color: "text-sky-400",    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend & Cloud",   color: "text-emerald-400",skills: ["Node.js", "Go", "Python", "OCI / Kubernetes", "PostgreSQL", "Oracle DB"] },
  { label: "Product & Strategy",color: "text-amber-400",  skills: ["Roadmapping", "User Research", "A/B Testing", "MECE Frameworks", "Stakeholder Mgmt"] },
  { label: "Certifications",    color: "text-rose-400",   skills: ["OCI Cloud Architect", "Oracle AI Certified", "Agentic Dev (Cursor, Google AI Studio)"] },
];

function Skills() {
  return (
    <section className="px-6 py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Toolkit</SectionLabel>
        <h2 className="text-4xl font-bold tracking-tight mb-14">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label} className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className={`text-xs font-mono tracking-widest uppercase mb-4 ${g.color}`}>{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="text-sm text-zinc-300 bg-zinc-800 px-3 py-1.5 rounded-lg">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <section className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <h2 className="text-4xl font-bold tracking-tight mb-10">Academic background</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-gradient-to-br from-purple-950 to-indigo-950 border border-purple-900/50 rounded-2xl">
            <p className="text-xs font-mono text-purple-400 mb-3">2025 – 2027</p>
            <h3 className="text-lg font-bold text-white mb-1">Foster School of Business</h3>
            <p className="text-sm text-zinc-300 mb-1">University of Washington, Seattle</p>
            <p className="text-sm text-zinc-400 mb-3">MBA · Management Science (STEM)</p>
            <div className="flex flex-wrap gap-2">
              {["Dean's Merit Scholar", "Foster Tech Club", "Strategy Club"].map((t) => (
                <span key={t} className="text-xs bg-purple-900/60 text-purple-300 px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <p className="text-xs font-mono text-zinc-500 mb-3">2014 – 2018</p>
            <h3 className="text-lg font-bold text-white mb-1">Osmania University</h3>
            <p className="text-sm text-zinc-400 mb-1">University College of Engineering, Hyderabad</p>
            <p className="text-sm text-zinc-500 mb-3">B.E. · Computer Science and Engineering</p>
            <div className="flex flex-wrap gap-2">
              {["IIT-JEE 10k ranker", "State 9th · Math Olympiads"].map((t) => (
                <span key={t} className="text-xs bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 border-t border-zinc-900">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-64 bg-violet-600/10 blur-[80px] rounded-full" />
      <div className="relative max-w-3xl mx-auto text-center">
        <SectionLabel>Let's talk</SectionLabel>
        <h2 className="text-5xl font-bold tracking-tighter mb-5">Get in touch</h2>
        <p className="text-zinc-500 mb-10 max-w-md mx-auto leading-relaxed">
          Open to PM and engineering roles, consulting engagements, and interesting AI projects. Based in Seattle.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:mokarma@uw.edu" className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-full transition-colors">
            <MailIcon /> mokarma@uw.edu
          </a>
          <a href="https://www.linkedin.com/in/mohan-marada/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium rounded-full transition-colors">
            <LinkedInIcon size={15} /> LinkedIn
          </a>
          <a href="https://github.com/mmarada" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium rounded-full transition-colors">
            <GithubIcon size={15} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-zinc-600">© {new Date().getFullYear()} Mohan Vamshi Marada</span>
        <span className="font-mono text-xs text-zinc-700">Seattle, WA · mokarma@uw.edu</span>
      </div>
    </footer>
  );
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] text-violet-400 tracking-[0.2em] uppercase mb-3">{children}</p>;
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
