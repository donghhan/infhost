import styled from "styled-components";
import { breakpoint } from "../../global/breakpoints";

const CardWrapper = styled.div`
  ${breakpoint.mobileS`
    flex-direction: column;
    align-items: center;
  `}

  ${breakpoint.tablet`
    flex-direction: row;
  `}

  margin-top: 70px;
  display: flex;
  gap: 60px;
`;

const Card = styled.div`
  max-width: 200px;
`;

const Title = styled.h2`
  margin-top: 25px;
  font-size: 16px;
  font-weight: 500;
`;

const Text = styled.span`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};
`;

export { CardWrapper, Card, Title, Text };
