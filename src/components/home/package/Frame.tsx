import styled from "styled-components";
import {
  Border,
  TitleBox,
  ContentBox,
  Title,
} from "../../../styles/home/package/frame.style";
import { PriceTag } from "../../../styles/home/package/pricetag.style";
import { breakpoint } from "../../../styles/global/breakpoints";
import { fire, check } from "../../../assets/home/package";
import Button from "../../ui/Button";

interface FrameProp {
  type: "main" | null;
}

const features = [
  {
    key: "capacity",
    name: "Capacity",
    option: "100GB",
  },
  {
    key: "migration",
    name: "Website and email migration",
    option: "b / o",
  },
  {
    key: "ssh",
    name: "SSH access",
    option: "b / o",
  },
  {
    key: "ddos",
    name: "Anti DDoS Protection",
    option: "b / o",
  },
];

const perks = [
  {
    key: "cms",
    name: "CMS Installer",
  },
  {
    key: "email",
    name: "Website and email migration",
  },
  {
    key: "ssh",
    name: "SSH access",
  },
  {
    key: "ddos",
    name: "Anti DDoS Protection",
  },
];

const miscellaneous = [
  {
    key: "certi",
    name: "Certifykat SSL",
    description: "SSL Let's Encrypt",
  },
  {
    key: "domain",
    name: '".com" domain',
    description:
      'When you buy a package for a year, you get a free domain with the extension ".com"',
  },
];

const PackageContent = styled.div`
  ${breakpoint.mobileS`
    font-size: 12px;  
  `}

  color: ${(props) => props.theme.colors.gray};

  .package-name {
    font-weight: 600;
    margin-bottom: 10px;
  }

  .from {
    font-size: 14px;
    font-weight: 500;
  }

  .price-section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      margin-top: 15px;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.black};

      .main-price {
        ${breakpoint.mobileS`
          font-size: 30px;
        `}

        font-size: 48px;
        font-weight: 500;
        margin-right: 15px;
      }

      .discounted-price {
        ${breakpoint.mobileS`
          font-size: 12px;
        `}

        font-size: 16px;
      }
    }
  }

  .feature-section {
    width: 100%;
    margin: 25px 0;

    .features {
      display: flex;
      justify-content: space-between;
      margin: 6px 0;

      .feature-option {
        font-weight: 600;
      }
    }
  }

  .perks-section {
    margin: 25px 0;

    li {
      display: flex;
      align-items: center;
      margin: 6px 0;

      img {
        margin-right: 10px;
      }
    }
  }

  .miscellaneous-section {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    li {
      display: flex;
      align-items: center;

      &:nth-child(1) {
        margin-bottom: 10px;
      }

      img {
        margin-right: 10px;
      }

      span {
        display: block;
      }

      .title {
        font-weight: 600;
      }
    }
  }
`;

export default function Frame({ type }: FrameProp) {
  return (
    <Border>
      {type === "main" ? (
        <>
          <TitleBox>
            <img src={fire} alt="Frame Title Icon" />
            <Title>The most frequently chosen package</Title>
          </TitleBox>
          <ContentBox>
            <PackageContent>
              <h1 className="package-name">INF Advanced</h1>
              <span className="from">From: </span>
              <div className="price-section">
                <div className="price">
                  <span className="main-price">$55.99</span>
                  <span className="discounted-price">
                    <s>$66.99</s>
                  </span>
                </div>
                <PriceTag>
                  <span>offer -30%</span>
                </PriceTag>
              </div>
              <ul className="feature-section">
                {features.map((i) => (
                  <li key={i.key} className="features">
                    <span>{i.name}</span>
                    <span className="feature-option">{i.option}</span>
                  </li>
                ))}
              </ul>
              <hr />
              <ul className="perks-section">
                {perks.map((j) => (
                  <li key={j.key}>
                    <img src={check} alt="Check Icon" />
                    <span>{j.name}</span>
                  </li>
                ))}
              </ul>
              <hr />
              <ul className="miscellaneous-section">
                {miscellaneous.map((k) => (
                  <li key={k.key}>
                    <img src={check} alt="Check Icon" />
                    <div className="text">
                      <span className="title">{k.name}</span>
                      <span>{k.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                text="Check the offer"
                style={{ width: "100%", marginTop: "30px" }}
              />
            </PackageContent>
          </ContentBox>
        </>
      ) : (
        <div></div>
      )}
    </Border>
  );
}
