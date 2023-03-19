import styled from "styled-components";
import { breakpoint } from "../../global/breakpoints";

const Border = styled.div`
  ${breakpoint.mobileS`
    width: 90%;
  `}

  max-width: 480px;
`;

const TitleBox = styled.div`
  ${breakpoint.mobileS`
    font-size: 12px;
  `}

  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.orange};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 5px;
  }
`;

const Title = styled.span`
  ${breakpoint.tablet`
    font-size: 14px;
  `}

  ${breakpoint.laptop`
    font-size: 16px;
  `}

  color: ${(props) => props.theme.colors.white};
`;

const ContentBox = styled.div`
  ${breakpoint.mobileS`
    padding: 20px;
  `}

  border: 3px solid ${(props) => props.theme.colors.orange};
  padding: 32px;
`;

export { Border, TitleBox, ContentBox, Title };
