import styled from "styled-components";
import Button from "../ui/Button";
import { breakpoint } from "../../styles/global/breakpoints";

const DidWeConvinceYouSection = styled.aside`
  ${breakpoint.mobileS`
    height: 350px;
  `}

  ${breakpoint.tablet`
    height: 450px;
  `}

  width: 100%;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  ${breakpoint.mobileS`
    height: 250px;
  `}

  ${breakpoint.tablet`
    height: 300px;
  `}

  width: 70%;
  height: 300px;
  background-color: ${(props) => props.theme.colors.deepPurple};
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='1230' height='167' viewBox='0 0 1230 167' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.05' fill-rule='evenodd' clip-rule='evenodd' d='M1335 0H1275.97C1216.93 0 1098.86 0 980.797 49.4409C862.729 99.6197 744.661 24.3515 626.593 52.3926C464.988 132.826 390.457 59.0339 272.39 52.3926C154.322 45.0134 36.2539 114.378 -22.78 129.137L-81.814 143.157V166.033H-22.78C36.2539 166.033 154.322 166.033 272.39 166.033C390.457 166.033 508.525 166.033 626.593 166.033C744.661 166.033 862.729 166.033 980.797 166.033C1098.86 166.033 1216.93 166.033 1275.97 166.033H1335V0Z' fill='%23A099B6'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='1230' height='88' viewBox='0 0 1230 88' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M-456.186 192.018L-367.553 149.218C-278.921 107.157 -101.655 21.5574 75.6105 21.5574C252.876 21.5574 430.142 107.157 607.407 99.7773C784.672 92.3981 961.938 -6.48375 1139.2 0.895485C1316.47 7.5368 1493.73 121.177 1582.37 177.997L1671 234.079V276.879H1582.37C1493.73 276.879 1316.47 276.879 1139.2 276.879C961.938 276.879 784.672 276.879 607.407 276.879C430.142 276.879 252.876 276.879 75.6105 276.879C-101.655 276.879 -278.921 276.879 -367.553 276.879H-456.186V192.018Z' fill='url(%23paint0_linear_1_30135)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_30135' x1='-456.186' y1='136.349' x2='1671' y2='136.349' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FC4E58'/%3E%3Cstop offset='1' stop-color='%23FFD965'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55px;
`;

const Title = styled.h2`
  ${breakpoint.mobileS`
    font-size: 16px;
  `}

  ${breakpoint.tablet`
    font-size: 36px;
  `}

  color: ${(props) => props.theme.colors.white};
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
`;

const Text = styled.span`
  ${breakpoint.mobileS`
    font-size: 13.5px;  
  `}

  ${breakpoint.tablet`
    font-size: inherit;
  `}

  color: ${(props) => props.theme.colors.lightgray};
  margin-bottom: 25px;
  text-align: center;
`;

export default function DidWeConvinceYou() {
  return (
    <DidWeConvinceYouSection>
      <CardWrapper>
        <TextWrapper>
          <Title>Did we convince you?</Title>
          <Text>Let us know our help if any!</Text>
          <Button buttonType="fitContent" text="Check plans" />
        </TextWrapper>
      </CardWrapper>
    </DidWeConvinceYouSection>
  );
}
