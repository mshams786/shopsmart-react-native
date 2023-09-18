import { ImageBackground, Text, View } from "react-native";
import { styled } from "styled-components";

export const SignupWrapper = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;
export const MainContainer = styled(View)`
  width: 100%;
  /* flex: 2; */
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;
export const TextLines = styled(Text)`
  font-size: 16px;
  font-weight: 500;
`;
export const ErrorMassage = styled(Text)`
  margin: 0;
  padding: 0;
`;
