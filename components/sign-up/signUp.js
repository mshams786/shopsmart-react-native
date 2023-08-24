import React from "react";
import { TextLines, SignupWrapper, MainContainer } from "./signUp.styles";
import AuthHeader from "../utils/auth-rectangle/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import { Text } from "react-native";

const SignUp = () => {
  return (
    <SignupWrapper source={require("../../assets/images/home-bg.jpg")}>
      <AuthHeader />
      <MainContainer>
        <Input
          placeholder={"First Name"}
          keyboardType={"text"}
          width="260px"
          backgroundColor="#E4E4E6"
        />
        <Input
          placeholder={"Username"}
          backgroundColor="#E4E4E6"
          keyboardType={"text"}
          width="260px"
        />
        <Input
          placeholder={"Email"}
          keyboardType={"email"}
          backgroundColor="#E4E4E6"
          width="260px"
        />
        <Input
          placeholder={"Password"}
          keyboardType={"password"}
          width="260px"
          backgroundColor="#E4E4E6"
        />
        <Button>Signup</Button>
        <TextLines>
          Already have an Account?
          <Text style={{ color: "#fff" }}> Sign In</Text>
        </TextLines>
      </MainContainer>
    </SignupWrapper>
  );
};

export default SignUp;
