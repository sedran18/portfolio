import { cookies } from "next/headers";
import en from "@/messages/en.json";
import ptBR from "@/messages/pt-BR.json";
import { defaultLocale, isLocale, LOCALE_COOKIE } from "@/lib/i18n/config";
import type { Locale, Messages } from "@/types";

/**
 * Add Spanish later:
 * 1. Create messages/es.json (copy en.json)
 * 2. Add "es" to `locales` in types/index.ts
 * 3. Import the file here and register it on `dictionary`
 * 4. Fill optional `es` fields on LocalizedString data
 */
const dictionary: Record<Locale, Messages> = {
  en,
  "pt-BR": ptBR,
};

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
}

export async function getMessages(locale?: Locale): Promise<Messages> {
  const resolved = locale ?? (await getLocale());
  return dictionary[resolved];
}
