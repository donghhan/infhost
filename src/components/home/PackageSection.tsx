import {
  PackageSectionWrapper,
  TextWrapper,
  Title,
  Text,
} from "../../styles/home/package/package.style";
import Frame from "./package/Frame";
import { illustration } from "../../assets/home/package";

export default function PackageSection() {
  return (
    <PackageSectionWrapper>
      <TextWrapper>
        <Title>The most frequently chosen package</Title>
        <Text>
          Bet on operational stability and security, and enjoy hosting services
          at the highest level.
        </Text>
        <img src={illustration} alt="Illustration" />
      </TextWrapper>
      <Frame type="main"></Frame>
    </PackageSectionWrapper>
  );
}
