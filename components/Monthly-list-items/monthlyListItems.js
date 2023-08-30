import React from "react";
import ListView from "../utils/ListView/listView";
import monthlyListData from "../../DATA/Monthly_List";
import ListItem from "../utils/ListItem/listItem";
import { View } from "react-native";

<<<<<<< HEAD:components/Monthly-list-items/monthlyListItem.js
const MonthlyListItems = () => {
  console.log(monthlyListData);
=======
export default function monthlyListItems() {
console.log(monthlyListData)
>>>>>>> a1375b54a02340d8cdc43c50d76bda62e2d82409:components/Monthly-list-items/monthlyListItems.js
  return (
    <View>
      {monthlyListData.map((item) => (
        <ListItem
          cover={item.url}
          heading={item.heading}
          paragraph={item.paragraph}
          date={item.date}
        />
      ))}
    </View>
  );
};

export default MonthlyListItems;
