import styled from "styled-components";
import { breakpoint } from "../../global/breakpoints";

const PerkOptionWrapper = styled.div`
  ${breakpoint.mobileS`
    display: grid;
    grid-template-column: 1fr;
    gap: 30px;
    margin-top: 50px;
  `}

  ${breakpoint.tablet`
    display: flex;
    justify-content: space-evenly;
    margin-top: 70px;
    width: 100%;
  `}
`;

const PerkOptionBox = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
  }
`;

export { PerkOptionWrapper, PerkOptionBox };
