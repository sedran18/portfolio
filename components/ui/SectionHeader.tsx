import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import type { RevealVariant } from "@/components/motion/ScrollReveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  reveal?: RevealVariant;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  reveal = "up",
}: SectionHeaderProps) {
  return (
    <ScrollReveal variant={reveal} className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl leading-tight text-foreground sm:text-7xl lg:text-7xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {actionHref && actionLabel ? (
        <Button href={actionHref} variant="secondary" className=" w-40 sm:w-40 lg:w-40 p-3 h-12 text-base flex items-center justify-center gap-2">
          {actionLabel}
          <ArrowUpRight className="size-5" />
        </Button>
      ) : null}
    </ScrollReveal>
  );
}
