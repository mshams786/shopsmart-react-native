import React from "react";
import Header from "../components/utils/header/header";
import ShopsmartHeading from "../components/utils/shopsmart-heading/shopsmartHeading";
import HomeItems from "../components/home-items/homeItems";

const HomePage = ({ navigation }) => {
  return (
    <>
      <Header />
      <ShopsmartHeading margin="40px 0" />
      <HomeItems navigation={navigation} />
    </>
  );
};

export default HomePage;
