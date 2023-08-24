import { Image, View, Text } from "react-native";
import { styled } from "styled-components";

export const SidebarUserInfoMain = styled(View)`
  /* width: 230px; */
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TextWrapper = styled(Text)`
  color: rgba(0, 0, 0, 0.9);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;
export const UserProfileWrapper = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;
export const UserImageWrapper = styled(Image)`
  height: 45px;
  width: 45px;
  border-radius: 25px;
`;
