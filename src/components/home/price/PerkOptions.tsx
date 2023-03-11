import {
  PerkOptionBox,
  PerkOptionWrapper,
} from "../../../styles/home/price/PerkOptions.style";
import { backup, comprehensive, exceptional } from "../../../assets/home/price";

const perkOptions = [
  {
    key: "comprehensiveProtection",
    title: "Comprehensive Protection",
    icon: comprehensive,
    text: "The security of your website and your customers is our priority.",
  },
  {
    key: "exceptionalServiceStability",
    title: "Exceptional Service Stability",
    icon: exceptional,
    text: "The security of your website and your customers is our priority.",
  },
  {
    key: "backupCopies",
    title: "Backup Copies",
    icon: backup,
    text: "The security of your website and your customers is our priority.",
  },
];

export default function PerkOptions() {
  return (
    <PerkOptionWrapper>
      {perkOptions.map((i) => (
        <PerkOptionBox key={i.key}>
          <img src={i.icon} alt="Perk Icon" />
          <h2>{i.title}</h2>
          <span>{i.text}</span>
        </PerkOptionBox>
      ))}
    </PerkOptionWrapper>
  );
}
