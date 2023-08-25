import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import {
  AlignItems,
  ImageContainer,
  ImageView,
  ItemImage,
  MainListWrapper,
  Text1,
  TextContainer,
  Text2,
  ImageText,
  DotSvgImage,
  Imagetry,
} from "../ListItem/listItem-styles";
import { Svg, Circle, Ellipse } from "react-native-svg";

export default function ListItem({ cover, heading, paragraph, date, svgIcon }) {
  return (
    <MainListWrapper>
      <AlignItems>
        <ImageText>
          <ImageContainer>
            <ImageBackground
              //   source={require("../../../assets/images/product-3.jpg")}
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

    // <View style={listviewWrapper.Main}>

    //     <View style={listviewWrapper.alignItems}>
    //       <View style={listviewWrapper.ImageText}>
    //       <View>
    //             <Image source={require('../assets/images/product-3.jpg')} style={listviewWrapper.image} />
    //         </View>

    //         <View>
    //             <Text style={{fontWeight:'700', color:'#06919A'}}>February item list</Text>
    //             <Text style={{color:'#06919A'}}>Grocery list</Text>
    //         </View>
    //       </View>
    //         <View>
    //             <Svg width="8" height="8" viewBox="0 0 15 15" fill="#06919A" xmlns="http://www.w3.org/2000/svg">
    //                 <Circle cx="7.5" cy="7.5" r="5.5" stroke="" stroke-opacity="0.82" stroke-width="1" />
    //             </Svg>
    //             <Svg width="8" height="8" viewBox="0 0 15 15" fill="#06919A" xmlns="http://www.w3.org/2000/svg">
    //                 <Circle cx="7.5" cy="7.5" r="5.5" stroke="" stroke-opacity="0.82" stroke-width="" />
    //             </Svg>
    //             <Svg width="8" height="8" viewBox="0 0 15 15" fill="#06919A" xmlns="http://www.w3.org/2000/svg">
    //                 <Circle cx="7.5" cy="7.5" r="5.5" stroke="" stroke-opacity="0.82" stroke-width="" />
    //             </Svg>
    //         </View>
    //     </View>

    // </View>
  );
}
