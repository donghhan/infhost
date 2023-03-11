import styled from "styled-components";
import PriceCard from "./price/PricePlanCard";
import PerkOptions from "./price/PerkOptions";
import { breakpoint } from "../../styles/global/breakpoints";

const PriceSectionWrapper = styled.section`
  ${breakpoint.mobileS`
    padding: 100px 50px;
  `}

  ${breakpoint.tablet`
    padding: 100px;
  `}

  ${breakpoint.laptop`
    padding: 150px;
  `}

  width: 100%;
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PriceTextWrapper = styled.div`
  text-align: center;
  max-width: 1000px;
  margin-bottom: 70px;

  h1 {
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 25px;
  }

  span {
    color: ${(props) => props.theme.colors.lightgray};
    line-height: 2;
  }
`;

export default function PriceSection() {
  return (
    <PriceSectionWrapper>
      <PriceTextWrapper>
        <h1>Be known on the Internet</h1>
        <span>
          It's a very easy process to make you visible on the internet in just a
          few simple steps. An ingenious domain, hosting package, website -
          these three simple steps open the door for you to appear on the
          Internet.
        </span>
      </PriceTextWrapper>
      <PriceCard />
      <PerkOptions />
    </PriceSectionWrapper>
  );
}
