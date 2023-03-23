import { breakpoint } from "../../styles/global/breakpoints";
import FooterCard from "./FooterCard";
import {
  FooterSection,
  FooterContentWrapper,
  BorderLine,
  SNSWrapper,
  AllRightsText,
  SNSIConWrapper,
  SNSIconLink,
  MenuContainer,
} from "../../styles/footer/footer.style";
import { facebook, twitter, github, linkedin } from "../../assets/footer";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterSection>
      <FooterContentWrapper>
        <FooterCard />
        <MenuContainer>
          <ul>
            <span className="menu-title">product</span>
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
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Releases</Link>
            </li>
          </ul>
          <ul>
            <span className="menu-title">company</span>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Press</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Media kit</Link>
            </li>
          </ul>
          <ul>
            <span className="menu-title">resources</span>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Newsletter</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/">Help centre</Link>
            </li>
            <li>
              <Link to="/">Tutorials</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
          </ul>
        </MenuContainer>
      </FooterContentWrapper>
      <BorderLine />
      <SNSWrapper>
        <AllRightsText>&copy; 2021 InfHost. All rights reserved.</AllRightsText>
        <SNSIConWrapper>
          <SNSIconLink>
            <Link to="/">
              <img src={twitter} alt="Twitter" />
            </Link>
          </SNSIconLink>
          <SNSIconLink>
            <Link to="/">
              <img src={linkedin} alt="Linkedin" />
            </Link>
          </SNSIconLink>
          <SNSIconLink>
            <Link to="/">
              <img src={facebook} alt="Facebook" />
            </Link>
          </SNSIconLink>
          <SNSIconLink>
            <Link to="/">
              <img src={github} alt="Github" />
            </Link>
          </SNSIconLink>
        </SNSIConWrapper>
      </SNSWrapper>
    </FooterSection>
  );
}
