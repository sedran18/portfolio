import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { localize } from "@/lib/i18n/localize";
import type { Locale, Messages } from "@/types";

type AboutPreviewProps = {
  locale: Locale;
  messages: Messages;
};

export function AboutPreview({ locale, messages }: AboutPreviewProps) {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow={messages.sections.about.eyebrow}
        title={messages.sections.about.title}
        reveal="fade"
      />
      <div className="max-w-2xl">
        <ScrollReveal variant="up" delay={0.06}>
          <p className="text-lg leading-relaxed text-zinc-300">
            {localize(profile.bio, locale)}
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.12}>
          <p className="mt-4 text-sm text-muted">
            {localize(profile.location, locale)}
          </p>
        </ScrollReveal>
        <ScrollReveal variant="up" delay={0.16}>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              {messages.actions.viewMore}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
