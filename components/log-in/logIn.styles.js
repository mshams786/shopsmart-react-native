import { ImageBackground, Text, View } from "react-native";
import { styled } from "styled-components";

export const BackgroundImage = styled(ImageBackground)`
  height: 100%;
  width: 100%;
  background-size: cover;
  /* flex: 1;
  justify-content: flex-start; */
  /* /* align-items: center; */
`;
export const Container = styled(View)`
  gap: 30px;
  width: 100%;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
export const TextLine = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.63);
`;
