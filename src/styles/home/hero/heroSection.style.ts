import styled from "styled-components";
import { breakpoint } from "../../global/breakpoints";

const HeroSectionWrapper = styled.section`
  ${breakpoint.mobileS`
    min-height: 100vh;
    padding: 0 30px;
  `}

  ${breakpoint.laptop`
    padding: 0 100px;
  `}

  ${breakpoint.desktop`
    padding: 0 200px;
  `}

  width: 100%;
  min-height: 80vh;
  background-color: ${(props) => props.theme.colors.deepPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg width='1388' height='139' viewBox='0 0 1388 139' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 259.533L80 201.533C160 144.533 320 28.5326 480 28.5326C640 28.5326 800 144.533 960 134.533C1120 124.533 1280 -9.46737 1440 0.532634C1600 9.53263 1760 163.533 1840 240.533L1920 316.533V374.533H1840C1760 374.533 1600 374.533 1440 374.533C1280 374.533 1120 374.533 960 374.533C800 374.533 640 374.533 480 374.533C320 374.533 160 374.533 80 374.533H0V259.533Z' fill='url(%23paint0_linear_1_31393)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_31393' x1='-5.7615e-06' y1='184.092' x2='1920' y2='184.092' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FC4E58'/%3E%3Cstop offset='1' stop-color='%23FFD965'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='1920' height='455' viewBox='0 0 1920 455' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.05' fill-rule='evenodd' clip-rule='evenodd' d='M1920 0H1840C1760 0 1600 0 1440 67C1280 135 1120 269 960 307C800 346 630 221 470 212C310 202 150 240 70 260L-10 279V470H70C150 470 310 470 470 470C630 470 800 461 960 461C1120 461 1280 461 1440 461C1600 461 1760 461 1840 461H1920V0Z' fill='%23A099B6'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='1920' height='99' viewBox='0 0 1920 99' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 28.245L80 86.2451C160 144.245 320 259.245 480 230.245C640 201.245 888 126.873 1048 50.8733C1208 -26.1267 1368 -7.12674 1528 50.8733C1663 141.373 1937 2.87326 2017 50.8733L1920 201.245V374.245H1840C1760 374.245 1600 374.245 1440 374.245C1280 374.245 1120 374.245 960 374.245C800 374.245 640 374.245 480 374.245C320 374.245 160 374.245 80 374.245H0V28.245Z' fill='url(%23paint0_linear_1_31394)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_31394' x1='1025.59' y1='6.34314' x2='1067.89' y2='462.296' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23B935E2'/%3E%3Cstop offset='1' stop-color='%234A58E0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
  }
`;

const HeroContentWrapper = styled.div`
  ${breakpoint.mobileS`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 100px 0;
  `}

  ${breakpoint.desktop`
    width: 100%;
    flex-direction: row;
  `}

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeroTextWrapper = styled.div`
  ${breakpoint.mobileS`
    align-items: center;
    max-width: 100%;
    text-align: center;
  `}

  ${breakpoint.desktop`
    padding: 50px 20px;
    max-width: 700px;
    align-items: flex-start;
  `}

  display: flex;
  flex-direction: column;
  z-index: 100;
`;

const HeroTextTitle = styled.h1`
  ${breakpoint.mobileS`
    font-size: 60px;
    max-width: 500px;
  `}

  ${breakpoint.tablet`
    font-size: 80px;
    max-width: 700px;
  `}

  ${breakpoint.desktop`
    text-align: left;
  `}

  line-height: 1.25;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 40px;
  font-size: 80px;
`;

const HeroTextSubtitle = styled.h2`
  ${breakpoint.mobileS`
      max-width: 80%;
      font-size: 15px;
  `}

  ${breakpoint.tablet`
    font-size: 20px;
  `}

  ${breakpoint.laptop`
      text-align: left;
  `}

  font-weight: 400;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.lightgray};
  margin-bottom: 40px;
`;

const HeroTextForm = styled.form`
  ${breakpoint.mobileS`
    flex-direction: column;
    align-items: center;
  `}

  ${breakpoint.tablet`
    flex-direction: row;
    height: 65px;
`}

  display: flex;
`;

const HeroInput = styled.input`
  ${breakpoint.mobileS`
    text-align: center;
    height: 55px;
`}

  ${breakpoint.tablet`
    height: 65px;
    padding-left: 30px;
    text-align: left;
  `}

  width: 330px;
  height: 100%;
  color: ${(props) => props.theme.colors.lightgray};
  border-radius: 4px;
`;

const HeroButton = styled.button`
  ${breakpoint.mobileS`
    height: 55px;
    margin-top: 15px;
`}

  ${breakpoint.tablet`
    height: 65px;
    margin-left: 15px;
    margin-top: 0;
  `}

  font-size: 16px;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  width: 130px;
`;

const PriceText = styled.span`
  ${breakpoint.mobileS`
      font-size: 16px;
      margin-top: 40px;
    `}

  ${breakpoint.tablet`
      font-size: 16px;
    `}

  ${breakpoint.laptop`
      font-size: 16px;
    `}

  display: inline-block;
  padding-top: 40px;
  color: ${(props) => props.theme.colors.white};
`;

const HeroImageWrapper = styled.div`
  ${breakpoint.laptop`
    position: relative;
  `}

  ${breakpoint.desktop`
    position: absolute;
    right: 5%;
    bottom: 30%;
    height: 500px;
  `}

  z-index: 50;
  margin-top: 50px;

  img {
    ${breakpoint.mobileS`
      max-width: 80%;
    `}

    max-width: 700px;
  }
`;

export {
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
};
