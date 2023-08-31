import React from "react";
import { TextLines, SignupWrapper, MainContainer } from "./signUp.styles";
import AuthHeader from "../utils/auth-rectangle/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import { Text, TouchableOpacity, View } from "react-native";

const SignUp = ({ handSwitch, handleLogin }) => {
  return (
    <SignupWrapper source={require("../../assets/images/home-bg.jpg")}>
      {/* <View style={{ flex: 1, justifyContent: "flex-start" }}> */}
      <AuthHeader />
      {/* </View> */}
      <MainContainer>
        <Input
          placeholder={"First Name"}
          // keyboardType={"text"}
          width="260px"
          backgroundColor="#E4E4E6"
          name={"first-name"}
        />
        <Input
          placeholder={"Username"}
          backgroundColor="#E4E4E6"
          // keyboardType={"text"}
          width="260px"
          name={"username"}
        />
        <Input
          placeholder={"Email"}
          // keyboardType={"email-address"}
          backgroundColor="#E4E4E6"
          width="260px"
          name={"email"}
        />
        <Input
          placeholder={"Password"}
          secureTextEntry={true}
          name={"password"}
          width="260px"
          backgroundColor="#E4E4E6"
        />
        <Button onPress={handleLogin}>Signup</Button>
        <TextLines>
          Already have an Account?
          <Text style={{ color: "#fff" }} onPress={handSwitch}>
            Sign In
          </Text>
        </TextLines>
      </MainContainer>
    </SignupWrapper>
  );
};

export default SignUp;
