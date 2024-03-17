import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      }
    },
    colors: {
      darkBg: '#0D101B',
      btnPurple: 'rgba(107, 80, 255, 1)',
      skPurple: "rgba(129, 110, 205, 0.25)",
      muted: "rgb(152, 155, 167)",
      white: "white",
      lightBg: "#222530",
      shadcnMuted: "hsl(210, 40%, 96.1%)",
    }
  },
  plugins: [],
};
export default config;
