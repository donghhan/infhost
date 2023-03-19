import { freeMigration } from "../../assets/home";
import NormalTextWrapper from "../common/NormalTextWrapper";

export default function MigrationSection() {
  return (
    <NormalTextWrapper
      alignment="left"
      title="Free Migration"
      text="Are you not satisfied with your existing hosting provider anymore? - move to InfHost. You don't have to worry about anything, and even less so, you don't need to have any technical knowledge to do it. Our administrators will move your website as soon as possible, and most importantly, they will do it efficiently. Your website, e-mail and databases will work much faster than before."
      src={freeMigration}
      alt="Free Migration Illustration"
      buttonText="Transfer your hosting"
    />
  );
}
