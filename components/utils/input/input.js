import { Text, View } from "react-native";
import { InputWrapper } from "./input.styles";

const Input = ({
  placeholder,
  value,
  backgroundColor,
  keyboardType,
  width,
}) => {
  return (
    <View>
      <InputWrapper
        placeholder={placeholder}
        width={width}
        value={value}
        backgroundColor={backgroundColor}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
