/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jbm: ['jbm', 'sans-serif'],
        jbmi: ['jbmi', 'sans'],
        roboto: ['roboto', 'sans-serif'],
        robotoi: ['robotoi', 'sans']
      },
      colors: {
        "color-bg": "var(--color-bg)",
        "color-pink": "var(--color-pink)",
        "color-purple": "var(--color-purple)",
        "color-white": "var(--color-white)",
        "color-dark-white": "var(--color-dark-white)",
        "color-light-grey": "var(--color-light-grey)",
        "color-bg-contrast": "var(--color-bg-contrast)"
      }
    },
  },
  plugins: [],
}

