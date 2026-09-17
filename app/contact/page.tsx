import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageIntro } from "@/components/ui/PageIntro";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { getLocale, getMessages } from "@/lib/i18n/server";
import { localize } from "@/lib/i18n/localize";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, GitHub, LinkedIn, and a contact form placeholder.",
};

export default async function ContactPage() {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <>
      <PageIntro
        eyebrow={messages.sections.contact.eyebrow}
        title={messages.sections.contact.pageTitle}
        description={messages.sections.contact.pageIntro}
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-2">
        <ScrollReveal variant="up">
          <a
            href={`mailto:${profile.email}`}
            className="group/mail inline-block text-2xl text-foreground underline-offset-4"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-left-bottom bg-no-repeat bg-[length:0_1px] transition-[background-size] duration-300 group-hover/mail:bg-[length:100%_1px]">
              {profile.email}
            </span>
          </a>
          <p className="mt-4 text-muted">{localize(profile.location, locale)}</p>
          <p className="mt-2 text-sm text-muted">
            {localize(profile.availability, locale)}
          </p>
          <SocialLinks locale={locale} className="mt-8" />
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={0.1}>
          <ContactForm messages={messages} />
        </ScrollReveal>
      </Container>
    </>
  );
}
