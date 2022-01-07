import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      "100": "#FFBA08",
      "50": "rgba(255, 186, 8, 0.5)",
    },
    dark: {
      black: "#000",
      headings_text: "#47585B",
      info: "#999",
      info_50: "rgba(153, 153, 153, 0.5)",
    },
    light: {
      white: "#fff",
      headings_text: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: { color: "dark.headings_text", background: "light.headings_text" },
    },
  },

  "--swiper-pagination-bullet-inactive-color": "pink",
});
