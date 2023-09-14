import React from "react";
import { View, Text } from "react-native";
import {
  SidebarUserInfoMain,
  UserImageWrapper,
  UserProfileWrapper,
  TextWrapper,
} from "./sidebarUserInfo.Styles";
import userImage from "../../../assets/images/user.jpg";
import { Image } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";
const SidebarUserInfo = ({ style }) => {
  return (
    <SidebarUserInfoMain style={style}>
      <UserProfileWrapper>
        <UserImageWrapper source={userImage} />
        <TextWrapper>Mr. Anderson</TextWrapper>
      </UserProfileWrapper>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
      >
        <Path
          d="M22.5579 20.2747C21.5661 19.3422 19.7102 17.9393 19.7102 13.3438C19.7102 9.85332 16.9132 7.05918 13.1418 6.37367V5.4375C13.1418 4.64373 12.4066 4 11.5 4C10.5934 4 9.85817 4.64373 9.85817 5.4375V6.37367C6.0868 7.05918 3.28985 9.85332 3.28985 13.3438C3.28985 17.9393 1.43394 19.3422 0.442065 20.2747C0.134031 20.5645 -0.00253146 20.9108 3.54953e-05 21.25C0.0056828 21.9867 0.666417 22.6875 1.64802 22.6875H21.352C22.3336 22.6875 22.9948 21.9867 23 21.25C23.0025 20.9108 22.866 20.564 22.5579 20.2747ZM3.46697 20.5312C4.55638 19.2748 5.74745 17.1922 5.7531 13.3698C5.7531 13.3608 5.75002 13.3527 5.75002 13.3438C5.75002 10.5649 8.32416 8.3125 11.5 8.3125C14.6758 8.3125 17.25 10.5649 17.25 13.3438C17.25 13.3527 17.2469 13.3608 17.2469 13.3698C17.2525 17.1927 18.4436 19.2752 19.533 20.5312H3.46697ZM11.5 27C13.3133 27 14.7842 25.713 14.7842 24.125H8.21584C8.21584 25.713 9.6867 27 11.5 27Z"
          fill="black"
          fill-opacity="0.9"
        />
        <Circle cx="22" cy="4" r="4" fill="#F50D0D" />
      </Svg>
    </SidebarUserInfoMain>
  );
};

export default SidebarUserInfo;
