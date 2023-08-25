import { styled } from "styled-components";
import { SectionList, Text, View } from "react-native";
export const SidebarMain = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-left: 37px;
`;
export const ListHeading = styled(Text)`
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const ListParagraph = styled(Text)`
  color: rgba(0, 0, 0, 0.9);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 12px;
`;
