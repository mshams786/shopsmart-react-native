import styled from "styled-components";
import { View, FlatList } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const GridContainer = styled(View)`
  flex: 1;
  align-items: center;
  padding: ${screenWidth <= 380 ? "0 20px" : "0 40px"};
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  justify-content: space-between;
`;
