import { Text, View } from "react-native";
import { styled } from "styled-components";

export const HeaderWrapper = styled(View)`
  width: 100%;
  height: ${(props) => props.height || "200px"};
  border-radius: 0px 0px 60px 60px;
  background-color: rgba(6, 145, 154, 0.38);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

export const HeaderContent = styled(View)`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 5px;
`;
export const HeadingText = styled(Text)`
  color: ${(props) => props.theme.color.semiWhite};
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
`;
export const ParaText = styled(Text)`
  color: ${(props) => props.theme.color.semiWhite};
`;
export const SvgImage = styled(View)`
  margin-top: 70px;
`;
