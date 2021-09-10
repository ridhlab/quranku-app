import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#8bd9ca",
      900: "#42a3a7",
    },
  },
  breakpoints,
});

export default theme;
