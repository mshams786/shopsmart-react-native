import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./theme";
import { StatusBar } from "react-native";
import HomePage from "./pages/homePage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      <HomePage />
    </ThemeProvider>
  );
}
