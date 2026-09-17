import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sigfrota",
  
    title: {
      en: "SIGFrota",
      "pt-BR": "SIGFrota",
    },
  
    shortDescription: {
      en: "Fleet and fuel management system for a public consortium — vehicles, drivers, fueling, contracts, and operational control.",
      "pt-BR": "Sistema de gestão de frota e abastecimento para um consórcio público — veículos, motoristas, abastecimentos, contratos e controle operacional.",
    },
  
    description: {
      en: "A private fleet management system developed for a public consortium. It centralizes vehicle, driver, fuel station, contract, fueling request, and project information to make fleet operations more organized, traceable, and secure.",
      "pt-BR": "Sistema privado de gestão de frota desenvolvido para um consórcio público. Centraliza informações de veículos, motoristas, postos, contratos, solicitações de abastecimento e projetos, tornando a operação da frota mais organizada, rastreável e segura.",
    },
  
    image: "/images/projects/sigfrota.png",
  
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Zod",
      "shadcn/ui",
    ],
  
    category: {
      en: "Fleet management",
      "pt-BR": "Gestão de frotas",
    },
    status: "in-progress",
    featured: true,
    year: "2026",
    role: {
      en: "Full-stack developer",
      "pt-BR": "Desenvolvedor full-stack",
    },
    highlights: {
      en: [
        "Vehicle and driver management",
        "Fueling requests and operational records",
        "Contract, lot, unit, and project management",
        "Role-based access and validation",
        "Abnormal fueling detection based on tank capacity",
        "Responsive interface for desktop and mobile",
      ],
  
      "pt-BR": [
        "Gestão de veículos e motoristas",
        "Solicitações de abastecimento e registros operacionais",
        "Gestão de contratos, lotes, unidades e projetos",
        "Controle de acesso e validações por função",
        "Detecção de abastecimentos anormais com base na capacidade do tanque",
        "Interface responsiva para desktop e mobile",
      ],
    },
  },
  {
    id: "vbeauty",
    title: {
      en: "Vitoria Beauty",
      "pt-BR": "Vitoria Beauty",
    },
    shortDescription: {
      en: "E-commerce platform for cosmetics developed with a focus on performance, security and user experience, using the modern ecosystem of Next.js with Server Components and Server Actions. The system has a hybrid cart (offline + synchronization after login), secure authentication, profile and address management, product comments, evaluation history and search with debouncing.",
      "pt-BR": "Plataforma de e-commerce de cosméticos desenvolvida com foco em performance, segurança e experiência do usuário, utilizando o ecossistema moderno do Next.js com Server Components e Server Actions. O sistema conta com carrinho híbrido (offline + sincronização após login), autenticação segura, gestão de perfil e endereços, comentários em produtos, histórico de avaliações e busca com debouncing.",
    },
    description: {
      en: "E-commerce platform for cosmetics developed with a focus on performance, security and user experience, using the modern ecosystem of Next.js with Server Components and Server Actions. The system has a hybrid cart (offline + synchronization after login), secure authentication, profile and address management, product comments, evaluation history and search with debouncing.",
      "pt-BR": "Plataforma de e-commerce de cosméticos desenvolvida com foco em performance, segurança e experiência do usuário, utilizando o ecossistema moderno do Next.js com Server Components e Server Actions. O sistema conta com carrinho híbrido (offline + sincronização após login), autenticação segura, gestão de perfil e endereços, comentários em produtos, histórico de avaliações e busca com debouncing.",
    },
    image: "/images/projects/vbeauty.png",
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'NextAuth', 'Tailwind', 'Shadcn/UI'],
    category: {
      en: "E-commerce",
      "pt-BR": "E-commerce",
    },
    status: "completed",
    featured: true,
    github: "https://github.com/sedran18/vitoria_beauty",
    year: "2026",
    role: {
      en: "Full-stack Developer",
      "pt-BR": "Desenvolvedor Full-stack",
    },
    highlights: {
      en: [
        "Performance optimization",
        "Security implementation",
        "User experience improvement",
      ],
      "pt-BR": [
        "Otimização de performance",
        "Implementação de segurança",
        "Melhoria da experiência do usuário",
      ],
    },
  },
  {
    id: "schat",
    title: {
      en: "Schat - Full Stack Chat",
      "pt-BR": "Schat - Chat Full Stack",
    },
    shortDescription: {
      en: "Real-time chat application with public rooms, private messages, and direct integration with AI (Gemini).",
      "pt-BR": "Aplicação de chat em tempo real com salas públicas, mensagens privadas e integração direta com IA (Gemini).",
    },
    description: {
      en: "Real-time chat application with public rooms, private messages, and direct integration with AI (Gemini). The system uses WebSockets for instant communication, JWT authentication for user creation and deletion, and MongoDB for data persistence. The frontend was developed as a SPA in React with Vite, using the Context API for global management of the WebSocket connection and a fully responsive layout, prioritizing smaller screens (Mobile-first).",
      "pt-BR": "Aplicação de chat em tempo real com salas públicas, mensagens privadas e integração direta com IA (Gemini). O sistema utiliza WebSockets para comunicação instantânea, autenticação JWT para criação e exclusão de usuários e MongoDB para persistência de dados. O frontend foi desenvolvido como uma SPA em React com Vite, utilizando Context API para gerenciamento global da conexão WebSocket e um layout totalmente responsivo, priorizando telas menores (Mobile-first).",
    },
    image: "/images/projects/schat.jpg",
    technologies: ["Node.js", "TypeScript", "React", "Vite", "Context API", "WebSocket", "JWT", "MongoDB"],
    category: {
      en: "Chat",
      "pt-BR": "Chat",
    },
    status: "completed",
    featured: true,
    year: "2025",
    role: {
      en: "Full-stack Developer",
      "pt-BR": "Desenvolvedor Full-stack",
    },
    github: "https://github.com/sedran18/S-Chat",
    highlights: {
      en: ["Real-time chat with public rooms, private messages and direct integration with AI (Gemini).", "WebSocket communication for instant communication.", "JWT authentication for user creation and deletion.", "MongoDB for data persistence."],
      "pt-BR": ["Chat em tempo real com salas públicas, mensagens privadas e integração direta com IA (Gemini).", "Comunicação WebSocket para comunicação instantânea.", "Autenticação JWT para criação e exclusão de usuários.", "MongoDB para persistência de dados."],
    },
  },
  {
    id: "api-despesas",
    title: {
      en: "API RESTful of Expenses Control",
      "pt-BR": "API RESTful de Controle de Despesas",
    },
    shortDescription: {
      en: "Development of a complete RESTful API for personal finance management, built with Node.js, Express and MongoDB.",
      "pt-BR": "Desenvolvimento de uma API RESTful completa para gerenciamento de finanças pessoais, construída com Node.js, Express e MongoDB.",
    },
    description: {
      en: "Project developed with Node.js, Express and MongoDB, that simulates a expenses control system with different categories of expenses (food, transport, health, etc.) and also personalized mode. The system has a virtual keyboard, score system saved in the browser (localStorage) and dynamic images that update as the user progresses. Published using GitHub Pages as deploy.",
      "pt-BR": "Projeto desenvolvido com Node.js, Express e MongoDB, que simula um sistema de controle de despesas com diferentes categorias de despesas (alimentação, transporte, saúde, etc.) e também modo personalizado. O sistema conta com teclado virtual, sistema de pontuação salva no navegador (localStorage) e imagens dinâmicas que atualizam conforme o progresso do usuário. Publicado utilizando GitHub Pages como deploy.",
    },
    image: "/images/projects/despesas1.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Jest", "Supertest"],
    category: {
      en: "Backend",
      "pt-BR": "Backend",
    },
    status: "completed",
    featured: true,
    github: "https://github.com/sedran18/App-de-despesas",
    year: "2025",
    role: {
      en: "Backend Developer",
      "pt-BR": "Desenvolvedor Backend",
    },
    highlights: {
      en: ["Secure authentication with JWT and encrypted passwords (bcrypt).", "Complete CRUD for transactions (income and expenses).", "Generation of financial summaries with analysis of expenses by category.", "Automated test suite with Jest and Supertest to ensure the quality and stability of the application."],
      "pt-BR": ["Autenticação segura com JWT e senhas criptografadas (bcrypt).", "CRUD completo para transações (receitas e despesas).", "Geração de resumos financeiros com análise de gastos por categoria.", "Suíte de testes automatizados com Jest e Supertest para garantir a qualidade e estabilidade da aplicação."],
    },
  },
  {
    id: "hangman",
    title: {
      en: "Hangman Game",
      "pt-BR": "Jogo da Forca",
    },
    shortDescription: {
      en: "A hangman game with different categories of words (fruits, animals, countries) and also personalized mode.",
      "pt-BR": "Um jogo da forca com diferentes categorias de palavras (frutas, animais, países) e também modo personalizado.",
    },
    description: {
      en: "Project developed with HTML, CSS and JavaScript, that simulates a hangman game with different categories of words (fruits, animals, countries) and also personalized mode. The game has a virtual keyboard, score system saved in the browser (localStorage) and dynamic images that update as the player progresses. Published using GitHub Pages as deploy.",
      "pt-BR": "Projeto desenvolvido com HTML, CSS e JavaScript, que simula um jogo da forca com diferentes categorias de palavras (frutas, animais, países) e também modo personalizado. O jogo conta com teclado virtual, sistema de pontuação salva no navegador (localStorage) e imagens dinâmicas que atualizam conforme o progresso do jogador. Publicado utilizando GitHub Pages como deploy.",
    },
    image: "/images/projects/hangman.gif",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: {
      en: "Game",
      "pt-BR": "Jogo",
    },
    status: "completed",
    featured: true,
    href: "/projects",
    github: "",
    demo: "https://sedran18.github.io/hangman_game/",
    year: "2025",
    role: {
      en: "Frontend Developer",
      "pt-BR": "Desenvolvedor Frontend",
    },
    highlights: {
      en: [
        "Simulation of a hangman game with different categories of words (fruits, animals, countries) and also personalized mode",
        "Virtual keyboard",
        "Score system saved in the browser (localStorage)",
        "Dynamic images that update as the player progresses",
      ],
      "pt-BR": [
        "Simulação de um jogo da forca com diferentes categorias de palavras (frutas, animais, países) e também modo personalizado",
        "Teclado virtual",
        "Sistema de pontuação salva no navegador (localStorage)",
        "Imagens dinâmicas que atualizam conforme o progresso do jogador",
      ],
    },
  },
  
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
