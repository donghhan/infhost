import React from "react";
import styled from "styled-components";
import { breakpoint } from "../../styles/global/breakpoints";
import Button from "../ui/Button";

interface NormalTextWrapperProp {
  alignment: "left" | "right";
  title: string;
  text: string;
  src: string;
  alt: string;
  buttonText: string;
  style?: React.CSSProperties;
}

const NormalTextSection = styled.section`
  ${breakpoint.mobileS`
    flex-direction: column;
  `}

  ${breakpoint.laptop`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 90px;
  `}

  width: 100%;
  height: 750px;
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${breakpoint.laptop`
    font-size: 48px;  
  `}

  max-width: 500px;
  font-weight: 500;
`;

const Text = styled.span`
  max-width: 480px;
  margin: 25px 0;
  line-height: 2;
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.lato};
`;

const Illustration = styled.img``;

export default function NormalTextWrapper({
  alignment,
  title,
  text,
  src,
  alt,
  buttonText,
  style,
}: NormalTextWrapperProp) {
  return (
    <>
      {alignment === "left" ? (
        <NormalTextSection style={style}>
          <TextWrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Button
              buttonType="fitContent"
              text={buttonText}
              style={{ width: "fit-content", height: "55px" }}
            />
          </TextWrapper>
          <Illustration src={src} alt={alt} />
        </NormalTextSection>
      ) : (
        <NormalTextSection style={style}>
          <Illustration src={src} alt={alt} />
          <TextWrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Button
              text={buttonText}
              buttonType="fitContent"
              style={{ width: "fit-content", height: "55px" }}
            />
          </TextWrapper>
        </NormalTextSection>
      )}
    </>
  );
}
