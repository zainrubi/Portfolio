"use client";

import React, { useEffect, useRef, useState } from "react";

// --- Authentic Tech SVG Icons ---

function HtmlIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.203l.235-2.625H5.859l.703 7.875h8.907l-.375 4.125-4.117 1.125-4.125-1.125-.235-2.625H4.266l.468 5.25 7.243 1.969 7.265-1.969.985-11H8.531z" />
    </svg>
  );
}

function CssIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.5 0h21l-1.9 21.56L12 24l-8.6-2.44L1.5 0zm16.42 6.64l.2-2.14H5.88l.6 6.43h8.65l-.33 3.63-2.8.76-2.8-.76-.18-1.97H6.98l.35 3.92L12 17.65l4.67-1.14.65-7.38H8.84l-.2-2.49h9.28z" />
    </svg>
  );
}

function JavaScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.835-1.879-2.601-2.582l-.657-.268c-.524-.222-.816-.484-.816-.867 0-.46.368-.737.954-.737.564 0 .927.234 1.199.732.112.207.27.323.483.323.189 0 .341-.097.433-.274l.794-1.423c.094-.171.077-.355-.052-.497-.732-.803-1.748-1.206-2.946-1.206-1.782 0-3.003 1.076-3.003 2.678 0 1.25.755 2.055 2.149 2.593l.635.247c.677.272.935.564.935.975 0 .548-.483.89-1.233.89-.926 0-1.436-.445-1.784-1.121-.097-.189-.259-.297-.473-.297-.197 0-.356.104-.45.28l-.759 1.458c-.097.185-.067.38.077.531.789.824 1.954 1.298 3.329 1.298 2.046 0 3.33-1.054 3.33-2.735h-.001zm-8.085-4.664c0-.236-.184-.424-.424-.424h-1.89c-.237 0-.424.188-.424.424v7.411c0 .886-.449 1.294-1.309 1.294-.486 0-.895-.147-1.215-.436-.145-.13-.341-.166-.52-.087l-1.332.585c-.218.096-.328.324-.249.539.638 1.125 1.793 1.688 3.376 1.688 2.378 0 3.687-1.249 3.687-3.623V13.612z" />
    </svg>
  );
}

function TypeScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM11.9 9.882h-3.86v10.37H5.66v-10.37H1.8V7.75h10.1v2.132zm7.625 4.382c-.173-.99-.812-1.83-2.534-2.515l-.64-.262c-.51-.216-.795-.472-.795-.845 0-.448.358-.718.93-.718.55 0 .903.228 1.168.713.11.202.263.315.47.315.185 0 .333-.095.423-.267l.773-1.386a.434.434 0 00-.05-.484c-.714-.783-1.703-1.175-2.87-1.175-1.737 0-2.927 1.048-2.927 2.61 0 1.218.736 2.002 2.094 2.527l.618.24c.66.265.912.55.912.95 0 .534-.47.868-1.202.868-.902 0-1.4-.434-1.738-1.092a.498.498 0 00-.461-.29c-.193 0-.348.102-.44.273l-.74 1.42a.458.458 0 00.075.518c.769.803 1.904 1.265 3.244 1.265 1.994 0 3.245-1.027 3.245-2.665z" />
    </svg>
  );
}

function ReactIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" />
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function NextjsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.83 17.545l-6.177-8.118v8.118H9.8V6.455h1.92l6.233 8.19V6.455h1.854v11.09h-1.977z" />
    </svg>
  );
}

function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function NodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.25L2.25 7.875v11.25L12 24.75l9.75-5.625V7.875L12 2.25zm0 2.25l7.5 4.33v8.66L12 21.82l-7.5-4.33V8.83L12 4.5zm0 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
    </svg>
  );
}

function ExpressIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 8h4M7 12h2" />
    </svg>
  );
}

function MongoIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C11.83 0 11.66.07 11.53.2 9.4 2.37 5 7.22 5 13.5 5 18.2 8.13 22.12 11.47 23.82c.16.08.35.12.53.12.18 0 .37-.04.53-.12C15.87 22.12 19 18.2 19 13.5c0-6.28-4.4-11.13-6.53-13.3-.13-.13-.3-.2-.47-.2zm0 2.45c1.78 1.95 5.5 6.27 5.5 11.05 0 3.76-2.47 7.02-5.5 8.44V2.45z" />
    </svg>
  );
}

function PostgresIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V16h-2v2.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 11.5V9l-3.36-.84C6.53 5.48 9.02 4 12 4s5.47 1.48 6.36 4.16L15 9v2.5l4.79-2.29c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93z" />
    </svg>
  );
}

