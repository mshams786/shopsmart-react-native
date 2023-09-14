import { styled } from "styled-components";
import { View, ImageBackground, Text } from "react-native";

export const GridItemWrapper = styled(View)`
  height: 151px;
  width: 139px;
  position: relative;
`;

export const GridBackgoundContainer = styled(View)`
  height: 85%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
`;

export const GridContentContainer = styled(View)`
  height: 90%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  row-gap: 10px;
`;

export const GridImagContainer = styled(ImageBackground)`
  height: 60px;
  width: 63px;
  border: 3px solid ${({ theme }) => theme.color.primary};
  overflow: hidden;
  border-radius: 8px;
`;

export const GridText = styled(View)`
  height: 50%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const GridItemHeading = styled(Text)`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.primary};
`;

export const GridTextAndDate = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;
