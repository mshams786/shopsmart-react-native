import React from "react";

import ShopsmartHeading from "../components/utils/shopsmart-heading/shopsmartHeading";
import Header from "../components/utils/header/header";
import ScannedItemsList from "../components/scaned-items-list/scannedItemsList";

import { NavigationContainer } from "@react-navigation/native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const AddItems = () => {
  return (
    <>
      {/* <Header /> */}
      <ShopsmartHeading margin="30px 0 0" />
      <ScannedItemsList />
    </>
  );
};

export default AddItems;
