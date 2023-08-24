import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  ImageContainer,
  ItemHeading,
  ItemContainer,
  BackgroundImage,
} from "./homeItem.styles";

const HomeItem = ({ heading, path }) => {
  return (
    <TouchableOpacity>
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
