# Portfólio — Abraão Leopoldino

Portfólio profissional de Analista de Dados e Business Intelligence de Abraão Leopoldino. Desenvolvido com foco em esteiras ETL em Python, modelagem dimensional no Power BI e auditoria de dados públicos no Tribunal de Contas dos Municípios de Goiás (TCM-GO), consolidando indicadores dos 246 municípios goianos.

## Direção de Arte e Identidade Visual

O redesign foi concebido a partir de referências editoriais e técnicas contemporâneas:

- Tipografia: Chakra Petch (títulos de caráter técnico/pixel), Schibsted Grotesk (corpo de texto de alta legibilidade) e JetBrains Mono (telemetria, datas e metadados).
- Paleta Restrita: Dark por padrão (`#131316`) com alternância para modo claro (`#F8F8FA`). Uma única cor de destaque: Coral (`#FF5C42` no tema escuro e `#D9381E` no tema claro). Ausência total de gradientes e efeitos neon.
- Textura de Fundo: Grão de ruído fractal contínuo via SVG `feTurbulence` nativo no background (4,5% de opacidade), sem imagens pesadas e com repetição infinita sem quebras.
- Ilustração Conceitual do Hero: Malha vetorial wireframe de Goiás com os 246 municípios, gerada a partir da malha oficial do IBGE em script de build (<150 KB), com acendimento interativo e telemetria técnica.
- Componentes e Ícones: Cards com borda fina de 1px (`rounded-card`), layout de experiência em duas colunas e ícones pixel-art consistentes da biblioteca Pixelarticons (licença MIT).

## Tecnologias Utilizadas

- React 19
- React Router 7
- Vite 8
- Tailwind CSS 3.4
- d3-geo / topojson (geração e simplificação de coordenadas geográficas no build)
- Playwright (testes automatizados e auditoria visual responsiva)

## Estrutura do Projeto

- `src/components/Header.jsx`: Cabeçalho fixo no topo com monograma AL, navegação por âncoras e menu em tela cheia no mobile.
- `src/components/Hero.jsx`: Apresentação centralizada em coluna única com título display, telemetria de terminal, malha de Goiás e evolução cronológica de projetos.
- `src/components/GoiasMap.jsx`: Componente SVG interativo dos 246 municípios com coordenadas técnicas e indicador de auditoria.
- `src/components/Projects.jsx`: Lista estruturada dos 6 projetos com cards de 1px, tags em mono, previews e links diretos.
- `src/components/Experience.jsx`: Trajetória profissional em duas colunas com cargos em destaque e entregas em bullets com travessão coral.
- `src/components/Skills.jsx`: Habilidades técnicas divididas em 4 categorias estruturadas sem barras de progresso artificiais.
- `src/components/Contact.jsx`: Faixa de contato em destaque coral com botão de cópia tátil de e-mail e canais diretos.
- `src/components/Footer.jsx`: Rodapé minimalista com créditos técnicos e licenças.
- `src/pages/ProjectDetail.jsx`: Páginas de estudos de caso completos com abas técnicas e visualizador lightbox em alta resolução.
- `scripts/build-map.mjs`: Script para download e processamento da malha municipal do IBGE.
- `scripts/generate-og-image.mjs`: Gerador do card Open Graph oficial (1200x630).

## Execução Local

Instalar dependências:

```bash
npm install
```

Processar a malha geográfica de Goiás:

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

Visualizar o build compilado:

```bash
npm run preview
```

## Testes Automatizados

Executar testes de responsividade e integridade visual com Playwright:

```bash
node scripts/verify-etapa3.mjs
```

## Deploy

Configurado para hospedagem no Vercel com roteamento SPA preservado através do arquivo `vercel.json`.
