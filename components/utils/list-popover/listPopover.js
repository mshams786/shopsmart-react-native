import React, { useRef } from "react";
import { DropdownWrapper, ListText } from "./listPopover.styles";
import { Modal, View } from "react-native";

const ListPopover = () => {
  return (
    // <View style={{ position: "absolute" }}>
    // <Modal isVisible={isVisible}>
    <DropdownWrapper>
      <ListText>Delete</ListText>
      <ListText>Rename</ListText>
      <ListText>Change</ListText>
    </DropdownWrapper>
    // </Modal>
    // </View>
  );
};

export default ListPopover;
