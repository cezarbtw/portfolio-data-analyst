/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        line: 'var(--line)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-subtle': 'var(--accent-subtle)',
      },
      fontFamily: {
        display: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Schibsted Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        card: '8px',
        sm: '4px',
        md: '6px',
        lg: '8px',
      },
      maxWidth: {
        content: '880px',
        container: '1200px',
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
