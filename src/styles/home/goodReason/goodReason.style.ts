import styled from "styled-components";
import { breakpoint } from "../../global/breakpoints";

const GoodReasonSectionWrapper = styled.section`
  ${breakpoint.mobileS`
    flex-direction: column;
    text-align: center;
    padding: 150px 5% 150px;
  `}

  ${breakpoint.mobileL`
    padding: 150px 5% 200px;
  `}

  ${breakpoint.laptop`
    flex-direction: row;
    text-align: inherit;
    gap: 60px;
    padding: 150px 2% 400px;
  `}

  width: 100%;
  padding-top: 150px;
  padding-bottom: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  position: relative;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const ContentWrapper = styled.div``;

const TextWrapper = styled.div`
  max-width: 500px;
`;

const MainTitle = styled.h1`
  ${breakpoint.mobileS`
    font-size: 30px;
  `}

  ${breakpoint.tablet`
    font-size: 48px;
    font-weight: 600;
  `}

  line-height: 1.25;
  margin-bottom: 25px;
`;

const ExplanationText = styled.span`
  ${breakpoint.laptop`
    font-size: 16px;
  `}

  color: ${(props) => props.theme.colors.gray};
`;

export {
  GoodReasonSectionWrapper,
  ImageWrapper,
  TextWrapper,
  ContentWrapper,
  MainTitle,
  ExplanationText,
};
