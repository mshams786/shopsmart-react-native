import React from "react";
import ListView from "../utils/ListView/listView";
import monthlyListData from "../../DATA/Monthly_List";
import ListItem from "../utils/ListItem/listItem";
import { OptionsIcon } from "./monthlyListItems.styles";

const MonthlyListItems = () => {
  const svgIcon = <OptionsIcon name="options-vertical" size={24} />;
  return (
    <ListView>
      {monthlyListData.map((item) => (
        <ListItem
          key={item.id}
          cover={item.url}
          heading={item.heading}
          paragraph={item.paragraph}
          date={item.date}
          svgIcon={svgIcon}
        />
      ))}
    </ListView>
  );
};

export default MonthlyListItems;
