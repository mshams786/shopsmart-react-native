import React from "react";
<<<<<<< HEAD

import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

=======
import styled, { ThemeProvider } from "styled-components/native";
>>>>>>> a1375b54a02340d8cdc43c50d76bda62e2d82409
import theme from "./theme";
import HomePage from "./pages/homePage";
import AddItems from "./pages/addItems";
import MonthlyInventoryPage from "./pages/monthlyInventoryPage";

<<<<<<< HEAD
const Stack = createNativeStackNavigator();
=======
import { StatusBar } from "react-native";
import SearchInput from "./components/utils/search-input/searchInput";
>>>>>>> a1375b54a02340d8cdc43c50d76bda62e2d82409

const App = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Add Items" component={AddItems} />
          <Stack.Screen name="My-Items" component={MonthlyInventoryPage} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
=======
    <ThemeProvider theme={theme}>
      <Header />
      <StatusBar style="auto" />
      <MonthlyInventoryPage/>

    </ThemeProvider>
>>>>>>> a1375b54a02340d8cdc43c50d76bda62e2d82409
  );
};

export default App;
