import React from "react";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  Linking,
} from "react-native";

// import { useNavigation, useNavigationState } from "@react-navigation/native";
import DrawerLogo from "../utils/drawer-logo/drawerLogo";
import { DrawerHeadingItem, DrawerLogoContainer } from "./customDrawer.styled";
import SidebarUserInfo from "../utils/sidebar-user-info/sidebarUserInfo";
import SettingData from "../../DATA/SETTINGS_DATA";

const CustomDrawer = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 30 }}>
      <DrawerLogoContainer>
        <DrawerLogo />
      </DrawerLogoContainer>
      <SidebarUserInfo style={{ marginVertical: 25, alignSelf: "center" }} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} labelStyle={{ fontSize: 16 }} />
        {SettingData.map((item, i) => (
          <React.Fragment key={i}>
            <DrawerHeadingItem>{item.heading}</DrawerHeadingItem>
            {item.options.map((item, i) => (
              <DrawerItem key={i} labelStyle={{ fontSize: 16 }} label={item} />
            ))}
          </React.Fragment>
        ))}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sideMenuProfileIcon: {
//     resizeMode: "center",
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2,
//     alignSelf: "center",
//   },
//   iconStyle: {
//     width: 15,
//     height: 15,
//     marginHorizontal: 5,
//   },
//   customItem: {
//     padding: 16,
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });

export default CustomDrawer;
