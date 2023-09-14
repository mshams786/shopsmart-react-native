import React from "react";

import {
  GridBackgoundContainer,
  GridContentContainer,
  GridImagContainer,
  GridItemHeading,
  GridItemWrapper,
  GridText,
  GridTextAndDate,
} from "./gridItem.styles";

const GridItem = ({ cover, heading, paragraph, date }) => {
  return (
    <GridItemWrapper>
      <GridBackgoundContainer />
      <GridContentContainer>
        <GridImagContainer source={cover} />
        <GridText>
          <GridItemHeading>{heading}</GridItemHeading>
          <GridTextAndDate>{paragraph}</GridTextAndDate>
          <GridTextAndDate>{date}</GridTextAndDate>
        </GridText>
      </GridContentContainer>
    </GridItemWrapper>
  );
};

export default GridItem;
