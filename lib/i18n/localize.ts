import { defaultLocale } from "@/lib/i18n/config";
import type { Locale, LocalizedString, LocalizedStringArray } from "@/types";

export function localize(
  value: LocalizedString,
  locale: Locale,
): string {
  return value[locale] ?? value.es ?? value[defaultLocale];
}

export function localizeList(
  value: LocalizedStringArray,
  locale: Locale,
): string[] {
  return value[locale] ?? value.es ?? value[defaultLocale];
}
