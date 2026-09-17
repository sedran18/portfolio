import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <Container className="border-b border-border py-16 sm:py-20">
      <ScrollReveal variant="clip">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </ScrollReveal>
    </Container>
  );
}
