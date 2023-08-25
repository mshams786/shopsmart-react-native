import React from "react";
import { Svg, Path } from "react-native-svg";
import {
  SearchInputContainer,
  SearchInputStyled,
  IconStyling,
} from "./searchInput.stytles";
const SearchInput = ({
  fontWeight,
  placeholder,
  height,
  width,
  fontSize,
  borderRadius,
}) => {
  return (
    <SearchInputContainer 
   
    > 
      <IconStyling>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.996px"
          height="18px"
          viewBox="0 0 21 21"
          fill="none"
        >
          <Path
            d="M20.7123 18.1558L16.6235 14.067C16.4389 13.8824 16.1888 13.7799 15.9263 13.7799H15.2578C16.3897 12.3322 17.0623 10.5113 17.0623 8.53042C17.0623 3.81818 13.2441 0 8.53188 0C3.81965 0 0.00146484 3.81818 0.00146484 8.53042C0.00146484 13.2427 3.81965 17.0608 8.53188 17.0608C10.5127 17.0608 12.3337 16.3882 13.7814 15.2563V15.9248C13.7814 16.1873 13.8839 16.4375 14.0685 16.622L18.1573 20.7109C18.5428 21.0964 19.1662 21.0964 19.5476 20.7109L20.7082 19.5502C21.0937 19.1647 21.0937 18.5414 20.7123 18.1558ZM8.53188 13.7799C5.63236 13.7799 3.28239 11.434 3.28239 8.53042C3.28239 5.6309 5.62826 3.28093 8.53188 3.28093C11.4314 3.28093 13.7814 5.62679 13.7814 8.53042C13.7814 11.4299 11.4355 13.7799 8.53188 13.7799Z"
            fill="rgba(255, 255, 255, 0.82);"
            fill-opacity="0.82"
          />
        </Svg>
      </IconStyling>
      <SearchInputStyled
        fontWeight={fontWeight}
        placeholder={placeholder}
        height={height}
        width={width}
        fontSize={fontSize}
        borderRadius={borderRadius}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
