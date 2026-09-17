import { profile } from "@/data/profile";
import { ContactForm } from "@/components/ui/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { localize } from "@/lib/i18n/localize";
import type { Locale, Messages } from "@/types";

type ContactSectionProps = {
  locale: Locale;
  messages: Messages;
};

export function ContactSection({ locale, messages }: ContactSectionProps) {
  return (
    <Section id="contact" className="bg-surface/40">
      <SectionHeader
        eyebrow={messages.sections.contact.eyebrow}
        title={messages.sections.contact.title}
        actionHref="/contact"
        actionLabel={messages.actions.viewMore}
        reveal="scale"
      />
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal variant="up" delay={0.08}>
          <a
            href={`mailto:${profile.email}`}
            className="group/mail inline-block text-lg text-foreground underline-offset-4"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-left-bottom bg-no-repeat bg-[length:0_1px] transition-[background-size] duration-300 group-hover/mail:bg-[length:100%_1px]">
              {profile.email}
            </span>
          </a>
          <p className="mt-3 text-sm text-muted">
            {localize(profile.location, locale)}
          </p>
          <SocialLinks locale={locale} className="mt-6" />
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={0.14}>
          <ContactForm messages={messages} />
        </ScrollReveal>
      </div>
    </Section>
  );
}
