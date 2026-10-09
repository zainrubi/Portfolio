import React from "react";
import { Terminal, Database, Code2, Sparkles } from "lucide-react";

export function About() {
  const principles = [
    {
      number: "01",
      title: "Understand",
      tagline: "Define before coding",
      description:
        "Understand the underlying problem, user workflows, and business requirements thoroughly before writing unnecessary code. Clear requirements prevent technical debt and ensure purpose-driven development.",
    },
    {
      number: "02",
      title: "Build",
      tagline: "Architect with discipline",
      description:
        "Turn requirements into clean, structured, and maintainable web applications. Focus on scalable component hierarchies, predictable data flow, robust full-stack logic, and reliable execution.",
    },
    {
      number: "03",
      title: "Refine",
      tagline: "Test, optimize, and iterate",
      description:
        "Rigorously test functionality, optimize load performance, eliminate edge cases, and continuously evolve system architecture. Every build is a chance to deepen technical craft.",
    },
  ];

  const credentials = [
    {
      label: "Education",
      title: "BS Software Engineering",
      institution: "Virtual University of Pakistan (2023–2027)",
      badge: "Degree",
    },
    {
      label: "Certification",
      title: "Meta Front-End Developer",
      institution: "Professional Certificate · Coursera",
      badge: "Certified",
    },
    {
      label: "Certification",
      title: "MongoDB Associate Developer",
      institution: "Official Path · MongoDB University",
      badge: "Certified",
    },
    {
      label: "Professional Training",
      title: "MERN Stack Development",
      institution: "Techzoq Institute",
      badge: "Completed",
    },
  ];

  const techFocus = [
    {
      category: "Core Stack",
      technologies: ["JavaScript (ES6+)", "TypeScript", "Node.js", "MongoDB", "Express", "React / Next.js"],
      icon: <Terminal className="h-4 w-4 text-sky-400" />,
    },
    {
      category: "Currently Exploring",
      technologies: ["PostgreSQL", "Relational Data Modeling", "Deep Backend Architecture", "Distributed Workflows"],
      icon: <Database className="h-4 w-4 text-emerald-400" />,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Zain Ahmad"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle background ambient glow for section separation */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-sky-500/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              01 // About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Engineering dependable software systems with design discipline and architectural rigor.
          </h2>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20 sm:mb-28 items-start">
          
          {/* Main Narrative (7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am an early-career software engineer and full-stack developer driven by the ambition to build <span className="text-white font-medium">real-world web applications and complete digital systems</span> rather than superficial brochure websites.
            </p>
            <p>
              My approach connects user-focused design thinking with software engineering discipline. I build applications where the user interface feels natural, clean, and responsive, while the underlying architecture remains performant, type-safe, and capable of managing complex state.
            </p>
            <p>
              I specialize in engineering <span className="text-white font-medium">complex management platforms, business accountability systems, and scalable SaaS software</span>. Whether modeling structured data schemas, designing robust API contracts, or optimizing client workflows, I care deeply about making software reliable in production environments.
            </p>
          </div>

          {/* Structured Engineering Background (5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Academic & Training Credentials Panel */}
            <div className="p-6 rounded-2xl bg-[#0c0f17]/70 border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5 text-sky-400" />
                Background &amp; Training
              </h3>
              
              <div className="space-y-4">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400">
                        {cred.label}
                      </span>
                      <span className="block text-sm font-semibold text-white mt-0.5">
                        {cred.title}
                      </span>
                      <span className="block text-xs text-slate-400 mt-0.5">
                        {cred.institution}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {cred.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Focus Panel */}
            <div className="p-6 rounded-2xl bg-[#0c0f17]/70 border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                Technical Stack &amp; Focus
              </h3>

              <div className="space-y-5">
                {techFocus.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <div className="flex items-center gap-2">
                      {group.icon}
                      <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wide">
                        {group.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Professional Element: How I Approach Development */}
        <div className="pt-12 sm:pt-16 border-t border-white/[0.06]">
          <div className="mb-10 sm:mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400 block mb-2">
              Engineering Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              How I Approach Development
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              A systematic engineering methodology designed to deliver resilient, maintainable, and high-impact digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((item) => (
              <div
                key={item.number}
                className="group relative p-7 rounded-2xl bg-[#0c0f17]/60 border border-white/[0.08] hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-sky-400 tracking-wider">
                      {item.number}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
                      Phase
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    <span className="text-sky-400/70 mr-1.5">{"//"}</span>
                    {item.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Systematic Process
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
