import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "neutral" | "status" | "accent";
  pulseDot?: boolean;
}

export function Badge({
  className,
  variant = "neutral",
  pulseDot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral:
      "bg-slate-900/80 text-slate-300 border-slate-800/80 hover:border-slate-700",
    status:
      "bg-emerald-950/40 text-emerald-300/90 border-emerald-800/40 hover:border-emerald-700/60",
    accent:
      "bg-sky-950/40 text-sky-300/90 border-sky-800/40 hover:border-sky-700/60",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      )}
      {children}
    </div>
  );
}
