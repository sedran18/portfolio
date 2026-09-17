"use client";

import { localize } from "@/lib/i18n/localize";
import type { Locale, Messages, Skill } from "@/types";

type SkillCardProps = {
  skill: Skill;
  locale: Locale;
  messages: Messages;
};

export function SkillCard({ skill, locale, messages }: SkillCardProps) {
  return (
    <article className="group border-b border-border py-5 transition-[transform,border-color] duration-200 hover:translate-x-1 hover:border-white/16 motion-reduce:hover:translate-x-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-normal text-foreground transition-[font-weight,color] duration-200 group-hover:font-medium">
          {skill.name}
        </h3>
        {skill.level ? (
          <span className="text-xs uppercase tracking-[0.14em] text-zinc-500 opacity-80 transition-opacity duration-200 group-hover:opacity-100">
            {messages.skillLevels[skill.level]}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {localize(skill.description, locale)}
      </p>
    </article>
  );
}
