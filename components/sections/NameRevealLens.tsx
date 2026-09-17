"use client";

import type { ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useFinePointer } from "@/lib/motion/useFinePointer";

const LENS = 200;
const RADIUS = LENS / 2;
const follow = { stiffness: 70, damping: 18, mass: 0.45 };
const reveal = { stiffness: 180, damping: 24, mass: 0.3 };

type NameRevealLensProps = {
  children: ReactNode;
  hiddenLabel?: string;
};

export function NameRevealLens({
  children,
  hiddenLabel = "SEDRAN",
}: NameRevealLensProps) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawR = useMotionValue(0);
  const x = useSpring(rawX, follow);
  const y = useSpring(rawY, follow);
  const r = useSpring(rawR, reveal);
  const lensX = reduce ? rawX : x;
  const lensY = reduce ? rawY : y;
  const lensR = reduce ? rawR : r;
  const clipPath = useMotionTemplate`circle(${lensR}px at ${lensX}px ${lensY}px)`;
  const ringOpacity = useTransform(lensR, [0, RADIUS], [0, 1]);

  if (!fine) {
    return children;
  }

  return (
    <span
      className="relative inline-block"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const nextX = event.clientX - rect.left;
        const nextY = event.clientY - rect.top;

        if (rawR.get() === 0) {
          rawX.jump(nextX);
          rawY.jump(nextY);
          x.jump(nextX);
          y.jump(nextY);
        } else {
          rawX.set(nextX);
          rawY.set(nextY);
        }

        rawR.set(RADIUS);
      }}
      onMouseLeave={() => rawR.set(0)}
    >
      <span className="relative z-0">{children}</span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ clipPath }}
      >
        <span className="absolute inset-0 bg-background" />
        <span className="absolute inset-0 text-9xl flex items-center font-mono  tracking-[0.15em] text-violet-200/80">
          {hiddenLabel}
        </span>
      </motion.span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 z-[2] rounded-full border border-white/18 bg-transparent"
        style={{
          width: LENS,
          height: LENS,
          marginLeft: -RADIUS,
          marginTop: -RADIUS,
          x: lensX,
          y: lensY,
          opacity: ringOpacity,
        }}
      />
    </span>
  );
}
