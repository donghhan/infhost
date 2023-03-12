import { db, rocket } from "../../../assets/home/goodReason";
import {
  CardWrapper,
  Card,
  Title,
  Text,
} from "../../../styles/home/goodReason/goodReasonCard.style";

const options = [
  {
    key: "backupCopies",
    src: db,
    title: <b>Backup copies</b>,
    text: "Very fast web server, which is LiteSpeed, which in combination with OPcache and LSCache, allows for a radical acceleration of the operation of websites.",
  },
  {
    key: "fasterSite",
    src: rocket,
    title: <b>The faster site</b>,
    text: "InfHost gives you the ability to enjoy the benefits of HTTP / 2. You can use resources to load in parallel, and even load them BEFORE the browser asks for them.",
  },
];

export default function GoodReasonCard() {
  return (
    <CardWrapper>
      {options.map((i) => (
        <Card key={i.key}>
          <img src={i.src} alt="Illustration" />
          <Title>{i.title}</Title>
          <Text>{i.text}</Text>
        </Card>
      ))}
    </CardWrapper>
  );
}
