import type { Metadata } from "next";
import { education } from "@/data/education";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { EducationCard } from "@/components/education/EducationCard";
import { getLocale, getMessages } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Education",
  description: "Degree, institution, and current academic status.",
};

export default async function EducationPage() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <PageIntro
        eyebrow={messages.sections.education.eyebrow}
        title={messages.sections.education.pageTitle}
        description={messages.sections.education.pageIntro}
      />
      <Container className="py-10">
        {education.map((item) => (
          <EducationCard key={item.id} item={item} locale={locale} />
        ))}
      </Container>
    </>
  );
}
