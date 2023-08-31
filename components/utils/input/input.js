import { Text, View } from "react-native";
import { InputWrapper } from "./input.styles";

const Input = ({
  placeholder,
  value,
  backgroundColor,
  keyboardType,
  width,
  name,
  secureTextEntry,
  onChangeText,
  onBlur,
  id,
  onChange,
}) => {
  return (
    <View>
      <InputWrapper
        placeholder={placeholder}
        width={width}
        value={value}
        backgroundColor={backgroundColor}
        keyboardType={keyboardType}
        name={name}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
      />
    </View>
  );
};

export default Input;
