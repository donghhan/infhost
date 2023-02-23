import styled from "styled-components";
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
`;

const MyAccountButton = styled(Link)`
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  padding: 16px 24px;
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
      </NavItems>
      <MyAccountButton to="/">My Account</MyAccountButton>
    </MainNavBarSection>
  );
}
