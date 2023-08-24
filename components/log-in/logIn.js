import React from "react";
import { TextLine, BackgroundImage, Container } from "./logIn.styles";
import AuthHeader from "../utils/auth-rectangle/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import { Text, View } from "react-native";

const LogIn = () => {
  return (
    <BackgroundImage source={require("../../assets/images/home-bg.jpg")}>
      <AuthHeader />
      <Container>
        <Input
          keyboardType="email"
          placeholder="Enter your Email..."
          width="260px"
          backgroundColor="#E4E4E6"
        />
        <Input
          keyboardType="password"
          placeholder=" Password..."
          width="260px"
          backgroundColor="#E4E4E6"
        />
        {/* <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <Button width="130px" height="50px" bgColor="#06919A">
          Login
        </Button>
        {/* </View> */}
        <TextLine>
          Already have an Account?
          <Text style={{ color: "#fff" }}> Sign In</Text>
        </TextLine>
      </Container>
    </BackgroundImage>
  );
};

export default LogIn;
