"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({
  href,
  children,
  isActive = false,
  onClick,
  className,
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (!targetId || targetId === "hero") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
      // If target element doesn't exist yet, standard hash change is allowed
      // without breaking
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative text-sm font-medium transition-colors duration-150 py-1.5 px-3 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#08090d]",
        isActive
          ? "text-slate-100 font-semibold"
          : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40",
        className
      )}
    >
      {children}
      {isActive && (
        <span
          className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-sky-400/80"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
