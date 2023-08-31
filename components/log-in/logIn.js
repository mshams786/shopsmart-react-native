import React from "react";
import { TextLine, BackgroundImage, Container } from "./logIn.styles";
import AuthHeader from "../utils/auth-rectangle/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import { Text, TouchableOpacity, View, ViewBase } from "react-native";

const LogIn = ({ handSwitch, handleLogin }) => {
  return (
    <BackgroundImage source={require("../../assets/images/home-bg.jpg")}>
      {/* <View style={{ flex: 1, justifyContent: "flex-start" }}> */}
      <AuthHeader />
      {/* </View> */}
      <Container>
        <Input
          // keyboardType="email"
          placeholder="Enter your Email..."
          width="260px"
          backgroundColor="#E4E4E6"
        />
        <Input
          // keyboardType="password"
          secureTextEntry={true}
          placeholder=" Password..."
          width="260px"
          backgroundColor="#E4E4E6"
        />

        <Button
          onPress={handleLogin}
          width="130px"
          height="50px"
          bgColor="#06919A"
        >
          Login
        </Button>
        <TextLine>
          Already have an Account?
          <Text style={{ color: "#fff" }} onPress={handSwitch}>
            Sign In
          </Text>
        </TextLine>
      </Container>
    </BackgroundImage>
  );
};

export default LogIn;
