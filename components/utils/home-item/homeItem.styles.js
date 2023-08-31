import styled from "styled-components";
import { View, Text, ImageBackground } from "react-native";

export const ItemContainer = styled(View)`
  row-gap: 10px;
  max-width: 140px;
`;

export const ItemHeading = styled(Text)`
  color: ${({ theme }) => theme.color.primary};
  align-self: center;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const ImageContainer = styled(View)`
  height: 140px;
  width: 140px;
  border: 4px solid ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  overflow: hidden;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
