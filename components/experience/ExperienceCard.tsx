"use client";

import { localize, localizeList } from "@/lib/i18n/localize";
import type { Experience, Locale } from "@/types";
import { motion, useReducedMotion } from "motion/react";
import { easeOutExpo } from "@/lib/motion/easings";

type ExperienceCardProps = {
  item: Experience;
  locale: Locale;
  compact?: boolean;
};

export function ExperienceCard({
  item,
  locale,
  compact = false,
}: ExperienceCardProps) {
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
        <h3 className="text-lg text-foreground">{localize(item.role, locale)}</h3>
        <p className="mt-1 text-sm text-muted">{item.company}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {localize(item.description, locale)}
        </p>
        {!compact ? (
          <ul className="mt-4 space-y-1.5 text-sm text-zinc-400">
            {localizeList(item.highlights, locale).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
        <p className="mt-4 text-xs tracking-wide text-zinc-500">
          {item.skills.join(" / ")}
        </p>
      </div>
    </motion.article>
  );
}
