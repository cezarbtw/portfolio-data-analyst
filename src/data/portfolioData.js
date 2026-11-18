export const personalInfo = {
  name: "Abraão Cezar Inácio",
  role: "Analista de Dados & Business Intelligence",
  location: "Goiás, Brasil",
  email: "abraaocezarIL@outlook.com",
  phone: "(62) 98280-1501",
  whatsapp: "5562982801501",
  github: "https://github.com/cezarbtw",
  githubUsername: "cezarbtw",
  linkedin: "https://www.linkedin.com/in/cezarinaciol/",
  powerBiReportUrl: "https://app.powerbi.com/groups/me/reports/100b5f1f-85d5-4f2d-b082-837165f1cb32/1e83521174a2c02425b5?experience=power-bi",
};

export const bioData = {
  headline: "Analista de Dados e BI especializado em pipelines ETL, consultas SQL analíticas e relatórios no Power BI.",
  intro: [
    "Atuo na construção de pipelines ETL e relatórios no Power BI para o Portal do Cidadão no Tribunal de Contas dos Municípios de Goiás (TCM-GO), consolidando indicadores de saneamento e políticas públicas dos 246 municípios goianos.",
    "Desenvolvi rotinas automatizadas em Python para validação e auditoria da API de reconhecimento de entidades nomeadas (NER), reconciliando dados de extratos e documentos contábeis contra consultas SQL em bases orçamentárias."
  ]
};

export const skillsData = [
  {
    category: "Visualização e BI",
    items: "Power BI (Desktop e Service), DAX, modelagem dimensional (Star Schema), relatórios executivos."
  },
  {
    category: "Linguagens",
    items: "Python (Pandas, NumPy, Requests), SQL."
  },
  {
    category: "Dados e ETL",
    items: "Pipelines de extração e tratamento, saneamento de dados, reconciliação JSON e SQL, bancos relacionais (MySQL, PostgreSQL, SQL Server)."
  },
  {
    category: "Estatística e Machine Learning",
    items: "Análise de séries temporais, estatística descritiva, validação de modelos e métricas de avaliação."
  }
];

