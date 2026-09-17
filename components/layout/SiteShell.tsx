import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import type { Locale, Messages } from "@/types";
import type { ReactNode } from "react";

type SiteShellProps = {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
};

export function SiteShell({ locale, messages, children }: SiteShellProps) {
  return (
    <MotionProvider>
      <Header locale={locale} messages={messages} />
      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>
      <Footer locale={locale} messages={messages} />
    </MotionProvider>
  );
}
