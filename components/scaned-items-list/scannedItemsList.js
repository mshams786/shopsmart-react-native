import React, { useState } from "react";
import ListView from "../utils/ListView/listView";
import monthlyListData from "../../DATA/Monthly_List";
import ListItem from "../utils/ListItem/listItem";
import { OptionsIcon } from "./scannedItemsList.styles";
import { Image } from "react-native";

const ScannedItemsList = () => {
  const svgIcon = <OptionsIcon name="options-vertical" size={24} />;
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
            svgIcon={svgIcon}
            // id={item.id}
            // showDropdown={selectedItem === item.id}
            // handleIconPress={() => handleIconPress(item.id)}
          />
        ))}
      </ListView>
    </>
  );
};

export default ScannedItemsList;
