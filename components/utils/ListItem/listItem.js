import React from "react";
import { ImageBackground } from "react-native";
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
import { Svg, Ellipse } from "react-native-svg";

export default function ListItem({ cover, heading, paragraph, date, svgIcon }) {
<<<<<<< HEAD
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
          <Svg
            width="5"
            height="21"
            viewBox="0 0 5 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Ellipse
              cx="2.5"
              cy="10.165"
              rx="2.5"
              ry="2.34577"
              fill="#06919A"
            />
            <Ellipse
              cx="2.5"
              cy="17.9842"
              rx="2.5"
              ry="2.34577"
              fill="#06919A"
            />
            <Ellipse
              cx="2.5"
              cy="2.34577"
              rx="2.5"
              ry="2.34577"
              fill="#06919A"
            />
          </Svg>
        </DotSvgImage>
      </AlignItems>
    </MainListWrapper>
  );
=======
    return (

        <MainListWrapper>
            <AlignItems>
                <ImageText>
                    <ImageContainer>

                        <ImageBackground source={cover} style={{ flex: 1, }} resizeMode='cover' />


                    </ImageContainer>
                    <TextContainer>
                        <Text1>{heading}</Text1>
                        <Text2>{paragraph}</Text2>
                        <Text2>{date}</Text2>
                    </TextContainer>
                </ImageText>
                <DotSvgImage>
                    
                       <Image source={svgIcon}/>
                
                </DotSvgImage>

            </AlignItems>
        </MainListWrapper>



    )
>>>>>>> a1375b54a02340d8cdc43c50d76bda62e2d82409
}
