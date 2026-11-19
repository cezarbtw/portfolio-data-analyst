export const projects = [
  {
    id: "tcmgo-portal-cidadao",
    slug: "tcmgo-portal-cidadao",
    number: "01",
    title: "TCM-GO: Painéis no Power BI para o Portal do Cidadão",
    year: "2024",
    tools: "Power BI · DAX · Python · SQL · ETL",
    context: "Tribunal de Contas dos Municípios de Goiás · Setor Público",
    isFeatured: true,
    image: "/dashboards/tcmgo-meio-ambiente-aguas.webp",
    imageCaption: "Painel de Meio Ambiente no Power BI — Dimensão Águas (Portal do Cidadão do TCM-GO)",
    demoUrl: "https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/",
    demoLabel: "Acessar Portal do Cidadão",
    githubUrl: null,
    screens: [
      {
        id: "aguas",
        tab: "Águas",
        title: "Dimensão Águas",
        url: "/dashboards/tcmgo-meio-ambiente-aguas.webp",
        caption: "Consumo médio per capita (L/hab/dia), atendimento de rede e paralisações nos 246 municípios."
      },
      {
        id: "esgoto",
        tab: "Esgoto",
        title: "Dimensão Esgoto",
        url: "/dashboards/tcmgo-meio-ambiente-esgoto.webp",
        caption: "Atendimento da rede coletora e índice de esgoto tratado frente à média estadual."
      },
      {
        id: "residuos",
        tab: "Resíduos",
        title: "Dimensão Resíduos Sólidos",
        url: "/dashboards/tcmgo-meio-ambiente-residuos.webp",
        caption: "Destinação em aterros controlados, coleta seletiva e inclusão de catadores."
      },
      {
        id: "pluviais",
        tab: "Drenagem",
        title: "Dimensão Águas Pluviais",
        url: "/dashboards/tcmgo-meio-ambiente-aguas-pluviais.webp",
        caption: "Cobertura de drenagem pluvial, histórico de inundações e sistemas de alerta."
      },
      {
        id: "gestao",
        tab: "Gestão",
        title: "Governança Municipal",
        url: "/dashboards/tcmgo-meio-ambiente-gestao-municipal.webp",
        caption: "Aderência ao Marco Legal do Saneamento, Plano Diretor e ouvidorias ativas."
      }
    ],
    summary: "Construção de esteiras ETL e relatórios analíticos no Power BI para a aba Meio Ambiente do Portal do Cidadão do TCM-GO. Os painéis consolidam indicadores de saneamento básico, resíduos sólidos, drenagem pluvial e governança dos 246 municípios do estado de Goiás.",
    caseStudy: {
      problem: "Os dados de prestação de contas dos 246 municípios de Goiás apresentavam inconsistências de preenchimento, divergências de esquema e duplicidades, inviabilizando consultas consolidadas diretas sobre serviços de saneamento básico.",
      solution: "Desenvolvi pipelines em Python com Pandas para higienização e padronização dos dados, estruturados em consultas SQL analíticas com agregações por município e ano. Em seguida, projetei os relatórios analíticos no Power BI com medidas DAX para cálculo de médias regionais e desvios.",
      architecture: "Scripts em Python integrados a rotinas agendadas de ETL, modelagem tabular para cruzamento temporal e integração aos visuais do Portal do Cidadão.",
      results: "Disponibilização pública dos indicadores de meio ambiente dos 246 municípios goianos, permitindo aos cidadãos e ao corpo técnico do tribunal comparar desempenhos municipais com a média estadual."
    }
  },
  {
    id: "tcmgo-ner-validation",
    slug: "tcmgo-ner-validation",
    number: "02",
    title: "TCM-GO: Validação da API de NER e Reconciliação SQL",
    year: "2024",
    tools: "Python · SQL · Requests · Multithreading",
    context: "Tribunal de Contas dos Municípios de Goiás · Auditoria de Dados",
    isFeatured: false,
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: null,
    summary: "Automação em Python com processamento concorrente para validação da API de Reconhecimento de Entidades Nomeadas (NER) aplicada a extratos bancários e documentos contábeis públicos. Reconciliação de payloads JSON contra consultas SQL em bases orçamentárias.",
    caseStudy: {
      problem: "A conferência manual das entidades extraídas por inteligência artificial (nomes, bancos, agências, contas, CPFs e valores) demandava centenas de horas da equipe de auditoria frente ao volume contínuo de envios municipais.",
      solution: "Construí uma rotina automatizada em Python com processamento paralelo que consome a API de NER, executa consultas SQL otimizadas nas bases orçamentárias e contábeis do tribunal e confronta campo a campo cada extração contra os registros oficiais.",
      architecture: "Arquitetura concorrente em Python com controle de requisições, tratamento de exceções, consultas relacionais com leitura não bloqueante (nolock) e geração de arquivos CSV e JSON com divergências identificadas.",
      results: "Redução do ciclo de homologação da API de inteligência artificial do tribunal, apontando automaticamente inconsistências de extração e divergências cadastrais."
    }
  },
  {
    id: "power-bi-comercial",
    slug: "power-bi-comercial",
    number: "03",
    title: "Dashboard de Performance Comercial e Funil de Vendas",
    year: "2023",
    tools: "Power BI · DAX · Modelagem Star Schema",
    context: "Projeto Analítico de Vendas · Business Intelligence",
    isFeatured: false,
    image: "/dashboards/dashboard-comercial-funil.webp",
    imageCaption: "Dashboard Comercial no Power BI: KPIs de CAC, ticket médio e funil de vendas",
    demoUrl: null,
    demoLabel: null,
    githubUrl: null,
    summary: "Relatório executivo no Power BI para acompanhamento do ciclo de vendas e retorno por canal de aquisição. Apresenta cálculo de CAC, ticket médio, taxa de conversão e faturamento por canal de mídia.",
    caseStudy: {
      problem: "Dificuldade na visualização clara das etapas do funil de vendas (lead até fechamento) e na identificação de quais canais de aquisição geravam maior retorno sobre investimento.",
      solution: "Estruturei os dados em modelo dimensional (Star Schema) e elaborei fórmulas DAX para cálculo de CAC médio, ticket médio ponderado, taxa de conversão do funil e distribuição percentual de receita por canal de aquisição.",
      architecture: "Modelo estrela com tabela fato de vendas conectada a dimensões de clientes, canais e datas. Layout com cartões de KPIs executivos e gráficos de barras com ordenação analítica.",
      results: "Visibilidade imediata das taxas de perda entre proposta e cliente e identificação do canal de indicação com melhor retorno proporcional."
    }
  },
  {
    id: "cripto-emotion-lens",
    slug: "cripto-emotion-lens",
    number: "04",
    title: "Cripto EmotionLens: Telemetria de Séries Temporais",
    year: "2024",
    tools: "Python · Pandas · NumPy · Estatística",
    context: "Pesquisa Aplicada em Dados · Estatística",
    isFeatured: false,
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Cripto_EmotionLens",
    summary: "Processamento analítico de dados temporais de sinais biométricos coletados em tempo real. Implementação de filtros estatísticos de suavização por média móvel centrada e análise de dispersão.",
    caseStudy: {
      problem: "Sinais biométricos captados em vídeo apresentam alta variabilidade segundo a segundo, gerando ruído de transição que prejudica a interpretação estatística contínua.",
      solution: "Apliquei filtros de média móvel centrada sobre janelas temporais de quadros consecutivos para atenuar variações bruscas, normalização estatística e tabulação estruturada das probabilidades por segundo.",
      architecture: "Estruturação de dados com Pandas e NumPy, cálculo de variância e testes empíricos de tempo de resposta.",
      results: "Séries temporais estabilizadas com redução de ruídos de transição, facilitando a geração de gráficos de tendência ao longo de gravações contínuas."
    }
  },
  {
    id: "detector-rachaduras",
    slug: "detector-rachaduras",
    number: "05",
    title: "Detecção e Análise de Métricas Estruturais com YOLOv8",
    year: "2023",
    tools: "Python · YOLOv8 · OpenCV · Estatística",
    context: "Visão Computacional Aplicada · Engenharia Diagnóstica",
    isFeatured: false,
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Detector-de-Rachaduras",
    summary: "Treinamento e validação de modelo YOLOv8 para identificação de patologias em imagens de inspeção civil, com extração de métricas de precisão (mAP), sensibilidade e estimativa dimensional.",
    caseStudy: {
      problem: "A avaliação puramente qualitativa de imagens de inspeção estrutural dificulta o acompanhamento histórico de danos e o cálculo de índices de criticidade.",
      solution: "Treinei um modelo de detecção de objetos com validação cruzada de métricas estatísticas (Precision, Recall e mAP50-95), acoplado a rotinas de processamento de imagem em OpenCV para estimativa de comprimento e área dos defeitos.",
      architecture: "Pipeline de preparação de dados com anotação controlada, treinamento com curvas de perda monitoradas e exportação dos resultados em matrizes analíticas.",
      results: "Estruturação de dados numéricos a partir de fotos de campo, permitindo ordenar relatórios técnicos por gravidade estimada."
    }
  },
  {
    id: "clinica-sql-analytics",
    slug: "clinica-sql-analytics",
    number: "06",
    title: "Modelagem Relacional e Consultas Clínicas (MediClin)",
    year: "2023",
    tools: "SQL · MySQL 8.0 · Modelagem 3FN",
    context: "Modelagem de Dados e SQL · Otimização 3FN",
    isFeatured: false,
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Projeto-Medicos",
    summary: "Modelagem relacional de banco de dados na terceira forma normal (3FN) e criação de consultas analíticas para acompanhamento de taxas operacionais de atendimento e produtividade médica.",
    caseStudy: {
      problem: "Bases relacionais operacionais não otimizadas apresentavam lentidão ao gerar relatórios gerenciais de consultas, faltas e tempo médio de espera.",
      solution: "Reformulei a modelagem na 3FN, criei índices compostos nas chaves estrangeiras e campos de filtro por data, e estruturei views com consultas agregadas utilizando subqueries e agrupamentos.",
      architecture: "Banco de dados MySQL 8.0, diagramação entidade-relacionamento e consultas estruturadas para relatórios operacionais sem lock de tabelas transacionais.",
      results: "Redução no tempo de resposta das consultas analíticas e organização normalizada para relatórios de gestão operacional."
    }
  }
];
