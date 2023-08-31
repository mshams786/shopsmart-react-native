import { StyleSheet } from "react-native";
import { styled } from "styled-components";
import { View, ImageBackground, Text } from "react-native";

export const MainListWrapper = styled(View)`
  background-color: #e4e4e6;
  width: 80%;
  height: 70px;
  justify-content: center;
  border-radius: 8px;
`;

export const AlignItems = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const ImageContainer = styled(View)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid #06919a;
  overflow: hidden;
`;

export const TextContainer = styled(View)``;
export const Text1 = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  color: #06919a;
`;
export const Text2 = styled(Text)`
  font-size: 14px;
  color: #06919a;
`;
export const ImageText = styled(View)`
  flex-direction: row;
  gap: 20px;
`;

export const DotSvgImage = styled(View)``;

// export const listviewWrapper = StyleSheet.create({
//     Main: {

//         backgroundColor: '#E4E4E6',
//         width: 265,
//         height: 70,
//         justifyContent: "center",
//         borderRadius: 8,

//     },

//     alignItems: {

//         flexDirection: 'row',
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: 8,

//     },
//     image: {
//         width: 60,
//         height: 60,
//         borderRadius: 8,
//         borderColor: '#06919A',
//         borderWidth: 2
//     },

//     icon: {
//         width: 30,
//         height: 20,
//     },
//     ImageText:{
//      flexDirection: "row",
//      gap:20

//     }

// })
