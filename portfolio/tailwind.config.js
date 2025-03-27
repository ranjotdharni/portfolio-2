import { transform } from 'typescript';

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
      },
      backgroundImage: {
        "blob1": "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23cd1787%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%23430a71%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M784.5 634.5Q715 769 559.5 845T263 801.5Q122 682 127.5 502.5t138-313.5Q398 55 593.5 96t228 222.5q32.5 181.5-37 316Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M784.5 634.5Q715 769 559.5 845T263 801.5Q122 682 127.5 502.5t138-313.5Q398 55 593.5 96t228 222.5q32.5 181.5-37 316Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",

      },
    },
  },
  plugins: [],
}

