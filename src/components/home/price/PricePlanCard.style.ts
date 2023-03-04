import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Card = styled.div`
  width: 360px;
  min-height: 600px;
  border-radius: 4px;
  box-shadow: 0px 2px 16px 10px rgba(126, 126, 126, 0.1);
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
    display: block;
  }

  .price {
    font-size: 48px;
    font-weight: 600;
  }
`;

const Border = styled.hr`
  height: 1px;
  background-color: #8298ab;
  border: none;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const PerkList = styled.ul`
  li {
    margin: 10px 0;
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 55px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export { CardWrapper, Card, PlanWrapper, Border, PerkList, StyledLink };
