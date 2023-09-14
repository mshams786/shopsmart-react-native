import React, { useRef, useState } from "react";
import { ImageBackground, Image, TouchableOpacity } from "react-native";
import {
  AlignItems,
  ImageContainer,
  MainListWrapper,
  Text1,
  TextContainer,
  Text2,
  ImageText,
  DotSvgImage,
} from "../ListItem/listItem-styles";
import ListDropdown from "../list-dropdown/listDropdown";

export default function ListItem({
  cover,
  heading,
  paragraph,
  date,
  svgIcon,
  // handleIconPress,
  // id,
  // showDropdown,
}) {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const itemRef = useRef(null);

  const showPopover = () => {
    setPopoverVisible(true);
  };

  const hidePopover = () => {
    setPopoverVisible(false);
  };

  return (
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
        <TouchableOpacity onPress={showPopover}>{svgIcon}</TouchableOpacity>
        <ListDropdown
          isVisible={popoverVisible}
          onRequestClose={hidePopover}
          anchorView={itemRef.current}
        />
      </AlignItems>
    </MainListWrapper>
  );
}
