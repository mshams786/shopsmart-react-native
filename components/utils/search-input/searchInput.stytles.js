import { View, Text, TextInput } from "react-native";
import { styled } from "styled-components";

export const SearchInputContainer = styled(View)`
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "37px"};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius || theme.spacing.xxs};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.color.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
`;
export const IconStyling = styled(View)`
  display: flex;
  flex-direction: row;
  left: 12px;
`;
export const SearchInputStyled = styled(TextInput)`
  font-size: ${({ fontSize, theme }) =>
    fontSize || theme.typography.fontSize.xxs};
  font-style: normal;
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.typography.fontWeight.regular};
  width: ${({ width }) => width || "75%"};
  height: ${({ height }) => height || "100%"};
`;
