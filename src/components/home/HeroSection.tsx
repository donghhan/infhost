import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { hero } from "../../assets";
import {
  HeroSectionWrapper,
  HeroContentWrapper,
  HeroTextWrapper,
  HeroTextTitle,
  HeroTextSubtitle,
  HeroTextForm,
  HeroInput,
  HeroButton,
  PriceText,
  HeroImageWrapper,
} from "../../styles/home/hero/heroSection.style";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <HeroContentWrapper>
        <HeroTextWrapper>
          <HeroTextTitle>Success starts with the domain</HeroTextTitle>
          <HeroTextSubtitle>
            A catchy and inventive domain is the basis of success!
          </HeroTextSubtitle>
          <HeroTextForm>
            <HeroInput
              type="text"
              placeholder="Search for an ingenious domain"
            />
            <HeroButton>
              Search
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ marginLeft: "10px" }}
              />
            </HeroButton>
          </HeroTextForm>
          <PriceText>
            Starting from <b>$24.99/year</b>
          </PriceText>
        </HeroTextWrapper>
        <HeroImageWrapper>
          <img src={hero} alt="Hero Image" />
        </HeroImageWrapper>
      </HeroContentWrapper>
    </HeroSectionWrapper>
  );
}
