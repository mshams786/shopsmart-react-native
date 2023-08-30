import { View } from "react-native";
import { styled } from "styled-components";

export const NavigationWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: ${(props) => props.theme.color.primary};
`;
