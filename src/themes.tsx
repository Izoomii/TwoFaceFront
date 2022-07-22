import { extendTheme } from "@chakra-ui/react";

export const themes = extendTheme({
  colors: {
    main: {
      0: "#000000", //black
      1: "#FFFFFF", //white
      100: "#a0acb2",
      200: "#e3e4e8",
      300: "#d1d7ad",
      400: "#848f4b",
      500: "#3a4218",
      //
      600: "#B2C484",
      700: "#7C8E76",
      800: "#576651",
      900: "#384035",
      1000: "#ff0f0f",
    },
  },
  components: {
    Input: {
      variants: {
        default: {
          bg: "white",
          focusBorderColor: "main.300",
          _focus: { bg: "white" },
        },
      },
    },
    Button: {
      variants: {
        "green.light": {
          bg: "main.400",
          textColor: "black",
          _hover: {
            bg: "main.200",
            textColor: "main.500",
          },
        },
        "green.dark": {
          bg: "main.500",
          textColor: "white",
          _hover: {
            bg: "main.300",
            textColor: "main.500",
          },
        },
        "red.default": {
          bg: "main.1000",
          textColor: "white",
          _hover: {
            bg: "main.200",
            textColor: "main.1000",
          },
        },
      },
    },
  },
});

// bg={"main.500"}
// textColor={"white"}
// _hover={{ textColor: "main.500", bg: "main.300" }}
