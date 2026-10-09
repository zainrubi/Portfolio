"use client";

import React, { useState } from "react";
import {
  Printer,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Mail,
  MapPin,
  Phone,
  Globe,
  CheckCircle2,
  Sparkles,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Tech stack and proficiency data directly from official resume
const PROFICIENCY_HIGHLIGHTS = [
  { name: "React.js / Next.js", rating: 5 },
  { name: "Node.js & Express", rating: 5 },
  { name: "TypeScript", rating: 4 },
  { name: "MongoDB & Mongoose", rating: 5 },
  { name: "Tailwind CSS", rating: 5 },
];

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend & API",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Middleware",
      "Zod",
    ],
  },
  {
    category: "Databases & ORM",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM"],
  },
  {
    category: "Dev Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker (basic)",
      "Vercel",
      "VS Code",
    ],
  },
];

const CORE_STRENGTHS = [
  "Problem Solving",
  "Clean Code",
  "Collaboration",
  "Fast Learner",
];

const LANGUAGES = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
];

const PROJECTS = [
  {
    title: "College Management System",
    stack: "Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, JWT",
    liveDemo: "https://college-management-system-five-amber.vercel.app/",
    github: "https://github.com/zainahmad-dev",
    bullets: [
      "Built a role-based platform with four access levels (public, student, teacher, admin) covering fee payment, handout distribution, and attendance marking.",
      "Integrated JazzCash/Easypaisa payment flow and WhatsApp/call actions into the admin panel to reduce manual follow-ups.",
      "Designed a professional UI inspired by UK sixth-form college websites, fully responsive across devices.",
    ],
  },
  {
    title: "DevConnect, Developer Social Platform",
    stack: "MongoDB, Express.js, React, Node.js",
    liveDemo: "https://github.com/zainahmad-dev",
    github: "https://github.com/zainahmad-dev",
    bullets: [
      "Developed a full MERN app with JWT auth, profile management, posts, comments, and likes.",
      "Implemented pagination and database indexing, improving feed load time by about 35%.",
      "Deployed frontend on Vercel and backend on Render with environment-based configuration.",
    ],
  },
  {
    title: "ShopEase, E-commerce Web App",
    stack: "MERN, Redux Toolkit, Stripe",
    liveDemo: "https://github.com/zainahmad-dev",
    github: "https://github.com/zainahmad-dev",
    bullets: [
      "Built product catalog, cart, checkout, and order history with a protected admin dashboard.",
      "Added server-side validation, centralized error handling, and secure password hashing with bcrypt.",
      "Integrated Stripe test payments and image uploads via Cloudinary.",
    ],
  },
];

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
    </svg>
  );
}

