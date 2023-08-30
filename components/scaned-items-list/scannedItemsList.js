import React from "react";
import ListView from "../utils/ListView/listView";
import monthlyListData from "../../DATA/Monthly_List";
import ListItem from "../utils/ListItem/listItem";
import { Image } from "react-native";

const ScannedItemsList = () => {
  return (
    <>
      <Image
        style={{ alignSelf: "center", marginVertical: 30 }}
        source={require("../../assets/images/QRcode.png")}
      />
      <ListView>
        {monthlyListData.map((item) => (
          <ListItem
            key={item.id}
            cover={item.url}
            heading={item.heading}
            paragraph={item.paragraph}
            date={item.date}
          />
        ))}
      </ListView>
    </>
  );
};

export default ScannedItemsList;
