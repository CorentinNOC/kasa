import { Link, NavLink } from "react-router";
import logoRed from "../../assets/images/logo-red.webp";
import style from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logoRed} alt="Logo du site Kasa" width={210} height={70} />
      </Link>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
