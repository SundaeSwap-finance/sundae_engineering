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
        },
        stroke: {
          subtle: "var(--stroke-subtle)",
          DEFAULT: "var(--stroke-strong)",
          field: "var(--stroke-field)",
        },
        fg: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Barlow"', '"Segoe UI"', "sans-serif"],
        sans: ['"Barlow"', '"Segoe UI"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        // Three deliberate steps, not the prior ad-hoc spread of six values.
        tight: "0.01em", // display headings
        cta: "0.1em", // buttons / interactive labels
        label: "0.18em", // uppercase metadata (mono indices, status)
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        control: "2px",
      },
    },
  },
  plugins: [],
};
