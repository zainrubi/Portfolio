"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

type ProjectStatus = "In Development" | "Planned" | "Concept" | "Completed";

interface SecondaryProject {
  title: string;
  status: ProjectStatus;
  description: string;
  technologies?: string;
  link?: string;
}

const PRIMARY_PROJECT = {
  title: "College Management System",
  status: "In Development" as ProjectStatus,
  description:
    "A complete college management platform covering admissions, students, teachers, administration, fees, attendance, portals, and role-based workflows.",
  technologies: "Next.js · TypeScript · Tailwind CSS · PostgreSQL · Prisma · JWT",
  caseStudyUrl: "https://college-management-system-five-amber.vercel.app/",
};

const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: "DevConnect, Developer Social Platform",
    status: "Completed",
    description:
      "A full MERN social platform with JWT auth, profile management, posts, comments, likes, and feed pagination with database indexing improving load times by 35%. Deployed on Vercel and Render.",
    technologies: "MongoDB · Express.js · React · Node.js",
    link: "https://github.com/zainahmad-dev",
  },
  {
    title: "ShopEase, E-commerce Web App",
    status: "Completed",
    description:
      "An e-commerce application with product catalog, cart, checkout, order history with protected admin dashboard, bcrypt password hashing, and Stripe test payment processing.",
    technologies: "MERN · Redux Toolkit · Stripe · Cloudinary",
    link: "https://github.com/zainahmad-dev",
  },
  {
    title: "Personal Finance Manager",
    status: "Planned",
    description:
      "A personal finance system for salaried users to manage salary, expenses, savings, budgets, recurring payments, and financial records.",
    technologies: "Next.js · TypeScript · PostgreSQL",
  },
  {
    title: "Business Operations Management System",
    status: "Concept",
    description:
      "A management platform for employees, inventory, tasks, expenses, suppliers, orders, and operational workflows.",
    technologies: "Full-Stack Enterprise Architecture",
  },
];

function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "In Development") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-sky-300 bg-sky-500/10 border border-sky-500/20">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
        In Development
      </span>
    );
  }

  if (status === "Completed") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Completed
      </span>
    );
  }

  if (status === "Planned") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
        Planned
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-slate-400 bg-white/[0.04] border border-white/[0.07]">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
      Concept
    </span>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      aria-label="Featured Projects"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Real-world web platforms, management systems, and digital architectures built for operational scale.
          </p>
        </div>

        {/* Primary Project Showcase: College Management System */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0c0f17]/80 border border-white/[0.08] p-8 sm:p-10 lg:p-12 hover:border-slate-700/80 transition-colors duration-200 mb-6 sm:mb-8">
          <div className="max-w-3xl">
            <div className="mb-5 sm:mb-6">
              <StatusBadge status={PRIMARY_PROJECT.status} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {PRIMARY_PROJECT.title}
            </h3>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PRIMARY_PROJECT.description}
            </p>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-sm text-slate-400 font-normal">
              {PRIMARY_PROJECT.technologies}
            </p>
            <a
              href={PRIMARY_PROJECT.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 transition-colors shrink-0 self-start sm:self-auto"
            >
              Case Study
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Secondary Projects Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECONDARY_PROJECTS.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl bg-[#0c0f17]/70 border border-white/[0.08] p-6 sm:p-8 hover:border-slate-700/80 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <StatusBadge status={project.status} />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      GitHub
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                  {project.description}
                </p>
                {project.technologies && (
                  <p className="mt-4 pt-3 border-t border-white/[0.05] text-xs font-mono text-slate-400">
                    {project.technologies}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
