import styled from "styled-components";
import { breakpoint } from "../global/breakpoints";

interface NormalTextWrapperProp {
  alignment: "left" | "right";
}

const NormalTextSection = styled.section`
  ${breakpoint.mobileS`
    flex-direction: column;
  `}

  ${breakpoint.laptop`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 90px;
  `}

  width: 100%;
  height: 750px;
  display: flex;
`;

export { NormalTextSection };
