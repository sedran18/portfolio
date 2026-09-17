import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Locale, Messages, Project } from "@/types";

type ProjectGridProps = {
  projects: Project[];
  locale: Locale;
  messages: Messages;
};

export function ProjectGrid({
  projects,
  locale,
  messages,
}: ProjectGridProps) {

  if (!projects.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              locale={locale}
              messages={messages}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}