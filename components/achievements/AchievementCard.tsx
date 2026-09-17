"use client";

import { localize } from "@/lib/i18n/localize";
import type { Achievement, Locale, Messages } from "@/types";
import { motion, useReducedMotion } from "motion/react";
import { easeOutExpo } from "@/lib/motion/easings";

type AchievementCardProps = {
  item: Achievement;
  locale: Locale;
  messages: Messages;
};

export function AchievementCard({
  item,
  locale,
  messages,
}: AchievementCardProps) {
  const title = localize(item.title, locale);
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.48, ease: easeOutExpo }}
      className="border-b border-border py-6 last:border-b-0 transition-[transform,border-color] duration-200 hover:translate-x-1 hover:border-white/16 motion-reduce:hover:translate-x-0"
    >
      <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
        {messages.achievementKinds[item.kind]}
        {item.issuer ? ` — ${item.issuer}` : ""}
      </p>
      <h3 className="mt-2 text-lg text-foreground">
        {item.href ? (
          <a
            href={item.href}
            className="underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-1 text-sm text-muted">{localize(item.period, locale)}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {localize(item.description, locale)}
      </p>
    </motion.article>
  );
}
