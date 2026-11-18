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
          dark: '#141413',
        },
        ink: {
          light: '#1C1C1A',
          dark: '#EAE8E3',
        },
        muted: {
          light: '#6B6B66',
          dark: '#96948E',
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
        prose: '720px',
        showcase: '1040px',
      },
      lineHeight: {
        relaxed: '1.65',
      },
    },
  },
  plugins: [],
}
