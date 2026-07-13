import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBF9F1",
        surface: "#FFFFFF",
        ink: "#132A21",
        "ink-soft": "#3F5548",
        green: {
          950: "#0A2E22",
          900: "#0B3D2E",
          700: "#155843",
          500: "#1F6E4F",
          300: "#5E9B82",
          100: "#DCEAE3",
        },
        gold: {
          600: "#A8811E",
          500: "#C9A227",
          300: "#E4C878",
          100: "#F3E9C9",
        },
        cream: {
          100: "#F3EEDF",
          200: "#EAE2CC",
        },
      },
      fontFamily: {
        display: ["var(--font-amiri)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(11, 61, 46, 0.25)",
        card: "0 4px 24px -8px rgba(11, 61, 46, 0.15)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
