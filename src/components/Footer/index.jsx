import logoWhite from "../../assets/images/logo-white.webp";
import "./index.scss";

export default function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="Logo du site Kasa" width={120} height={40} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
