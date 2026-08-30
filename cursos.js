// Trilha experimental com numeração independente (1 a 6)
const trilhaExperimental = {
    id: "trilha-experimental",
    titulo: "🎬 Aula Experimental (Trilha 01)",
    aulas: [
        { numero: 1, titulo: "Lista de Instalações e Softwares", youtubeId: "4WoPodx4GVQ" },
        { numero: 2, titulo: "Configurando e Conhecendo o VS Code", youtubeId: "vT6M4gsIFUs" },
        { numero: 3, titulo: "Primeiros passos no Git Bash", youtubeId: "LH-EbYOLRGg" },
        { numero: 4, titulo: "Explorador de Arquivos do Windows", youtubeId: "-HZtZGro4O0" },
        { numero: 5, titulo: "Google Chrome e Organização de Favoritos", youtubeId: "dvErSPNqgp0" },
        { numero: 6, titulo: "Reunindo os Aplicativos no Ambiente de Estudo", youtubeId: "w50uctsX_Us" }
    ]
};

const gradeCurricular = [
    {
        id: "modulo-1",
        titulo: "Módulo 1: Fundamentos",
        aulas: [
            { numero: 1, titulo: "JS, Algoritmos de Ordenação e React.js", pasta: "modulo-1-fundamentos/aula-1-js-ordenacao-reactjs", status: "disponivel" },
            { numero: 2, titulo: "Card de Perfil, HTML Semântico e Box Model", pasta: "modulo-1-fundamentos/aula-2-card-perfil-html", status: "disponivel" },
            { numero: 3, titulo: "Mini Landing Pages, Flexbox e Responsividade", pasta: "modulo-1-fundamentos/aula-3-mini-landing-pages", status: "disponivel" },
            { numero: 4, titulo: "Manipulação Avançada de Arrays", pasta: "modulo-1-fundamentos/aula-4-manipulacao-avancada-arrays", status: "construcao" },
            { numero: 5, titulo: "Assincronicidade e Promises", pasta: "modulo-1-fundamentos/aula-5-assincronicidade-promises", status: "construcao" },
            { numero: 6, titulo: "Consumo de APIs com Fetch", pasta: "modulo-1-fundamentos/aula-6-consumo-apis-fetch", status: "construcao" },
            { numero: 7, titulo: "Programação Orientada a Objetos em JS", pasta: "modulo-1-fundamentos/aula-7-poo-javascript", status: "construcao" },
            { numero: 8, titulo: "Gerenciamento de Estado Local", pasta: "modulo-1-fundamentos/aula-8-gerenciamento-estado-local", status: "construcao" },
            { numero: 9, titulo: "Testes e Depuração de Código", pasta: "modulo-1-fundamentos/aula-9-testes-depuracao", status: "construcao" },
            { numero: 10, titulo: "Refatoração e Clean Code", pasta: "modulo-1-fundamentos/aula-10-refatoracao-clean-code", status: "construcao" }
        ]
    },
    {
        id: "modulo-2",
        titulo: "Módulo 2: Frontend Moderno",
        aulas: [
            { numero: 11, titulo: "React.js Componentes & State", pasta: "modulo-2-frontend-moderno/aula-11-react-componentes-state", status: "disponivel" },
            { numero: 12, titulo: "Props e Comunicação entre Componentes", pasta: "modulo-2-frontend-moderno/aula-12-props-comunicacao", status: "disponivel" },
            { numero: 13, titulo: "Hooks Essenciais (useEffect e useRef)", pasta: "modulo-2-frontend-moderno/aula-13-hooks-essenciais", status: "disponivel" },
            { numero: 14, titulo: "Roteamento com React Router", pasta: "modulo-2-frontend-moderno/aula-14-roteamento-react-router", status: "construcao" },
            { numero: 15, titulo: "Estilização com Tailwind CSS", pasta: "modulo-2-frontend-moderno/aula-15-estilizacao-tailwind", status: "construcao" },
            { numero: 16, titulo: "Gerenciamento de Formulários e Validação", pasta: "modulo-2-frontend-moderno/aula-16-formularios-validacao", status: "construcao" },
            { numero: 17, titulo: "Consumo de APIs REST no React", pasta: "modulo-2-frontend-moderno/aula-17-consumo-apis-rest", status: "construcao" },
            { numero: 18, titulo: "Context API e Gerenciamento Global", pasta: "modulo-2-frontend-moderno/aula-18-context-api-global", status: "construcao" },
            { numero: 19, titulo: "Deploy e Otimização de Performance", pasta: "modulo-2-frontend-moderno/aula-19-deploy-otimizacao", status: "construcao" },
            { numero: 20, titulo: "Apresentação do Projeto Final do Módulo", pasta: "modulo-2-frontend-moderno/aula-20-apresentacao-projeto-final", status: "construcao" }
        ]
    },
    {
        id: "modulo-3",
        titulo: "Módulo 3: Backend e Banco de Dados",
        aulas: [
            { numero: 21, titulo: "Introdução ao Node.js e Arquitetura de Servidores", pasta: "modulo-3-backend/aula-21-intro-nodejs-servidores", status: "construcao" },
            { numero: 22, titulo: "Autenticação, JWT e Segurança de APIs", pasta: "modulo-3-backend/aula-22-autenticacao-jwt-seguranca", status: "construcao" },
            { numero: 23, titulo: "Arquitetura MVC e Clean Architecture no Backend", pasta: "modulo-3-backend/aula-23-mvc-clean-architecture", status: "construcao" },
            { numero: 24, titulo: "Testes Automatizados e Documentação de APIs", pasta: "modulo-3-backend/aula-24-testes-documentacao-apis", status: "construcao" },
            { numero: 25, titulo: "Conexão Avançada com Supabase e SQL", pasta: "modulo-3-backend/aula-25-conexao-supabase-sql", status: "construcao" },
            { numero: 26, titulo: "Middlewares Globais e Tratamento de Erros", pasta: "modulo-3-backend/aula-26-middlewares-tratamento-erros", status: "construcao" },
            { numero: 27, titulo: "Upload de Arquivos e Gestão de Mídia no Backend", pasta: "modulo-3-backend/aula-27-upload-arquivos-midia", status: "construcao" },
            { numero: 28, titulo: "WebSockets e Comunicação em Tempo Real", pasta: "modulo-3-backend/aula-28-websockets-tempo-real", status: "construcao" },
            { numero: 29, titulo: "Segurança Avançada, Rate Limiting e CORS", pasta: "modulo-3-backend/aula-29-seguranca-rate-limiting", status: "construcao" },
            { numero: 30, titulo: "Apresentação do Projeto Final de Backend", pasta: "modulo-3-backend/aula-30-projeto-final-backend", status: "construcao" }
        ]
    },
    {
        id: "modulo-4",
        titulo: "Módulo 4: Fullstack, DevOps e Projeto Final",
        aulas: [
            { numero: 31, titulo: "Integração Fullstack (Frontend + Backend)", pasta: "modulo-4-fullstack-devops/aula-31-integracao-fullstack", status: "construcao" },
            { numero: 32, titulo: "Docker e Conteinerização de Aplicações", pasta: "modulo-4-fullstack-devops/aula-32-docker-conteinerizacao", status: "construcao" },
            { numero: 33, titulo: "CI/CD e Pipeline de Implantação Contínua", pasta: "modulo-4-fullstack-devops/aula-33-cicd-pipeline", status: "construcao" },
            { numero: 34, titulo: "Orquestração com Docker Compose", pasta: "modulo-4-fullstack-devops/aula-34-orquestracao-docker-compose", status: "construcao" },
            { numero: 35, titulo: "Arquitetura de Microsserviços e Escalabilidade", pasta: "modulo-4-fullstack-devops/aula-35-microsservicos-escalabilidade", status: "construcao" },
            { numero: 36, titulo: "Monitoramento, Logs e Observabilidade", pasta: "modulo-4-fullstack-devops/aula-36-monitoramento-logs", status: "construcao" },
            { numero: 37, titulo: "Projeto Final Fullstack — Parte 1 (Arquitetura e Setup)", pasta: "modulo-4-fullstack-devops/aula-37-projeto-final-setup", status: "construcao" },
            { numero: 38, titulo: "Projeto Final Fullstack — Parte 2 (Desenvolvimento e API)", pasta: "modulo-4-fullstack-devops/aula-38-projeto-final-desenvolvimento", status: "construcao" },
            { numero: 39, titulo: "Projeto Final Fullstack — Parte 3 (Deploy e Produção)", pasta: "modulo-4-fullstack-devops/aula-39-projeto-final-deploy", status: "construcao" },
            { numero: 40, titulo: "Apresentação Final, Defesa de Projetos e Formatura", pasta: "modulo-4-fullstack-devops/aula-40-apresentacao-final-formatura", status: "construcao" }
        ]
    },
    {
        id: "modulo-5",
        titulo: "Módulo 5: Produto, UX e Agilidade",
        aulas: [
            { numero: 41, titulo: "Fundamentos de UX e UI para Desenvolvedores", pasta: "modulo-5-produto-ux/aula-41-fundamentos-ux-ui", status: "construcao" },
            { numero: 42, titulo: "Design Systems e Interfaces Acessíveis", pasta: "modulo-5-produto-ux/aula-42-design-systems-acessibilidade", status: "construcao" },
            { numero: 43, titulo: "Metodologias Ágeis (Scrum, Kanban e Lean)", pasta: "modulo-5-produto-ux/aula-43-metodologias-ageis", status: "construcao" },
            { numero: 44, titulo: "O Papel do Product Owner (PO) e Gestão de Backlog", pasta: "modulo-5-produto-ux/aula-44-product-owner-backlog", status: "construcao" },
            { numero: 45, titulo: "Visão de Product Manager (PM), Métricas e Product-Market Fit", pasta: "modulo-5-produto-ux/aula-45-product-manager-metricas", status: "construcao" },
            { numero: 46, titulo: "Descoberta de Produto (Discovery) e MVP", pasta: "modulo-5-produto-ux/aula-46-product-discovery-mvp", status: "construcao" },
            { numero: 47, titulo: "Arquitetura de Informação e Jornada do Usuário", pasta: "modulo-5-produto-ux/aula-47-arquitetura-informacao-jornada", status: "construcao" },
            { numero: 48, titulo: "Autogestão e Organização de Rotina Técnica", pasta: "modulo-5-produto-ux/aula-48-autogestao-rotina-tecnica", status: "construcao" },
            { numero: 49, titulo: "Plano de Desenvolvimento Individual (PDI) e Carreira Tech", pasta: "modulo-5-produto-ux/aula-49-pdi-carreira-tech", status: "construcao" },
            { numero: 50, titulo: "Projeto Integrado de Estratégia de Produto", pasta: "modulo-5-produto-ux/aula-50-projeto-integrado-produto", status: "construcao" }
        ]
    },
    {
        id: "modulo-6",
        titulo: "Módulo 6: Soft Skills, Carreira e Inteligência Emocional",
        aulas: [
            { numero: 51, titulo: "Inteligência Emocional no Ambiente de Trabalho", pasta: "modulo-6-soft-skills/aula-51-inteligencia-emocional", status: "construcao" },
            { numero: 52, titulo: "Comunicação Não-Violenta e Feedback Efetivo", pasta: "modulo-6-soft-skills/aula-52-comunicacao-nao-violenta", status: "construcao" },
            { numero: 53, titulo: "Técnicas de Negociação e Gestão de Conflitos", pasta: "modulo-6-soft-skills/aula-53-negociacao-gestao-conflitos", status: "construcao" },
            { numero: 54, titulo: "O Mercado de Trabalho Tech e Posicionamento Profissional", pasta: "modulo-6-soft-skills/aula-54-mercado-trabalho-tech", status: "construcao" },
            { numero: 55, titulo: "Otimização de Currículo, LinkedIn e GitHub de Alto Impacto", pasta: "modulo-6-soft-skills/aula-55-curriculo-linkedin-github", status: "construcao" },
            { numero: 56, titulo: "Processos Seletivos em Tech: Entrevistas Técnicas", pasta: "modulo-6-soft-skills/aula-56-processos-seletivos-tecnicas", status: "construcao" },
            { numero: 57, titulo: "Entrevistas Comportamentais e Cultura Fit", pasta: "modulo-6-soft-skills/aula-57-entrevistas-comportamentais", status: "construcao" },
            { numero: 58, titulo: "Negociação Salarial e Planos de Benefícios", pasta: "modulo-6-soft-skills/aula-58-negociacao-salarial-beneficios", status: "construcao" },
            { numero: 59, titulo: "Networking, Comunidade e Marca Pessoal", pasta: "modulo-6-soft-skills/aula-59-networking-marca-pessoal", status: "construcao" },
            { numero: 60, titulo: "Formatura, Conclusão de Trilha e Próximos Passos no Ecossistema", pasta: "modulo-6-soft-skills/aula-60-formatura-conclusao-trilha", status: "construcao" }
        ]
    },
    {
        id: "modulo-7",
        titulo: "Módulo 7: Avançado (Engenharia e Arquitetura Master)",
        aulas: [
            { numero: 61, titulo: "Padrões de Arquitetura de Software Avançados", pasta: "modulo-7-avancado/aula-61-padroes-arquitetura-avancados", status: "construcao" },
            { numero: 62, titulo: "Padrões de Projeto (Design Patterns) em Produção", pasta: "modulo-7-avancado/aula-62-design-patterns-producao", status: "construcao" },
            { numero: 63, titulo: "Bancos de Dados Avançados: Performance e NoSQL", pasta: "modulo-7-avancado/aula-63-bancos-dados-avancados", status: "construcao" },
            { numero: 64, titulo: "Escalabilidade, Alta Disponibilidade e Resiliência", pasta: "modulo-7-avancado/aula-64-escalabilidade-resiliencia", status: "construcao" },
            { numero: 65, titulo: "Auditoria de Software, Qualidade e Code Review Avançado", pasta: "modulo-7-avancado/aula-65-auditoria-software-qualidade", status: "construcao" },
            { numero: 66, titulo: "Segurança Ofensiva e Defensiva (SecOps)", pasta: "modulo-7-avancado/aula-66-seguranca-secops", status: "construcao" },
            { numero: 67, titulo: "Observabilidade, Métricas e Engenharia de Confiabilidade (SRE)", pasta: "modulo-7-avancado/aula-67-observabilidade-sre", status: "construcao" },
            { numero: 68, titulo: "Engenharia de Prompt e IA Generativa para Desenvolvedores", pasta: "modulo-7-avancado/aula-68-engenharia-prompt-ia", status: "construcao" },
            { numero: 69, titulo: "Consultoria em Software: Diagnóstico e Estratégia Técnica", pasta: "modulo-7-avancado/aula-69-consultoria-software", status: "construcao" },
            { numero: 70, titulo: "Apresentação de Soluções de Arquitetura e Formatura Master", pasta: "modulo-7-avancado/aula-70-apresentacao-arquitetura-formatura", status: "construcao" }
        ]
    }
];