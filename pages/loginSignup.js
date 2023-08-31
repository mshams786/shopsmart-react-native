import React, { useState } from "react";
import { Animated, Easing } from "react-native";
import { styled } from "styled-components/native";
import LogIn from "../components/log-in/logIn";
import SignUp from "../components/sign-up/signUp";

const LoginSignup = ({ navigation }) => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const handleSwitch = () => {
    return setLoginVisible(!isLoginVisible);
  };

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      {isLoginVisible ? (
        <LogIn handleSwitch={handleSwitch} handleLogin={handleLogin} />
      ) : (
        <SignUp handleSwitch={handleSwitch} handleLogin={handleLogin} />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  overflow: hidden;
`;

export default LoginSignup;
