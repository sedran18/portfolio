"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/lib/motion/easings";

export type RevealVariant = "up" | "fade" | "left" | "clip" | "scale";

const variants: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -14 },
    visible: { opacity: 1, x: 0 },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(8% 0 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.985 },
    visible: { opacity: 1, scale: 1 },
  },
};

type ScrollRevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  once?: boolean;
};

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className,
  once = true,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.18, margin: "0px 0px -8% 0px" }}
      variants={variants[variant]}
      transition={{ duration: 0.55, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