export const projectsData = [
  {
    id: "tcmgo-portal-cidadao",
    title: "TCM-GO: Painéis no Power BI para o Portal do Cidadão",
    context: "Tribunal de Contas dos Municípios de Goiás | Setor Público",
    summary: "Construção de esteiras ETL e relatórios analíticos no Power BI para a aba Meio Ambiente do Portal do Cidadão do TCM-GO. Os painéis consolidam indicadores de saneamento básico, resíduos sólidos, drenagem pluvial e governança dos 246 municípios do estado de Goiás.",
    tools: "Power BI, DAX, Python (Pandas), SQL, ETL",
    demoUrl: "https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/",
    demoLabel: "Acessar Portal do Cidadão",
    githubUrl: null,
    images: [
      {
        url: "/dashboards/tcmgo-meio-ambiente-aguas.png",
        caption: "Dimensão Águas: consumo per capita, atendimento de rede, reparos e paralisações em comparação com a média estadual."
      },
      {
        url: "/dashboards/tcmgo-meio-ambiente-esgoto.png",
        caption: "Dimensão Esgoto: cobertura de esgotamento sanitário, reparos de extravasamento e percentual de esgoto tratado (2023 vs. 2024)."
      },
      {
        url: "/dashboards/tcmgo-meio-ambiente-residuos.png",
        caption: "Dimensão Resíduos Sólidos: coleta indiferenciada e seletiva, destinação em aterros controlados e cooperativas de catadores."
      },
      {
        url: "/dashboards/tcmgo-meio-ambiente-aguas-pluviais.png",
        caption: "Dimensão Águas Pluviais: cobertura de drenagem, áreas de risco de inundação, ocorrências e sistemas de alerta."
      },
      {
        url: "/dashboards/tcmgo-meio-ambiente-gestao-municipal.png",
        caption: "Governança Municipal: acompanhamento de planos municipais de saneamento, PMGIRS, planos diretores e ouvidorias."
      }
    ],
    caseStudy: {
      problem: "Os dados de prestação de contas dos 246 municípios de Goiás apresentavam inconsistências de preenchimento, divergências de esquema e duplicidades, inviabilizando consultas consolidadas diretas sobre serviços de saneamento básico.",
      solution: "Desenvolvi pipelines em Python com Pandas para higienização e padronização dos dados, estruturados em consultas SQL analíticas com agregações por município e ano. Em seguida, projetei os relatórios analíticos no Power BI com medidas DAX para cálculo de médias regionais e desvios.",
      architecture: "Scripts em Python integrados a rotinas agendadas de ETL, modelagem tabular para cruzamento temporal (2023 vs. 2024) e integração aos visuais do Portal do Cidadão.",
      results: "Disponibilização pública dos indicadores de meio ambiente dos 246 municípios goianos, permitindo aos cidadãos e ao corpo técnico do tribunal comparar desempenhos municipais com a média estadual."
    }
  },
  {
    id: "tcmgo-ner-validation",
    title: "TCM-GO: Automação de Validação de API de NER e Reconciliação SQL",
    context: "Tribunal de Contas dos Municípios de Goiás | Auditoria de Dados",
    summary: "Automação em Python com processamento concorrente para validação da API de Reconhecimento de Entidades Nomeadas (NER) aplicada a extratos bancários e documentos contábeis públicos. Reconciliação de payloads JSON contra consultas SQL em bases orçamentárias.",
    tools: "Python (Requests, Pandas), SQL, JSON, Multithreading",
    demoUrl: null,
    demoLabel: null,
    githubUrl: null,
    images: [],
    caseStudy: {
      problem: "A conferência manual das entidades extraídas por inteligência artificial (nomes, bancos, agências, contas, CPFs e valores) demandava centenas de horas da equipe de auditoria frente ao volume contínuo de envios municipais.",
      solution: "Construí uma rotina automatizada em Python com processamento paralelo que consome a API de NER, executa consultas SQL otimizadas nas bases orçamentárias e contábeis do tribunal e confronta campo a campo cada extração contra os registros oficiais.",
      architecture: "Arquitetura concorrente em Python com controle de requisições, tratamento de exceções, consultas relacionais com leitura não bloqueante (nolock) e geração de arquivos CSV e JSON com divergências identificadas.",
      results: "Redução do ciclo de homologação da API de inteligência artificial do tribunal, apontando automaticamente inconsistências de extração e divergências cadastrais."
    }
  },
  {
    id: "power-bi-comercial",
    title: "Dashboard de Performance Comercial e Funil de Vendas",
    context: "Projeto Analítico de Vendas",
    summary: "Relatório executivo no Power BI para acompanhamento do ciclo de vendas e retorno por canal de aquisição. Apresenta cálculo de CAC, ticket médio, taxa de conversão e faturamento por canal de mídia.",
    tools: "Power BI, DAX, Modelagem Dimensional (Star Schema)",
    demoUrl: "https://app.powerbi.com/groups/me/reports/100b5f1f-85d5-4f2d-b082-837165f1cb32/1e83521174a2c02425b5?experience=power-bi",
    demoLabel: "Abrir no Power BI Service (requer acesso institucional)",
    githubUrl: null,
    images: [
      {
        url: "/dashboards/dashboard-comercial-funil.png",
        caption: "Dashboard Comercial no Power BI: KPIs de CAC (R$ 612), Ticket Médio (R$ 14,96 Mil), Conversão (8%), Funil de Vendas e Faturamento por Canal."
      }
    ],
    caseStudy: {
      problem: "Dificuldade na visualização clara das etapas do funil de vendas (lead até fechamento) e na identificação de quais canais de aquisição geravam maior retorno sobre investimento.",
      solution: "Estruturei os dados em modelo dimensional (Star Schema) e elaborei fórmulas DAX para cálculo de CAC médio, ticket médio ponderado, taxa de conversão do funil e distribuição percentual de receita por canal de aquisição.",
      architecture: "Modelo estrela com tabela fato de vendas conectada a dimensões de clientes, canais e datas. Layout com cartões de KPIs executivos e gráficos de barras com ordenação analítica.",
      results: "Visibilidade imediata das taxas de perda entre proposta e cliente (conversão final de 23,1% sobre oportunidades) e identificação do canal de indicação com melhor retorno proporcional."
    }
  },
  {
    id: "cripto-emotion-lens",
    title: "Cripto EmotionLens: Telemetria de Séries Temporais",
    context: "Pesquisa Aplicada em Dados",
    summary: "Processamento analítico de dados temporais de sinais biométricos coletados em tempo real. Implementação de filtros estatísticos de suavização por média móvel centrada e análise de dispersão.",
    tools: "Python, Pandas, NumPy, Estatística Descritiva",
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw",
    images: [],
    caseStudy: {
      problem: "Sinais biométricos captados em vídeo apresentam alta variabilidade segundo a segundo, gerando ruído de transição que prejudica a interpretação estatística contínua.",
      solution: "Apliquei filtros de média móvel centrada sobre janelas temporais de quadros consecutivos para atenuar variações bruscas, normalização estatística e tabulação estruturada das probabilidades por segundo.",
      architecture: "Estruturação de dados com Pandas e NumPy, cálculo de variância e testes empíricos de tempo de resposta.",
      results: "Séries temporais estabilizadas com redução de ruídos de transição, facilitando a geração de gráficos de tendência ao longo de gravações contínuas."
    }
  },
  {
    id: "detector-rachaduras",
    title: "Detecção e Análise de Métricas Estruturais com YOLOv8",
    context: "Visão Computacional Aplicada",
    summary: "Treinamento e validação de modelo YOLOv8 para identificação de patologias em imagens de inspeção civil, com extração de métricas de precisão (mAP), sensibilidade e estimativa dimensional.",
    tools: "Python, YOLOv8, OpenCV, Estatística",
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Detector-de-Rachaduras",
    images: [],
    caseStudy: {
      problem: "A avaliação puramente qualitativa de imagens de inspeção estrutural dificulta o acompanhamento histórico de danos e o cálculo de índices de criticidade.",
      solution: "Treinei um modelo de detecção de objetos com validação cruzada de métricas estatísticas (Precision, Recall e mAP50-95), acoplado a rotinas de processamento de imagem em OpenCV para estimativa de comprimento e área dos defeitos.",
      architecture: "Pipeline de preparação de dados com anotação controlada, treinamento com curvas de perda monitoradas e exportação dos resultados em matrizes analíticas.",
      results: "Estruturação de dados numéricos a partir de fotos de campo, permitindo ordenar relatórios técnicos por gravidade estimada."
    }
  },
  {
    id: "clinica-sql-analytics",
    title: "Modelagem Relacional e Consultas Clínicas (MediClin)",
    context: "Modelagem de Dados e SQL",
    summary: "Modelagem relacional de banco de dados na terceira forma normal (3FN) e criação de consultas analíticas para acompanhamento de taxas operacionais de atendimento e produtividade médica.",
    tools: "SQL, MySQL 8.0, Modelagem Relacional (3FN)",
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Projeto-Medicos",
    images: [],
    caseStudy: {
      problem: "Bases relacionais operacionais não otimizadas apresentavam lentidão ao gerar relatórios gerenciais de consultas, faltas e tempo médio de espera.",
      solution: "Reformulei a modelagem na 3FN, criei índices compostos nas chaves estrangeiras e campos de filtro por data, e estruturei views com consultas agregadas utilizando subqueries e agrupamentos.",
      architecture: "Banco de dados MySQL 8.0, diagramação entidade-relacionamento e consultas estruturadas para relatórios operacionais sem lock de tabelas transacionais.",
      results: "Redução no tempo de resposta das consultas analíticas e organização normalizada para relatórios de gestão operacional."
    }
  }
];

export const experiencesData = [
  {
    period: "2024 — Presente",
    role: "Analista de Dados (Projeto Portal do Cidadão & Auditoria de IA)",
    organization: "Tribunal de Contas dos Municípios de Goiás (TCM-GO)",
    deliverables: [
      "Desenvolvi esteiras ETL em Python (Pandas) e SQL para saneamento de dados orçamentários dos 246 municípios de Goiás.",
      "Construí os relatórios analíticos no Power BI para a aba Meio Ambiente do Portal do Cidadão do TCM-GO.",
      "Elaborei rotinas automatizadas em Python com execução concorrente para validação e auditoria da API de NER contra consultas SQL em bases orçamentárias e contábeis."
    ]
  },
  {
    period: "2023 — Presente",
    role: "Pesquisador e Desenvolvedor em Projetos de Dados",
    organization: "Projetos Analíticos e Repositórios Técnicos",
    deliverables: [
      "Desenvolvimento de relatórios executivos no Microsoft Power BI com modelagem dimensional (Star Schema) e medidas DAX.",
      "Modelagem e análise estatística de séries temporais de dados biométricos em Python.",
      "Estruturação de bancos de dados relacionais normalizados e consultas analíticas avançadas em SQL."
    ]
  }
];
