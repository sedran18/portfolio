import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { getLocale, getMessages } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, periods, and the stack around them.",
};

export default async function ExperiencePage() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <PageIntro
        eyebrow={messages.sections.experience.eyebrow}
        title={messages.sections.experience.pageTitle}
        description={messages.sections.experience.pageIntro}
      />
      <Container className="py-10">
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} locale={locale} />
        ))}
      </Container>
    </>
  );
}
