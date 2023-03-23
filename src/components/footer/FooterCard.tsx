import {
  FooterCardWrapper,
  FooterCardTitle,
  ExplanationText,
  TopWrapper,
  BottomWrapper,
  SubscriptionForm,
} from "../../styles/footer/footerCard.style";
import { logo } from "../../assets";

export default function FooterCard() {
  return (
    <FooterCardWrapper>
      <TopWrapper>
        <FooterCardTitle>
          <img src={logo} alt="Logo" />
          <span>InfHost</span>
        </FooterCardTitle>
        <ExplanationText>
          InfHost.com is a high quality stable and cheap web hosting.
        </ExplanationText>
      </TopWrapper>
      <BottomWrapper>
        <div>
          <span className="bolded">Join our newsletter</span>
          <span className="normal">
            We’ll send you a nice letter once per week. No spam.
          </span>
        </div>
      </BottomWrapper>
    </FooterCardWrapper>
  );
}
