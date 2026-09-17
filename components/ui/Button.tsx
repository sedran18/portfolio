"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-[#7C4EE4] border-transparent",
  secondary:
    "bg-transparent text-foreground border-border hover:border-white/20 hover:bg-white/[0.03]",
  ghost:
    "bg-transparent text-muted border-transparent hover:text-foreground",
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
  external = false,
  disabled = false,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const classes = `group/btn inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm tracking-wide transition-[color,background-color,border-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60 [&_svg]:transition-transform [&_svg]:duration-200 group-hover/btn:[&_svg]:translate-x-0.5 group-hover/btn:[&_svg]:-translate-y-0.5 ${variants[variant]} ${className}`;

  const motionProps = reduce
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { scale: 0.98 },
      };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={classes} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  );
}
