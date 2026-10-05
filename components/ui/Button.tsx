import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      download,
      icon,
      iconPosition = "right",
      children,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-slate-100 text-slate-950 hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] border border-white/20 font-semibold",
      secondary:
        "bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800/90 border border-slate-700/60 hover:border-slate-600/80 shadow-sm",
      outline:
        "bg-transparent text-slate-300 hover:text-white border border-slate-700/70 hover:border-slate-500/80 hover:bg-slate-800/40",
      ghost:
        "bg-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/40",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-md gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-lg gap-2 tracking-wide",
      lg: "text-base px-6 py-3.5 rounded-lg gap-2.5 font-medium",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0 items-center justify-center transition-transform group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 items-center justify-center transition-transform group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          download={download}
          className={cn(combinedClassName, "group no-underline")}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={disabled}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={cn(combinedClassName, "group")}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
