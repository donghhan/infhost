import styled from "styled-components";
import PriceCard from "./price/PricePlanCard";

const PriceSectionWrapper = styled.section`
  width: 100%;
  height: 100vh;
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
      <>
        <PriceCard />
      </>
    </PriceSectionWrapper>
  );
}