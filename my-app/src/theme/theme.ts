import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/button.styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { HeadingStyles as Heading } from "./components/Heading.styles";
export const customizedChakraTheme = extendTheme({
  // If you want to override any component themes from the Chakra module, import your styles
  // to this file and declare them in this extendTheme method. (Button.styles above is an example)
  colors,
  fonts,
  components: {
    Button,
    Heading,
  },
});
