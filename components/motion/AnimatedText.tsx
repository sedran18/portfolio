"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOutExpo } from "@/lib/motion/easings";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function AnimatedText({
  text,
  className,
  delay = 0.12,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.58,
              delay: delay + index * 0.07,
              ease: easeOutExpo,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
