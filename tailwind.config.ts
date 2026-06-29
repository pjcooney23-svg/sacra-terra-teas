import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          50: "#F7F4EC",
          100: "#FBF9F3",
          200: "#DED9CD",
        },
        forest: {
          DEFAULT: "#24382A",
          50: "#F1F3EE",
          100: "#DED9CD",
          200: "#B8C2AE",
          300: "#9AAE8E",
          400: "#536453",
          500: "#536453",
          600: "#24382A",
          700: "#1B2B20",
          800: "#15211A",
          900: "#0F1712",
        },
        gold: {
          DEFAULT: "#B0924C",
          50: "#F8F1E2",
          100: "#EFE1C0",
          200: "#DDC68C",
          300: "#CBB068",
          400: "#B0924C",
          500: "#96793A",
          600: "#7A622E",
        },
        clay: {
          DEFAULT: "#a85c3c",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(47, 64, 48, 0.08)",
      },
      keyframes: {
        "specimen-in-forward": {
          "0%": { opacity: "0", transform: "translateX(16px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        "specimen-in-back": {
          "0%": { opacity: "0", transform: "translateX(-16px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "specimen-in-forward": "specimen-in-forward 420ms ease-out",
        "specimen-in-back": "specimen-in-back 420ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
