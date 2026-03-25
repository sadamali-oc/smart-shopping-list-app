// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // or 'class'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",   // Example custom color
        secondary: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite", // for your logo spin
      },
    },
  },
  plugins: [],
};

export default config;