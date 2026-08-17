import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F3EE",
        ink: "#1B1D1F",
        rail: "#E30613",
        slate: {
          DEFAULT: "#212F3B",
          light: "#2C3E4A",
        },
        glacier: "#6E93A6",
        stone: "#C7C1B3",
      },
      fontFamily: {
        display: ["var(--font-serif-tc)", "Noto Serif TC", "serif"],
        body: ["var(--font-sans-tc)", "Noto Sans TC", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        rail: "repeating-linear-gradient(90deg, transparent, transparent 22px, rgba(27,29,31,0.08) 22px, rgba(27,29,31,0.08) 26px)",
      },
    },
  },
  plugins: [],
};

export default config;
