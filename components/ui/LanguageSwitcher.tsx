"use client";

import { useRouter } from "next/navigation";
import { locales, type Locale, type Messages } from "@/types";
import { LOCALE_COOKIE } from "@/lib/i18n/config";
import Image from "next/image";

const flagSrc: Record<Locale, string> = {
  en: "/images/locales/us.png",
  "pt-BR": "/images/locales/br.png",
};

const flagAlt: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português",
};

type LanguageSwitcherProps = {
  locale: Locale;
  messages: Messages;
};

export function LanguageSwitcher({
  locale,
  messages,
}: LanguageSwitcherProps) {
  const router = useRouter();

  function setLocale(next: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div
      className="flex shrink-0 items-center gap-2"
      role="radiogroup"
      aria-label={messages.nav.language}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => {
              if (active) return;
              setLocale(code);
            }}
            role="radio"
            aria-checked={active}
            className={`relative h-4 w-6 shrink-0 cursor-pointer overflow-hidden rounded-[2px] p-0 transition-all duration-200
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
              ${
                active
                  ? "scale-105 shadow-sm ring-2 ring-accent"
                  : "opacity-60 hover:scale-105 hover:opacity-100"
              }`}
          >
            <Image
              src={flagSrc[code]}
              alt={flagAlt[code]}
              fill
              sizes="24px"
              className="object-cover object-center"
            />
          </button>
        );
      })}
    </div>
  );
}