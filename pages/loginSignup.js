import React, { useState } from "react";
import { Animated, Easing } from "react-native";
import { styled } from "styled-components/native"; // Update the import path for styled-components
import LogIn from "../components/log-in/logIn";
import SignUp from "../components/sign-up/signUp";

const LoginSignup = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  // const translateX = new Animated.Value(0);

  // const toggleAnimation = () => {
  //   const newValue = isLoginVisible ? 0 : -200;
  //   Animated.timing(translateX, {
  //     toValue: newValue,
  //     duration: 500,
  //     easing: Easing.inOut(Easing.ease),
  //     useNativeDriver: true, // Make sure to use the native driver for performance
  //   }).start();
  //   setLoginVisible(!isLoginVisible);
  // };

  const handSwitch = () => {
    return setLoginVisible(!isLoginVisible);
  };

  return (
    <Container>
      {/* <ContentContainer style={{ transform: [{ translateX: translateX }] }}> */}
      {isLoginVisible ? (
        <LogIn handSwitch={handSwitch} />
      ) : (
        <SignUp handSwitch={handSwitch} />
      )}
      {/* </ContentContainer> */}
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
