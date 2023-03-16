import styled from "styled-components";

const PriceTag = styled.div`
  background-color: ${(props) => props.theme.colors.lightOrange};
  max-width: 120px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -10px;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    background-color: ${(props) => props.theme.colors.lightOrange};
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.orange};
    font-size: 14px;
    font-weight: 600;
  }
`;

export { PriceTag };
