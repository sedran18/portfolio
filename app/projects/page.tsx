import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getLocale, getMessages } from "@/lib/i18n/server";
import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected and complete project list.",
};

export default async function ProjectsPage() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <PageIntro
        eyebrow={messages.sections.projects.eyebrow}
        title={messages.sections.projects.pageTitle}
        description={messages.sections.projects.pageIntro}
      />
      <Container className="py-16">
        <ProjectGrid
          projects={projects}
          locale={locale}
          messages={messages}
        />
      </Container>
      <div className="flex justify-center m-10">
        <Button href="https://www.linkedin.com/in/gabriel-nardes/details/projects/" className="gap-2" variant="secondary">
          {messages.actions.viewAll}
          <ArrowUpRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
}
