import { Text, TouchableOpacity } from "react-native";
import { styled } from "styled-components";

export const ButtonWrapper = styled(TouchableOpacity)`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "50px"};
  background-color: ${(props) => props.bgColor || "#06919A"};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
export const ButtonLink = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  /* color: #fff; */
  color: ${(props) => props.Color || "#fff"};
`;
