import React, { useState } from "react";
import { Animated, Easing } from "react-native";
import { styled } from "styled-components/native"; // Update the import path for styled-components
import LogIn from "../components/log-in/logIn";
import SignUp from "../components/sign-up/signUp";

const LoginSignup = ({ navigation }) => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const handSwitch = () => {
    return setLoginVisible(!isLoginVisible);
  };

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      {isLoginVisible ? (
        <LogIn handSwitch={handSwitch} handleLogin={handleLogin} />
      ) : (
        <SignUp handSwitch={handSwitch} handleLogin={handleLogin} />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  overflow: hidden;
`;

const ContentContainer = styled(Animated.View)`
  width: 200%;
  height: 100%;
`;
export default LoginSignup;
