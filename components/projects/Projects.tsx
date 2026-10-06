"use client";

import React from "react";
import {
  GraduationCap,
  Wallet,
  Building2,
  CalendarCheck,
  Briefcase,
  Clock,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";

type ProjectStatus = "In Development" | "Planned" | "Concept";

interface Project {
  number: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  keyModules: string[];
  icon: React.ReactNode;
}

const PRIMARY_PROJECT = {
  number: "01",
  title: "College Management System",
  category: "Institutional ERP & Operational Ecosystem",
  status: "In Development" as ProjectStatus,
  summary:
    "A complete college management platform engineered to unify administrative, academic, and student workflows into a single reliable operating system.",
  fullDescription:
    "Designed and developed to solve the fragmented administration common in colleges and institutes. The system provides an end-to-end architecture handling admissions, student records, teacher allocations, fee calculation & billing, attendance logging, and dedicated portals backed by role-based access control.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  modules: [
    {
      title: "Admissions & Enrollment Pipeline",
      description: "Applicant processing, document verification, and batch enrollment flows.",
    },
    {
      title: "Student & Faculty Registry",
      description: "Centralized identity database with academic history and course allocations.",
    },
    {
      title: "Fee Accounting & Billing Engine",
      description: "Automated fee schedules, transaction ledgers, and receipt tracking.",
    },
    {
      title: "Attendance & Audit Records",
      description: "Course-specific attendance logging with tamper-proof administrative logs.",
    },
    {
      title: "Role-Specific User Portals",
      description: "Dedicated interfaces for administrators, instructors, and enrolled students.",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description: "Strict granular permissions and route guards across server endpoints.",
    },
  ],
};

