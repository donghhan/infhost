import styled from "styled-components";
import { StyledHamburgerBtnProp, HamburgerMenuProp } from "./interface";
import { Link } from "react-router-dom";
import { breakpoint } from "../../../styles/breakpoints";

const HamburgerMenuWrapper = styled.article<StyledHamburgerBtnProp>`
  ${breakpoint.mobileS`
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 5% 0;
    font-size: 20px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translate(100%)")};
    transition: transform 250ms ease-in-out;
    background-color: ${(props) => props.theme.colors.deepPurple};
  `}
`;

const HamburgerMenuText = styled.span`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.lightgray};
  border: none;
  margin: 15px 0;
`;

const MainMenuList = styled.ul`
  font-size: 18.5px;

  li {
    margin: 10px 0;
  }
`;

const SubMenuList = styled.ul`
  font-size: 18.5px;

  li {
    margin: 10px 0;
  }
`;

export default function HamburgerMenu({ open }: HamburgerMenuProp) {
  return (
    <HamburgerMenuWrapper open={open}>
      <HamburgerMenuText>Menu</HamburgerMenuText>
      <MainMenuList>
        <li>
          <Link to="/">Hosting</Link>
        </li>
        <li>
          <Link to="/">Domains</Link>
        </li>
        <li>
          <Link to="/">SSL Certificates</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
      </MainMenuList>
      <Line />
      <SubMenuList>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </SubMenuList>
    </HamburgerMenuWrapper>
  );
}
