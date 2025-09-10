import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    theme: {
      dark: "#212121",
      light: "#e3e3e3",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Source Code Pro', monospace",
      },
    },
  },
});

export default theme;
