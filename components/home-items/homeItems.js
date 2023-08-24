import React from "react";
import HomeData from "../../DATA/HOME_DATA";
import { FlatList, ScrollView, View } from "react-native";
import HomeItem from "../utils/home-item/homeItem";
import GridView from "../utils/grid-view/gridView";
const HomeItems = () => {
  return (
    <GridView>
      {/* <View style={{ backgroundColor: "red" }}> */}
      {HomeData.map((item) => (
        <HomeItem key={item.id} heading={item.name} path={item.imgURL} />
      ))}
      {/* </View> */}

      {/* <FlatList
        style={{
          backgroundColor: "yellow",
          width: "90%",
          //   flexDirection: "row",
        }}
        data={HomeData}
        numColumns={2}
        renderItem={({ item }) => (
          //   <View style={{ justifyContent: "space-between" }}>
          <HomeItem heading={item.name} path={item.imgURL} />
          //   </View>
        )}
        // contentContainerStyle={{ justifyContent: "space-between" }}
        // style={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
      /> */}
    </GridView>
  );
};

export default HomeItems;
