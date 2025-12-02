import style from "./Banner.module.scss";

const Banner = ({ image, title }) => (
  <section
    className={style.banner}
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    {title && <h1>{title}</h1>}
  </section>
);

export default Banner;
