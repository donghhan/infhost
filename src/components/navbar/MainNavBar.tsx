import { useState } from "react";
import styled from "styled-components";
import { HamburgerMenu, HamburgerButton } from "./hamburger";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { device } from "../../styles/breakpoints";

const MainNavBarSection = styled.section`
  @media screen and ${device.mobileS} {
    padding: 0 30px;
  }
  @media screen and ${device.tablet} {
    padding: 0 30px;
  }

  @media screen and ${device.laptop} {
    padding: 0 100px;
  }

  @media screen and ${device.desktop} {
    padding: 0 200px;
  }

  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
`;

const Logo = styled(Link)`
  @media screen and ${device.mobileS} {
    span {
      font-size: 18px;
    }
  }

  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 9px;
    font-size: 25.52px;
  }
`;

const NavItems = styled.ul`
  @media screen and ${device.mobileS} {
    display: none;
  }

  @media screen and ${device.tablet} {
    display: flex;
    font-size: 15px;
    gap: 25px;
  }

  display: flex;
  gap: 32px;

  li {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.white};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;

const MyAccountButton = styled(Link)`
  @media screen and ${device.mobileS} {
    display: none;
  }

  @media screen and ${device.tablet} {
    display: block;
    padding: 10px 20px;
  }

  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  background-position: center;
  transition: background 250ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightPurple};
    background-image: radial-gradient(
      circle,
      transparent 1%,
      ${(props) => props.theme.colors.lightPurple} 1%
    );
    background-position: center;
    background-size: 15000%;
  }

  &:active {
    transition: background 0s;
    background-color: ${(props) => props.theme.colors.deepPurple};
    background-size: 100%;
  }
`;

export default function MainNavBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <MainNavBarSection>
      <Logo to="/">
        <img src={logo} alt="Logo" />
        <span>InfHost</span>
      </Logo>
      <>
        <HamburgerButton open={open} setOpen={setOpen} />
        <HamburgerMenu open={open} setOpen={setOpen} />
      </>
      <NavItems>
        <li>
          <Link className="underline-animation" to="/">
            Hosting
          </Link>
        </li>
        <li>
          <Link className="underline-animation" to="/">
            Domains
          </Link>
        </li>
        <li>
          <Link className="underline-animation" to="/">
            SSL Certificates
          </Link>
        </li>
        <li>
          <Link className="underline-animation" to="/">
            About us
          </Link>
        </li>
      </NavItems>
      <MyAccountButton to="/">My Account</MyAccountButton>
    </MainNavBarSection>
  );
}
