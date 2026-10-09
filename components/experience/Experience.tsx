"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Users,
  Building,
  GraduationCap,
  Code2,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const OPPORTUNITIES = [
  {
    title: "Full-Stack Roles",
    description: "Joining engineering teams as a dedicated full-stack developer eager to build and contribute.",
    icon: Users,
  },
  {
    title: "Freelance & Client Builds",
    description: "Architecting responsive web applications, dashboards, and custom management platforms.",
    icon: Briefcase,
  },
  {
    title: "Startups & Ventures",
    description: "Collaborating with emerging ventures to prototype, architect, and launch core digital systems.",
    icon: Building,
  },
  {
    title: "Educational Institutes",
    description: "Designing structured academic portals, attendance workflows, and administrative platforms.",
    icon: GraduationCap,
  },
  {
    title: "SaaS Platforms & APIs",
    description: "Engineering resilient multi-tenant platforms, database schemas, and RESTful API services.",
    icon: Code2,
  },
  {
    title: "System Architecture",
    description: "Designing clean data models, state flows, and production-ready full-stack foundations.",
    icon: Sparkles,
  },
];

const FREELANCE_HIGHLIGHTS = [
  "Delivered responsive websites and web apps for local clients using React, Node.js, and MongoDB",
  "Translated client requirements into working features, wireframes, and REST APIs",
  "Maintained clean Git workflow with feature branches, code reviews, and meaningful commits",
];

export function Experience() {
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
      id="experience"
      aria-label="Experience & Collaboration"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06]"
    >
      {/* Subtle ambient lighting consistent with portfolio aesthetic */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-sky-500/[0.02] blur-3xl"
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
            Experience &amp; Collaboration
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Practical development background, client solutions, and current availability for engineering teams and impactful builds.
          </p>
        </div>

        {/* 2-Column Responsive Composition */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch transition-all duration-700 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          
          {/* Column 1: Practical Experience (Freelance & Training) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#0c0f17]/70 border border-white/[0.08] p-6 sm:p-8 hover:border-slate-700/80 transition-colors duration-200">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Work Experience
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  2024 – Present
                </span>
              </div>

              {/* Role & Company */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Freelance Full-Stack Developer
              </h3>
              <p className="text-base font-medium text-slate-300 mt-1">
                Remote · Contract / Client Solutions
              </p>

              {/* Narrative Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                Delivering responsive websites, admin interfaces, and custom web applications for clients. Translating client requirements into clean database schemas, predictable state management, and reliable RESTful APIs.
              </p>

              {/* Focus Points */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3.5">
                  Core Highlights &amp; Execution
                </h4>
                <ul className="space-y-2.5">
                  {FREELANCE_HIGHLIGHTS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-normal">
                      <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Training Context */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-slate-400 font-normal flex items-center justify-between">
              <span>Prior: Web Dev Intern (Techzoq Institute)</span>
              <span className="text-[11px] font-mono text-slate-400">MERN Certified</span>
            </div>
          </div>

          {/* Column 2: Open to Opportunities */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#0c0f17]/70 border border-white/[0.08] p-6 sm:p-8 hover:border-slate-700/80 transition-colors duration-200">
            <div>
              {/* Header Status */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-sky-400" />
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Next Chapter
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Open to Opportunities
                </span>
              </div>

              {/* Title & Stance */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Open to Opportunities &amp; Collaboration
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                I am actively interested in contributing to real-world projects, working alongside experienced developers, and building dependable web applications. Whether you need an adaptable developer on your team or a dedicated collaborator for a new initiative, I am ready to deliver value.
              </p>

              {/* Opportunities List */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3.5">
                  Currently Available For
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {OPPORTUNITIES.map((opp) => {
                    const Icon = opp.icon;
                    return (
                      <div
                        key={opp.title}
                        className="group flex items-start gap-3 p-3 rounded-xl bg-[#090c13]/60 border border-white/[0.04] hover:border-white/[0.1] hover:bg-[#090c13] transition-all duration-200"
                      >
                        <div className="p-2 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 group-hover:text-sky-300 transition-colors shrink-0 mt-0.5">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {opp.title}
                          </span>
                          <span className="block text-[11px] text-slate-400 leading-relaxed mt-0.5 font-normal">
                            {opp.description}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">
                Interested in working together or exploring a role?
              </p>
              <a
                href="mailto:zainrubii276@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 transition-colors shrink-0 self-start sm:self-auto shadow-sm"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
