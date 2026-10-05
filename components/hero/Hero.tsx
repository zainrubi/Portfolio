"use client";

import React from "react";
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
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
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

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-44 pb-12 flex-1 flex flex-col justify-center items-center text-center">
        {/* Engineering Status Pill */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
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
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase select-none mb-3 sm:mb-4">
          Zain Ahmad
        </h1>

        {/* Professional Role Title */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium tracking-normal text-slate-200 max-w-2xl mb-5 sm:mb-6">
          Software Engineer &amp; Full-Stack Web Developer
        </h2>

        {/* Supporting Message - Concrete, Engineering-focused, Recruiter-friendly */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 font-normal leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
          I architect and build modern web applications, complex management
          systems, accountable business platforms, and scalable SaaS products.
          Focused on clean system architecture, robust full-stack logic, and reliable execution.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-12">
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
          >
            Resume
          </Button>
        </div>

        {/* Subtle Professional Profiles */}
        <div className="flex items-center justify-center gap-4 text-slate-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <GithubIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <LinkedinIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </a>

          <a
            href="mailto:contact@zainahmad.dev"
            aria-label="Email Zain Ahmad"
            className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator at bottom */}
      <div className="relative z-10 pb-6 sm:pb-8 flex justify-center">
        <ScrollIndicator targetId="work" />
      </div>
    </section>
  );
}
