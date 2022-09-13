import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react";
import { AppRouter } from "./router/AppRouter";
import { customizedChakraTheme } from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={customizedChakraTheme}>
    <AppRouter />
  </ChakraProvider>
);
