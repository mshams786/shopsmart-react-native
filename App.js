import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./theme";
// import AddItems from "./pages/addItems";
// import MonthlyInventoryPage from "./pages/monthlyInventoryPage";
// import LoginSignup from "./pages/loginSignup";
// import CustomerServices from "./pages/customerServices";
// import Navigation from "./components/utils/navigation/navigation";
import HomePage from "./Pages/homePage";
import LoginSignup from "./Pages/loginSignup";
import AddItems from "./Pages/addItems";
import MonthlyInventoryPage from "./Pages/monthlyInventoryPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={LoginSignup} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Add Items" component={AddItems} />
          <Stack.Screen name="My-Items" component={MonthlyInventoryPage} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
