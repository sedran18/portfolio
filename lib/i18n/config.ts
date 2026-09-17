import { locales, type Locale } from "@/types";

export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}

export function htmlLang(locale: Locale): string {
  return locale === "pt-BR" ? "pt-BR" : "en";
}
