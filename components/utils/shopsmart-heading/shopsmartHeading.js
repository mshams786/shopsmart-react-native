import React from "react";
import { HeadingContainer, Heading } from "./shopsmartHeading.styles";
import { View } from "react-native";

const ShopsmartHeading = ({ margin }) => {
  return (
    <HeadingContainer margin={margin}>
      <Heading>ShopSamrt</Heading>
    </HeadingContainer>
  );
};

export default ShopsmartHeading;
