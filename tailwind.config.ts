import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // light theme
        "primary": "#FFFFFF",
        "primary-text": "#000000",
        "secondary": "#F7F6FE",
        "secondary-text": "#9E9E9E",
        "accent": "#624DE3",
        "accent-text": "#FFFFFF",
        "page-current-bg": "#624DE3",
        "page-current-text": "#FFFFFF",
        "page-other-bg": "#E0E0E0",
        "page-other-text": "#000000",
        "page-size-selector": "#E0E0E0",
        "page-size-selector-icon": "#9E9E9E",
        "widget-search": "#9E9E9E",
        "status-delivered-text": "#1F9254",
        "status-delivered-bg": "#EBF9F1",
        "status-process-text": "#CD6200",
        "status-process-bg": "#FEF2E5",
        "status-canceled-text": "#A30D11",
        "status-canceled-bg": "#FBE7E8",

        // dark theme
        "dark-primary": "#1D1E42",
        "dark-primary-text": "#FFFFFF",
        "dark-secondary": "#26264F",
        "dark-secondary-text": "#FFFFFF",
        "dark-accent": "#624DE3",
        "dark-accent-text": "#FFFFFF",
        "dark-page-current-bg": "#624DE3",
        "dark-page-current-text": "#FFFFFF",
        "dark-page-other-bg": "#141432",
        "dark-page-other-text": "#FFFFFF",
        "dark-page-size-selector": "#141432",
        "dark-page-size-selector-icon": "#FFFFFF",
        "dark-widget-search": "#FFFFFF",
        "dark-status-delivered-text": "#1F9254",
        "dark-status-delivered-bg": "#EBF9F1",
        "dark-status-process-text": "#CD6200",
        "dark-status-process-bg": "#FEF2E5",
        "dark-status-canceled-text": "#A30D11",
        "dark-status-canceled-bg": "#FBE7E8",
      }
    },
  },
  plugins: [],
};
export default config;
