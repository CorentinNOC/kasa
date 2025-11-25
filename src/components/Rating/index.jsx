import starGrey from "../../assets/images/star-grey.svg";
import starOrange from "../../assets/images/star-orange.svg";
import "./index.scss";

function Rating({ ratingsScore }) {
  return (
    <div className="accommodation__rating">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < ratingsScore ? starOrange : starGrey}
          alt="star"
          style={{ width: "20px", height: "20px" }}
        />
      ))}
    </div>
  );
}

export default Rating;
