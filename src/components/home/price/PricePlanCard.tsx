import styled from "styled-components";
import { breakpoint } from "../../../styles/breakpoints";
import { frame } from "../../../assets/home/price";

const CardWrapper = styled.div`
  width: 360px;
  border-radius: 4px;
  box-shadow: 0px 2px 16px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const PlanWrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 0;
    right: 0;
  }

  h1 {
    margin-bottom: 10px;
    font-weight: 600;
  }

  .from {
    color: ${(props) => props.theme.colors.lightgray};
    margin-bottom: 15px;
  }

  .price {
    font-size: 48px;
    font-weight: 600;
  }
`;

export default function PriceCard() {
  return (
    <CardWrapper>
      <PlanWrapper>
        <img src={frame} alt="Plan Icon" />
        <h1>WWW Hosting</h1>
        <span className="from">From:</span>
        <div className="price">$19.99</div>
      </PlanWrapper>
    </CardWrapper>
  );
}
