"use client";

import React, { useState, useEffect } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { NavLink } from "./NavLink";
import { MobileMenu, NavItem } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection check for active section
      const sections = ["hero", "about", "work", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-200",
        scrolled
          ? "bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-sm py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between"
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5 text-slate-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md p-1 -m-1 transition-colors"
          >
            <span className="font-semibold tracking-tight text-base sm:text-lg">
              Zain Ahmad
            </span>
            <span className="hidden sm:inline-flex items-center rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-400 border border-slate-700/50">
              SWE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "") || "hero";
              const isActive = activeSection === sectionId;
              return (
                <NavLink
                  key={item.label}
                  href={item.href}
                  isActive={isActive}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop Action & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="#resume"
              variant="outline"
              size="sm"
              icon={<ArrowUpRight className="h-3.5 w-3.5" />}
              className="text-xs font-mono font-medium"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href="#resume"
              variant="outline"
              size="sm"
              className="text-xs px-2.5 py-1"
            >
              Resume
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
        activeSection={activeSection}
        resumeUrl="#resume"
      />
    </header>
  );
}
