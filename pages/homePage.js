import React from "react";
import Header from "../components/utils/header/header";
import ShopsmartHeading from "../components/utils/shopsmart-heading/shopsmartHeading";
import HomeItems from "../components/home-items/homeItems";
import { ScrollView } from "react-native";
import ListDropdown from "../components/utils/list-dropdown/listDropdown";

const HomePage = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <ShopsmartHeading margin="40px 0" />
      <ScrollView>
        <HomeItems navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default HomePage;
