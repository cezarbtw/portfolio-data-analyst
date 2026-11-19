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
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"Schibsted Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero-name': ['clamp(3.5rem, 11vw, 9.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'section-h2': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1' }],
        'project-title': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.05' }],
        'body-base': ['18px', { lineHeight: '1.6' }],
        'label-mono': ['12px', { letterSpacing: '0.08em' }],
      },
      maxWidth: {
        container: '1200px',
        prose: '62ch',
      },
      spacing: {
        'section-desk': '128px',
        'section-mob': '80px',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        form: '2px',
      },
    },
  },
  plugins: [],
}
