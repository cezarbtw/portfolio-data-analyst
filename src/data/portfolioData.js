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
  badge: "Power BI, ETL, SQL Avançado, Python & Machine Learning",
  accentColor: "emerald",
  gradientText: "from-emerald-400 via-teal-300 to-cyan-400",
  tagline: "Transformando dados brutos e dispersos em inteligência acionável, pipelines confiáveis e dashboards estratégicos no Power BI.",
  headline: "Analista de Dados focado em ETL robusto, SQL avançado, Power BI e Data Storytelling para tomada de decisão.",
  bio: [
    "Sou Analista de Dados com forte experiência prática em engenharia de pipelines ETL, modelagem relacional e dimensional, SQL avançado, Power BI (DAX e dashboards interativos) e programação analítica em Python (Pandas, NumPy, Matplotlib).",
    "No TCM-GO (Tribunal de Contas dos Municípios de Goiás), desenvolvi e sustentei pipelines de ETL para a aba 'Meio Ambiente' do Novo Portal do Cidadão, tratando, higienizando e consolidando bases de dados dos 246 municípios goianos para gerar indicadores confiáveis de gastos públicos e conformidade ambiental.",
    "Além do Business Intelligence tradicional, possuo experiência prática em Machine Learning e Visão Computacional (YOLOv8), aplicando métricas estatísticas rigorosas (mAP, Precision, Recall) para extração de dados analíticos a partir de imagens."
  ],
  stats: [
    { label: "Municípios Mapeados", value: "246", hint: "Todos os municípios de Goiás no TCM-GO" },
    { label: "Pipelines ETL", value: "100%", hint: "Automação de extração e tratamento" },
    { label: "Power BI & BI", value: "DAX", hint: "Dashboards dinâmicos em nuvem" },
    { label: "Bancos & Consultas", value: "SQL / Python", hint: "Pandas, PostgreSQL & MySQL" }
  ],
  skills: {
    categories: [
      {
        name: "Engenharia de Dados & ETL",
        skills: [
          { name: "Python (Pandas & NumPy)", level: "Avançado", badge: "Core" },
          { name: "Pipelines ETL / ELT", level: "Avançado", badge: "Core" },
          { name: "Data Cleaning & Wrangling", level: "Avançado", badge: "Quality" },
          { name: "Automação de Scripts", level: "Avançado", badge: "Productivity" },
          { name: "Integração de APIs de Dados", level: "Avançado", badge: "Ingestion" },
          { name: "Validação & Governança", level: "Intermediário/Avançado", badge: "Audit" }
        ]
      },
      {
        name: "Bancos de Dados & SQL Avançado",
        skills: [
          { name: "SQL (Queries Complexas)", level: "Avançado", badge: "Core" },
          { name: "Window Functions & CTEs", level: "Avançado", badge: "Analytics" },
          { name: "Modelagem Relacional / DW", level: "Avançado", badge: "Modeling" },
          { name: "PostgreSQL & MySQL", level: "Avançado", badge: "Databases" },
          { name: "Otimização de Consultas", level: "Intermediário/Avançado", badge: "Performance" }
        ]
      },
      {
        name: "Power BI & Machine Learning",
        skills: [
          { name: "Power BI & Medidas DAX", level: "Avançado", badge: "BI Cloud" },
          { name: "Dashboards & Storytelling", level: "Avançado", badge: "BI" },
          { name: "Definição de Métricas & KPIs", level: "Avançado", badge: "Business" },
          { name: "Visão Computacional (YOLOv8)", level: "Avançado", badge: "ML/AI" },
          { name: "Estatística Descritiva & EDA", level: "Avançado", badge: "Statistics" }
        ]
      }
    ]
  },
  projects: [
    {
      id: "power-bi-report",
      title: "Dashboard & Relatório Interativo no Power BI",
      category: "Business Intelligence & Analytics",
      description: "Relatório executivo analítico desenvolvido e publicado no Microsoft Power BI Cloud. Apresenta modelagem dimensional de dados (Star Schema), métricas calculadas em DAX, filtros dinâmicos cruzados e storytelling orientado à tomada de decisão estratégica.",
      tags: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "KPIs", "Storytelling"],
      featured: true,
      metrics: "Relatório Oficial Power BI Cloud | Filtros dinâmicos cruzados | Métricas DAX calculadas",
      github: null,
      demo: "https://app.powerbi.com/groups/me/reports/100b5f1f-85d5-4f2d-b082-837165f1cb32/1e83521174a2c02425b5?experience=power-bi",
      caseStudy: {
        problem: "Gestores precisavam de uma visão holística, intuitiva e centralizada dos dados para rápida identificação de padrões e desvios de desempenho sem a lentidão e risco de erro humano de planilhas estáticas.",
        solution: "Desenvolvimento de um painel interativo no Power BI aplicando boas práticas de visualização de dados, fórmulas DAX para análise temporal e comparativa, e estrutura modular de filtros por categoria e período.",
        techStackDetails: "Modelagem em esquema estrela (Star Schema), criação de medidas DAX (medidas rápidas, acumulados e proporções), formatação condicional inteligente e publicação no Power BI Service.",
        results: "Geração de relatórios com atualização contínua, permitindo análises aprofundadas com capacidade de drill-down em poucos cliques."
      }
    },
    {
      id: "tcmgo-etl",
      title: "Pipeline ETL & Indicadores Ambientais TCM-GO",
      category: "Engenharia de Dados & Governança",
      description: "Construção de esteiras completas de extração, tratamento e carregamento de dados (ETL) para a aba 'Meio Ambiente' do Portal do Cidadão do TCM-GO. Consolidação de bases contábeis, orçamentárias e ambientais dos 246 municípios goianos.",
      tags: ["Python", "SQL", "Pandas", "ETL Pipelines", "Data Wrangling", "Auditoria Pública"],
      featured: true,
      metrics: "246 Municípios analisados | Milhões de dados fiscais saneados | 100% automatizado",
      github: null,
      demo: "https://portalcidadao.tcmgo.tc.br/new-portal-cidadao/",
      caseStudy: {
        problem: "Bases de dados orçamentárias municipais apresentavam inconsistências de digitação, registros duplicados e formatos divergentes, inviabilizando a consolidação direta de indicadores ambientais para o cidadão.",
        solution: "Implementação de scripts e rotinas ETL em Python e SQL para extrair dados brutos de prestação de contas, aplicar regras de higienização e validação contábil, e estruturar tabelas de fatos e dimensões para consulta rápida no portal.",
        techStackDetails: "Pipelines em Python com Pandas para transformação vetorizada, rotinas de saneamento de strings e datas, e queries SQL otimizadas com agregações por exercício e município.",
        results: "Alimentação estável e auditável do Novo Portal do Cidadão, permitindo que a sociedade e os órgãos de controle verifiquem a real destinação de recursos para o meio ambiente em Goiás."
      }
    },
    {
      id: "detector-rachaduras-data",
      title: "Análise Preditiva & Métricas com YOLOv8",
      category: "Machine Learning & Visão Computacional",
      description: "Extração de dados quantitativos e análise de métricas estruturais a partir de imagens de fissuras utilizando modelo de redes neurais profundas (YOLOv8).",
      tags: ["Python", "YOLOv8", "Métricas mAP", "Visão Computacional", "OpenCV", "Estatística"],
      featured: true,
      metrics: "Avaliação estatística de precisão (mAP50-95) | Extração de área de defeitos | Classificação automática",
      github: "https://github.com/cezarbtw/Detector-de-Rachaduras",
      demo: null,
      caseStudy: {
        problem: "Transformar fotos de inspeção de obras em dados numéricos acionáveis para relatórios de patologia estrutural.",
        solution: "Treinamento e validação de modelo YOLOv8 com métricas rigorosas de Precision, Recall e mAP, associando algoritmo para extração do comprimento e espessura estimada das rachaduras.",
        techStackDetails: "Python, frameworks de IA, cálculo estatístico de matriz de confusão e curvas PR (Precision-Recall).",
        results: "Conversão de dados não estruturados (fotos) em tabelas analíticas com índice de severidade de risco para suporte a laudos periciais."
      }
    },
    {
      id: "chatbot-analytics",
      title: "Análise de Dados de Consultas Ambientais (ChatBot)",
      category: "NLP & Análise Textual",
      description: "Estruturação de dados conversacionais e categorização de demandas populares relacionadas a meio ambiente e sustentabilidade.",
      tags: ["Python", "NLP", "Text Mining", "Análise de Frequência", "Clustering"],
      featured: false,
      metrics: "Classificação de tópicos | Identificação de termos críticos | Relatórios de engajamento",
      github: "https://github.com/cezarbtw/ChatBot-Meio-Ambiente",
      demo: null,
      caseStudy: {
        problem: "Identificar quais são as maiores dúvidas e gargalos de informação da população em relação às leis e políticas ambientais municipais.",
        solution: "Tratamento de corpus de texto, remoção de stopwords, tokenização e contagem de frequência de termos para mapear as principais dores do público.",
        techStackDetails: "Python, bibliotecas de manipulação textual e estruturação tabular de dados conversacionais.",
        results: "Geração de insights para aprimoramento contínuo das respostas do bot e identificação de temas prioritários para políticas públicas."
      }
    },
    {
      id: "clinica-sql-analytics",
      title: "Modelagem e Análise de Dados Clínicos (Projeto Médicos)",
      category: "Modelagem SQL & Analytics",
      description: "Arquitetura de banco de dados relacional e consultas analíticas para cálculo de taxas de absenteísmo, ocupação de consultórios e tempo médio de espera.",
      tags: ["SQL Avançado", "Modelagem de Dados", "Agregações", "MySQL", "Indicadores de Saúde"],
      featured: true,
      metrics: "Modelagem normalizada (3FN) | Otimização de tempo de query em 60% | KPIs operacionais",
      github: "https://github.com/cezarbtw/Projeto-Medicos",
      demo: null,
      caseStudy: {
        problem: "Clínicas médicas com bases operacionais lentas para gerar relatórios de faturamento e produtividade médica.",
        solution: "Criação de índices estratégicos, views analíticas e queries com joins e agregações para gerar relatórios em tempo real sem onerar o banco transacional.",
        techStackDetails: "MySQL, índices compostos, modelagem entidade-relacionamento e scripts SQL de auditoria de dados.",
        results: "Redução no tempo de extração de relatórios e identificação de horários ociosos para maximizar a capacidade de atendimento."
      }
    },
    {
      id: "emotion-data-dashboard",
      title: "Visualização e Storytelling de Métricas (Emotion Dashboard)",
      category: "Data Visualization & BI",
      description: "Painel de métricas comportamentais com distribuição quantitativa de dados e curvas de tendência temporal.",
      tags: ["Data Viz", "CSS Charts", "Métricas Quantitativas", "Storytelling"],
      featured: false,
      metrics: "Gráficos de dispersão | Indicadores de tendência | Taxas de correlação",
      github: "https://github.com/cezarbtw/emotion-dashboard",
      demo: null,
      caseStudy: {
        problem: "Apresentar indicadores densos de forma limpa, permitindo que tomadores de decisão identifiquem anomalias em segundos.",
        solution: "Desenvolvimento de visualizações focadas em clareza analítica, eliminando ruído gráfico (chart junk) e destacando tendências críticas.",
        techStackDetails: "Layouts baseados em grid analítico, normalização de escalas de dados e destaques condicionais por limiar de alerta.",
        results: "Compreensão ágil das métricas e alta retenção de informação visual."
      }
    }
  ],
  experiences: [
    {
      role: "Desenvolvedor & Engenheiro de ETL (Dados Públicos)",
      company: "TCM-GO (Tribunal de Contas dos Municípios de Goiás)",
      period: "Projeto Portal do Cidadão",
      type: "Setor Público / Governança & Auditoria",
      description: "Responsável pelo desenvolvimento de rotinas de ETL e tratamento de bases orçamentárias e ambientais para alimentar o módulo 'Meio Ambiente' do Novo Portal do Cidadão.",
      achievements: [
        "Desenvolvimento de rotinas para ingestão e higienização de dados de 246 municípios de Goiás.",
        "Criação de indicadores consolidados de gastos públicos ambientais e conformidade com diretrizes do tribunal.",
        "Garantia de integridade e auditoria de dados fiscais consumidos em larga escala pelo público e por auditores externos."
      ]
    },
    {
      role: "Pesquisador & Desenvolvedor de Modelos de Dados, BI e IA",
      company: "Projetos de Dados, BI & IA (GitHub)",
      period: "Constante",
      type: "Pesquisa Aplicada & Open Source",
      description: "Desenvolvimento de dashboards executivos no Power BI, pipelines analíticos ETL, modelos preditivos em visão computacional e relatórios estatísticos com Python.",
      achievements: [
        "Construção de relatórios e dashboards interativos no Microsoft Power BI com modelagem DAX.",
        "Desenvolvimento de esteiras completas em Python/Pandas para tratamento de milhões de registros públicos.",
        "Implementação de pipelines para inferência e segmentação com YOLOv8 e extração de métricas de qualidade (mAP)."
      ]
    }
  ]
};
