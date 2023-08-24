import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "./components/utils/shopsmart-heading/theme";
import { StatusBar } from "react-native";
import SideBar from "./components/utils/sidebar/sideBar";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <SideBar />
    </ThemeProvider>
  );
}
