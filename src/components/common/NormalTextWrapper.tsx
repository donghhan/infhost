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
    align-items: center;
    gap: 90px;
    padding: 100px 5%;
  `}

  ${breakpoint.tablet`
    padding: 100px 5%;
  `}

  ${breakpoint.laptop`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 90px;
    padding: 150px 5%;
  `}

  width: 100%;
  display: flex;
`;

const TextWrapper = styled.div`
  ${breakpoint.mobileS`
    align-items: center;
  `}

  ${breakpoint.laptop`
    align-items: flex-start;
  `}

  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${breakpoint.mobileS`
    text-align: center;
    font-size: 35px;
  `}

  ${breakpoint.tablet`
    font-size: 48px;
  `}

  ${breakpoint.laptop`
    text-align: inherit;
  `}

  max-width: 500px;
  font-weight: 500;
`;

const Text = styled.span`
  ${breakpoint.mobileS`
    text-align: center;
    font-size: 13.5px;
  `}

  ${breakpoint.laptop`
    text-align: inherit;
  `}

  max-width: 480px;
  margin: 25px 0;
  line-height: 2;
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.lato};
`;

const Illustration = styled.img`
  max-width: 80%;
`;

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
            <Button buttonType="fitContent" text={buttonText} />
          </TextWrapper>
          <Illustration src={src} alt={alt} />
        </NormalTextSection>
      ) : (
        <NormalTextSection style={style}>
          <Illustration src={src} alt={alt} />
          <TextWrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Button text={buttonText} buttonType="fitContent" />
          </TextWrapper>
        </NormalTextSection>
      )}
    </>
  );
}
