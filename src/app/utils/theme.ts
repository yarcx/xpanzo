import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#0F9576", //primary green color
    800: "#00C29D", //lighter green color
    700: "#F8F8F8", //footer bg color
  },
};

export const theme = extendTheme({ colors });
