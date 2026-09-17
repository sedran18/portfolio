import type { Skill, SkillCategory } from "@/types";

export const skillCategoryOrder: SkillCategory[] = [
  "languages",
  "frontend",
  "backend",
  "database",
  "tools",
];

export const skills: Skill[] = [
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    icon: "TS",
    description: {
      en: "Primary language for interfaces and shared types.",
      "pt-BR": "Linguagem principal para interfaces e tipos compartilhados.",
    },
    level: "daily",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    icon: "JS",
    description: {
      en: "Primary language for web development.",
      "pt-BR": "Linguagem principal para desenvolvimento web.",
    },
    level: "daily",
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: "RE",
    description: {
      en: "Component models, composition, and client/server boundaries.",
      "pt-BR": "Modelo de componentes, composição e limites cliente/servidor.",
    },
    level: "daily",
    featured: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    icon: "NX",
    description: {
      en: "App Router, routing, and production-ready rendering choices.",
      "pt-BR": "App Router, rotas e escolhas de renderização para produção.",
    },
    level: "daily",
    featured: true,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "TW",
    description: {
      en: "Utility-first CSS framework for rapid UI development.",
      "pt-BR": "Framework CSS utilitário para desenvolvimento rápido de interfaces.",
    },
    level: "daily",
    featured: true,
  },
  {
    id:'express',
    name: "Express",
    category: "backend",
    icon: "EX",
    description: {
      en: "Fast, unopinionated, minimalist web framework for Node.js.",
      "pt-BR": "Framework web rápido, sem opiniões, minimalista para Node.js.",
    },
    level: "working",
    featured: true,
  },
  {
    id: "css",
    name: "CSS",
    category: "frontend",
    icon: "CS",
    description: {
      en: "Layout, type, and interaction without leaning on a kitchen-sink kit.",
      "pt-BR": "Layout, tipografia e interação sem depender de um kit inchado.",
    },
    level: "daily",
    featured: true,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    icon: "NO",
    description: {
      en: "APIs, scripts, and the glue around a product’s data.",
      "pt-BR": "APIs, scripts e a cola em torno dos dados do produto.",
    },
    level: "working",
    featured: true,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    icon: "PG",
    description: {
      en: "Relational modeling and queries that stay explicit.",
      "pt-BR": "Modelagem relacional e consultas que permanecem explícitas.",
    },
    level: "working",
    featured: true,
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    icon: "DK",
    description: {
      en: "Local parity and predictable environments.",
      "pt-BR": "Paridade local e ambientes previsíveis.",
    },
    level: "working",
  },
  {
    id: "git",
    name: "Git",
    category: "tools",
    icon: "GT",
    description: {
      en: "History, review, and collaboration as part of the craft.",
      "pt-BR": "Histórico, revisão e colaboração como parte do ofício.",
    },
    level: "daily",
    featured: true,
  },
  {
    id: "python",
    name: "Python",
    category: "languages",
    icon: "PY",
    description: {
      en: "Primary language for interfaces and shared types.",
      "pt-BR": "Linguagem principal para interfaces e tipos compartilhados.",
    },
    level: "working",
  },
  {
    id:'prisma',
    name: "Prisma",
    category: "database",
    icon: "PR",
    description: {
      en: "Prisma is an open-source database toolkit for Node.js and TypeScript.",
      "pt-BR": "Prisma é um toolkit de banco de dados open-source para Node.js e TypeScript.",
    },
    level: "working",
    featured: true,
  },
  {
    id: 'html',
    name: "HTML",
    category: "frontend",
    icon: "HT",
    description: {
      en: "Markup language for creating web pages.",
      "pt-BR": "Linguagem de marcação para criação de páginas web.",
    },
    level: "daily",
  }
];

export function getFeaturedSkills(): Skill[] {
  return skills.filter((skill) => skill.featured);
}

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
