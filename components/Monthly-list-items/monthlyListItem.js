import React from "react";
import ListView from "../utils/ListView/listView";
import monthlyListData from "../../DATA/Monthly_List";
import ListItem from "../utils/ListItem/listItem";
import { View } from "react-native";

const MonthlyListItems = () => {
  console.log(monthlyListData);
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
