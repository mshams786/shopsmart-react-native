import React from "react";
import {
  ContainerMain,
  CustomerWrapper,
  ChildContainer,
} from "./styles/customerServices.styles";
import Header from "../components/utils/header/header";
import Input from "../components/utils/input/input";
import Button from "../components/utils/button/button";
import TextArea from "../components/utils/text-area/textArea";
import Navigation from "../components/utils/navigation/navigation";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { object, string } from "yup";

const customerServicesSchema = object({
  email: string()
    .email("email must have @ and .")
    .required("Please enter your email"),
  title: string().required("Title must be required"),
  message: string()
    .max(
      30,
      (min) =>
        `Message must be ${min} characters long or more then ${min} characters`
    )
    .required("Message must be required"),
});

const CustomerServices = () => {
  return (
    <Formik
      initialValues={{ email: "", title: "", message: "" }}
      validateOnMount={true}
      validationSchema={customerServicesSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <CustomerWrapper>
          {/* <View> */}
          <Header />
          {/* </View> */}
          <ContainerMain>
            <Input
              width="300px"
              backgroundColor="#D9D9D9"
              placeholder="title"
              keyboardType="text"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {errors.title && touched.title && (
              <Text style={{ color: "#06919A" }}>{errors.title}</Text>
            )}
            <Input
              width="300px"
              backgroundColor="#D9D9D9"
              placeholder="Email"
              keyboardType="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={{ color: "#06919A" }}>{errors.email}</Text>
            )}

            <TextArea
              keyboardType="text"
              placeholder="Type your message..."
              onChangeText={handleChange("message")}
              onBlur={handleBlur("message")}
              value={values.message}
            />
            {errors.message && touched.message && (
              <Text style={{ color: "#06919A" }}>{errors.message}</Text>
            )}

            <ChildContainer>
              <Button bgColor="#E4E4E6" Color="#000">
                Cancel
              </Button>
              <Button
                onPress={handleSubmit}
                bgColor={isValid ? "#06919A" : "rgba(6, 145, 154, 0.59)"}
              >
                Submit
              </Button>
            </ChildContainer>
            <ChildContainer>
              <Text>Help Line</Text>
              <Text>051 - 5467891</Text>
            </ChildContainer>
          </ContainerMain>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Navigation />
          </View>
        </CustomerWrapper>
      )}
    </Formik>
  );
};

export default CustomerServices;
