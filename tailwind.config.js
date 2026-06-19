/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--surface-base)",
        deep: "var(--surface-deep)",
        raised: "var(--surface-raised)",
        ink: "var(--ink)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          ink: "var(--accent-ink)",
        },
        stroke: {
          subtle: "var(--stroke-subtle)",
          DEFAULT: "var(--stroke-strong)",
          field: "var(--stroke-strong)",
        },
        fg: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
      fontFamily: {
        // Geist for display + body, Geist Mono for genuine metadata.
        display: ['"Geist"', '"Inter"', '"Segoe UI"', "sans-serif"],
        sans: ['"Geist"', '"Segoe UI"', "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tight: "-0.01em", // display headings
        cta: "0", // editorial buttons sit in normal case
        label: "0.16em", // uppercase mono metadata
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        // One conformed radius for all box UI; full reserved for the status dot.
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        control: "8px",
        btn: "8px",
        card: "8px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
