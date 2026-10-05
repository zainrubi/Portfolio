"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export function ScrollIndicator({
  targetId = "work",
  className,
}: ScrollIndicatorProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // If the section doesn't exist yet, scroll down one viewport height smoothly
      window.scrollTo({
        top: window.innerHeight * 0.85,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 select-none",
        className
      )}
    >
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        aria-label="Scroll down to view work"
        className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-full px-3 py-1.5"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <div className="flex h-7 w-4 items-start justify-center rounded-full border border-slate-700/80 p-1 group-hover:border-slate-500 transition-colors">
          <div className="h-1.5 w-1 rounded-full bg-slate-400 animate-gentle-bounce" />
        </div>
        <ChevronDown className="h-3.5 w-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
      </a>
    </div>
  );
}
