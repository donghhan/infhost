import styled from "styled-components";
import { StyledHamburgerBtnProp, HamburgerMenuProp } from "./interface";
import { device } from "../../../styles/breakpoints";

const StyledHamburgerBtn = styled.div<StyledHamburgerBtnProp>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;

  div {
    width: 100%;
    height: 1.5px;
    background-color: ${(props) => props.theme.colors.lightgray};
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: -10px;
      width: 100%;
      height: 1.5px;
      background-color: ${(props) => props.theme.colors.lightgray};
    }

    &:after {
      content: "";
      position: absolute;
      top: 10px;
      width: 100%;
      height: 1.5px;
      background-color: ${(props) => props.theme.colors.lightgray};
    }
  }

  @media screen and ${device.tablet} {
    display: none;
  }
`;

export default function HamburgerButton({ open, setOpen }: HamburgerMenuProp) {
  return (
    <StyledHamburgerBtn open={open} onClick={() => setOpen(!open)}>
      <div />
    </StyledHamburgerBtn>
  );
}
