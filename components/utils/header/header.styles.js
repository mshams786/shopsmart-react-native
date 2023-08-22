import { styled } from "styled-components";
import { View } from "react-native";

export const HeaderContainer = styled(View)`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom-right-radius: 40px;
  align-items: center;
  /* padding-top: 10px; */
`;

export const ContentContainer = styled(View)`
  width: 80%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  /* background-color: red; */
  height: 100%;
`;
