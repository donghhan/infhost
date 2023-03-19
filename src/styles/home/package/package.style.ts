import styled from "styled-components";
import { breakpoint } from "../../global/breakpoints";

const PackageSectionWrapper = styled.section`
  ${breakpoint.mobileS`
    flex-direction: column;
    align-items: center;
    padding: 200px 5%;
    gap: 60px;
  `}

  ${breakpoint.tablet`
    padding-top: 350px;
  `}

  ${breakpoint.laptop`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 400px;
    padding-bottom: 200px;
  `}

  width: 100%;
  display: flex;
  gap: 120px;
  background-color: ${(props) => props.theme.colors.ghostWhite};
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
  max-width: 600px;

  img {
    width: 100%;
    margin-top: 55px;
  }
`;

const Title = styled.h1`
  ${breakpoint.mobileS`
    text-align: center;
    font-size: 35px;
  `}

  ${breakpoint.laptop`
    text-align: inherit;
  `}

  font-size: 48px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 25px;
`;

const Text = styled.span`
  ${breakpoint.mobileS`
    text-align: center;
    font-size: 13.5px;
  `}

  ${breakpoint.laptop`
    text-align: inherit;
  `}

  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  max-width: 400px;
`;

export { PackageSectionWrapper, Title, Text, TextWrapper };
