import { ImageBackground, Text, View } from "react-native";
import { styled } from "styled-components";

export const SignupWrapper = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;
export const MainContainer = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;
export const TextLines = styled(Text)`
  font-size: 16px;
  font-weight: 500px;
`;
