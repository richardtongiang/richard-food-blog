import { ComponentStyleConfig } from "@chakra-ui/react";
import { getParseTreeNode } from "typescript";

export const ButtonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    color: "primary.greenBase",
    padding: "100px",
    bg: "black",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      color: "green",
      padding: "100px",
      bg: "black",
      width: "50%",
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {},
};
