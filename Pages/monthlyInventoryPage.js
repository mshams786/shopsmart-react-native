import React from "react";
import { View } from "react-native";
import ListItem from "../components/utils/ListItem/listItem";
import ListView from "../components/utils/ListView/listView";
import MonthlyListItems from "../components/Monthly-list-items/monthlyListItem";

export default function MonthlyInventoryPage() {
  return (
    <View>
      <MonthlyListItems />
    </View>
  );
}
