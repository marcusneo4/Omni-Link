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
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        surface: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          elevated: "#FAFAF9",
          "elevated-pure": "#F9F9F8",
        },
        ink: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          "on-dark": "#FAFAF9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "slide-up": "slideUp 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "ease-out-snappy": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      boxShadow: {
        soft: "0 2px 4px -1px rgb(15 23 42 / 0.04), 0 1px 2px -1px rgb(15 23 42 / 0.03)",
        elevated:
          "0 4px 6px -2px rgb(15 23 42 / 0.05), 0 2px 4px -2px rgb(15 23 42 / 0.04), 0 0 0 1px rgb(15 23 42 / 0.02)",
        premium:
          "0 12px 24px -4px rgb(15 23 42 / 0.06), 0 4px 8px -2px rgb(15 23 42 / 0.04), 0 0 0 1px rgb(15 23 42 / 0.03)",
        "premium-lg":
          "0 24px 48px -8px rgb(15 23 42 / 0.08), 0 8px 16px -4px rgb(15 23 42 / 0.04), 0 0 0 1px rgb(15 23 42 / 0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
