import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        "background-purple": "#12121a",
        "gatopera-purple": "#7c3aed",
        "gatopera-purple-dark": "#4c1d95",
        "border-purple": "rgba(124, 58, 237, 0.3)",
      },
      backgroundImage: {
        landing: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(167, 139, 250, 0.08) 0%, transparent 40%), #0a0a0f",
      },
    },
  },
  plugins: [],
};
export default config;