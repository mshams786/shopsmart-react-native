import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "./components/utils/shopsmart-heading/theme";
import ShopsmartHeading from "./components/utils/shopsmart-heading/shopsmartHeading";
import Header from "./components/utils/header/header";
import LogIn from "./components/log-in/logIn";
import SignUp from "./components/sign-up/signUp";
import CustomerServices from "./pages/customerServices";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      <CustomerServices />
      <StatusBar style="auto" />
      {/* <ShopsmartHeading /> */}
    </ThemeProvider>
  );
}
