import React from "react";
import { TextLine, BackgroundImage, Container } from "./logIn.styles";
import AuthHeader from "../utils/auth-rectangle/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import { Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { object, string } from "yup";
import { View } from "react-native";
import SignUp from "../sign-up/signUp";

const loginSchema = object({
  email: string()
    .email("email must have @ and .")
    .required("Please enter your email"),
  password: string()
    .required("Password must be required")
    .min(8, "At least one Uppercase, at least 8 characters"),
});
const LogIn = ({ moveAnimation, handleLogin }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      validationSchema={loginSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <BackgroundImage source={require("../../assets/images/home-bg.jpg")}>
          {/* <View style={{ flex: 1, justifyContent: "flex-start" }}> */}
          <AuthHeader />
          {/* </View> */}
          <Container>
            <View>
              <Input
                placeholder="Enter your Email..."
                width="260px"
                backgroundColor="#E4E4E6"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}
            </View>
            <View>
              <Input
                secureTextEntry={true}
                placeholder=" Password..."
                width="260px"
                backgroundColor="#E4E4E6"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}
            </View>
            <Button
              width="130px"
              height="50px"
              bgColor="#06919A"
              onPress={handleLogin}
            >
              Login
            </Button>
            <TextLine>
              Already have an Account?
              <Text style={{ color: "#fff" }} onPress={moveAnimation}>
                Sign In
              </Text>
            </TextLine>
          </Container>
        </BackgroundImage>
      )}
    </Formik>
  );
};

export default LogIn;
