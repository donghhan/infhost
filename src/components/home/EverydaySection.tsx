import { everyday } from "../../assets/home";
import NormalTextWrapper from "../common/NormalTextWrapper";

export default function EverydaySection() {
  return (
    <NormalTextWrapper
      alignment="right"
      title="We provide services 24 hours a day, 365 days a year"
      text="The support department is available 24/7 all year round. Therefore, you do not have to worry that your website will suddenly stop working, and you have to wait even several hours for a response from the support of the existing operator."
      src={everyday}
      alt="Everyday Illustration"
      buttonText="Contact us"
      style={{ backgroundColor: "#F8F9FC" }}
    />
  );
}
