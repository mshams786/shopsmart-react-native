import React from "react";
import { ImageBackground, Image } from "react-native";
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

export default function ListItem({ cover, heading, paragraph, date, svgIcon }) {
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
        <DotSvgImage>
          <Image source={svgIcon} />
        </DotSvgImage>
      </AlignItems>
    </MainListWrapper>
  );
}
