import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { ScrollParallax } from "@/components/motion/ScrollParallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getLocale, getMessages } from "@/lib/i18n/server";
import { localize, localizeList } from "@/lib/i18n/localize";

export const metadata: Metadata = {
  title: "About",
  description: localize(profile.bio, "en"),
};

export default async function AboutPage() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <PageIntro
        eyebrow={messages.sections.about.eyebrow}
        title={messages.sections.about.title}
        description={localize(profile.bio, locale)}
      />
      <Container className="grid items-start gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <ScrollParallax offset={18} className="group mx-auto max-w-sm lg:mx-0">
          <ProfilePortrait locale={locale} className="mx-auto max-w-sm lg:mx-0" />
        </ScrollParallax>
        <Stagger className="space-y-10" delay={0.1}>
          <StaggerItem>
            <section>
              <h2 className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                {messages.sections.about.trajectory}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {localize(profile.about.trajectory, locale)}
              </p>
            </section>
          </StaggerItem>
          <StaggerItem>
            <section>
              <h2 className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                {messages.sections.about.interests}
              </h2>
              <ul className="mt-3 space-y-2 text-base text-muted">
                {localizeList(profile.about.interests, locale).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </StaggerItem>
          <StaggerItem>
            <section>
              <h2 className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                {messages.sections.about.workingStyle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {localize(profile.about.workingStyle, locale)}
              </p>
            </section>
          </StaggerItem>
          <StaggerItem>
            <section>
              <h2 className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                {messages.sections.about.goals}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {localize(profile.about.goals, locale)}
              </p>
            </section>
          </StaggerItem>
        </Stagger>
      </Container>
    </>
  );
}
