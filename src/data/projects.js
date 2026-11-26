export const projects = [
  {
    id: "tcmgo-portal-cidadao",
    slug: "tcmgo-portal-cidadao",
    number: "01",
    title: "TCM-GO: Painéis no Power BI para o Portal do Cidadão",
    year: "2024",
    organization: "Tribunal de Contas dos Municípios de Goiás (TCM-GO)",
    role: "Analista de Dados",
    tools: "Power BI · DAX · Python · SQL · ETL",
    context: "Tribunal de Contas dos Municípios de Goiás · Setor Público",
    isFeatured: true,
    hasDiagram: false,
    image: "/dashboards/tcmgo-meio-ambiente-aguas.webp",
    imageCaption: "Painel de Meio Ambiente no Power BI — Dimensão Águas (Portal do Cidadão do TCM-GO)",
    demoUrl: "https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/",
    demoLabel: "Portal do Cidadão",
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
      problem: "Os dados de prestação de contas dos 246 municípios de Goiás apresentavam [CONFIRMAR: inconsistências de preenchimento, divergências de esquema e duplicidades], dificultando a consulta consolidada de saneamento básico.",
      solution: "Desenvolvi pipelines em Python com Pandas para higienização dos dados e consultas SQL agregadas por município e ano. Em seguida, construí os relatórios no Power BI com medidas DAX exibindo séries de 2023 e 2024 frente à Média Goiana [CONFIRMAR: e cálculos de médias regionais e desvios].",
      architecture: "Scripts em Python [CONFIRMAR: integrados a rotinas agendadas de ETL] alimentam uma modelagem tabular para cruzamento temporal entre 2023 e 2024 nos painéis da aba Meio Ambiente do Portal do Cidadão.",
      results: "Disponibilização dos indicadores de meio ambiente dos 246 municípios goianos em cinco dimensões públicas [CONFIRMAR: permitindo aos cidadãos e ao corpo técnico do tribunal comparar desempenhos municipais com a média estadual]."
    }
  },
  {
    id: "tcmgo-ner-validation",
    slug: "tcmgo-ner-validation",
    number: "02",
    title: "TCM-GO: Validação da API de NER e Reconciliação SQL",
    year: "2024",
    organization: "Tribunal de Contas dos Municípios de Goiás (TCM-GO)",
    role: "Analista de Dados",
    tools: "Python · SQL · Requests · Multithreading",
    context: "Tribunal de Contas dos Municípios de Goiás · Auditoria de Dados",
    isFeatured: false,
    hasDiagram: true,
    diagramType: "ner",
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: null,
    shortSummary: "Automação concorrente em Python para validação da API de NER contra consultas SQL em bases orçamentárias do tribunal.",
    summary: "Automação em Python com processamento concorrente para validação da API de Reconhecimento de Entidades Nomeadas (NER) aplicada a extratos bancários e documentos contábeis públicos. Reconciliação de payloads JSON contra consultas SQL em bases orçamentárias.",
    caseStudy: {
      problem: "A conferência manual das entidades extraídas pela API de NER em documentos contábeis e extratos bancários [CONFIRMAR: nomes, bancos, agências, contas, CPFs e valores] não acompanhava o volume contínuo de envios municipais [CONFIRMAR: e demandava centenas de horas da equipe de auditoria].",
      solution: "Construí uma rotina em Python com processamento paralelo para consumir a API de NER, consultar as bases orçamentárias e contábeis em SQL e confrontar campo a campo cada payload JSON contra os registros oficiais.",
      architecture: "Execução concorrente em Python com controle de requisições [CONFIRMAR: e tratamento de exceções], consultas SQL com leitura não bloqueante (nolock) em bases do tribunal (como COLARE e ORCAFI) e exportação de divergências em CSV e JSON.",
      results: "Confronto automatizado das extrações da API de NER com as bases contábeis em CSV e JSON [CONFIRMAR: reduzindo o ciclo de homologação da API e apontando divergências cadastrais]."
    }
  },
  {
    id: "power-bi-comercial",
    slug: "power-bi-comercial",
    number: "03",
    title: "Dashboard de Performance Comercial e Funil de Vendas",
    year: "2023",
    organization: "Projeto Analítico de Vendas",
    role: "Desenvolvedor de BI [CONFIRMAR]",
    tools: "Power BI · DAX · Modelagem Star Schema",
    context: "Projeto Analítico de Vendas · Business Intelligence",
    isFeatured: false,
    hasDiagram: false,
    image: "/dashboards/dashboard-comercial-funil.webp",
    imageCaption: "Dashboard Comercial no Power BI: KPIs de CAC, ticket médio e funil de vendas",
    demoUrl: null,
    demoLabel: null,
    githubUrl: null,
    shortSummary: "Relatório executivo no Power BI com modelagem dimensional para análise de funil de vendas, cálculo de CAC e ticket médio.",
    summary: "Relatório executivo no Power BI para acompanhamento do ciclo de vendas e retorno por canal de aquisição. Apresenta cálculo de CAC, ticket médio, taxa de conversão e faturamento por canal de mídia.",
    caseStudy: {
      problem: "[CONFIRMAR: Dificuldade na visualização clara das etapas do funil de vendas (lead até fechamento) e na comparação de retorno entre canais de aquisição.]",
      solution: "Estruturei o relatório no Power BI [CONFIRMAR: em modelo dimensional Star Schema] com indicadores de CAC (R$ 612), ticket médio (R$ 14,96 Mil), taxa de conversão (8%), funil de vendas e métricas por canal.",
      architecture: "[CONFIRMAR: Modelo estrela conectando tabela fato de vendas a dimensões de clientes, canais e datas], com cartões de KPIs no topo, gráfico de funil e barras por canal de aquisição.",
      results: "Painel consolidado exibindo receita de R$ 374 Mil sobre 300 leads e 25 clientes, além das taxas entre etapas do funil [CONFIRMAR: identificando o canal de indicação com melhor retorno proporcional]."
    }
  },
  {
    id: "cripto-emotion-lens",
    slug: "cripto-emotion-lens",
    number: "04",
    title: "Cripto EmotionLens: Telemetria de Séries Temporais",
    year: "2024",
    organization: "Pesquisa Aplicada em Dados",
    role: "Pesquisador e Desenvolvedor",
    tools: "Python · Pandas · NumPy · Estatística",
    context: "Pesquisa Aplicada em Dados · Estatística",
    isFeatured: false,
    hasDiagram: false,
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Cripto_EmotionLens",
    shortSummary: "Processamento de séries temporais de sinais biométricos com filtros estatísticos de média móvel centrada e análise de dispersão.",
    summary: "Processamento analítico de dados temporais de sinais biométricos coletados em tempo real. Implementação de filtros estatísticos de suavização por média móvel centrada e análise de dispersão.",
    caseStudy: {
      problem: "Sinais biométricos captados em vídeo apresentam alta variabilidade segundo a segundo, gerando ruído de transição que prejudica a leitura estatística contínua.",
      solution: "Apliquei filtros estatísticos de média móvel centrada em Python para atenuar oscilações bruscas [CONFIRMAR: com janela de 9 quadros, normalização estatística e tabulação das probabilidades por segundo].",
      architecture: "Processamento tabular das séries temporais em Pandas e NumPy [CONFIRMAR: com cálculo de variância e testes empíricos de tempo de resposta].",
      results: "Estabilização das séries temporais com redução do ruído de transição [CONFIRMAR: facilitando a geração de gráficos de tendência ao longo de gravações contínuas]."
    }
  },
  {
    id: "detector-rachaduras",
    slug: "detector-rachaduras",
    number: "05",
    title: "Detecção e Análise de Métricas Estruturais com YOLOv8",
    year: "2023",
    organization: "Visão Computacional Aplicada",
    role: "Pesquisador e Desenvolvedor",
    tools: "Python · YOLOv8 · OpenCV · Estatística",
    context: "Visão Computacional Aplicada · Engenharia Diagnóstica",
    isFeatured: false,
    hasDiagram: false,
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Detector-de-Rachaduras",
    shortSummary: "Treinamento de modelo YOLOv8 para inspeção estrutural com extração de métricas de precisão, sensibilidade e estimativa dimensional.",
    summary: "Treinamento e validação de modelo YOLOv8 para identificação de patologias em imagens de inspeção civil, com extração de métricas de precisão (mAP), sensibilidade e estimativa dimensional.",
    caseStudy: {
      problem: "A avaliação puramente qualitativa de imagens de inspeção estrutural dificulta o registro quantitativo [CONFIRMAR: e o acompanhamento histórico de índices de criticidade].",
      solution: "Treinei um modelo YOLOv8 avaliado por Precision, Recall e mAP, integrado ao OpenCV [CONFIRMAR: com validação cruzada e estimativa de comprimento e área dos defeitos].",
      architecture: "Pipeline de preparação de imagens [CONFIRMAR: anotação controlada, monitoramento de curvas de perda no treinamento e exportação em matrizes analíticas].",
      results: "Extração estruturada de métricas quantitativas a partir de imagens de inspeção [CONFIRMAR: permitindo ordenar relatórios técnicos por gravidade estimada]."
    }
  },
  {
    id: "clinica-sql-analytics",
    slug: "clinica-sql-analytics",
    number: "06",
    title: "Modelagem Relacional e Consultas Clínicas (MediClin)",
    year: "2023",
    organization: "Projeto de Modelagem SQL",
    role: "Pesquisador e Desenvolvedor",
    tools: "SQL · MySQL 8.0 · Modelagem 3FN",
    context: "Modelagem de Dados e SQL · Otimização 3FN",
    isFeatured: false,
    hasDiagram: false,
    image: null,
    imageCaption: null,
    demoUrl: null,
    demoLabel: null,
    githubUrl: "https://github.com/cezarbtw/Projeto-Medicos",
    shortSummary: "Modelagem relacional normalizada (3FN) e consultas analíticas avançadas em SQL para acompanhamento de indicadores clínicos.",
    summary: "Modelagem relacional de banco de dados na terceira forma normal (3FN) e criação de consultas analíticas para acompanhamento de taxas operacionais de atendimento e produtividade médica.",
    caseStudy: {
      problem: "[CONFIRMAR: Bases operacionais não otimizadas geravam lentidão ao extrair relatórios gerenciais de consultas, faltas e tempo de espera.]",
      solution: "Modelei o banco de dados na terceira forma normal (3FN) em MySQL 8.0 e criei views analíticas com agregações [CONFIRMAR: e índices compostos em chaves estrangeiras e datas].",
      architecture: "Banco MySQL 8.0 na 3FN com diagramação entidade-relacionamento e consultas de leitura [CONFIRMAR: sem lock de tabelas transacionais].",
      results: "Base normalizada na 3FN com views para indicadores operacionais [CONFIRMAR: e redução no tempo de resposta das consultas analíticas]."
    }
  }
];
