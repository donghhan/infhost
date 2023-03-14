import styled from "styled-components";
import { breakpoint } from "../global/breakpoints";

const IllustrationWrapper = styled.div`
  ${breakpoint.mobileS`
    bottom: -100px;
  `}

  ${breakpoint.mobileM`
    bottom: -100px;
  `}

  ${breakpoint.mobileL`
    bottom: -150px;
  `}

  ${breakpoint.tablet`
    bottom: -250px;
  `}

  ${breakpoint.laptop`
    
  `}

  ${breakpoint.desktop`
    bottom: -350px;
  `}

  position: absolute;

  img {
    ${breakpoint.mobileS`
      width: 300px;  
    `}

    ${breakpoint.mobileM`
      width: 350px;
    `}

    ${breakpoint.mobileL`
      width: 400px;  
    `}

    ${breakpoint.tablet`
      width: 700px;
    `}

    ${breakpoint.laptop`
      width: 900px;
    `}

    ${breakpoint.desktop`
      width: 1200px;
    `}
  }
`;

export { IllustrationWrapper };
