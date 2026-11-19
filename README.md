# Portfólio — Abraão Cezar Inácio

Portfólio editorial de Analista de Dados e Business Intelligence. Desenvolvido com foco em dados reais do setor público (Tribunal de Contas dos Municípios de Goiás — TCM-GO), consolidação dos 246 municípios do estado de Goiás, esteiras ETL em Python, consultas analíticas em SQL e relatórios no Power BI.

## Conceito Visual

- Direção tipográfica editorial e planta técnica: Instrument Serif (display), Schibsted Grotesk (corpo) e JetBrains Mono (dados e metadados).
- Paleta restrita: fundo off-white quente (`#F4F1EA`), tipografia em quase preto (`#121212`) e vermelho-tijolo (`#D9411E`) como cor de destaque técnica.
- Mapa vetorial dos 246 municípios de Goiás gerado no build via malhas oficiais do IBGE (sem bibliotecas de mapas no cliente).
- Suporte a modo escuro nativo via `prefers-color-scheme`.
- Navegação SPA com View Transitions API e restauração de rolagem.

## Tecnologias

- React 19
- React Router 7
- Vite 8
- Tailwind CSS
- d3-geo / topojson (scripts de build para malhas geográficas)
- Playwright (testes e auditoria visual automatizada)

## Execução Local

Instalar dependências:

```bash
npm install
```

Gerar a malha do mapa de Goiás (IBGE):

```bash
node scripts/build-map.mjs
```

Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Compilar para produção:

```bash
npm run build
```

Visualizar o build de produção localmente:

```bash
npm run preview
```

## Estrutura do Código

- `scripts/build-map.mjs`: Script de build que consome a API do IBGE, simplifica as geometrias e gera `src/assets/goias.svg.json`.
- `src/components/GoiasMap.jsx`: Componente SVG vetorial dos 246 municípios com acendimento e hover interativo.
- `src/components/Header.jsx`: Cabeçalho fixo com scroll-spy e barra de progresso de leitura (2px).
- `src/components/Hero.jsx`: Apresentação com revelação em máscara tipográfica e fatos editoriais.
- `src/components/Projects.jsx`: Lista de projetos com layout assimétrico, hover em destaque e preview flutuante.
- `src/pages/ProjectDetail.jsx`: Estudos de caso detalhados (Problema, Solução, Arquitetura e Resultados) com visualização em alta resolução.
- `src/components/ImageLightbox.jsx`: Modal de zoom acessível com navegação por teclado (Esc).
- `src/components/Experience.jsx`: Trajetória profissional e auditoria técnica no setor público.
- `src/components/Skills.jsx`: Habilidades técnicas organizadas em texto corrido por domínios.
- `src/components/Contact.jsx`: Faixa de contato em bloco chapado com e-mail display e links diretos.
