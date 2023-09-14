import "react-native-gesture-handler";
import React from "react";

import { ThemeProvider } from "styled-components/native";
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import theme from "./theme";
import HomePage from "./pages/homePage";
import AddItems from "./pages/addItems";
import MonthlyInventoryPage from "./pages/monthlyInventoryPage";
import LoginSignup from "./pages/loginSignup";
import Header from "./components/utils/header/header";
import HomeStack from "./routes/homeStack";
import CustomDrawer from "./components/custom-drawer/customDrawer";
// import DrawerNavigation from "./routes/drawerNavigation";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <View style={{ backgroundColor: "rgba(242, 242, 242, 1)", flex: 1 }}> */}
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        {/* <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
              header: ({ navigation }) => <Header navigation={navigation} />, 
            }}
          >
            <Stack.Screen name="Auth" component={LoginSignup} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen
              name="Add Items"
              component={AddItems}
              options={{
                headerStyle: { backgroundColor: "red" },
              }}
            />
            <Stack.Screen name="My-Items" component={MonthlyInventoryPage} />
          </Stack.Navigator> */}
        <Drawer.Navigator
          // initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            // header: ({ navigation }) => <Header navigation={navigation} />,
            // activeTintColor: "#06919A",
            // itemStyle: { marginVertical: 5 },
            headerShown: false,
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{ drawerLabel: "Home", activeTintColor: "#06919A" }}
            component={HomeStack}
          />
          {/* <Drawer.Screen
            name="Add Items"
            component={AddItems}
            options={{ drawerLabel: "Add Items", activeTintColor: "#06919A" }}
          />
          <Drawer.Screen
            name="My Items"
            component={MonthlyInventoryPage}
            options={{ drawerLabel: "My Items", activeTintColor: "#06919A" }}
          /> */}
        </Drawer.Navigator>
      </ThemeProvider>
      {/* </View> */}
    </NavigationContainer>
  );
};

export default App;