const SECONDARY_PROJECTS: Project[] = [
  {
    number: "02",
    title: "Personal Finance Manager",
    category: "Personal Finance & Budgeting System",
    status: "Planned",
    description:
      "A personal finance system designed for salaried users to manage salary cashflow, categorize daily expenses, enforce monthly savings goals, track recurring subscriptions, and maintain clear financial records.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    keyModules: [
      "Salary allocation & savings targets",
      "Expense categorization & budgets",
      "Recurring bill & payment reminders",
      "Financial ledger & exportable reports",
    ],
    icon: <Wallet className="h-5 w-5 text-sky-400" />,
  },
  {
    number: "03",
    title: "Business Operations Management System",
    category: "Internal Operations Platform",
    status: "Concept",
    description:
      "A centralized operations platform to coordinate workforce management, track physical inventory levels, oversee team tasks, manage operational expenses, and streamline supplier communication and purchase orders.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "Relational DB"],
    keyModules: [
      "Employee directory & task delegation",
      "Stock inventory & replenishment alerts",
      "Expense logging & approval chains",
      "Supplier contacts & purchase order cycles",
    ],
    icon: <Building2 className="h-5 w-5 text-sky-400" />,
  },
  {
    number: "04",
    title: "Appointment & Booking Management System",
    category: "Scheduling & Resource Engine",
    status: "Concept",
    description:
      "A systematic booking solution for managing client records, defining service catalogs, calculating dynamic provider availability, handling reservations and cancellations, and auditing historical booking timelines.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "REST APIs"],
    keyModules: [
      "Customer profiles & booking records",
      "Provider availability & slot allocation",
      "Automated conflict prevention",
      "Cancellation policies & history log",
    ],
    icon: <CalendarCheck className="h-5 w-5 text-sky-400" />,
  },
  {
    number: "05",
    title: "Client & Service Management SaaS",
    category: "Multi-Tenant Agency Workspace",
    status: "Concept",
    description:
      "A multi-tenant SaaS workspace for freelancers and digital agencies to oversee client relationships, organize multi-phase projects, monitor task deadlines, generate invoices, track payment status, and coordinate team workflows.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Cloud DB"],
    keyModules: [
      "Client accounts & onboarding pipelines",
      "Project deliverable & milestone boards",
      "Invoice generation & payment statuses",
      "Team activity feeds & task assignments",
    ],
    icon: <Briefcase className="h-5 w-5 text-sky-400" />,
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "In Development") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-950/50 border border-emerald-800/60">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        In Development
      </span>
    );
  }

  if (status === "Planned") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-sky-300 bg-sky-950/50 border border-sky-800/60">
        <Clock className="h-3 w-3 text-sky-400" />
        Planned
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800">
      <Sparkles className="h-3 w-3 text-slate-400" />
      Concept
    </span>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      aria-label="Featured Projects & Systems"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-1/3 h-96 w-96 rounded-full bg-sky-500/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              {"03 // FEATURED SYSTEMS"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Engineered software systems built for real-world operations.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            A portfolio of production architectures, management workflows, and digital platforms designed around multi-user accountability and practical requirements.
          </p>
        </div>

        {/* PRIMARY FEATURED SHOWCASE: 01 — College Management System */}
        <div className="mb-14 sm:mb-20">
          <div className="relative bg-[#0c0f17] border border-white/[0.08] hover:border-slate-700/80 transition-colors duration-300">
            {/* Top Showcase Bar */}
            <div className="px-6 sm:px-8 py-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4 bg-[#090c13]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-sky-400 tracking-wider">
                  {PRIMARY_PROJECT.number} {"//"} FLAGSHIP SYSTEM
                </span>
                <span className="hidden sm:inline-block h-3 w-px bg-slate-800" />
                <span className="hidden sm:inline-block font-mono text-xs text-slate-400 uppercase tracking-widest">
                  {PRIMARY_PROJECT.category}
                </span>
              </div>
              <StatusBadge status={PRIMARY_PROJECT.status} />
            </div>

            {/* Showcase Main Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: System Narrative & Scope (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex p-3 bg-slate-900 border border-slate-800 text-sky-400 mb-5">
                      <GraduationCap className="h-6 w-6 text-sky-400" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {PRIMARY_PROJECT.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {PRIMARY_PROJECT.fullDescription}
                    </p>

                    {/* Architectural Pillars / Subsystems Grid */}
                    <div className="mt-8">
                      <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block mb-3.5">
                        Core System Modules &amp; Workflows
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {PRIMARY_PROJECT.modules.map((mod) => (
                          <div
                            key={mod.title}
                            className="p-3.5 bg-[#090c13] border border-slate-800/80 flex flex-col justify-start"
                          >
                            <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
                              <span className="h-1 w-1 bg-sky-400 shrink-0" />
                              {mod.title}
                            </span>
                            <span className="mt-1 text-[11px] text-slate-400 leading-normal">
                              {mod.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & Action Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-2">
                        System Architecture Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {PRIMARY_PROJECT.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action area reflecting current build state */}
                    <div className="shrink-0 flex items-center gap-2">
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800">
                        <Clock className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Active Development</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Architectural Blueprint Panel (5 cols) */}
                <div className="lg:col-span-5 bg-[#08090d] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    {/* Panel Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-sky-400" />
                        <span className="font-mono text-xs text-slate-300 tracking-wide">
                          system-architecture.spec
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-400/90 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5">
                        ACTIVE_BUILD
                      </span>
                    </div>

                    {/* Blueprint Specifications */}
                    <div className="space-y-4 text-xs font-mono">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                          Layer 01 // Client Interface
                        </span>
                        <div className="mt-1 p-2.5 bg-slate-900/60 border border-slate-800/60 text-slate-300 space-y-1">
                          <p className="text-white font-medium">Next.js 16 + React 19 + TypeScript</p>
                          <p className="text-slate-400 text-[11px]">
                            • Multi-tenant role-based layout router
                          </p>
                          <p className="text-slate-400 text-[11px]">
                            • Tailored views for Admin, Teacher &amp; Student
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                          Layer 02 // Application Service
                        </span>
                        <div className="mt-1 p-2.5 bg-slate-900/60 border border-slate-800/60 text-slate-300 space-y-1">
                          <p className="text-white font-medium">Node.js + Express REST API</p>
                          <p className="text-slate-400 text-[11px]">
                            • Modular controllers &amp; business validators
                          </p>
                          <p className="text-slate-400 text-[11px]">
                            • RBAC guards &amp; session tokens
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                          Layer 03 // Data Store
                        </span>
                        <div className="mt-1 p-2.5 bg-slate-900/60 border border-slate-800/60 text-slate-300 space-y-1">
                          <p className="text-white font-medium">MongoDB Document Architecture</p>
                          <p className="text-slate-400 text-[11px]">
                            • Institutional schema: Students, Faculty, Courses
                          </p>
                          <p className="text-slate-400 text-[11px]">
                            • Transactional audit records for fee payments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Panel Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Workflow className="h-3 w-3 text-sky-400" />
                      Production Pipeline
                    </span>
                    <span className="text-slate-400">
                      Specification v1.0
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Section Subtitle for Secondary Showcases */}
        <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              System Pipeline &amp; Architectural Roadmaps
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
              Planned platforms and concept architectures designed around structured software domains.
            </p>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-slate-500">
            04 SYSTEMS
          </span>
        </div>

        {/* SECONDARY PROJECTS GRID (02, 03, 04, 05) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SECONDARY_PROJECTS.map((proj) => (
            <div
              key={proj.number}
              className="bg-[#0c0f17] border border-white/[0.08] hover:border-slate-700/80 transition-colors duration-300 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-sky-400 tracking-wider">
                      {proj.number}
                    </span>
                    <span className="h-3 w-px bg-slate-800" />
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
                      {proj.category}
                    </span>
                  </div>
                  <StatusBadge status={proj.status} />
                </div>

                {/* Title & Icon */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                    {proj.icon}
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {proj.title}
                    </h4>
                  </div>
                </div>

                {/* Problem & System Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Core Modules Breakdown */}
                <div className="mt-5 pt-4 border-t border-slate-800/60">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 block mb-2.5">
                    Planned Architecture Scope
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {proj.keyModules.map((item) => (
                      <div
                        key={item}
                        className="px-2.5 py-2 bg-[#090c13] border border-slate-800/60 text-xs text-slate-300 flex items-start gap-2"
                      >
                        <span className="h-1 w-1 bg-sky-400/80 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Status Details */}
              <div className="p-6 sm:p-7 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">
                    {proj.status === "Planned" ? "Roadmap Phase" : "Architecture Concept"}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
