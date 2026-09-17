import Image from "next/image";
import { profile } from "@/data/profile";
import { localize } from "@/lib/i18n/localize";
import type { Locale } from "@/types";

type ProfilePortraitProps = {
  locale: Locale;
  priority?: boolean;
  className?: string;
};

export function ProfilePortrait({
  locale,
  priority = false,
  className = "",
}: ProfilePortraitProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl md:rounded-full border border-white/8 bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-[3/4] md:aspect-[1/1]">
          <Image
            src={profile.photo}
            alt={localize(profile.photoAlt, locale)}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      </div>
    </div>
  );
}
