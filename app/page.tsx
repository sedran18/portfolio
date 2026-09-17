import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { EducationPreview } from "@/components/sections/EducationPreview";
import { AchievementsPreview } from "@/components/sections/AchievementsPreview";
import { getLocale, getMessages } from "@/lib/i18n/server";

export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <Hero locale={locale} messages={messages} />
      <AboutPreview locale={locale} messages={messages} />
      <SkillsPreview locale={locale} messages={messages} />
      <ProjectsPreview locale={locale} messages={messages} />
      <ExperiencePreview locale={locale} messages={messages} />
      <EducationPreview locale={locale} messages={messages} />
      <AchievementsPreview locale={locale} messages={messages} />
    </>
  );
}
