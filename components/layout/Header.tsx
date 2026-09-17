"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { easeOutExpo } from "@/lib/motion/easings";
import type { Locale, Messages } from "@/types";

type HeaderProps = {
  locale: Locale;
  messages: Messages;
};

export function Header({ locale, messages }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md overflow-hidden">
      <Container className="flex h-20 items-center justify-between gap-8 w-full max-w-full">
        <Link
          href="/"
          className="text-2xl tracking-wide text-foreground transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-15 min-w-[40%] w-max max-w-full flex-nowrap justify-between" aria-label="Primary">
          <LayoutGroup>
            <div className="flex items-center gap-4">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative pb-1 text-[14px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                      active ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {messages.nav[item.key]}
                    {active ? (
                      <motion.span
                        layoutId={reduce ? undefined : "nav-underline"}
                        className="absolute inset-x-0 -bottom-px h-px bg-foreground"
                        transition={{ duration: 0.28, ease: easeOutExpo }}
                      />
                    ) : (
                      <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-foreground/70 transition-transform duration-200 group-hover:scale-x-100" />
                    )}
                  </Link>
                );
              })}
            </div>
          </LayoutGroup>
          
          <LanguageSwitcher locale={locale} messages={messages} />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} messages={messages} />
          <button
            type="button"
            className="text-sm text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? messages.nav.closeMenu : messages.nav.openMenu}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOutExpo }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {messages.nav[item.key]}
                </Link>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
