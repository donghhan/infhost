import { frame, wordPress, check } from "../../../assets/home/price";
import {
  CardWrapper,
  PlanWrapper,
  Border,
  PerkList,
  Card,
  StyledLink,
} from "../../../styles/home/price/PricePlanCard.style";

const options = [
  {
    key: "wwwHosting",
    title: "WWW Hosting",
    price: "$19.99",
    icon: frame,
    perks: [
      <li>
        High-performance <b>SSD NVMe</b>
      </li>,
      <li>
        Access to the <b>SSH console</b>
      </li>,
      <li>
        <b>E-mail</b> boxes in your own domain
      </li>,
      <li>
        Manageable <b>backup</b>
      </li>,
      <li>
        <b>Autoinstaller</b> of popular applications
      </li>,
      <li>
        Support for <b>multiple PHP languages</b>
      </li>,
    ],
  },
  {
    key: "wordpressHosting",
    title: "Hosting WordPress",
    price: "$39.99",
    icon: wordPress,
    perks: [
      <li>
        High-performance <b>SSD NVMe</b>
      </li>,
      <li>
        Free <b>WordPress Autoinstaller</b>
      </li>,
      <li>
        Advanced <b>backup</b> via FTP and SSH
      </li>,
      <li>
        <b>Technical support</b> assistance
      </li>,
      <li>
        Increased <b>WordPress Hosting</b> parameters
      </li>,
      <li>
        The latest <b>PHP 7.x + OPcache</b>
      </li>,
    ],
  },
];

export default function PriceCard() {
  return (
    <CardWrapper>
      {options.map((i) => (
        <Card key={i.key}>
          <PlanWrapper>
            <img src={i.icon} alt="Plan Icon" />
            <h1>{i.title}</h1>
            <span className="from">From: </span>
            <span className="price">{i.price}</span>
          </PlanWrapper>
          <Border />
          <PerkList>
            {i.perks.map((perk, index) => (
              <div style={{ display: "flex" }}>
                <img src={check} alt="Check" style={{ marginRight: "10px" }} />
                {perk}
              </div>
            ))}
          </PerkList>
          <StyledLink to="/">Check the offer</StyledLink>
        </Card>
      ))}
    </CardWrapper>
  );
}
