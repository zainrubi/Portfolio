"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, Send, CheckCircle2, ArrowUpRight } from "lucide-react";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.201.3-.778.979-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.517l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.244 5.147 4.551.719.311 1.28.497 1.718.636.723.23 1.381.198 1.902.12.58-.088 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.277-.201-.578-.352zm-5.454 7.424h-.008c-1.85 0-3.666-.499-5.253-1.442l-.377-.224-3.906 1.025 1.043-3.808-.246-.392a10.686 10.686 0 0 1-1.636-5.698c0-5.894 4.795-10.689 10.695-10.689 2.857 0 5.542 1.113 7.561 3.134 2.02 2.02 3.131 4.707 3.13 7.566-.002 5.897-4.799 10.693-10.69 10.693zM20.52 3.449C18.243 1.171 15.215-.078 12.018-.08 5.46-.08.118 5.263.115 11.824a11.826 11.826 0 0 0 1.813 6.275L0 24l6.064-1.59a11.838 11.838 0 0 0 5.95 1.597h.005c6.557 0 11.9-5.343 11.903-11.904a11.823 11.823 0 0 0-3.402-8.654z" />
    </svg>
  );
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-label="Contact Me"
      className="relative w-full py-24 sm:py-32 bg-[#08090d] text-slate-100 border-t border-white/[0.06]"
    >
      {/* Subtle ambient lighting consistent with portfolio aesthetic */}
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-sky-500/[0.02] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          
          {/* Left Column: Direct Info & Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Open for Collaboration
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Let&apos;s Work Together
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
                Whether you have a freelance project in mind, are seeking a full-stack developer for your team, want to build custom web applications, or are exploring digital solutions for an educational institute—I would love to connect.
              </p>

              {/* Prominent WhatsApp CTA Button */}
              <div className="mt-6 sm:mt-7">
                <a
                  href="https://wa.me/923086573309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_24px_rgba(16,185,129,0.4)] transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 text-emerald-200" />
                </a>
              </div>

              {/* Direct Contact Cards */}
              <div className="mt-6 sm:mt-8 space-y-3.5">
                
                {/* Email */}
                <a
                  href="mailto:zain.ahmad.dev@gmail.com"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#0c0f17]/70 border border-white/[0.08] hover:border-slate-700/80 hover:bg-[#0c0f17] transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 group-hover:text-sky-300 transition-colors shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                        Email Address
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors truncate mt-0.5">
                        zain.ahmad.dev@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors shrink-0 ml-2" />
                </a>

                {/* Phone */}
                <a
                  href="tel:03086573309"
                  className="group flex items-center justify-between p-4 rounded-xl bg-[#0c0f17]/70 border border-white/[0.08] hover:border-slate-700/80 hover:bg-[#0c0f17] transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/[0.06] text-slate-400 group-hover:text-emerald-300 transition-colors shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                        Phone &amp; WhatsApp
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors truncate mt-0.5">
                        03086573309
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors shrink-0 ml-2" />
                </a>

              </div>
            </div>

            {/* Quick response note */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-xs text-slate-400 font-normal">
                Based in Lahore, Punjab, PK (GMT+5) • Responsive across all communication channels.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0f17]/70 border border-white/[0.08] p-6 sm:p-8 lg:p-10">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Sent Successfully
                </h3>
                <p className="mt-2 text-sm text-slate-400 max-w-md leading-relaxed">
                  Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-5 py-2.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out the fields below and I will respond promptly.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c13] border border-white/[0.08] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/80 transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c13] border border-white/[0.08] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/80 transition-colors text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team opportunity, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090c13] border border-white/[0.08] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/80 transition-colors text-sm resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-white hover:bg-slate-200 transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 text-slate-950" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Minimal Bottom Footer Bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Zain Ahmad. All rights reserved.</p>
          <p>Software Engineer &amp; Full-Stack Web Developer</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
