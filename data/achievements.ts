import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "competitiva-1S2026",
    title: {
      en: "Competitive Programming Club at Instituto Infnet",
      "pt-BR": "Clube de Programação Competitiva no Instituto Infnet",
    },
    kind: "certificate",
    issuer: "Instituto Infnet",
    period: {
      en: "2026",
      "pt-BR": "2026",
    },
    description: {
      en: "I joined the Competitive Programming Club at Instituto Infnet in 2026. I learned about algorithms, data structures, and problem-solving techniques.",
      "pt-BR": "Ingressar no Clube de Programação Competitiva no Instituto Infnet em 2026. Aprendi sobre algoritmos, estruturas de dados e técnicas de resolução de problemas.",
    },
    featured: true,
  },
  {
    id: "js-hackerrank",
    title: {
      en: "JavaScript (Intermediate) Certificate",
      "pt-BR": "JavaScript (Intermediário) Certificado",
    },
    kind: "certificate",
    issuer: "HackerRank",
    period: {
      en: "2025",
      "pt-BR": "2025",
    },
    description: {
      en: "I completed the JavaScript (Intermediate) test on HackerRank in 2025.",
      "pt-BR": "Concluí o teste de JavaScript (Intermediário) no HackerRank em 2025.",
    },
    featured: true,
  },
];

export function getFeaturedAchievements(): Achievement[] {
  return achievements.filter((item) => item.featured);
}
