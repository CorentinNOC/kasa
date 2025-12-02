import { useEffect, useRef, useState } from "react";
import arrowNext from "../../assets/images/arrow-next.svg";
import arrowPrevious from "../../assets/images/arrow-previous.svg";
import styles from "./Carousel.module.scss";

function Carrousel({ images }) {
  const wrapperRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const updateImgWidth = () => {
    if (wrapperRef.current) {
      const firstImg = wrapperRef.current.querySelector("img");
      if (firstImg) {
        setImgWidth(firstImg.clientWidth);
      }
    }
  };

  useEffect(() => {
    updateImgWidth();
    window.addEventListener("resize", updateImgWidth);

    return () => window.removeEventListener("resize", updateImgWidth);
  }, []);

  function next() {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function previous() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  }

  return (
    <section className={styles.container}>
      {images.length != 1 && (
        <>
          <div className={styles.nav}>
            <img onClick={previous} src={arrowPrevious} alt="" />
            <img onClick={next} src={arrowNext} alt="" />
          </div>
          <span className={styles.pagination}>{`${index + 1}/${
            images.length
          }`}</span>
        </>
      )}

      <div
        className={styles.wrapper}
        ref={wrapperRef}
        style={{
          transform: `translateX(-${index * imgWidth}px)`,
          transition: "0.4s ease",
        }}
      >
        {images?.map((image, i) => (
          <figure key={i}>
            <img src={image} alt="Photo du logement" />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Carrousel;
