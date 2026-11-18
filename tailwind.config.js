/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // ── Base ──────────────────────────────────────────────────
        canvas:   '#F4F1EA',       // fundo off-white quente
        ink:      '#121212',       // texto quase-preto
        'canvas-dark': '#0E0D0B', // fundo dark
        'ink-dark':    '#E8E5DC', // texto dark
        // ── Cor forte (uma, chapada) ────────────────────────────
        strong:   '#D9411E',       // vermelho-tijolo
        // ── Grade / estrutural ──────────────────────────────────
        rule:     '#D6D2C8',       // linhas de grade 1px (light)
        'rule-dark': '#272520',    // linhas de grade 1px (dark)
        muted:    '#6E6A63',       // texto secundário light (AA ✓)
        'muted-dark': '#9B9790',   // texto secundário dark  (AA ✓)
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body:    ['"Hanken Grotesk"', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem,11vw,10rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem,6vw,5.5rem)',  { lineHeight: '0.97', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.6rem,3.5vw,3rem)',  { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '72rem',   // 1152px — grade máxima
        prose:   '42rem',   // coluna de texto
      },
    },
  },
  plugins: [],
}
