import { View } from "react-native";
import { styled } from "styled-components";

export const ListViewWrapper = styled(View)`
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 30px;
  /* height: ${({ height }) => height || "auto"}; */
  /* max-height: calc(95vh - 150px); */
  /* overflow: auto; */
  /* padding-bottom: 6.6rem; */
  /* padding-top: 2rem; */
`;
