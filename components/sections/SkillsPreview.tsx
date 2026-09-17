import { getFeaturedSkills } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCard } from "@/components/skills/SkillCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Locale, Messages } from "@/types";

type SkillsPreviewProps = {
  locale: Locale;
  messages: Messages;
};

export function SkillsPreview({ locale, messages }: SkillsPreviewProps) {
  const items = getFeaturedSkills().slice(0, 6);

  return (
    <Section id="skills" className="bg-surface/40">
      <SectionHeader
        eyebrow={messages.sections.skills.eyebrow}
        title={messages.sections.skills.title}
        actionHref="/skills"
        actionLabel={messages.actions.explore}
        reveal="left"
      />
      <Stagger className="grid gap-x-16 md:grid-cols-2" delay={0.06}>
        {items.map((skill) => (
          <StaggerItem key={skill.id}>
            <SkillCard
              skill={skill}
              locale={locale}
              messages={messages}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
