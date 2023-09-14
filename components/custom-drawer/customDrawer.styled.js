import { View, Text } from "react-native";
import styled from "styled-components";

export const DrawerLogoContainer = styled(View)`
  width: 80%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const DrawerHeadingItem = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  padding: 0 15px;
`;
