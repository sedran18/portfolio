import { profile } from "@/data/profile";
import { localize } from "@/lib/i18n/localize";
import type { Locale } from "@/types";

type SocialLinksProps = {
  locale: Locale;
  className?: string;
};

export function SocialLinks({ locale, className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {profile.socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            className="text-sm text-muted transition-[color,background-size] duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent bg-[linear-gradient(currentColor,currentColor)] bg-left-bottom bg-no-repeat bg-[length:0_1px] pb-px hover:bg-[length:100%_1px]"
            {...(social.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {localize(social.label, locale)}
          </a>
        </li>
      ))}
    </ul>
  );
}
