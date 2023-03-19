import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../styles/global/breakpoints";

interface ButtonProp {
  text: string;
  style?: React.CSSProperties;
}

const StyledButton = styled.button`
  ${breakpoint.mobileS`
    height: 45px;
    font-size: 13.5px;
  `}

  ${breakpoint.laptop`
    font-size: 16px;
  `}

  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  padding: 16px auto;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.prompt};
`;

export default function Button({ text, style }: ButtonProp) {
  return <StyledButton style={style}>{text}</StyledButton>;
}
