# DESIGN.md - Portfólio Abraão Leopoldino

## Conceito
Revista técnica impressa + planta de engenharia. Estilo tipográfico suíço/editorial, grade visível, tipografia gigante, UMA cor chapada. O site é feito dos meus dados reais (setor público, 246 municípios de Goiás). Não é um "template de portfólio dev".

## Tokens (usar exatamente; definir como variáveis CSS/Tailwind e NÃO usar valores fora desta lista)
Cores:
- --bg: #F4F1EA | --ink: #121212 | --muted: #5E5B54 | --line: #121212 a 15% de opacidade
- --accent: #D9411E (vermelho-tijolo) usado SOMENTE em: hover de linhas de projeto, números de seção, o município em hover no mapa, sublinhado de link ativo, 1 bloco chapado por página (ex.: faixa de contato)
- Dark mode (prefers-color-scheme): --bg #121212, --ink #F4F1EA, --accent #FF6A3D
Fontes (Google Fonts, display=swap, e fallback):
- Display: "Instrument Serif" (fallback Georgia, serif)
- Corpo: "Schibsted Grotesk" 400/500/600 (fallback system-ui)
- Mono: "JetBrains Mono" 400/500 (fallback ui-monospace)
Escala tipográfica (desktop / mobile):
- Hero nome: clamp(3.5rem, 11vw, 9.5rem), line-height 0.95, letter-spacing -0.02em
- H2 de seção: clamp(2.25rem, 5vw, 4rem), line-height 1
- Título de projeto na lista: clamp(1.75rem, 3.5vw, 3rem)
- Corpo: 18px/1.6, máx. 62ch | Rótulo mono: 12px, uppercase, letter-spacing 0.08em
Espaçamento: base 8px; seções com padding vertical de 128px desktop / 80px mobile.
Grade: 12 colunas, container 1200px, gutter 24px. Linhas de 1px (--line) separando seções e colunas. Border-radius: 0 em tudo (exceto controles de formulário: 2px).

## Layout
- Cabeçalho fixo: altura 56px, nome à esquerda (Instrument Serif 20px), links à direita (mono 12px), linha de 1px embaixo. No mobile: só "AC" + botão "Menu" que abre lista em tela cheia. Mesmo container do conteúdo.
- Seções com título em coluna fixa (sticky, colunas 1-4) e conteúdo à direita (colunas 5-12) em ≥1024px; coluna única abaixo disso.
- Numeração de seção em mono na cor --accent: "01 / Projetos", "02 / Experiência" etc.

## PROIBIDO (qualquer item = refazer)
gradientes de qualquer tipo; box-shadow em cards; blur/backdrop-filter; glow; blobs/aurora/partículas; bento grid; cards arredondados idênticos; ícones decorativos (Lucide só em seta de link externo); emojis; Inter, Poppins, Geist, Roboto; roxo/ciano/verde-neon/laranja-gradiente; badges/pílulas; barras de progresso de skill; efeito de digitação; cursor customizado luminoso; fade-in em todo parágrafo; "Olá, eu sou"; 3 colunas de cards de features; faixa de estatísticas inventadas; qualquer número que eu não tenha fornecido.

## Movimento (respeitar prefers-reduced-motion)
- Hero: nome revelado por máscara linha a linha (clip-path, 600ms, ease cubic-bezier(.2,.7,.2,1), stagger 80ms), uma vez.
- Linhas SVG se desenham ao entrar na viewport (stroke-dashoffset), uma vez.
- Links: sublinhado cresce da esquerda para a direita em 250ms. Setas externas deslocam 3px na diagonal no hover.
- Lista de projetos: hover troca o fundo da linha para --accent e o texto para --bg em 150ms.
- Todo o resto: sem animação.

## Texto
Primeira pessoa, frases curtas, concretas. Palavras banidas: apaixonado, insights, jornada, inovador, soluções, sólida experiência, altíssimo volume, transformando dados. Sem títulos "X & Y". Sem travessão longo. Se faltar dado, escrever [PREENCHER]; NUNCA inventar.

## Checklist de autoauditoria (rodar ao fim de cada fase e listar o resultado)
[ ] Nenhum item da lista PROIBIDO aparece no código (buscar: gradient, shadow, blur, rounded-, Inter, emoji).
[ ] Só os tokens definidos são usados (sem cores/fontes/tamanhos fora da lista).
[ ] A cor --accent aparece apenas nos usos permitidos.
[ ] Funciona em 360px sem corte nem rolagem horizontal.
[ ] Contraste AA e foco visível.
[ ] Nenhum número ou fato que eu não forneci.