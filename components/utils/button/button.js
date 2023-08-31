import React from "react";
import { ButtonLink, ButtonWrapper } from "./button.styles";

const Button = ({ width, height, bgColor, Color, children, onPress }) => {
  return (
    <ButtonWrapper
      width={width}
      height={height}
      bgColor={bgColor}
      onPress={onPress}
    >
      <ButtonLink Color={Color}>{children}</ButtonLink>
    </ButtonWrapper>
  );
};

export default Button;
