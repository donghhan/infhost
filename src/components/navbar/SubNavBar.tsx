import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/breakpoints";

const SubNavbarSection = styled.div`
  @media screen and ${device.tablet} {
    padding: 0 30px;
  }

  @media screen and ${device.laptop} {
    padding: 0 100px;
  }

  @media screen and ${device.desktop} {
    padding: 0 200px;
  }

  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  background-color: ${(props) => props.theme.colors.deepPurple};
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
  border-bottom: 1px solid #80868a;
`;

const SubtextWrapper = styled.div`
  @media screen and ${device.mobileS} {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 12.5px;
  }

  @media screen and ${device.tablet} {
    display: inline-block;
    font-size: 15px;
  }
`;

const SubMenuList = styled.ul`
  @media screen and ${device.mobileS} {
    display: none;
  }

  @media screen and ${device.tablet} {
    display: flex;
    font-size: 15px;
  }

  display: flex;
  gap: 32px;
`;

const SubMenuHamburger = styled.ul`
  display: none;
`;

export default function SubNavBar() {
  return (
    <SubNavbarSection>
      <SubtextWrapper>
        <span>
          <b>New!</b>&nbsp;Superfast WordPress hosting
        </span>
      </SubtextWrapper>
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
      <SubMenuHamburger>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </SubMenuHamburger>
    </SubNavbarSection>
  );
}
