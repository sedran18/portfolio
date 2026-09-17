"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useFinePointer } from "@/lib/motion/useFinePointer";

type PointerShiftProps = {
  children: ReactNode;
  amount?: number;
  className?: string;
};

export function PointerShift({
  children,
  amount = 8,
  className,
}: PointerShiftProps) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;
  const x = useSpring(0, { stiffness: 140, damping: 22, mass: 0.25 });
  const y = useSpring(0, { stiffness: 140, damping: 22, mass: 0.25 });

  return (
    <motion.div
      className={className}
      style={enabled ? { x, y } : undefined}
      onMouseMove={(event) => {
        if (!enabled) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        x.set(px * amount);
        y.set(py * amount);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
