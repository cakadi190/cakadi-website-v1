/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,tsx,jsx}",
    "./layouts/**/*.{vue,js,ts,tsx,jsx}",
    "./pages/**/*.{vue,js,ts,tsx,jsx}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.{vue,js,ts,tsx,jsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Signika', 'Arial', 'Helvetica', 'sans-serif'],
      sans: ['Signika', 'Arial', 'Helvetica', 'sans-serif'],
      serif: ['Roboto Slab', 'Times New Roman', 'serif'],
      mono: ['DM Mono', 'Menlo', 'Consolas', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}

