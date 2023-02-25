import styled from "styled-components";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

const MainNavBarSection = styled.section`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  padding: 0 10%;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 9px;
    font-size: 25.52px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 32px;

  li {
    .underline-animation {
      display: inline-block;
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
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  padding: 16px 24px;
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
  return (
    <MainNavBarSection>
      <Logo to="/">
        <img src={logo} alt="Logo" />
        <span>InfHost</span>
      </Logo>
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
