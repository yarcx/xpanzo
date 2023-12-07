import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#0F9576",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });
