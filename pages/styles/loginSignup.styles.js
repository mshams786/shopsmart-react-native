import { View } from "react-native";
import { styled } from "styled-components";

export const AuthMainWrapper = styled(View)`
  display: flex;
  width: 200%;
  height: 100vh;
  overflow: hidden;
  transform: translateX(${(props) => (props.isLoginVisible ? "0" : "-50%")});
  transition: transform 0.5s;
`;
