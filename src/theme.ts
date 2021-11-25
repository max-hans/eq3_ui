import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  global: (props: any) => ({
    root: {
      bg: props.colorMode === "light" ? "red.100" : "blue.200",
    },
  }),
  colors: {
    main: {
      1: "#gray.100",
      2: "#5e60ceff",
      3: "#4ea8deff",
      4: "#56cfe1ff",
      5: "#72efddff",
    },
  },
  components: {
    Button: {
      variants: {
        thomas: {
          h: "50px",
          flex: "1",
          color: "teal.300",
          bg: "gray.50",
        }
      }
    }
  }
});

export default theme;
