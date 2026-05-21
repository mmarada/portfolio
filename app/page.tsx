"use client";

import { useState, useRef, useEffect } from "react";
import { projects, type Project } from "./data/projects";

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About",      href: "#about"                    },
  { label: "Experience", href: "#experience"               },
  { label: "Projects",   href: "#projects"                 },
  { label: "Contact",    href: "#contact"                  },
  { label: "Resume",     href: "/resume/resume.pdf", external: true },
];

function Nav() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-stone-400 tracking-widest">mvm</span>
        <div className="flex items-center gap-1 bg-white/90 border border-[#E7E2D9] backdrop-blur-md rounded-full px-3 py-2 shadow-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              onClick={() => setActive(l.href)}
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                active === l.href
                  ? "bg-[#CF6B40] text-white font-semibold"
                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-100"
              }`}>
              {l.label}
            </a>
          ))}
        </div>
        <a href="https://github.com/mmarada" target="_blank" rel="noopener noreferrer"
          className="text-stone-400 hover:text-stone-700 transition-colors">
          <GithubIcon size={16} />
        </a>
      </nav>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-end">
      {/* Background photo — UW / PNW nature */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.45) saturate(0.85)" }}
      />

      {/* Bottom-to-top dark vignette so text pops */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.0) 100%)" }} />

      {/* Bottom-left content */}
      <div className="relative z-10 px-10 sm:px-16 pb-16 sm:pb-20 max-w-2xl">
        <h1 className="text-6xl sm:text-8xl font-bold text-white leading-none mb-4 tracking-tight">
          Mohan<br />Marada
        </h1>

        <p className="text-white/65 text-xl sm:text-2xl mb-10 font-light leading-snug">
          CS + MBA grad
        </p>

        <a href="mailto:mokarma@uw.edu"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:bg-white/20"
          style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}>
          Get In Touch
        </a>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-10 text-white/30 text-xs font-mono tracking-widest flex items-center gap-2">
        scroll
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  );
}

// ─── About Me ─────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-[#E7E2D9]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-14 text-[#CF6B40]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          About Me
        </h2>

        <div className="space-y-7 text-stone-600 text-lg leading-relaxed">
          <p>
            👋 I&apos;m <strong className="text-stone-900">Mohan Marada</strong> — a CS + MBA grad
            who builds at the intersection of engineering and product.
          </p>
          <p>
            I&apos;ve previously worked at{" "}
            <a href="https://oracle.com" target="_blank" rel="noopener noreferrer"
              className="text-stone-900 font-semibold underline underline-offset-2 decoration-stone-300 hover:decoration-[#CF6B40] transition-colors">
              @Oracle
            </a>{" "}
            for 7 years, and at{" "}
            <strong className="text-stone-900">@Ansemble AI</strong> in the music space as a
            Founding Engineer.
          </p>
          <p>
            My skills involve{" "}
            <span className="text-stone-900 font-semibold">technical architecture</span>,{" "}
            <span className="text-stone-900 font-semibold">product management</span>, and{" "}
            <span className="text-stone-900 font-semibold">full-stack development</span>.
            Looking for opportunities and next roles.
          </p>

        </div>
      </div>
    </section>
  );
}

// ─── Experience & Education ───────────────────────────────────────────────────

const EXPERIENCE_CARDS = [
  {
    id: "oracle",
    period: "2018 – 2025",
    company: "Oracle",
    companyUrl: null,
    role: "TPM",
    location: "Hyderabad, India",
    note: "Core Framework, Security & platform teams · 7 years",
    logo: "/logos/oracle.svg",
    logoBg: "bg-white",
    logoText: "O",
    accentClass: "text-red-600",
  },
  {
    id: "ansemble",
    period: "2024 – 2025",
    company: "Ansemble AI",
    companyUrl: null,
    role: "Founding Engineer",
    location: "USA (Remote)",
    note: "Music × AI startup",
    logo: "/logos/ansemble.svg",
    logoBg: "bg-[#0d0d1a]",
    logoText: "A",
    accentClass: "text-violet-600",
  },
];

const EDUCATION_CARDS = [
  {
    id: "uw",
    period: "2025 – 2027 · Seattle, WA",
    school: "University of Washington",
    degree: "MBA · Management Science (STEM)",
    note: "Dean's Merit Scholar · Foster Tech Club · Strategy Club",
    logo: "/logos/uw.svg",
    logoBg: "bg-white",
    logoText: "W",
    accentClass: "text-purple-600",
  },
  {
    id: "osmania",
    period: "2014 – 2018 · Hyderabad, India",
    school: "Osmania University",
    degree: "B.E. · Computer Science and Engineering",
    note: "IIT-JEE 10k ranker · State 9th rank in Math Olympiads",
    logo: "/logos/osmania.svg",
    logoBg: "bg-white",
    logoText: "OU",
    accentClass: "text-amber-600",
  },
];

function CompanyLogo({ logo, logoBg, logoText, size = 44 }: {
  logo: string | null; logoBg: string; logoText: string; size?: number;
}) {
  // Oracle SVG is a wide wordmark — needs wider container
  const isWordmark = logo?.includes("oracle");
  const width  = isWordmark ? size * 2.4 : size;
  const height = size;

  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={logoText}
        width={width}
        height={height}
        className={`rounded-xl object-contain p-2 ${logoBg}`}
        style={{ width, height }}
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const fb = el.nextElementSibling as HTMLElement | null;
          if (fb) fb.style.display = "flex";
        }}
      />
    );
  }
  return (
    <div className={`${logoBg} rounded-xl flex items-center justify-center text-white font-bold text-sm`}
      style={{ width: size, height: size }}>
      {logoText}
    </div>
  );
}

function ExpCard({ exp }: { exp: typeof EXPERIENCE_CARDS[number] }) {
  return (
    <div className="flex-1 p-3.5 bg-white border border-[#E7E2D9] rounded-xl hover:border-[#D6CFCA] hover:shadow-md transition-all flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <CompanyLogo logo={exp.logo} logoBg={exp.logoBg} logoText={exp.logoText} size={32} />
        <span className="text-[10px] font-mono text-stone-400 text-right leading-tight">{exp.period}</span>
      </div>
      <div>
        {exp.companyUrl ? (
          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-stone-900 hover:text-[#CF6B40] transition-colors flex items-center gap-1">
            {exp.company} <ExternalLinkIcon />
          </a>
        ) : (
          <p className="text-sm font-semibold text-stone-900">{exp.company}</p>
        )}
        <p className={`text-xs font-medium mt-0.5 ${exp.accentClass}`}>{exp.role}</p>
        <p className="text-[11px] text-stone-400 mt-0.5">{exp.location}</p>
        {exp.note && <p className="text-[11px] text-stone-400 mt-0.5 italic">{exp.note}</p>}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-[#E7E2D9]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-14 text-stone-900">
          Experience{" "}
          <span className="text-stone-300">&amp;</span>{" "}
          <span className="text-[#CF6B40]">Education</span>
        </h2>

        {/* Career progression: Oracle → Ansemble AI */}
        <div className="flex flex-col sm:flex-row items-stretch gap-0 mb-3 max-w-2xl mx-auto">
          <ExpCard exp={EXPERIENCE_CARDS[0]} />

          {/* Arrow connector */}
          <div className="flex sm:flex-col items-center justify-center px-3 py-2 gap-1 shrink-0">
            <span className="text-[10px] font-mono text-stone-300 hidden sm:block whitespace-nowrap rotate-0">next →</span>
            {/* Mobile: down arrow */}
            <svg className="sm:hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D6CFCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
            {/* Desktop: right arrow */}
            <svg className="hidden sm:block" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CF6B40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="text-[10px] font-mono text-stone-300 hidden sm:block whitespace-nowrap">startup</span>
          </div>

          <ExpCard exp={EXPERIENCE_CARDS[1]} />
        </div>

        {/* Education cards — stacked vertically, logo left */}
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {EDUCATION_CARDS.map((edu) => (
            <div key={edu.id}
              className="p-4 bg-white border border-[#E7E2D9] rounded-xl hover:border-[#D6CFCA] hover:shadow-md transition-all flex items-center gap-4">
              <div className="shrink-0">
                <CompanyLogo logo={edu.logo} logoBg={edu.logoBg} logoText={edu.logoText} size={44} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-mono text-stone-400 mb-0.5">{edu.period}</p>
                <p className="text-sm font-semibold text-stone-900">{edu.school}</p>
                <p className={`text-xs font-medium mt-0.5 ${edu.accentClass}`}>{edu.degree}</p>
                <p className="text-[11px] text-stone-400 mt-0.5">{edu.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────

function LivePreview({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.34);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 1280);
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-stone-50" style={{ height: 240 }}>
      <iframe src={url} title="Live preview" scrolling="no"
        style={{
          width: 1280,
          height: Math.ceil(240 / scale),
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          pointerEvents: "none",
          border: "none",
          display: "block",
        }}
      />
      <div className="absolute inset-0" />
    </div>
  );
}

function GradientPreview({ gradient, title }: { gradient: string; title: string }) {
  return (
    <div className={`w-full bg-gradient-to-br ${gradient} flex items-center justify-center`} style={{ height: 240 }}>
      <span className="text-stone-500 text-3xl font-bold tracking-tighter select-none opacity-40">{title}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-[#E7E2D9] bg-white overflow-hidden
      hover:-translate-y-1 hover:shadow-xl hover:border-[#D6CFCA] transition-all duration-200"
      style={{ borderTop: `3px solid ${project.borderColor}` }}>

      {/* Header */}
      <div className="flex items-start justify-between gap-3 px-5 pt-4 pb-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-stone-900 text-base leading-tight truncate">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[11px] text-stone-400 font-mono">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors"
              style={{ color: project.accentColor, borderColor: `${project.accentColor}40`,
                background: `${project.accentColor}08` }}>
              Live Demo <ExternalLinkIcon />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-stone-300 hover:text-stone-600 transition-colors">
              <GithubIcon size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Preview */}
      <div className="relative overflow-hidden border-t border-[#F0EBE3]">
        {project.demo
          ? <LivePreview url={project.demo} />
          : <GradientPreview gradient={project.gradient} title={project.title} />
        }
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      {/* Description */}
      <div className="px-5 py-4 border-t border-[#F0EBE3]">
        <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">{project.description}</p>
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
    <section id="projects" className="px-4 py-24 border-t border-[#E7E2D9]">
      <div className="max-w-[1400px] mx-auto">
        <SectionLabel>Work</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-stone-900">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  filter === f.id
                    ? "bg-[#CF6B40] text-white shadow-sm"
                    : "bg-white border border-[#E7E2D9] text-stone-500 hover:text-stone-800 hover:border-[#D6CFCA]"
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
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
  { label: "AI & Agents",        color: "text-violet-600",  border: "#7c3aed", skills: ["Claude Code", "LangGraph", "FastMCP", "OpenAI API", "Gemini API", "RAG", "Prompt Engineering"] },
  { label: "Frontend",           color: "text-sky-600",     border: "#0284c7", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend & Cloud",    color: "text-emerald-600", border: "#059669", skills: ["Node.js", "Go", "Python", "OCI / Kubernetes", "PostgreSQL", "Oracle DB"] },
  { label: "Product & Strategy", color: "text-[#CF6B40]",   border: "#CF6B40", skills: ["Roadmapping", "User Research", "A/B Testing", "MECE Frameworks", "Stakeholder Mgmt"] },
  { label: "Certifications",     color: "text-red-600",     border: "#dc2626", skills: ["OCI Cloud Architect", "Oracle AI Certified", "Agentic Dev (Cursor, Google AI Studio)"] },
];

function Skills() {
  return (
    <section className="px-6 py-24 border-t border-[#E7E2D9]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Toolkit</SectionLabel>
        <h2 className="text-4xl font-bold tracking-tight mb-14 text-stone-900">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label} className="p-5 bg-white border border-[#E7E2D9] rounded-2xl hover:shadow-sm transition-shadow"
              style={{ borderTop: `3px solid ${g.border}` }}>
              <h3 className={`text-xs font-mono tracking-widest uppercase mb-4 ${g.color}`}>{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="text-sm text-stone-600 bg-stone-50 border border-[#E7E2D9] px-3 py-1.5 rounded-lg">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 border-t border-[#E7E2D9]">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-64 bg-[#CF6B40]/6 blur-[80px] rounded-full" />
      <div className="relative max-w-3xl mx-auto text-center">
        <SectionLabel>Let's talk</SectionLabel>
        <h2 className="text-5xl font-bold tracking-tighter mb-5 text-stone-900">Get in touch</h2>
        <p className="text-stone-400 mb-10 max-w-md mx-auto leading-relaxed">
          Open to PM and engineering roles, consulting engagements, and interesting AI projects. Based in Seattle.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:mokarma@uw.edu"
            className="flex items-center gap-2 px-6 py-3 bg-[#CF6B40] hover:bg-[#B85C34] text-white text-sm font-semibold rounded-full transition-colors shadow-sm">
            <MailIcon /> mokarma@uw.edu
          </a>
          <a href="https://www.linkedin.com/in/mohan-marada/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-[#E7E2D9] text-stone-700 text-sm font-medium rounded-full transition-colors shadow-sm">
            <LinkedInIcon size={15} /> LinkedIn
          </a>
          <a href="https://github.com/mmarada" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-[#E7E2D9] text-stone-700 text-sm font-medium rounded-full transition-colors shadow-sm">
            <GithubIcon size={15} /> GitHub
          </a>
          <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-[#E7E2D9] text-stone-700 text-sm font-medium rounded-full transition-colors shadow-sm">
            Resume <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#E7E2D9] px-6 py-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-stone-300">© {new Date().getFullYear()} Mohan Vamshi Marada</span>
        <span className="font-mono text-xs text-stone-300">Seattle, WA · mokarma@uw.edu</span>
      </div>
    </footer>
  );
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] text-[#CF6B40] tracking-[0.2em] uppercase mb-3">{children}</p>;
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
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