function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.707 10.293l-8-8a.999.999 0 00-1.414 0l-1.586 1.586 2.536 2.536a2 2 0 012.38 2.38l2.586 2.586a2 2 0 11-1.414 1.414l-2.435-2.435a2.001 2.001 0 01-2.06.406l-2.3 2.3a2 2 0 11-1.414-1.414l2.253-2.253A2 2 0 019 10a2 2 0 01.373-1.157L6.879 6.349 2.293 10.935a.999.999 0 000 1.414l8 8a.999.999 0 001.414 0l10-10a.999.999 0 000-1.414z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function RestApiIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

// --- Data Types ---

interface SkillItem {
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const FRONTEND_SKILLS: SkillItem[] = [
  { name: "HTML", role: "Semantic Structure & Standards", icon: HtmlIcon, accentColor: "text-orange-400" },
  { name: "CSS", role: "Responsive Design & Layouts", icon: CssIcon, accentColor: "text-sky-400" },
  { name: "JavaScript", role: "ES6+, Async & DOM Logic", icon: JavaScriptIcon, accentColor: "text-amber-300" },
  { name: "TypeScript", role: "Static Typing & Interfaces", icon: TypeScriptIcon, accentColor: "text-blue-400" },
  { name: "React", role: "Component State & Hooks", icon: ReactIcon, accentColor: "text-cyan-400" },
  { name: "Next.js", role: "App Router, SSR & Full-Stack", icon: NextjsIcon, accentColor: "text-white" },
  { name: "Tailwind CSS", role: "Utility Design Systems", icon: TailwindIcon, accentColor: "text-sky-400" },
];

const BACKEND_SKILLS: SkillItem[] = [
  { name: "Node.js", role: "Asynchronous V8 Runtime", icon: NodeIcon, accentColor: "text-emerald-400" },
  { name: "Express.js", role: "REST APIs & Middleware", icon: ExpressIcon, accentColor: "text-slate-300" },
];

const DATABASE_SKILLS: SkillItem[] = [
  { name: "MongoDB", role: "Document Schemas & Queries", icon: MongoIcon, accentColor: "text-emerald-400" },
  { name: "PostgreSQL", role: "Relational Modeling & SQL", icon: PostgresIcon, accentColor: "text-sky-400" },
];

const TOOLS_SKILLS: SkillItem[] = [
  { name: "Git", role: "Branching & Version Control", icon: GitIcon, accentColor: "text-orange-400" },
  { name: "GitHub", role: "Collaboration & Remote Repos", icon: GitHubIcon, accentColor: "text-slate-200" },
  { name: "REST APIs", role: "Contract Design & Endpoints", icon: RestApiIcon, accentColor: "text-sky-400" },
];

function SkillCard({ item }: { item: SkillItem }) {
  const Icon = item.icon;
  return (
    <div className="group relative flex items-center gap-3.5 p-3 rounded-xl bg-[#0c0f17]/40 border border-white/[0.05] hover:border-white/[0.12] hover:bg-[#0c0f17]/80 transition-all duration-200">
      <div className="w-9 h-9 rounded-lg bg-slate-900/80 border border-white/[0.06] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-white transition-colors duration-200">
        <Icon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${item.accentColor}`} />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight truncate">
          {item.name}
        </div>
        <div className="text-[11px] text-slate-400 font-normal truncate mt-0.5">
          {item.role}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-label="Skills & Technologies"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06]"
    >
      {/* Subtle ambient lighting consistent with portfolio aesthetic */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-sky-500/[0.02] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`mb-12 sm:mb-16 max-w-2xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            The languages, frameworks, databases, and engineering workflows I use to build dependable full-stack systems.
          </p>
        </div>

        {/* Categorized Technical Architecture */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 transition-all duration-700 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          
          {/* Column 1: Frontend Architecture (7 skills) */}
          <div className="flex flex-col">
            <div className="pb-3 mb-5 border-b border-white/[0.08]">
              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                Frontend
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Interfaces, client state, and responsive component architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FRONTEND_SKILLS.map((item) => (
                <SkillCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Column 2: Backend, Database & Tools & Workflow */}
          <div className="flex flex-col space-y-8 sm:space-y-9">
            
            {/* Backend Category */}
            <div>
              <div className="pb-3 mb-4 border-b border-white/[0.08]">
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  Backend
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Server runtimes, REST APIs, and application logic.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BACKEND_SKILLS.map((item) => (
                  <SkillCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            {/* Database Category */}
            <div>
              <div className="pb-3 mb-4 border-b border-white/[0.08]">
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  Database
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Document and relational data modeling with reliable persistence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DATABASE_SKILLS.map((item) => (
                  <SkillCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            {/* Tools & Workflow Category */}
            <div>
              <div className="pb-3 mb-4 border-b border-white/[0.08]">
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                  Tools &amp; Workflow
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Version control, remote collaboration, and API communication standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOOLS_SKILLS.map((item) => (
                  <SkillCard key={item.name} item={item} />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
