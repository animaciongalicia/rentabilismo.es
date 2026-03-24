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
        r: {
          dark:       "#1C3A22",  // verde bosque oscuro — texto principal y fondos hero
          green:      "#1F5438",  // verde bosque medio — botones, accents, secciones CTA
          "green-2":  "#2D7050",  // verde medio-claro — hover, variantes
          lime:       "#8DC63F",  // verde lima — favicon, marca
          cream:      "#F5F2EB",  // crema cálida — fondo principal
          warm:       "#EDE9DF",  // crema más oscura — secciones alternadas
          gold:       "#B5801E",  // oro apagado — acento secundario (uso muy contenido)
          muted:      "#6B6357",  // gris cálido — texto secundario
          border:     "#CFC9BE",  // borde sutil sobre crema
          "border-d": "#3E6A52",  // borde sobre verde oscuro (ajustado)
          white:      "#FDFCFA",  // blanco ligeramente cálido
        },
      },
      fontFamily: {
        display: ["var(--font-lora)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Escala tipográfica editorial
        "display-xl": ["clamp(3rem,   6.5vw, 5.25rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem,   4vw,   3.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em"  }],
        "display-md": ["clamp(1.5rem, 3vw,   2.25rem)", { lineHeight: "1.2",  letterSpacing: "-0.01em"  }],
        "display-sm": ["clamp(1.2rem, 2vw,   1.5rem)",  { lineHeight: "1.3",  letterSpacing: "-0.01em"  }],
      },
      maxWidth: {
        prose:   "68ch",    // ancho óptimo para uso inline (max-w-prose)
        narrow:  "860px",   // columna editorial — prosa amplia en páginas internas
        wide:    "1200px",  // contenedor ancho para grids
        mid:     "960px",   // contenedor medio
      },
      spacing: {
        section:      "6rem",   // padding vertical estándar de sección
        "section-sm": "3.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
