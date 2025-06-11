/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      serif: ['Josefin Sans', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
  plugins: [],
}