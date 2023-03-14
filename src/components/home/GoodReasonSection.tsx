import { rocketMan } from "../../assets/home/goodReason";
import { illustration } from "../../assets/home";
import GoodReasonCard from "./goodReason/GoodReasonCard";
import {
  GoodReasonSectionWrapper,
  TextWrapper,
  ImageWrapper,
  MainTitle,
  ExplanationText,
  ContentWrapper,
} from "../../styles/home/goodReason/goodReason.style";
import { IllustrationWrapper } from "../../styles/home/Illustration";

export default function GoodReasonSection() {
  return (
    <GoodReasonSectionWrapper>
      <ImageWrapper>
        <img src={rocketMan} alt="Illustration" />
      </ImageWrapper>
      <ContentWrapper>
        <TextWrapper>
          <MainTitle>Good reasons to switch to InfHost!</MainTitle>
          <ExplanationText>
            InfHost provides high-quality technologies to make your websites run
            faster. You can choose any PHP version from 5.x to 7.x and use
            OPcache and LSCache, which in combination with the HTTP / 2 protocol
            ensures very efficient website performance.
          </ExplanationText>
        </TextWrapper>
        <GoodReasonCard />
      </ContentWrapper>
      <IllustrationWrapper>
        <img src={illustration} alt="Illustration" />
      </IllustrationWrapper>
    </GoodReasonSectionWrapper>
  );
}
