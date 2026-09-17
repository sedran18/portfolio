import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { SiteShell } from "@/components/layout/SiteShell";
import { defaultLocale } from "@/lib/i18n/config";
import { htmlLang } from "@/lib/i18n/config";
import { getLocale, getMessages } from "@/lib/i18n/server";
import { localize } from "@/lib/i18n/localize";
import "./globals.css";

import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "800"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: localize(profile.seo.title, defaultLocale),
    template: `%s — ${profile.name}`,
  },
  description: localize(profile.seo.description, defaultLocale),
  openGraph: {
    title: localize(profile.seo.title, defaultLocale),
    description: localize(profile.seo.description, defaultLocale),
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: localize(profile.seo.title, defaultLocale),
    description: localize(profile.seo.description, defaultLocale),
  },

};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const messages = await getMessages(locale);

  return (
    <html
      lang={htmlLang(locale)}
      className={`${playfair.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteShell locale={locale} messages={messages}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
