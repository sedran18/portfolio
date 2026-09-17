// ProjectsPreview.tsx
import { getFeaturedProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Locale, Messages } from "@/types";

type ProjectsPreviewProps = {
  locale: Locale;
  messages: Messages;
};

export function ProjectsPreview({ locale, messages }: ProjectsPreviewProps) {
  const items = getFeaturedProjects().slice(0, 4);

  return (
    <Section id="projects" className="py-24 md:py-32">
      <SectionHeader
        eyebrow={messages.sections.projects.eyebrow}
        title={messages.sections.projects.title}
        actionHref="/projects"
        actionLabel={messages.actions.viewAll}
        reveal="clip"
      />
      <ProjectGrid
        projects={items}
        locale={locale}
        messages={messages}
      />
    </Section>
  );
}