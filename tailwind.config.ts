/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary-color)",
          dark: "var(--primary-color)",
          gold: "var(--accent-color)",
          blue: "var(--sky)",
          indigo: "var(--indigo)",
          purple: "var(--indigo)",
          light: "var(--background-color)",
        },
        secondary: "var(--secondary-color)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent-color)",
        "accent-foreground": "var(--accent-foreground)",
        muted: "var(--muted-color)",
        "muted-foreground": "var(--muted-foreground)",
        destructive: "var(--destructive-color)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border-color)",
        input: "var(--input-color)",
        ring: "var(--ring-color)",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};
