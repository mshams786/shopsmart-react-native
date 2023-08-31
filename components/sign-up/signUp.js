import React from "react";
import {
  TextLines,
  SignupWrapper,
  MainContainer,
  ErrorMassage,
} from "./signUp.styles";
import AuthHeader from "../utils/auth-rectangle/authHeader";
import Input from "../utils/input/input";
import Button from "../utils/button/button";
import { Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import { object, string } from "yup";
import { yup } from "yup";

const signupSchema = object({
  fullName: string().required("Please enter your name"),
  email: string()
    .email("email must hav @ and .")
    .required("Please enter your email"),
  userName: string().required("please enter your username"),
  password: string()
    .required("Password must be required")
    .min(8, "At least one Uppercase, at least 8 characters"),
});

const SignUp = ({ handleSwitch }) => {
  return (
    <Formik
      initialValues={{ fullName: "", userName: "", email: "", password: "" }}
      validateOnMount={true}
      validationSchema={signupSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        errors,
        handleSubmit,
        touched,
        values,
      }) => (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <SignupWrapper source={require("../../assets/images/home-bg.jpg")}>
            {/* <View style={{ flex: 1, justifyContent: "flex-start" }}> */}
            <AuthHeader />
            {/* </View> */}
            <MainContainer>
              <Input
                placeholder={"Full Name"}
                width="260px"
                backgroundColor="#E4E4E6"
                name="fullName"
                id={"fullName"}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName && (
                <ErrorMassage style={{ color: "red" }}>
                  {errors.fullName}
                </ErrorMassage>
              )}
              <Input
                placeholder={"Username"}
                backgroundColor="#E4E4E6"
                width="260px"
                name="userName"
                id={"userName"}
                onChangeText={handleChange("userName")}
                onBlur={handleBlur("userName")}
                value={values.userName}
              />
              {errors.userName && touched.userName && (
                <ErrorMassage style={{ color: "red" }}>
                  {errors.userName}
                </ErrorMassage>
              )}
              <Input
                placeholder={"Email"}
                keyboardType={"email-address"}
                backgroundColor="#E4E4E6"
                width="260px"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <ErrorMassage style={{ color: "red" }}>
                  {errors.email}
                </ErrorMassage>
              )}
              <Input
                placeholder={"Password"}
                secureTextEntry={true}
                name={"password"}
                id={"password"}
                width="260px"
                backgroundColor="#E4E4E6"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password && (
                <ErrorMassage style={{ color: "red" }}>
                  {errors.password}
                </ErrorMassage>
              )}
              <Button onPress={handleSubmit}>Signup</Button>
              <TextLines>
                Already have an Account?
                <Text style={{ color: "#fff" }} onPress={handleSwitch}>
                  Sign In
                </Text>
              </TextLines>
            </MainContainer>
          </SignupWrapper>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
