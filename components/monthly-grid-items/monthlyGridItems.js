import React from "react";
import GridView from "../utils/grid-view/gridView";
import monthlyListData from "../../DATA/Monthly_List";
import GridItem from "../utils/grid-item/gridItem";
import { View } from "react-native";

const MonthlyGridItems = () => {
  return (
    <GridView>
      {monthlyListData.map((item) => (
        <GridItem
          key={item.id}
          cover={item.url}
          heading={item.heading}
          paragraph={item.paragraph}
          date={item.date}
        />
      ))}
    </GridView>
  );
};

export default MonthlyGridItems;
