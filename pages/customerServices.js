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

const CustomerServices = () => {
  return (
    <CustomerWrapper>
      <Header />
      <ContainerMain>
        <Input
          width="300px"
          backgroundColor="#D9D9D9"
          placeholder="title"
          keyboardType="text"
        />
        <Input
          width="300px"
          backgroundColor="#D9D9D9"
          placeholder="Email"
          keyboardType="email"
        />
        <TextArea keyboardType="text" placeholder="Type your message..." />
        <ChildContainer>
          <Button bgColor="#E4E4E6" Color="#000">
            Cancel
          </Button>
          <Button>Submit</Button>
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
  );
};

export default CustomerServices;
