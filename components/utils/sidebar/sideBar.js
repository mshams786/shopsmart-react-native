import React from "react";
import { SectionList, View } from "react-native";
import sidebarData from "../../../DATA/SETTINGS_DATA";
import SidebarLogo from "../sidebar-logo/sidebarLogo";
import SidebarUserInfo from "../sidebar-user-info/sidebarUserInfo";
import { ListHeading, ListParagraph, SidebarMain } from "./sideBar.styles";
const SideBar = () => {
  return (
    <SidebarMain>
      <View style={{ marginTop: 44 }}>
        <SidebarLogo />
      </View>
      <SidebarUserInfo />
      <SectionList
        sections={sidebarData}
        renderItem={({ item }) => <ListParagraph>{item.title}</ListParagraph>}
        renderSectionHeader={({ section }) => (
          <ListHeading>{section.title}</ListHeading>
        )}
        keyExtractor={(item) => item.id}
      />
    </SidebarMain>
  );
};

export default SideBar;
