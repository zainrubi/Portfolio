"use client";

import React, { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeSection: string;
  resumeUrl?: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  activeSection,
  resumeUrl = "#resume",
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Auto focus close button for accessibility
    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (!targetId || targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 md:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0b0d14] border-l border-slate-800/80 p-6 flex flex-col justify-between shadow-2xl transition-transform"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/70">
            <span className="font-mono text-xs tracking-wider text-slate-400 uppercase">
              Navigation
            </span>
            <button
              ref={firstFocusableRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-6 flex flex-col space-y-1">
            {items.map((item) => {
              const isActive =
                activeSection === item.href.replace("#", "") ||
                (item.href === "#" && (!activeSection || activeSection === "hero"));

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
                    isActive
                      ? "bg-slate-800/70 text-slate-100 font-semibold"
                      : "text-slate-300 hover:text-slate-100 hover:bg-slate-850/50"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer / Resume CTA */}
        <div className="pt-6 border-t border-slate-800/70">
          <Button
            href={resumeUrl}
            target="_blank"
            variant="primary"
            size="md"
            className="w-full justify-center"
            icon={<ArrowUpRight className="h-4 w-4" />}
            onClick={() => onClose()}
          >
            Resume
          </Button>
          <p className="mt-3 text-center text-xs font-mono text-slate-500">
            Zain Ahmad • Software Engineer
          </p>
        </div>
      </div>
    </div>
  );
}
