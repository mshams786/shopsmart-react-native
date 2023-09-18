import React, { useRef, useState } from "react";
import { styled } from "styled-components/native";
import LogIn from "../components/log-in/logIn";
import SignUp from "../components/sign-up/signUp";
import { View, Text, TouchableOpacity, Animated } from "react-native";

const LoginSignup = ({ navigation }) => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(true);
  const translateX = useRef(new Animated.Value(0)).current;

  const toggleAnimation = () => {
    const toValue = isSignUpVisible ? -410 : 0;

    Animated.timing(translateX, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setIsSignUpVisible(!isSignUpVisible);
  };

  const handleLogin = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <Container>
        <Animated.View
          style={{
            width: "200%",
            flexDirection: "row",
            transform: [{ translateX }],
          }}
        >
          <View style={{ flexDirection: "row", width: "50%" }}>
            <SignUp handleLogin={handleLogin} moveAnimation={toggleAnimation} />

            <LogIn moveAnimation={toggleAnimation} handleLogin={handleLogin} />
          </View>
        </Animated.View>
      </Container>
    </>
  );
};

const Container = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
`;

export default LoginSignup;
