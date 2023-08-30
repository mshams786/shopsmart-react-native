import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  ImageContainer,
  ItemHeading,
  ItemContainer,
  BackgroundImage,
} from "./homeItem.styles";

const HomeItem = ({ navigation, heading, path, route }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(route)}>
      <View>
        <ItemContainer>
          <ItemHeading>{heading}</ItemHeading>
          <ImageContainer>
            <BackgroundImage source={path} />
          </ImageContainer>
        </ItemContainer>
      </View>
    </TouchableOpacity>
  );
};

export default HomeItem;