export function Resume() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"interactive" | "document">("interactive");

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zain.ahmad.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="resume"
      aria-label="Resume of Zain Ahmad"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06] overflow-hidden print:p-0 print:m-0 print:border-none print:bg-white print:text-black"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/3 h-96 w-96 rounded-full bg-sky-500/[0.03] blur-3xl print:hidden"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 print:p-0 print:max-w-none">
        
        {/* Section Header & Action Controls */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 print:hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                06 // RESUME &amp; QUALIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Curriculum Vitae
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              Official ATS-formatted credentials, technical proficiencies, work history, verified certifications, and educational background.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* View Mode Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-400">
              <button
                type="button"
                onClick={() => setActiveTab("interactive")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "interactive"
                    ? "bg-slate-800 text-white font-semibold shadow-sm"
                    : "hover:text-slate-200"
                }`}
              >
                Interactive View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("document")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "document"
                    ? "bg-slate-800 text-white font-semibold shadow-sm"
                    : "hover:text-slate-200"
                }`}
              >
                ATS Document View
              </button>
            </div>

            <Button
              variant="primary"
              size="sm"
              icon={<Printer className="h-4 w-4" />}
              onClick={handlePrint}
              className="text-xs px-4 py-2 font-mono"
            >
              Print / Save PDF
            </Button>

            <Button
              variant="outline"
              size="sm"
              icon={copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
              onClick={handleCopyEmail}
              className="text-xs px-3.5 py-2 font-mono"
            >
              {copied ? "Copied Email" : "Copy Email"}
            </Button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE VIEW MODE */}
        {/* ======================================================== */}
        {activeTab === "interactive" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start print:hidden">
            
            {/* LEFT SIDEBAR: Contact, Highlights, Skills (4 cols) */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-500/20 via-slate-800 to-emerald-500/20 border border-white/[0.1] flex items-center justify-center text-lg font-bold text-white tracking-wider font-mono">
                    ZA
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Zain Ahmad
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 font-medium mt-0.5 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      Open to Opportunities
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-300">
                  <a
                    href="mailto:zain.ahmad.dev@gmail.com"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors truncate"
                  >
                    <Mail className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">zain.ahmad.dev@gmail.com</span>
                  </a>
                  <a
                    href="tel:+923001234567"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>+92 300 1234567</span>
                  </a>
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>Lahore, Punjab, PK</span>
                  </div>
                  <a
                    href="https://linkedin.com/in/zainahmad-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span>linkedin.com/in/zainahmad-dev</span>
                  </a>
                  <a
                    href="https://github.com/zainahmad-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5 text-slate-300 shrink-0" />
                    <span>github.com/zainahmad-dev</span>
                  </a>
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <Globe className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span>zainahmad.dev</span>
                  </div>
                </div>
              </div>

              {/* Proficiency Highlights */}
              <div className="p-6 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  Proficiency Highlights
                </h4>
                <div className="space-y-3">
                  {PROFICIENCY_HIGHLIGHTS.map((p) => (
                    <div key={p.name} className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-300">
                        {p.name}
                      </span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`h-2 w-2 rounded-full ${
                              dot <= p.rating
                                ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]"
                                : "bg-slate-800"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categorized Skills */}
              <div className="p-6 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Code2 className="h-3.5 w-3.5 text-sky-400" />
                  Technical Matrix
                </h4>
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.category} className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wide text-slate-400">
                      {cat.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wide text-slate-400">
                    Core Strengths
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {CORE_STRENGTHS.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wide text-slate-400">
                    Languages
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                    {LANGUAGES.map((lang) => (
                      <span key={lang.name} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {lang.name} ({lang.level})
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT MAIN AREA: Summary, Projects, Experience, Education, Certifications (8 cols) */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              
              {/* Professional Summary */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5" />
                  Professional Summary
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Software Engineering student and MERN stack developer who builds scalable, secure, and responsive web applications. Experienced in REST API design, authentication, role-based access control, and payment integrations. Focused on clean architecture, performance, and polished user experience. Seeking a junior full-stack developer role or internship.
                </p>
              </div>

              {/* Work Experience */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400 flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5" />
                    Work Experience
                  </h3>
                  <Badge variant="status">2024 – Present</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        Freelance Full-Stack Developer
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        Remote · Contract / Client Solutions
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-3">
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Delivered responsive websites and web apps for local clients using React, Node.js, and MongoDB.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Translated client requirements into working features, wireframes, and REST APIs.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Maintained clean Git workflow with feature branches and meaningful commits.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400 mb-6 flex items-center gap-2">
                  <Code2 className="h-3.5 w-3.5" />
                  Featured Projects (From Resume)
                </h3>

                <div className="space-y-6">
                  {PROJECTS.map((project, idx) => (
                    <div
                      key={project.title}
                      className={`space-y-3 ${
                        idx !== PROJECTS.length - 1
                          ? "pb-6 border-b border-white/[0.06]"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-base font-bold text-white tracking-tight">
                            {project.title}
                          </h4>
                          <p className="text-xs font-mono text-sky-400/90 mt-0.5">
                            {project.stack}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono">
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                              Live Demo <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                            >
                              GitHub <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-1.5 pl-1">
                        {project.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-sky-400 mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications 2-Col Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Education */}
                <div className="p-6 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Education
                    </h3>
                    <h4 className="text-base font-bold text-white">
                      BS in Software Engineering
                    </h4>
                    <p className="text-xs font-medium text-slate-300 mt-1">
                      Virtual University of Pakistan
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      2023 – 2027 (Expected)
                    </p>
                    
                    <div className="mt-4 pt-3 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Relevant Coursework:
                      </span>
                      <p className="text-xs text-slate-300 leading-normal">
                        Data Structures, Database Systems, Web Engineering, Object-Oriented Programming (OOP)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="p-6 rounded-2xl bg-[#0c0f17]/90 border border-white/[0.08] shadow-lg flex flex-col justify-between">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                      <Award className="h-3.5 w-3.5" />
                      Certifications
                    </h3>

                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-white">
                            Meta Front-End Developer
                          </h4>
                          <span className="text-[10px] font-mono text-emerald-400 shrink-0">
                            Verified
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Professional Certificate · Coursera
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-white">
                            MongoDB Associate Developer
                          </h4>
                          <span className="text-[10px] font-mono text-emerald-400 shrink-0">
                            Official Path
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Official Path · MongoDB University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* ATS DOCUMENT VIEW (Authentic 2-Column Printable Format) */}
        {/* Matches the uploaded ATS resume document layout directly */}
        {/* ======================================================== */}
        <div
          className={`${
            activeTab === "document" ? "block" : "hidden"
          } print:block bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden mx-auto max-w-5xl print:max-w-none print:shadow-none print:border-none print:rounded-none`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 min-h-[1100px]">
            
            {/* Dark Sidebar (Navy/Obsidian #0e1320) */}
            <div className="md:col-span-4 print:col-span-4 bg-[#0a0f1d] text-slate-200 p-6 sm:p-8 flex flex-col justify-between border-r border-slate-800 print:bg-[#0a0f1d] print:text-slate-100">
              <div className="space-y-7">
                {/* Avatar / Monogram */}
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 rounded-full bg-slate-900 border-2 border-emerald-400/80 flex items-center justify-center text-xl font-bold font-mono text-white">
                    ZA
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[#0a0f1d]" />
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 pb-2 border-b border-emerald-500/30 mb-3 flex items-center gap-1.5">
                    <Mail className="h-3 w-3" />
                    Contact
                  </h4>
                  <div className="space-y-2.5 text-[11px] font-sans text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">zain.ahmad.dev@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Lahore, Punjab, PK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>linkedin.com/in/zainahmad-dev</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GithubIcon className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>github.com/zainahmad-dev</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>zainahmad.dev</span>
                    </div>
                  </div>
                </div>

                {/* Technical Skills & Proficiency Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 pb-2 border-b border-emerald-500/30 mb-3 flex items-center gap-1.5">
                    <Code2 className="h-3 w-3" />
                    Technical Skills
                  </h4>

                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 block mb-2 font-semibold">
                      Proficiency Highlights
                    </span>
                    <div className="space-y-1.5">
                      {PROFICIENCY_HIGHLIGHTS.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-300">{item.name}</span>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((d) => (
                              <span
                                key={d}
                                className={`h-1.5 w-1.5 rounded-full ${
                                  d <= item.rating ? "bg-emerald-400" : "bg-slate-700"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[11px]">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                        Frontend
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {SKILL_CATEGORIES[0].skills.map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-200 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                        Backend &amp; API
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {SKILL_CATEGORIES[1].skills.map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-200 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                        Databases &amp; ORM
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {SKILL_CATEGORIES[2].skills.map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-200 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                        Dev Tools &amp; DevOps
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {SKILL_CATEGORIES[3].skills.map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-200 text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Strengths */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 pb-2 border-b border-emerald-500/30 mb-2.5">
                    Core Strengths
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] font-medium text-slate-200">
                    {CORE_STRENGTHS.map((cs) => (
                      <span key={cs} className="p-1.5 rounded bg-slate-800/80 text-center">
                        {cs}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 pb-2 border-b border-emerald-500/30 mb-2">
                    Languages
                  </h4>
                  <div className="space-y-1 text-[11px] text-slate-300">
                    {LANGUAGES.map((l) => (
                      <div key={l.name} className="flex justify-between">
                        <span>{l.name}</span>
                        <span className="text-slate-400 text-[10px]">{l.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
                ATS-Friendly Layout · 2025 Edition
              </div>
            </div>

            {/* Light Content Body (Right Side) */}
            <div className="md:col-span-8 print:col-span-8 p-6 sm:p-10 flex flex-col justify-between bg-white text-slate-900">
              <div className="space-y-7">
                
                {/* Header Name & Title */}
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
                      ZAIN AHMAD
                    </h1>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-300 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      Open to Opportunities
                    </span>
                  </div>
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider text-emerald-700 uppercase mt-1 font-mono">
                    MERN STACK DEVELOPER | FULL-STACK WEB DEVELOPER
                  </h2>
                </div>

                {/* Professional Summary */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2.5 font-sans">
                    PROFESSIONAL SUMMARY
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                    Software Engineering student and MERN stack developer who builds scalable, secure, and responsive web applications. Experienced in REST API design, authentication, role-based access control, and payment integrations. Focused on clean architecture, performance, and polished user experience. Seeking a junior full-stack developer role or internship.
                  </p>
                </div>

                {/* Featured Projects */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3.5 font-sans">
                    FEATURED PROJECTS
                  </h3>

                  <div className="space-y-4">
                    {/* College Management System */}
                    <div className="p-3.5 rounded-lg border border-slate-200/90 bg-slate-50/50">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-950">
                          College Management System
                        </h4>
                        <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                          Live Demo ↗ | GitHub
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-600 mb-2">
                        Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, JWT
                      </p>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                        <li>
                          Built a role-based platform with four access levels (public, student, teacher, admin) covering fee payment, handout distribution, and attendance marking.
                        </li>
                        <li>
                          Integrated JazzCash/Easypaisa payment flow and WhatsApp/call actions into the admin panel to reduce manual follow-ups.
                        </li>
                        <li>
                          Designed a professional UI inspired by UK sixth-form college websites, fully responsive across devices.
                        </li>
                      </ul>
                    </div>

                    {/* DevConnect */}
                    <div className="p-3.5 rounded-lg border border-slate-200/90 bg-slate-50/50">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-950">
                          DevConnect, Developer Social Platform
                        </h4>
                        <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                          Live Demo ↗ | GitHub
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-600 mb-2">
                        MongoDB, Express.js, React, Node.js
                      </p>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                        <li>
                          Developed a full MERN app with JWT auth, profile management, posts, comments, and likes.
                        </li>
                        <li>
                          Implemented pagination and database indexing, improving feed load time by about 35%.
                        </li>
                        <li>
                          Deployed frontend on Vercel and backend on Render with environment-based configuration.
                        </li>
                      </ul>
                    </div>

                    {/* ShopEase */}
                    <div className="p-3.5 rounded-lg border border-slate-200/90 bg-slate-50/50">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-950">
                          ShopEase, E-commerce Web App
                        </h4>
                        <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                          Live Demo ↗ | GitHub
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-600 mb-2">
                        MERN, Redux Toolkit, Stripe
                      </p>
                      <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                        <li>
                          Built product catalog, cart, checkout, and order history with a protected admin dashboard.
                        </li>
                        <li>
                          Added server-side validation, centralized error handling, and secure password hashing with bcrypt.
                        </li>
                        <li>
                          Integrated Stripe test payments and image uploads via Cloudinary.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2.5 font-sans">
                    WORK EXPERIENCE
                  </h3>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-600 inline-block" />
                        Freelance Full-Stack Developer
                      </h4>
                      <span className="text-[11px] font-mono text-slate-600 font-semibold">
                        2024 – Present
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-700 font-medium pl-4 mb-2">
                      Remote · Contract / Client Solutions
                    </p>
                    <ul className="list-disc list-outside pl-8 space-y-1 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                      <li>
                        Delivered responsive websites and web apps for local clients using React, Node.js, and MongoDB.
                      </li>
                      <li>
                        Translated client requirements into working features, wireframes, and REST APIs.
                      </li>
                      <li>
                        Maintained clean Git workflow with feature branches and meaningful commits.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                  {/* Education */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2 font-sans">
                      EDUCATION
                    </h3>
                    <div>
                      <h4 className="text-xs font-bold text-slate-950">
                        BS in Software Engineering
                      </h4>
                      <p className="text-[11px] text-emerald-700 font-medium">
                        Virtual University of Pakistan
                      </p>
                      <p className="text-[10px] font-mono text-slate-500 mb-1.5">
                        2023 – 2027 (Expected)
                      </p>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        <strong className="text-slate-800">Coursework:</strong> Data Structures, Database Systems, Web Engineering, OOP
                      </p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2 font-sans">
                      CERTIFICATIONS
                    </h3>
                    <div className="space-y-2 text-[11px]">
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-slate-950">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>Meta Front-End Developer</span>
                        </div>
                        <p className="text-[10px] text-slate-600 pl-5">
                          Professional Certificate · Coursera
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-slate-950">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>MongoDB Associate Developer</span>
                        </div>
                        <p className="text-[10px] text-slate-600 pl-5">
                          Official Path · MongoDB University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Document Footnote */}
              <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Ref: Portfolio &amp; Code samples available upon request</span>
                <span>zainahmad.dev</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
