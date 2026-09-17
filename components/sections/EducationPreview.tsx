import { education } from "@/data/education";
import { EducationCard } from "@/components/education/EducationCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Locale, Messages } from "@/types";

type EducationPreviewProps = {
  locale: Locale;
  messages: Messages;
};

export function EducationPreview({
  locale,
  messages,
}: EducationPreviewProps) {
  const latest = education[0];

  if (!latest) {
    return null;
  }

  return (
    <Section id="education">
      <SectionHeader
        eyebrow={messages.sections.education.eyebrow}
        title={messages.sections.education.title}
        actionHref="/education"
        actionLabel={messages.actions.viewMore}
        reveal="left"
      />
      <EducationCard item={latest} locale={locale} compact />
    </Section>
  );
}
