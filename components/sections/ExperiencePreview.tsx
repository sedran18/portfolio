import { experience } from "@/data/experience";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Locale, Messages } from "@/types";

type ExperiencePreviewProps = {
  locale: Locale;
  messages: Messages;
};

export function ExperiencePreview({
  locale,
  messages,
}: ExperiencePreviewProps) {
  const latest = experience[0];

  if (!latest) {
    return null;
  }

  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeader
        eyebrow={messages.sections.experience.eyebrow}
        title={messages.sections.experience.title}
        actionHref="/experience"
        actionLabel={messages.actions.viewMore}
        reveal="left"
      />
      <ExperienceCard item={latest} locale={locale} compact />
    </Section>
  );
}
