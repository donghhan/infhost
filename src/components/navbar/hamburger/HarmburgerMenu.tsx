import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../styles/breakpoints";

const HamburgerMenuWrapper = styled.article<{ open: boolean }>`
  @media screen and ${device.mobileS} {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 30px;
    font-size: 20px;
    transform: ${({ open }) => (open ? "transformX(0)" : "transformX(100%)")};
    background-color: ${(props) => props.theme.colors.deepPurple};
  }

  @media screen and ${device.tablet} {
    display: none;
  }
`;

const HamburgerMenuText = styled.span`
  font-size: 40px;
  margin-bottom: 20px;
`;

const MainMenuList = styled.ul``;

const SubMenuList = styled.ul``;

export default function HamburgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

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
