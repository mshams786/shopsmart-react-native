import { View } from "react-native";
import { styled } from "styled-components";

export const CustomerWrapper = styled(View)`
  height: 100%;
  width: 100%;
`;

export const ContainerMain = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 80px;
`;
export const ChildContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
`;
