import { getFeaturedAchievements } from "@/data/achievements";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Locale, Messages } from "@/types";

type AchievementsPreviewProps = {
  locale: Locale;
  messages: Messages;
};

export function AchievementsPreview({
  locale,
  messages,
}: AchievementsPreviewProps) {
  const items = getFeaturedAchievements().slice(0, 3);

  return (
    <Section id="achievements">
      <SectionHeader
        eyebrow={messages.sections.achievements.eyebrow}
        title={messages.sections.achievements.title}
        actionHref="/achievements"
        actionLabel={messages.actions.explore}
        reveal="fade"
      />
      <div>
        {items.map((item) => (
          <AchievementCard
            key={item.id}
            item={item}
            locale={locale}
            messages={messages}
          />
        ))}
      </div>
    </Section>
  );
}
