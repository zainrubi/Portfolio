"use client";

import React from "react";
import {
  Layers,
  LayoutDashboard,
  Boxes,
  Server,
  ShieldCheck,
  ArrowRight,
  RotateCw,
} from "lucide-react";
import FlippingCards from "@/components/animata/list/flipping-cards";

interface CapabilityCard {
  number: string;
  category: string;
  title: string;
  summary: string;
  backDescription: string;
  tags: string[];
  icon: React.ReactNode;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    number: "01",
    category: "Operations",
    title: "Management Systems",
    summary: "Institutional & organizational workflow engines",
    backDescription:
      "College, education, and business management systems focused on records, workflows, operations, and accountability.",
    tags: ["Records Architecture", "Operational Booking", "Audit Trails", "Workflow Engines"],
    icon: <Layers className="h-5 w-5 text-sky-400" />,
  },
  {
    number: "02",
    category: "Interfaces",
    title: "Dashboards & Portals",
    summary: "Role-specific multi-tenant user portals",
    backDescription:
      "Role-specific interfaces including admin dashboards, student portals, teacher portals, and other user-focused experiences.",
    tags: ["Admin Portals", "Student & Faculty", "Role-Based UI", "Real-Time Views"],
    icon: <LayoutDashboard className="h-5 w-5 text-sky-400" />,
  },
  {
    number: "03",
    category: "Platforms",
    title: "SaaS Applications",
    summary: "Multi-tenant cloud apps with complex business logic",
    backDescription:
      "Modern web applications built around real users, business requirements, application logic, and scalable functionality.",
    tags: ["Business Logic", "Scalable Functions", "User Journeys", "Production Cloud"],
    icon: <Boxes className="h-5 w-5 text-sky-400" />,
  },
  {
    number: "04",
    category: "Infrastructure",
    title: "Backend & APIs",
    summary: "Resilient server logic & network contracts",
    backDescription:
      "REST APIs, Node.js backend development, database integration, server-side logic, and application communication.",
    tags: ["RESTful APIs", "Node.js Services", "Database Integration", "Server Logic"],
    icon: <Server className="h-5 w-5 text-sky-400" />,
  },
  {
    number: "05",
    category: "Security",
    title: "Authentication & Workflows",
    summary: "Identity governance & multi-step transaction states",
    backDescription:
      "Authentication, role-based access, protected routes, permissions, and multi-step application workflows.",
    tags: ["RBAC Security", "Protected Routes", "Session & Tokens", "Multi-Step Logic"],
    icon: <ShieldCheck className="h-5 w-5 text-sky-400" />,
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-label="What I Build — Engineering Capabilities"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle ambient lighting consistent with portfolio aesthetic */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-sky-500/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              {"02 // WHAT I BUILD"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            I build systems, not just pages.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            I design and develop practical web applications engineered around real-world requirements, active users, and business workflows.
          </p>
        </div>

        {/* Flipping Cards Grid (Animata Component) */}
        <FlippingCards className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CAPABILITIES.map((card, index) => {
            const isLast = index === CAPABILITIES.length - 1;
            return (
              <FlippingCards.Item
                key={card.number}
                className={`h-[330px] sm:h-[320px] xl:h-[384px] w-full ${isLast ? "sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none" : ""
                  }`}
                aria-label={`${card.title} - Capability ${card.number}`}
              >
                {/* FRONT FACE */}
                <FlippingCards.Item.Front className="p-6 bg-[#0c0f17] border border-white/[0.08] hover:border-slate-700/80 group-hover/card:border-sky-500/30 group-focus-visible/card:border-sky-500/40 transition-colors duration-300 flex flex-col shadow-lg">
                  {/* Top: Number & Category */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold text-sky-400 tracking-wider">
                        {card.number}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
                        {card.category}
                      </span>
                    </div>

                    {/* Middle: Icon & Title */}
                    <div className="mb-4 inline-flex p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sky-400">
                      {card.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover/card:text-sky-300 transition-colors">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 font-normal leading-relaxed">
                      {card.summary}
                    </p>
                  </div>

                  {/* Bottom: Flip Cue */}
                  <div className="mt-auto shrink-0 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <RotateCw className="h-3 w-3 text-sky-400/80" />
                      Hover or tap
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover/card:text-sky-400 group-hover/card:translate-x-0.5 transition-all" />
                  </div>
                </FlippingCards.Item.Front>

                {/* BACK FACE */}
                <FlippingCards.Item.Back className="p-6
                 bg-[#0e1320] border border-sky-500/30 group-hover/card:border-sky-500/50 group-focus-visible/card:border-sky-500/60 transition-colors duration-300 flex flex-col shadow-xl">
                  {/* Top: Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-semibold text-sky-400 tracking-wider">
                        {card.number} {"//"} Scope
                      </span>
                      <span className="font-mono text-[10px] text-sky-400/80 uppercase tracking-wider px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/40">
                        System Spec
                      </span>
                     </div>

                    <h4 className="text-base font-bold text-white tracking-tight mb-2.5">
                      {card.title}
                  
                    </h4>
                    {/* Back Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {card.backDescription}
                    </p>

                    {/* Facets / Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800/90 text-[10px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Flip Cue */}
                  <div className="mt-auto shrink-0 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-[10px] text-sky-400/90">
                      Production Architecture
                    </span>
                    <span className="text-slate-400 hover:text-white transition-colors">
                      Flip back ⟲
                    </span>
                  </div>
                </FlippingCards.Item.Back>
              </FlippingCards.Item>
            );
          })}
        </FlippingCards>

      </div>
    </section>
  );
}

export default Capabilities;
