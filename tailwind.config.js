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
        paper: {
          light: '#FAF9F6',
          alt: '#F3F1EB',
          dark: '#141413',
          darkAlt: '#1A1918',
        },
        ink: {
          light: '#1C1C1A',
          dark: '#EAE8E3',
        },
        muted: {
          light: '#444440',
          dark: '#A8A69E',
        },
        line: {
          light: '#E5E3DD',
          dark: '#282826',
        },
        accent: {
          light: '#1F4E5F',
          dark: '#6EA3B4',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Charter', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '760px',
        showcase: '980px',
      },
      lineHeight: {
        relaxed: '1.65',
      },
    },
  },
  plugins: [],
}
