/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Code', 'Courier New', 'monospace'],
        'inter': ['Inter', 'ui-sans-serif', 'system-ui'],
        'jetbrains': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['Fira Code', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}
