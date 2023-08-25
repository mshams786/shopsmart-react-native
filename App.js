import React from "react";

import styled, { ThemeProvider } from "styled-components/native";
import theme from "./theme";
import ShopsmartHeading from "./components/utils/shopsmart-heading/shopsmartHeading";
import Header from "./components/utils/header/header";
import ListItem from "./components/utils/ListItem/listItem";
import ListView from "./components/utils/ListView/listView";
import MonthlyInventoryPage from "./pages/monthlyInventoryPage";

import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StatusBar style="auto" />
      <ShopsmartHeading />
      {/* <ListItem/> */}
      <MonthlyInventoryPage />
    </ThemeProvider>
  );
}
