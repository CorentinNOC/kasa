import starGrey from "../../assets/images/star-grey.svg";
import starOrange from "../../assets/images/star-orange.svg";
import styles from "./Rating.module.scss";

function Rating({ ratingsScore }) {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < ratingsScore ? starOrange : starGrey}
          alt="star"
        />
      ))}
    </div>
  );
}

export default Rating;
