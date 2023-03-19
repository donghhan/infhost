import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../styles/global/breakpoints";

interface ButtonStyleProp {
  buttonType: "tableWithin" | "fitContent";
}
interface ButtonProp extends ButtonStyleProp {
  text: string;
  style?: React.CSSProperties;
}

const StyledButton = styled.button<ButtonStyleProp>`
  ${breakpoint.mobileS`
    height: 45px;
    font-size: 13.5px;
  `}

  ${breakpoint.laptop`
    height: 55px;
    font-size: 16px;
  `}

  width: ${({ buttonType }) =>
    buttonType === "fitContent" ? "fit-content" : "100%"};
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  padding: ${({ buttonType }) =>
    buttonType === "fitContent" ? "16px 24px" : "16px auto"};
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.prompt};
`;

export default function Button({ text, style, buttonType }: ButtonProp) {
  return (
    <StyledButton buttonType={buttonType} style={style}>
      {text}
    </StyledButton>
  );
}
