export const locales = ["en", "pt-BR"] as const;
export type Locale = (typeof locales)[number];

/** Add `es` here and in `supportedLocales` when Spanish copy is ready. */
export const plannedLocales = ["es"] as const;
export type PlannedLocale = (typeof plannedLocales)[number];

export type LocalizedString = {
  en: string;
  "pt-BR": string;
  es?: string;
};

export type LocalizedStringArray = {
  en: string[];
  "pt-BR": string[];
  es?: string[];
};

export type SocialLink = {
  id: "email" | "github" | "linkedin" | "website";
  label: LocalizedString;
  href: string;
};

export type Profile = {
  name: string;
  role: LocalizedString;
  shortBio: LocalizedString;
  bio: LocalizedString;
  photo: string;
  photoAlt: LocalizedString;
  location: LocalizedString;
  email: string;
  availability: LocalizedString;
  socials: SocialLink[];
  siteUrl: string;
  seo: {
    title: LocalizedString;
    description: LocalizedString;
  };
  about: {
    trajectory: LocalizedString;
    interests: LocalizedStringArray;
    workingStyle: LocalizedString;
    goals: LocalizedString;
  };
};

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "prototype"
  | "coming-soon"
  | "archived";

export type Project = {
  id: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  image: string;
  technologies: string[];
  category: LocalizedString;
  status: ProjectStatus;
  featured: boolean;
  href?: string;
  github?: string;
  demo?: string;
  year: string;
  role: LocalizedString;
  highlights: LocalizedStringArray;
};

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "languages";

export type SkillLevel = "exploring" | "working" | "daily";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
  description: LocalizedString;
  level?: SkillLevel;
  featured?: boolean;
};

export type Experience = {
  id: string;
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
  skills: string[];
  highlights: LocalizedStringArray;
};

export type Education = {
  id: string;
  institution: string;
  degree: LocalizedString;
  period: LocalizedString;
  status: LocalizedString;
  description: LocalizedString;
};

export type AchievementKind =
  | "certificate"
  | "course"
  | "event"
  | "achievement"
  | "special-project"
  | "other";

export type Achievement = {
  id: string;
  title: LocalizedString;
  kind: AchievementKind;
  issuer?: string;
  period: LocalizedString;
  description: LocalizedString;
  href?: string;
  featured?: boolean;
};

export type Messages = typeof import("../messages/en.json");
