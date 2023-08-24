import { ImageBackground, Text, View } from "react-native";
import { styled } from "styled-components";

export const BackgroundImage = styled(ImageBackground)`
  height: 100%;
  width: 100%;
`;
export const Container = styled(View)`
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  /* margin-left: 15%; */
`;
export const TextLine = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.63);
`;
