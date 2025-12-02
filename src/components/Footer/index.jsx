import logoWhite from "../../assets/images/logo-white.webp";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <img src={logoWhite} alt="Logo du site Kasa" width={120} height={40} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
