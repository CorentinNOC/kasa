import { Link } from "react-router";
import "./index.scss";

function Card({ title, cover, id }) {
  return (
    <Link className="card" to={`/logement/${id}`}>
      <article>
        <img src={cover} alt="Photo de l'intérieur d'un appartement" />
        <p>{title}</p>
      </article>
    </Link>
  );
}

export default Card;
