import Rating from "../Rating";
import "./index.scss";

function AccommodationDescription({
  title,
  picture,
  host,
  location,
  tags,
  rating,
}) {
  return (
    <section className="accommodation__container">
      <article className="accommodation__description">
        <div className="accommodation__title">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <ul className="accommodation__tags">
          {tags?.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </article>
      <article className="accommodation__host">
        <div className="accommodation__information">
          <p>{host}</p>
          <img src={picture} alt={`Photo de ${host}`} />
        </div>
        <Rating ratingsScore={rating} />
      </article>
    </section>
  );
}

export default AccommodationDescription;
