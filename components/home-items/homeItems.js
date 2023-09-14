import React from "react";
import HomeData from "../../DATA/HOME_DATA";
import HomeItem from "../utils/home-item/homeItem";
import GridView from "../utils/grid-view/gridView";

const HomeItems = ({ navigation }) => {
  return (
    <GridView>
      {HomeData.map((item) => (
        <HomeItem
          key={item.id}
          heading={item.name}
          path={item.imgURL}
          route={item.route}
          navigation={navigation}
        />
      ))}
    </GridView>
  );
};

export default HomeItems;
