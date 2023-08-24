import { View, Text } from "react-native";
import { styled } from "styled-components";

export const HeadingContainer = styled(View)`
  width: 100%;
  align-items: center;
  margin: ${({ margin }) => margin || 0};
`;

export const Heading = styled(Text)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;
