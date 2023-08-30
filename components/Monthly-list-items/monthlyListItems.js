import React from "react";
import ListView from "../utils/ListView/listView";
import monthlyListData from "../../DATA/Monthly_List";
import ListItem from "../utils/ListItem/listItem";

const MonthlyListItems = () => {
  console.log(monthlyListData);

  return (
    <ListView>
      {monthlyListData.map((item) => (
        <ListItem
          cover={item.url}
          heading={item.heading}
          paragraph={item.paragraph}
          date={item.date}
        />
      ))}
    </ListView>
  );
};

export default MonthlyListItems;
