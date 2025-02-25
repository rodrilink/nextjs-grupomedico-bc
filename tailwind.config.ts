import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
// import { gridAreas } from "tailwindcss-grid-areas";

export default {
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
      },
      gridTemplateColumns: {
        layout: "1fr",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const areasUtilities = {
        ".grid-areas-layout": {
          gridTemplateAreas: `
            "header"
            "main"
            "footer"
          `,
        },
        ".grid-areas-header": { gridArea: "header" },
        ".grid-areas-main": { gridArea: "main" },
        ".grid-areas-footer": { gridArea: "footer" },
      };

      addUtilities(areasUtilities);
    }),
  ],
} satisfies Config;
