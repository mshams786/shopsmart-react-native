import React from "react";
import { DropdownWrapper, ListText } from "./listDropdown.styles";
import Popover from "react-native-popover-view/dist/Popover";

const ListDropdown = ({ isVisible, onRequestClose, anchorView }) => {
  return (
    <>
      <Popover
        isVisible={isVisible}
        onRequestClose={onRequestClose}
        from={anchorView}
      >
        <DropdownWrapper>
          <ListText>Delete</ListText>
          <ListText>Rename</ListText>
          <ListText>Change</ListText>
        </DropdownWrapper>
      </Popover>
    </>
  );
};

export default ListDropdown;
