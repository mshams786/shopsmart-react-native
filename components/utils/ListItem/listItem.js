import React, { useRef, useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import {
  AlignItems,
  ImageContainer,
  MainListWrapper,
  Text1,
  TextContainer,
  Text2,
  ImageText,
} from "../ListItem/listItem-styles";
import ListPopover from "../list-popover/listPopover";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItem = ({
  cover,
  heading,
  paragraph,
  date,
  svgIcon,
  showPopover,
  handleIconPress,
}) => {
  return (
    // <TouchableWithoutFeedback onPress={() => (showPopover = false)}>
    <MainListWrapper>
      <AlignItems>
        <ImageText>
          <ImageContainer>
            <ImageBackground
              source={cover}
              style={{ flex: 1 }}
              resizeMode="cover"
            />
          </ImageContainer>
          <TextContainer>
            <Text1>{heading}</Text1>
            <Text2>{paragraph}</Text2>
            <Text2>{date}</Text2>
          </TextContainer>
        </ImageText>
        <TouchableOpacity onPress={handleIconPress}>{svgIcon}</TouchableOpacity>
      </AlignItems>
      {showPopover && <ListPopover />}
    </MainListWrapper>
    // </TouchableWithoutFeedback>
  );
};
export default ListItem;
