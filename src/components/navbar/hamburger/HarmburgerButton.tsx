import styled from "styled-components";
import { HamburgerProp } from "./hamburgerInterface";

interface IHamburgerButton {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StyledHamburgerBtn = styled.div<HamburgerProp>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

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
`;

export default function HamburgerButton({ open, setOpen }: IHamburgerButton) {
  return (
    <StyledHamburgerBtn open={open} onClick={() => setOpen(!open)}>
      <div />
    </StyledHamburgerBtn>
  );
}
