import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddItems from "../pages/addItems";
import MonthlyInventoryPage from "../pages/monthlyInventoryPage";
import HomePage from "../pages/homePage";
import LoginSignup from "../pages/loginSignup";
import Header from "../components/utils/header/header";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // header: ({ navigation }) => <Header navigation={navigation} />,
        headerShown: false,
      }}
      initialRouteName="Auth"
    >
      <Stack.Screen
        name="Auth"
        component={LoginSignup}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home page" component={HomePage} />
      <Stack.Screen name="Add Items" component={AddItems} />
      <Stack.Screen name="My Items" component={MonthlyInventoryPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;
