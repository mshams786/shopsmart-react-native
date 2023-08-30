import React from "react";
import { AreaInput, TextAreaContainer } from "./textArea.styles";
const TextArea = ({ placeholder, keyboardType }) => {
  return (
    <TextAreaContainer>
      <AreaInput placeholder={placeholder} keyboardType={keyboardType} />
    </TextAreaContainer>
  );
};

export default TextArea;
