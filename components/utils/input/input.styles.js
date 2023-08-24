import { TextInput } from "react-native";
import { styled } from "styled-components";

export const InputWrapper = styled(TextInput)`
  width: ${(props) => props.width || "220px"};
  height: 50px;
  padding: 10px 20px;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor || "#e4e4e6"};
  border: 1px solid #06919a;
`;
