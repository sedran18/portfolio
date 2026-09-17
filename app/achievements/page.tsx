import type { Metadata } from "next";
import { achievements } from "@/data/achievements";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { getLocale, getMessages } from "@/lib/i18n/server";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Certificates, courses, events, and other records.",
};

export default async function AchievementsPage() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <PageIntro
        eyebrow={messages.sections.achievements.eyebrow}
        title={messages.sections.achievements.pageTitle}
        description={messages.sections.achievements.pageIntro}
      />

      <Container className="py-10">
        {achievements.map((item) => (
          <AchievementCard
            key={item.id}
            item={item}
            locale={locale}
            messages={messages}
          />
        ))}
      </Container>
      <div className="flex justify-center m-10">
        <Button href="https://www.linkedin.com/in/gabriel-nardes/details/certifications/" className="gap-2" variant="secondary">
          {messages.actions.viewAll}
          <ArrowUpRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
}
