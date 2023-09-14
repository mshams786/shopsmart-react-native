import { View } from "react-native";
import { styled } from "styled-components";

import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SearchWrapper = styled(View)`
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;
`;

export const GridIcon = styled(Fontisto)`
  color: ${({ theme }) => theme.color.primary};
`;

export const ListIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.color.primary};
`;

export const MonthlyListWrapper = styled(View)`
  margin-top: 60px;
`;
export const ImageIcon = styled(View)`
  flex-direction: row;
  gap: 10px;
`;
