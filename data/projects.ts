import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sigfrota",
  
    title: {
      en: "SIGFrota",
      "pt-BR": "SIGFrota",
    },
  
    shortDescription: {
      en: "SIGFrota is a private fleet and fuel management system developed for a public consortium to centralize and organize vehicle operations. The platform brings vehicles, drivers, organizational units, fuel stations, fueling requests, refueling operations, contracts, contract lots, and projects into a single environment.\n\nThe system was designed to solve operational problems related to fragmented information and lack of centralized control. It manages the entire fueling workflow, from requests to completed refuelings, recording the vehicle, driver, fuel station, date, and quantity. It also applies business rules and validations to identify abnormal operations, such as refueling quantities exceeding the vehicle's registered tank capacity.\n\nI was responsible for planning and structuring the solution, including requirements analysis, domain and database modeling, definition of business rules, entity relationships, architecture, and development. I also worked directly with clients and stakeholders to understand their processes, clarify requirements, discuss solutions, and adapt the system to their operational needs.\n\nThe project was developed as a responsive web application with a modern backend and database architecture, focusing on data consistency, traceability, maintainability, and reliable operational control.",
    
      "pt-BR": "O SIGFrota é um sistema privado de gestão de frotas e abastecimentos desenvolvido para um consórcio público com o objetivo de centralizar e organizar as operações relacionadas aos veículos. A plataforma reúne veículos, motoristas, unidades, postos de abastecimento, solicitações, abastecimentos realizados, contratos, lotes contratuais e projetos em um único ambiente.\n\nO sistema foi desenvolvido para solucionar problemas relacionados à informação fragmentada e à falta de controle centralizado das operações. Ele permite acompanhar todo o fluxo de abastecimentos, desde a solicitação até a operação realizada, registrando veículo, motorista, posto, data e quantidade. Também aplica regras de negócio e validações para identificar operações anormais, como abastecimentos superiores à capacidade registrada do tanque do veículo.\n\nFui responsável pelo planejamento e estruturação da solução, incluindo análise de requisitos, modelagem do domínio e do banco de dados, definição das regras de negócio, relacionamentos entre entidades, arquitetura e desenvolvimento. Também trabalhei diretamente com clientes e stakeholders para compreender os processos operacionais, esclarecer requisitos, discutir soluções e adaptar o sistema às necessidades identificadas.\n\nO projeto foi desenvolvido como uma aplicação web responsiva, com foco em consistência dos dados, rastreabilidade, manutenção e maior controle das operações."
    },
    description: {
      en: "SIGFrota is a private fleet and fuel management system developed for a public consortium to centralize and organize vehicle operations. The platform brings vehicles, drivers, organizational units, fuel stations, fueling requests, refueling operations, contracts, contract lots, and projects into a single environment.\n\nThe system was designed to solve operational problems related to fragmented information and lack of centralized control. It manages the entire fueling workflow, from requests to completed refuelings, recording the vehicle, driver, fuel station, date, and quantity. It also applies business rules and validations to identify abnormal operations, such as refueling quantities exceeding the vehicle's registered tank capacity.\n\nI was responsible for planning and structuring the solution, including requirements analysis, domain and database modeling, definition of business rules, entity relationships, architecture, and development. I also worked directly with clients and stakeholders to understand their processes, clarify requirements, discuss solutions, and adapt the system to their operational needs.\n\nThe project was developed as a responsive web application with a modern backend and database architecture, focusing on data consistency, traceability, maintainability, and reliable operational control.",
    
      "pt-BR": "O SIGFrota é um sistema privado de gestão de frotas e abastecimentos desenvolvido para um consórcio público com o objetivo de centralizar e organizar as operações relacionadas aos veículos. A plataforma reúne veículos, motoristas, unidades, postos de abastecimento, solicitações, abastecimentos realizados, contratos, lotes contratuais e projetos em um único ambiente.\n\nO sistema foi desenvolvido para solucionar problemas relacionados à informação fragmentada e à falta de controle centralizado das operações. Ele permite acompanhar todo o fluxo de abastecimentos, desde a solicitação até a operação realizada, registrando veículo, motorista, posto, data e quantidade. Também aplica regras de negócio e validações para identificar operações anormais, como abastecimentos superiores à capacidade registrada do tanque do veículo.\n\nFui responsável pelo planejamento e estruturação da solução, incluindo análise de requisitos, modelagem do domínio e do banco de dados, definição das regras de negócio, relacionamentos entre entidades, arquitetura e desenvolvimento. Também trabalhei diretamente com clientes e stakeholders para compreender os processos operacionais, esclarecer requisitos, discutir soluções e adaptar o sistema às necessidades identificadas.\n\nO projeto foi desenvolvido como uma aplicação web responsiva, com foco em consistência dos dados, rastreabilidade, manutenção e maior controle das operações."
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
    status: "completed",
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
    id: "sedran-barber-shop",
    
    title: {
    en: "Sedran Barber Shop",
    "pt-BR": "Sedran Barber Shop",
    },
    
    shortDescription: {
    en: "Full-stack barber shop management platform with online scheduling, Pix payments, webhook-based confirmation, and administrative management.",
    "pt-BR": "Plataforma full-stack para gestão de barbearia com agendamento online, pagamentos via Pix, confirmação por webhook e gerenciamento administrativo.",
    },
    
    description: {
    en: "Sedran Barber Shop is a full-stack web application developed to simulate the digital operation of a modern barbershop, connecting the customer booking experience with internal administrative management.\n\nThe platform allows customers to browse available services, select an available time, create an appointment, and complete payment through Pix. The payment flow is integrated with Mercado Pago, using webhooks to confirm transactions independently of the customer's browser state. This ensures that an appointment can be updated even if the customer closes the page or loses connection after initiating the payment.\n\nThe system also provides an administrative environment where the barber can manage appointments, view the agenda, monitor payments, and access operational and financial metrics. Appointments can also be created directly by the barber for customers who are physically at the establishment or who do not need to complete an online payment, while maintaining the same availability and conflict-prevention rules.\n\nFrom a technical perspective, the project was structured around Next.js App Router, Server Components, Server Actions, PostgreSQL, Prisma, Auth.js, and external API integration. The architecture separates client-facing interactions from sensitive server-side operations, while database constraints, validation, authentication, and business rules help maintain data consistency and application security.\n\nThe project demonstrates my ability to design and implement a complete application rather than only an interface: from modeling the domain and database to implementing business rules, authentication, payment integration, webhooks, administrative workflows, and production deployment.",
    
    "pt-BR": "O Sedran Barber Shop é uma aplicação web full-stack desenvolvida para simular a operação digital de uma barbearia moderna, conectando a experiência de agendamento do cliente ao gerenciamento interno do estabelecimento.\n\nA plataforma permite que o cliente consulte os serviços disponíveis, escolha um horário, realize o agendamento e efetue o pagamento via Pix. O fluxo de pagamento é integrado ao Mercado Pago e utiliza webhooks para confirmar as transações independentemente do estado da página do cliente. Dessa forma, o agendamento pode ser atualizado mesmo que o cliente feche a página ou perca a conexão após iniciar o pagamento.\n\nO sistema também possui um ambiente administrativo onde o barbeiro pode gerenciar os agendamentos, visualizar a agenda, acompanhar pagamentos e consultar métricas operacionais e financeiras. Além do fluxo online, o barbeiro pode criar diretamente um agendamento para clientes que estão presencialmente no estabelecimento ou que não precisam realizar um pagamento online, mantendo as mesmas regras de disponibilidade e prevenção de conflitos.\n\nDo ponto de vista técnico, o projeto foi estruturado utilizando Next.js App Router, Server Components, Server Actions, PostgreSQL, Prisma, Auth.js e integração com APIs externas. A arquitetura separa as interações da interface das operações sensíveis executadas no servidor, enquanto validações, autenticação e regras de negócio ajudam a garantir consistência dos dados e segurança da aplicação.\n\nO projeto demonstra minha capacidade de desenvolver uma aplicação completa, indo além da construção da interface: desde a modelagem do domínio e do banco de dados até a implementação de regras de negócio, autenticação, integração de pagamentos, webhooks, fluxos administrativos e deploy em produção.",
    
    },
    
    image: "/images/projects/sedran-barber-shop.png",
    
    technologies: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "Auth.js",
    "Mercado Pago",
    "Vercel",
    ],
    
    category: {
    en: "Business management",
    "pt-BR": "Gestão empresarial",
    },
    
    status: "completed",
    
    featured: true,
    github: "https://github.com/sedran18/sedran-barber-shop",
    year: "2026",
    
    role: {
    en: "Full-stack developer",
    "pt-BR": "Desenvolvedor full-stack",
    },
    
    highlights: {
    en: [
      "Online appointment scheduling with availability control",
      "Pix payment integration with Mercado Pago",
      "Webhook-based payment confirmation",
      "Administrative dashboard for appointments and payments",
      "Direct appointment creation by the barber",
      "Authentication and protected administrative operations",
      "Business rules and validation for data consistency",
      "Relational data modeling with PostgreSQL and Prisma",
      "Responsive interface for desktop and mobile",
      "Production deployment with Vercel",
    ],
    
    "pt-BR": [
      "Agendamento online com controle de disponibilidade",
      "Integração de pagamentos via Pix com Mercado Pago",
      "Confirmação de pagamentos por meio de webhooks",
      "Dashboard administrativo para agendamentos e pagamentos",
      "Criação direta de agendamentos pelo barbeiro",
      "Autenticação e proteção das operações administrativas",
      "Regras de negócio e validações para consistência dos dados",
      "Modelagem de dados relacionais com PostgreSQL e Prisma",
      "Interface responsiva para desktop e mobile",
      "Deploy em produção com Vercel",
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
