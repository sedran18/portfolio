"use client";

import Image from "next/image";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { localize } from "@/lib/i18n/localize";
import type { Locale, Messages, Project } from "@/types";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { easeOutExpo } from "@/lib/motion/easings";

type ProjectCardProps = {
  project: Project;
  index: number;
  locale: Locale;
  messages: Messages;
};

export function ProjectCard({ project, index, locale, messages }: ProjectCardProps) {
  const title = localize(project.title, locale);
  const description = localize(project.shortDescription, locale);
  const link = project.demo ?? project.github;
  const reduce = useReducedMotion();
  const fromLeft = index % 2 === 0;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, delay: 0.04, ease: easeOutExpo }}
      className="group/project border-t border-border py-14 first:border-t-0 first:pt-0"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-sm text-indigo-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        {link ? (
          <Link
            href={link}
            className="group/link inline-flex items-center gap-1.5 text-xl text-muted transition-colors duration-200 hover:text-foreground"
          >
            {title}
            <ArrowUpRight className="size-4 translate-y-px transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        ) : null}
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: fromLeft ? -18 : 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-transparent bg-surface-elevated transition-[border-color,box-shadow] duration-300 group-hover/project:border-white/10"
        >
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: reduce ? 0 : 0.08, ease: easeOutExpo }}
          className="flex flex-col gap-6 transition-transform duration-300 group-hover/project:-translate-y-0.5 motion-reduce:group-hover/project:translate-y-0"
        >
          <h3 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {title}
          </h3>

          <p className="max-w-prose text-base leading-relaxed text-muted">
            {description}
          </p>

          <p className="text-sm text-zinc-500 transition-colors duration-200 group-hover/project:text-zinc-400">
            {project.technologies.join(" · ")}
          </p>

          {project.demo && project.github ? (
            <div className="flex gap-5 text-sm">
              <Link
                href={project.demo}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {messages.actions.viewDemo}
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                {messages.actions.viewGithub}
              </Link>
            </div>
          ) : null}

          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-500">
            <span>{localize(project.category, locale)}</span>
            <span>—</span>
            <span>{project.year}</span>
            <StatusBadge status={project.status} messages={messages} />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
