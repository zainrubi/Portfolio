"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, FileText, Mail } from "lucide-react";
import BoidsEcosystem from "./BoidsEcosystem";
import { ScrollIndicator } from "./ScrollIndicator";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
    </svg>
  );
}

export function Hero() {
  const handleScrollToWork = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const workSection = document.getElementById("work");
    if (workSection) {
      e.preventDefault();
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction and Hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#08090d]"
    >
      {/* Animata Design Boids Ecosystem Background */}
      <div className="absolute inset-0 z-0">
        <BoidsEcosystem
          background="#08090d"
          agentShape="dot"
          className="h-full w-full"
        />

        {/* Sophisticated radial & linear vignette to preserve 100% text contrast */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(8,9,13,0.72)_0%,_rgba(8,9,13,0.35)_60%,_#08090d_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08090d] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#08090d]/80 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area: Responsive Balanced 2-Column Composition */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-32 pb-8 sm:pb-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Column: Typography, Status, CTAs, Profiles */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
            {/* Engineering Status Pill */}
            <div className="mb-5 sm:mb-6">
              <Badge
                variant="neutral"
                pulseDot
                className="bg-slate-900/90 border-slate-700/60 py-1.5 px-3.5 shadow-sm"
              >
                <span className="font-mono text-slate-300 text-xs sm:text-[13px]">
                  Software Engineering Student (5th Sem) • Open to Roles
                </span>
              </Badge>
            </div>

            {/* Name / Primary Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white uppercase select-none mb-3 sm:mb-4">
              Zain Ahmad
            </h1>

            {/* Professional Role Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-normal text-slate-200 max-w-xl mb-4 sm:mb-5">
              Software Engineer &amp; Full-Stack Web Developer
            </h2>

            {/* Supporting Message - Concrete, Engineering-focused, Recruiter-friendly */}
            <p className="max-w-xl text-sm sm:text-base md:text-[17px] text-slate-400 font-normal leading-relaxed mb-7 sm:mb-9 px-2 sm:px-0">
              I architect and build modern web applications, complex management
              systems, accountable business platforms, and scalable SaaS products.
              Focused on clean system architecture, robust full-stack logic, and reliable execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-9">
              <Button
                href="#work"
                variant="primary"
                size="lg"
                onClick={handleScrollToWork}
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto px-7"
              >
                View My Work
              </Button>

              <Button
                href="#resume"
                variant="secondary"
                size="lg"
                icon={<FileText className="h-4 w-4 text-slate-400" />}
                className="w-full sm:w-auto px-7"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Resume
              </Button>
            </div>

            {/* Subtle Professional Profiles */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <a
                href="https://github.com/zainahmad-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <GithubIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </a>

              <a
                href="https://linkedin.com/in/zainahmad-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <LinkedinIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </a>

              <a
                href="mailto:zain.ahmad.dev@gmail.com"
                aria-label="Email Zain Ahmad"
                className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </a>
            </div>
          </div>

          {/* Right Column: Zain Ahmad Professional Portrait */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-up [animation-delay:150ms]">
            <div className="relative group">
              {/* Subtle ambient backglow */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500/10 via-slate-600/10 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Frame Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0e17]/80 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
                <div className="relative w-[260px] h-[330px] sm:w-[310px] sm:h-[395px] md:w-[340px] md:h-[435px] lg:w-[360px] lg:h-[460px] xl:w-[390px] xl:h-[495px]">
                  <Image
                    src="/zain-ahmad.jpg"
                    alt="Portrait of Zain Ahmad, Software Engineer & Full-Stack Web Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 310px, (max-width: 1024px) 340px, 400px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />

                  {/* Elegant bottom gradient fade seamlessly blending into #08090d obsidian backdrop */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090d] via-[#08090d]/50 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Refined subtle inner rim highlight */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08]"
                    aria-hidden="true"
                  />
                </div>

                {/* Minimal engineering status overlay at bottom of portrait */}
                <div className="absolute bottom-3.5 inset-x-3.5 z-10 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#08090d]/85 backdrop-blur-md border border-white/[0.08] text-xs font-mono text-slate-300 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-200">
                      Zain Ahmad
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    SE • 5th Sem
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator at bottom */}
      <div className="relative z-10 pb-6 sm:pb-8 flex justify-center">
        <ScrollIndicator targetId="work" />
      </div>
    </section>
  );
}
