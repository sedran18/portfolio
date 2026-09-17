import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import type { Locale, Messages } from "@/types";

type FooterProps = {
  locale: Locale;
  messages: Messages;
};

export function Footer({ locale, messages }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-foreground">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            {messages.footer.rights}
          </p>
        </div>
        <SocialLinks locale={locale} />
      </Container>
    </footer>
  );
}
