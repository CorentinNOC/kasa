import "./index.scss";

const Banner = ({ image, title }) => (
  <section
    className={"banner"}
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    {title && <h1>{title}</h1>}
  </section>
);

export default Banner;
