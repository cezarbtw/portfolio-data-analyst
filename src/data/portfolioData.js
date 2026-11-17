export const personalInfo = {
  name: "Abraão Cezar Inácio",
  shortName: "Abraão Cezar",
  location: "Goiás, Brasil",
  email: "abraaocezarIL@outlook.com",
  phone: "+55 (62) 98280-1501",
  whatsapp: "5562982801501",
  github: "https://github.com/cezarbtw",
  githubUsername: "cezarbtw",
  linkedin: "https://www.linkedin.com/in/cezarinaciol/",
  powerBiReportUrl: "https://app.powerbi.com/groups/me/reports/100b5f1f-85d5-4f2d-b082-837165f1cb32/1e83521174a2c02425b5?experience=power-bi",
  status: "Disponível para novas oportunidades",
  availability: "Contratação Imediata (Remoto / Híbrido)"
};

export const dataAnalystData = {
  role: "Analista de Dados & BI",
  badge: "Power BI • Pipelines ETL • SQL Avançado • Automação de APIs • Machine Learning",
  accentColor: "emerald",
  gradientText: "from-emerald-400 via-teal-300 to-cyan-400",
  tagline: "Analista de Dados especializado em pipelines ETL, consultas SQL analíticas complexas, automação de validação de APIs de IA e relatórios executivos no Power BI.",
  headline: "Analista de Dados & BI focado em SQL avançado, ETL, Power BI e automação de auditoria de dados.",
  bio: [
    "Sou Analista de Dados com sólida experiência na concepção e sustentação de esteiras de ETL, modelagem dimensional e relacional, criação de dashboards interativos no Power BI (DAX) e desenvolvimento de scripts analíticos em Python e SQL para auditoria e governança de dados.",
    "No TCM-GO (Tribunal de Contas dos Municípios de Goiás), atuo como Analista de Dados desenvolvendo pipelines ETL em Python e SQL para saneamento e agregação de dados orçamentários dos 246 municípios goianos, com elaboração dos gráficos no Power BI para a aba 'Meio Ambiente' do Novo Portal do Cidadão.",
    "Também sou o autor de rotinas automatizadas de testes e validação da API de NER (Named Entity Recognition) do TCM-GO, processando extratos bancários e contábeis em paralelo e reconciliando os payloads JSON da IA contra consultas SQL complexas em bases de altíssimo volume (ORCAFI, COLARE e Data Warehouse)."
  ],
  stats: [
    { label: "Atuação TCM-GO", value: "246 Municípios", hint: "ETL, SQL e gráficos Power BI no Portal do Cidadão" },
    { label: "Power BI & BI", value: "Cloud / DAX", hint: "Modelagem dimensional Star Schema & KPIs" },
    { label: "Consultas & DW", value: "SQL Avançado", hint: "Joins cross-database, CTEs & nolock em big data" },
    { label: "Validação de IA", value: "API de NER", hint: "Automação paralela Python JSON x SQL" }
  ],
  skills: {
    categories: [
      {
        name: "SQL Avançado & Bancos de Dados",
        skills: [
          { name: "SQL para Auditoria (Cross-DB)", level: "Avançado", badge: "Core" },
          { name: "Otimização de Queries (with nolock)", level: "Avançado", badge: "Performance" },
          { name: "Modelagem Relacional & DW", level: "Avançado", badge: "Modeling" },
          { name: "MySQL, PostgreSQL & SQL Server", level: "Avançado", badge: "Databases" },
          { name: "Subqueries & Window Functions", level: "Avançado", badge: "Analytics" }
        ]
      },
      {
        name: "Engenharia de Dados, ETL & Automação",
        skills: [
          { name: "Python (Pandas, NumPy, Requests)", level: "Avançado", badge: "Core" },
          { name: "Automação de Testes de APIs (NER)", level: "Avançado", badge: "Quality" },
          { name: "Pipelines ETL & Data Wrangling", level: "Avançado", badge: "Pipelines" },
          { name: "Processamento Concorrente/Paralelo", level: "Avançado", badge: "Speed" },
          { name: "Reconciliação JSON x SQL", level: "Avançado", badge: "Data Match" }
        ]
      },
      {
        name: "Power BI & Machine Learning",
        skills: [
          { name: "Power BI (Desktop & Service)", level: "Avançado", badge: "BI Core" },
          { name: "Modelagem DAX (Medidas & Filtros)", level: "Avançado", badge: "DAX" },
          { name: "Modelagem Dimensional (Star Schema)", level: "Avançado", badge: "Architecture" },
          { name: "Visão Computacional (YOLOv8 & OpenCV)", level: "Avançado", badge: "AI/ML" },
          { name: "Análise de Séries Temporais", level: "Avançado", badge: "Statistics" }
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
      id: "tcmgo-ner-automation",
      title: "Automação de Validação da API de NER & Auditoria SQL",
      category: "Automação de Dados & Validação de IA",
      description: "Construção de suíte de testes e validação automatizada em Python para a API de Reconhecimento de Entidades Nomeadas (NER) utilizada no TCM-GO. Execução paralela sobre milhares de extratos bancários e relatórios contábeis, com reconciliação automatizada de payloads JSON contra consultas SQL em bases ORCAFI, COLARE e Data Warehouse.",
      tags: ["Python", "SQL Avançado", "API de NER", "Automação de Testes", "Data Quality", "Processamento Paralelo", "Auditoria"],
      featured: true,
      metrics: "Milhares de extratos validados | Reconciliação JSON x SQL | Processamento multithread | Relatórios automáticos de divergência",
      github: null,
      demo: null,
      caseStudy: {
        problem: "A equipe de auditoria do tribunal precisava validar a acurácia das entidades extraídas pela API de NER em documentos fiscais e extratos bancários públicos, tarefa inviável de ser executada manualmente devido ao volume massivo de envios municipais.",
        solution: "Desenvolvimento de rotinas em Python com processamento concorrente para consumir a API de NER, extrair os dados oficiais do banco relacional via consultas SQL otimizadas (com 'nolock' e joins dimensionais) e cruzar campos-chave (bancos, agências, contas, CPFs e valores) gerando relatórios de divergência em CSV e JSON.",
        techStackDetails: "Python, bibliotecas Requests, Pandas, re (regex), manipulação estruturada de JSON, queries SQL complexas integrando múltiplas bases do tribunal (COLARE_ETL, ORCAFI, DW e integrarfb) e geração de logs detalhados de auditoria.",
        results: "Redução drástica no tempo de homologação da API de inteligência artificial do tribunal, com detecção automática de inconsistências cadastrais e garantia de conformidade fiscal."
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
    }
  ],
  experiences: [
    {
      role: "Analista de Dados & Automação de Auditoria",
      company: "TCM-GO (Tribunal de Contas dos Municípios de Goiás)",
      period: "Projeto Portal do Cidadão & Auditoria de IA",
      type: "Setor Público / Governança & Auditoria",
      description: "Atuação como Analista de Dados no TCM-GO: desenvolvimento de rotinas de ETL e criação de relatórios/gráficos no Power BI para o Portal do Cidadão, além de automação de testes da API de NER com reconciliação JSON x SQL.",
      achievements: [
        "Criação e execução de scripts SQL complexos em bases de altíssimo volume (ORCAFI, COLARE_ETL, DW) para auditoria contábil e de folha de pagamento.",
        "Desenvolvimento de suíte de testes em Python para validação concorrente da API de IA (NER) em extratos bancários municipais.",
        "Construção de pipelines ETL e relatórios analíticos no Power BI para acompanhamento de políticas públicas ambientais dos 246 municípios."
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
