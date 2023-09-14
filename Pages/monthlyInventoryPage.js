import React from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/utils/ListItem/listItem";
import ListView from "../components/utils/ListView/listView";
import MonthlyListItems from "../components/Monthly-list-items/monthlyListItems";
import SearchInput from "../components/utils/search-input/searchInput";
import {
  ImageIcon,
  MonthlyListWrapper,
  SearchWrapper,
  GridIcon,
  ListIcon,
} from "./PagesStyle/monthlyInventory.styles";
import MonthlyGridItems from "../components/monthly-grid-items/monthlyGridItems";
import { useState } from "react";
import Header from "../components/utils/header/header";

export default function MonthlyInventoryPage({ navigation }) {
  const [gridView, setGridView] = useState(false);

  const handleViewToggle = () => {
    setGridView(!gridView);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView>
        <View>
          <Header navigation={navigation} />
          <SearchWrapper>
            <SearchInput placeholder="Search your items..." width="80%" />
            <ImageIcon>
              <TouchableOpacity onPress={handleViewToggle}>
                {gridView ? (
                  <ListIcon name="md-list" size={42} />
                ) : (
                  <GridIcon name="nav-icon-grid" size={30} />
                )}
              </TouchableOpacity>
            </ImageIcon>
          </SearchWrapper>
          <MonthlyListWrapper>
            {gridView ? <MonthlyGridItems /> : <MonthlyListItems />}
          </MonthlyListWrapper>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
