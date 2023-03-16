import React from "react";
import styled from "styled-components";

interface ButtonProp {
  text: string;
  style?: React.CSSProperties;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  padding: 16px auto;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.prompt};
`;

export default function Button({ text, style }: ButtonProp) {
  return <StyledButton style={style}>{text}</StyledButton>;
}
