import { Link } from "react-router";
import "./index.scss";

function Error() {
  return (
    <section className="error__container">
      <p className="error__code">404</p>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error;
