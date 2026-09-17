import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Gabriel Nardes",

  role: {
    en: "Full-Stack Web Developer",
    "pt-BR": "Desenvolvedor Web Full-Stack",
  },

  shortBio: {
    en: "I build practical web applications — from interfaces and APIs to databases and the details that make them reliable.",
    "pt-BR":
      "Construo aplicações web práticas — da interface e APIs aos bancos de dados e aos detalhes que tornam o sistema confiável.",
  },

  bio: {
    en: "I'm a Software Engineering student and full-stack web developer focused on building complete applications that solve practical problems. I work mainly with TypeScript, React, Next.js, Node.js, PostgreSQL, and related tools, combining frontend development, backend logic, APIs, databases, and application architecture.",
    "pt-BR":
      "Sou estudante de Engenharia de Software e desenvolvedor web full-stack, com foco na construção de aplicações completas que resolvem problemas práticos. Trabalho principalmente com TypeScript, React, Next.js, Node.js, PostgreSQL e ferramentas relacionadas, unindo desenvolvimento frontend, lógica de backend, APIs, bancos de dados e arquitetura de aplicações.",
  },

  photo: "/images/profile/profile.jpg",

  photoAlt: {
    en: "Portrait of Gabriel Nardes",
    "pt-BR": "Retrato de Gabriel Nardes",
  },

  location: {
    en: "Brazil — Remote",
    "pt-BR": "Brasil — Remoto",
  },

  email: "g.nardes.work@gmail.com",

  availability: {
    en: "Open to freelance projects and developer opportunities",
    "pt-BR": "Aberto a projetos freelance e oportunidades como desenvolvedor",
  },

  socials: [
    {
      id: "email",
      label: {
        en: "Email",
        "pt-BR": "E-mail",
      },
      href: "mailto:g.nardes.work@gmail.com",
    },

    {
      id: "github",
      label: {
        en: "GitHub",
        "pt-BR": "GitHub",
      },
      href: "https://github.com/sedran18",
    },

    {
      id: "linkedin",
      label: {
        en: "LinkedIn",
        "pt-BR": "LinkedIn",
      },
      href: "https://www.linkedin.com/in/gabriel-nardes/",
    },
  ],

  siteUrl: "https://example.com",

  seo: {
    title: {
      en: "Gabriel Nardes — Full-Stack Web Developer",
      "pt-BR": "Gabriel Nardes — Desenvolvedor Web Full-Stack",
    },

    description: {
      en: "Portfolio of Gabriel Nardes, a full-stack web developer focused on practical web applications, APIs, databases, and real-world solutions.",
      "pt-BR":
        "Portfólio de Gabriel Nardes, desenvolvedor web full-stack focado em aplicações web, APIs, bancos de dados e soluções para problemas reais.",
    },
  },

  about: {
    trajectory: {
      en: "My path started with programming fundamentals and frontend development, then expanded into backend development, APIs, databases, authentication, validation, and application architecture. As I progressed, I became more interested in building complete products rather than isolated interfaces — understanding how the data, business rules, backend, and user experience fit together.",
      "pt-BR":
        "Minha trajetória começou com os fundamentos da programação e o desenvolvimento frontend, depois se expandiu para backend, APIs, bancos de dados, autenticação, validação e arquitetura de aplicações. Com o tempo, passei a me interessar mais pela construção de produtos completos do que por interfaces isoladas — entendendo como dados, regras de negócio, backend e experiência do usuário se conectam.",
    },

    interests: {
      en: [
        "Full-stack web development",
        "Backend architecture and APIs",
        "PostgreSQL and data modeling",
        "Product-oriented interfaces",
        "Software architecture and maintainable code",
        "Business-driven applications",
      ],

      "pt-BR": [
        "Desenvolvimento web full-stack",
        "Arquitetura backend e APIs",
        "PostgreSQL e modelagem de dados",
        "Interfaces orientadas a produto",
        "Arquitetura de software e código manutenível",
        "Aplicações baseadas em regras de negócio",
      ],
    },

    workingStyle: {
      en: "I like to understand the problem before choosing the implementation. I break larger requirements into smaller pieces, think through the data and business rules, and iterate from there. I care about writing code that is understandable and maintainable, while keeping the product practical for the people who will actually use it.",
      "pt-BR":
        "Gosto de entender o problema antes de escolher a implementação. Divido requisitos maiores em partes menores, penso na estrutura dos dados e nas regras de negócio e, a partir daí, desenvolvo de forma iterativa. Busco escrever código compreensível e manutenível, mantendo o produto prático para as pessoas que realmente irão utilizá-lo.",
    },

    goals: {
      en: "I'm looking for opportunities to contribute as a developer, including internships, junior roles, and freelance projects. I want to work on real products, collaborate with people who care about good software, and continue growing across the stack while delivering useful solutions to clients and users.",
      "pt-BR":
        "Busco oportunidades para atuar como desenvolvedor, incluindo estágios, posições júnior e projetos freelance. Quero trabalhar em produtos reais, colaborar com pessoas que valorizam um bom desenvolvimento de software e continuar evoluindo em toda a stack, entregando soluções úteis para clientes e usuários.",
    },
  },
};