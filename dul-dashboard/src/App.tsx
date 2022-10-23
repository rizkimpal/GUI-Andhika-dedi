import * as React from "react";
import { AppHeader } from "./AppHeader";
import { HomePage } from "HomePage";
import { ChakraProvider, theme } from "@chakra-ui/react";
export const App = () => (
  <ChakraProvider theme={theme}>
    <AppHeader />
    <HomePage />
  </ChakraProvider>
);
