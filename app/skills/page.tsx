import type { Metadata } from "next";
import { skillCategoryOrder, getSkillsByCategory } from "@/data/skills";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SkillCard } from "@/components/skills/SkillCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getLocale, getMessages } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: "Skills",
  description: "Frontend, backend, database, DevOps, and tools.",
};

export default async function SkillsPage() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <PageIntro
        eyebrow={messages.sections.skills.eyebrow}
        title={messages.sections.skills.pageTitle}
        description={messages.sections.skills.pageIntro}
      />
      <Container className="space-y-16 py-16">
        {skillCategoryOrder.map((category) => {
          const items = getSkillsByCategory(category);
          if (items.length === 0) {
            return null;
          }
          return (
            <section key={category}>
              <ScrollReveal variant="up">
                <h2 className="mb-2 font-display text-2xl lg:text-4xl text-foreground">
                  {messages.skillCategories[category]}
                </h2>
                <Stagger delay={0.05}>
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
              </ScrollReveal>
            </section>
          );
        })}
      </Container>
    </>
  );
}
