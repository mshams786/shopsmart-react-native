import React from "react";
import { ButtonLink, ButtonWrapper } from "./button.styles";

const Button = ({ width, height, bgColor, Color, children }) => {
  return (
    <ButtonWrapper width={width} height={height} bgColor={bgColor}>
      <ButtonLink Color={Color}>{children}</ButtonLink>
    </ButtonWrapper>
  );
};

export default Button;
