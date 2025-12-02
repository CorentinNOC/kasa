import { Link } from "react-router";
import style from "./Card.module.scss";

function Card({ title, cover, id }) {
  return (
    <Link className={style.card} to={`/logement/${id}`}>
      <article className={style.article}>
        <img src={cover} alt="Photo de l'intérieur d'un appartement" />
        <p>{title}</p>
      </article>
    </Link>
  );
}

export default Card;
