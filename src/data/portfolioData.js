export const personalInfo = {
  name: "Abraão Cezar Inácio",
  shortName: "Abraão Cezar",
  location: "Goiás, Brasil",
  email: "abraao.cezar.dev@gmail.com",
  phone: "+55 (62) 99999-9999",
  whatsapp: "5562999999999",
  github: "https://github.com/cezarbtw",
  githubUsername: "cezarbtw",
  linkedin: "https://www.linkedin.com/in/cezarinaciol/",
  powerBiReportUrl: "https://app.powerbi.com/groups/me/reports/100b5f1f-85d5-4f2d-b082-837165f1cb32/1e83521174a2c02425b5?experience=power-bi",
  status: "Disponível para novas oportunidades",
  availability: "Contratação Imediata (Remoto / Híbrido)"
};

export const dataAnalystData = {
  role: "Analista de Dados & BI",
  badge: "Power BI • Pipelines ETL • SQL Avançado • Python • Machine Learning",
  accentColor: "emerald",
  gradientText: "from-emerald-400 via-teal-300 to-cyan-400",
  tagline: "Analista de Dados especializado em pipelines ETL, relatórios executivos no Power BI e análise estatística de dados complexos.",
  headline: "Analista de Dados & BI focado em ETL robusto, Power BI, SQL e inteligência para tomada de decisão.",
  bio: [
    "Sou Analista de Dados com sólida experiência na concepção e sustentação de esteiras de ETL, modelagem dimensional e relacional, criação de dashboards interativos no Power BI (DAX) e análise estatística de dados com Python (Pandas, NumPy, Matplotlib, PyTorch).",
    "No TCM-GO (Tribunal de Contas dos Municípios de Goiás), atuo como Analista de Dados no projeto do Novo Portal do Cidadão, desenvolvendo pipelines ETL para ingestão, higienização e consolidação de bases de dados orçamentárias de políticas ambientais dos 246 municípios goianos, além de construir os relatórios e gráficos analíticos no Power BI para a aba 'Meio Ambiente'.",
    "Também desenvolvi o Cripto EmotionLens, liderando a modelagem e análise estatística de telemetria temporal de microexpressões faciais (séries temporais segundo a segundo, histogramas de dispersão afetiva e benchmarks de latência criptográfica de 0.22ms), além de projetos com Machine Learning e Visão Computacional (YOLOv8)."
  ],
  stats: [
    { label: "Atuação TCM-GO", value: "246 Municípios", hint: "ETL & Gráficos Power BI no Portal do Cidadão" },
    { label: "Relatórios Power BI", value: "Cloud / DAX", hint: "Dashboards interativos com filtros cruzados" },
    { label: "Linguagens Analíticas", value: "Python & SQL", hint: "Pandas, NumPy, PostgreSQL & MySQL" },
    { label: "Modelos de IA & Telemetria", value: "YOLOv8 & PyTorch", hint: "Extração quantitativa de métricas e mAP" }
  ],
  skills: {
    categories: [
      {
        name: "Engenharia de Dados & ETL",
        skills: [
          { name: "Python (Pandas & NumPy)", level: "Avançado", badge: "Core" },
          { name: "Pipelines ETL / ELT", level: "Avançado", badge: "Core" },
          { name: "Data Cleaning & Wrangling", level: "Avançado", badge: "Quality" },
          { name: "Automação de Rotinas de Dados", level: "Avançado", badge: "Productivity" },
          { name: "Consumo & Ingestão de APIs", level: "Avançado", badge: "Ingestion" },
          { name: "Auditoria & Governança de Dados", level: "Intermediário/Avançado", badge: "Audit" }
        ]
      },
      {
        name: "Power BI & Business Intelligence",
        skills: [
          { name: "Power BI (Desktop & Service)", level: "Avançado", badge: "BI Core" },
          { name: "Modelagem DAX (Medidas & Filtros)", level: "Avançado", badge: "Analytics" },
          { name: "Modelagem Dimensional (Star Schema)", level: "Avançado", badge: "Modeling" },
          { name: "Storytelling & Design de Dashboards", level: "Avançado", badge: "Data Viz" },
          { name: "Power Query (Linguagem M)", level: "Intermediário/Avançado", badge: "Transformation" }
        ]
      },
      {
        name: "Bancos de Dados & Machine Learning",
        skills: [
          { name: "SQL Avançado (CTEs & Joins)", level: "Avançado", badge: "Queries" },
          { name: "MySQL & PostgreSQL", level: "Avançado", badge: "Databases" },
          { name: "Visão Computacional & Métricas (YOLOv8)", level: "Avançado", badge: "AI/ML" },
          { name: "Análise de Séries Temporais", level: "Avançado", badge: "Statistics" },
          { name: "Estatística Descritiva & EDA", level: "Avançado", badge: "Exploratory" }
        ]
      }
    ]
  },
  projects: [
    {
      id: "power-bi-report",
      title: "Dashboard & Relatório Interativo no Power BI Cloud",
      category: "Business Intelligence & Analytics",
      description: "Relatório executivo analítico desenvolvido e publicado no Microsoft Power BI Service. Apresenta modelagem dimensional de dados (Star Schema), métricas calculadas em DAX, filtros dinâmicos cruzados, indicadores de desempenho e storytelling orientado à tomada de decisão estratégica.",
      tags: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "KPIs", "Storytelling"],
      featured: true,
      metrics: "Relatório Oficial Power BI Cloud | Filtros dinâmicos cruzados | Métricas DAX calculadas",
      github: null,
      demo: "https://app.powerbi.com/groups/me/reports/100b5f1f-85d5-4f2d-b082-837165f1cb32/1e83521174a2c02425b5?experience=power-bi",
      caseStudy: {
        problem: "Apresentar indicadores densos e volumosos de forma visual e executiva, permitindo que tomadores de decisão identifiquem tendências, correlações e discrepâncias em poucos cliques.",
        solution: "Concepção de um painel interativo no Power BI conectado a bases de dados modeladas, utilizando fórmulas DAX para KPIs de variação temporal, segmentação de dados e layout moderno focado em ergonomia visual.",
        techStackDetails: "Modelagem em esquema estrela (Star Schema), criação de medidas DAX (medidas rápidas, acumulados e proporções), formatação condicional inteligente e publicação no Power BI Service.",
        results: "Geração de relatórios com atualização contínua, permitindo análises aprofundadas com capacidade de drill-down em poucos cliques."
      }
    },
    {
      id: "tcmgo-etl",
      title: "TCM-GO: Pipelines ETL & Gráficos no Power BI (Portal do Cidadão)",
      category: "Engenharia de Dados & Governança Pública",
      description: "Atuação como Analista de Dados no Tribunal de Contas dos Municípios de Goiás: desenvolvimento e sustentação de esteiras ETL para extração, saneamento e consolidação de dados orçamentários de políticas ambientais dos 246 municípios goianos, com elaboração dos gráficos e relatórios no Power BI para a aba 'Meio Ambiente' do Novo Portal do Cidadão.",
      tags: ["Power BI", "Python", "SQL", "Pandas", "ETL Pipelines", "Data Wrangling", "Auditoria Pública"],
      featured: true,
      metrics: "246 Municípios analisados | Gráficos Power BI no Portal | Milhões de dados fiscais saneados",
      github: null,
      demo: "https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/",
      caseStudy: {
        problem: "Bases de dados orçamentárias municipais apresentavam divergências de formato, registros nulos e duplicidades, inviabilizando a geração direta de indicadores ambientais de transparência pública.",
        solution: "Desenvolvimento de pipelines ETL em Python (Pandas) e SQL para ingestão e tratamento automatizado dos dados públicos, com criação dos gráficos e relatórios analíticos no Power BI que alimentam as consultas da aba Meio Ambiente.",
        techStackDetails: "Pipelines em Python com Pandas para higienização vetorizada, queries SQL otimizadas com agregações contábeis e construção de visuais analíticos no Power BI.",
        results: "Alimentação confiável e auditável das informações ambientais de todos os 246 municípios do estado de Goiás para a sociedade civil e auditores do tribunal."
      }
    },
    {
      id: "cripto-emotion-lens-data",
      title: "Cripto EmotionLens: Telemetria Temporal & Estatística",
      category: "Data Analytics & Machine Learning",
      description: "Processamento e modelagem analítica de séries temporais de dados biométricos em tempo real. Análise segundo a segundo de 7 classes canônicas de emoção, histogramas de dispersão temporal, suavização por média móvel centrada e benchmarks de latência criptográfica (0.22ms).",
      tags: ["Python", "Pandas", "PyTorch", "Estatística Descritiva", "Séries Temporais", "Benchmarks"],
      featured: true,
      metrics: "Séries temporais segundo a segundo | Filtro anti-flickering | Benchmark mediano de 0.22ms",
      github: "https://github.com/cezarbtw",
      demo: null,
      caseStudy: {
        problem: "Extrair tendências comportamentais consistentes a partir de sinais afetivos de vídeo altamente voláteis e ruidosos.",
        solution: "Implementação de filtros estatísticos de suavização temporal por média móvel centrada (janela de 9 quadros), normalização adaptativa CLAHE e estruturação tabular de probabilidades por segundo.",
        techStackDetails: "Python, Pandas, NumPy, cálculo de matrizes de confusão, análise de dispersão de variância e testes empíricos de desempenho com 1.000 iterações.",
        results: "Geração de relatórios analíticos de telemetria afetiva com alta confiabilidade e remoção total de ruídos de transição facial."
      }
    },
    {
      id: "detector-rachaduras-data",
      title: "Análise Preditiva & Métricas com YOLOv8",
      category: "Machine Learning & Visão Computacional",
      description: "Extração de dados quantitativos e análise de métricas estruturais a partir de fotos de patologias na construção civil utilizando aprendizado profundo (YOLOv8).",
      tags: ["Python", "YOLOv8", "Métricas mAP", "Visão Computacional", "OpenCV", "Estatística"],
      featured: false,
      metrics: "Avaliação estatística de precisão (mAP50-95) | Extração de área de defeitos | Classificação automática",
      github: "https://github.com/cezarbtw/Detector-de-Rachaduras",
      demo: null,
      caseStudy: {
        problem: "Transformar fotos de inspeção de obras em dados numéricos acionáveis para relatórios periciais.",
        solution: "Treinamento e validação de modelo YOLOv8 com métricas de Precision, Recall e mAP, associando algoritmo para extração do comprimento e espessura estimada das rachaduras.",
        techStackDetails: "Python, frameworks de IA, cálculo estatístico de matriz de confusão e curvas PR (Precision-Recall).",
        results: "Conversão de dados não estruturados em tabelas analíticas com índice de severidade de risco."
      }
    },
    {
      id: "clinica-sql-analytics",
      title: "Modelagem e Análise de Dados Clínicos (MediClin)",
      category: "Modelagem SQL & Analytics",
      description: "Modelagem relacional de banco de dados e consultas SQL analíticas para cálculo de taxas de absenteísmo, ocupação de consultórios e tempo médio de espera.",
      tags: ["SQL Avançado", "Modelagem Relacional", "Agregações", "MySQL 8.0", "Indicadores de Saúde"],
      featured: false,
      metrics: "Modelagem normalizada (3FN) | Otimização de tempo de query em 60% | KPIs operacionais",
      github: "https://github.com/cezarbtw/Projeto-Medicos",
      demo: null,
      caseStudy: {
        problem: "Extração lenta de dados operacionais para geração de relatórios de produtividade clínica e faturamento.",
        solution: "Criação de índices estratégicos compostos, views analíticas e queries com joins e agregações para gerar relatórios sem onerar a base transacional.",
        techStackDetails: "MySQL 8.0, índices B-Tree, modelagem entidade-relacionamento e scripts SQL analíticos.",
        results: "Redução no tempo de extração de relatórios e identificação de horários ociosos para maximizar a capacidade de atendimento."
      }
    },
    {
      id: "chatbot-analytics",
      title: "Análise de Dados de Consultas Ambientais (ChatBot)",
      category: "NLP & Análise Textual",
      description: "Estruturação de dados conversacionais e categorização de frequência de demandas populares relacionadas a meio ambiente e sustentabilidade.",
      tags: ["Python", "NLP", "Text Mining", "Análise de Frequência", "Clustering"],
      featured: false,
      metrics: "Classificação de tópicos | Identificação de termos críticos | Relatórios de engajamento",
      github: "https://github.com/cezarbtw/ChatBot-Meio-Ambiente",
      demo: null,
      caseStudy: {
        problem: "Identificar as maiores dúvidas e gargalos de informação da população em relação às leis e políticas ambientais municipais.",
        solution: "Tratamento de corpus de texto, remoção de stopwords, tokenização e contagem de frequência de termos para mapear tópicos prioritários.",
        techStackDetails: "Python, bibliotecas de manipulação textual e estruturação tabular de dados conversacionais.",
        results: "Geração de insights para aprimoramento contínuo das respostas e identificação de prioridades públicas."
      }
    }
  ],
  experiences: [
    {
      role: "Analista de Dados & Engenheiro de ETL",
      company: "TCM-GO (Tribunal de Contas dos Municípios de Goiás)",
      period: "Projeto Portal do Cidadão",
      type: "Setor Público / Governança & Auditoria",
      description: "Atuação como Analista de Dados no Tribunal de Contas dos Municípios de Goiás: desenvolvimento de rotinas de ETL e criação de relatórios e gráficos analíticos no Power BI para a aba 'Meio Ambiente' do Novo Portal do Cidadão.",
      achievements: [
        "Construção de pipelines de ETL em Python (Pandas) e SQL para ingestão e higienização de dados dos 246 municípios goianos.",
        "Desenvolvimento de relatórios e gráficos analíticos no Power BI para acompanhamento de políticas públicas e conformidade ambiental.",
        "Garantia de consistência, integridade e conformidade de dados fiscais consumidos pela sociedade e por auditores do tribunal."
      ]
    },
    {
      role: "Pesquisador & Analista de Dados e Telemetria",
      company: "Cripto EmotionLens & Projetos de Dados (GitHub)",
      period: "Constante",
      type: "Pesquisa Aplicada & Analytics",
      description: "Desenvolvimento de dashboards executivos no Power BI Cloud, análise de séries temporais afetivas e modelagem preditiva em Python.",
      achievements: [
        "Construção de relatórios e dashboards interativos no Microsoft Power BI com modelagem DAX avançada.",
        "Modelagem estatística e análise de séries temporais de microexpressões faciais no Cripto EmotionLens.",
        "Execução de benchmarks empíricos de desempenho computacional com análise de variância e latência."
      ]
    }
  ]
};
