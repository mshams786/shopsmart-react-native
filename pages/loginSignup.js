import React, { useState } from "react";
import { styled } from "styled-components/native";
import LogIn from "../components/log-in/logIn";
import SignUp from "../components/sign-up/signUp";
import { useSpring, animated, useTransition } from "@react-spring/native";
import { View, Text, TouchableOpacity } from "react-native";

const LoginSignup = ({ navigation }) => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const styles1 = useSpring({
    from: {
      transform: "translateX(0)",
      // fontSize: 24,
    },
    to: {
      transform: "translateX(-100px)",
      // fontSize: 50,
    },
    config: {
      duration: 2000,
    },
  });
  const styles2 = useSpring([
    {
      from: {
        transform: "translateX(-100px)",
        // fontSize: 24,
      },
      to: {
        transform: "translateX(0)",
        // fontSize: 50,
      },
      config: {
        duration: 2000,
      },
    },
  ]);

  const handleSwitch = () => {
    setLoginVisible(!isLoginVisible);
  };
  console.log(isLoginVisible);

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <Container>
        <animated.View
          style={[isLoginVisible ? styles1 : styles2, { width: "50%" }]}
        >
          <LogIn handleSwitch={handleSwitch} handleLogin={handleLogin} />
          <SignUp handleSwitch={handleSwitch} handleLogin={handleLogin} />
        </animated.View>
        {/* <animated.Text style={styles}>hello world</animated.Text> */}
      </Container>
    </>
  );
};

const Container = styled(View)`
  flex-direction: row;
  /* overflow: hidden; */
  width: 200%;
`;

export default LoginSignup;
