import { Link } from "react-router";
import style from "./Error.module.scss";

function Error() {
  return (
    <section className={style.container}>
      <p className={style.code}>404</p>
      <p className={style.message}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className={style.link} to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error;
