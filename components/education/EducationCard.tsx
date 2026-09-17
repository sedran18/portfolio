"use client";

import { localize } from "@/lib/i18n/localize";
import type { Education, Locale } from "@/types";
import { motion, useReducedMotion } from "motion/react";
import { easeOutExpo } from "@/lib/motion/easings";

type EducationCardProps = {
  item: Education;
  locale: Locale;
  compact?: boolean;
};

export function EducationCard({
  item,
  locale,
  compact = false,
}: EducationCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.5, ease: easeOutExpo }}
      className="grid gap-4 border-b border-border py-8 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-10"
    >
      <motion.p
        initial={reduce ? false : { opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: easeOutExpo }}
        className="text-sm text-muted"
      >
        {localize(item.period, locale)}
      </motion.p>
      <div>
        <h3 className="text-lg text-foreground">{item.institution}</h3>
        <p className="mt-1 text-sm text-muted">{localize(item.degree, locale)}</p>
        {compact ? (
          <p className="mt-4 text-xs tracking-wide text-zinc-500">
            {localize(item.status, locale)}
          </p>
        ) : (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {localize(item.description, locale)}
            </p>
            <p className="mt-4 text-xs tracking-wide text-zinc-500">
              {localize(item.status, locale)}
            </p>
          </>
        )}
      </div>
    </motion.article>
  );
}
