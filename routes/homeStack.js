import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/homePage";

const screens = {
  Home: {
    screen: HomePage,
  },
};

export default homeStack = createNativeStackNavigator(screens);
