import Rating from "../Rating";
import styles from "./AccommodationDescription.module.scss";

function AccommodationDescription({
  title,
  picture,
  host,
  location,
  tags,
  rating,
}) {
  return (
    <section className={styles.container}>
      <article className={styles.description}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <ul className={styles.tags}>
          {tags?.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </article>
      <article className={styles.host}>
        <div className={styles.information}>
          <p>{host}</p>
          <img src={picture} alt={`Photo de ${host}`} />
        </div>
        <Rating ratingsScore={rating} />
      </article>
    </section>
  );
}

export default AccommodationDescription;
