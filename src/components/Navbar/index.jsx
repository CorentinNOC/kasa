import { Link } from "react-router";
import logoRed from "../../assets/images/logo-red.webp";
import "./index.scss";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src={logoRed} alt="Logo du site Kasa" width={210} height={70} />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
