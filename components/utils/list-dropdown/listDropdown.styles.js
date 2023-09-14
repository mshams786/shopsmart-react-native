import { View, Text } from "react-native";
import { styled } from "styled-components/native";

export const DropdownWrapper = styled(View)`
  width: 100px;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 10px;
  /* border-radius: 4px; */
  align-items: center;
  /* box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2); */
  /* top: 1%; */
`;
export const ListText = styled(Text)`
  color: ${({ theme }) => theme.color.semiWhite};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  padding-bottom: 5px;
`;
