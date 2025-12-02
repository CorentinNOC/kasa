import aboutBanner from "../../assets/images/banner-about.webp";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import Loader from "../../components/Loader";
import { useFetch } from "../../utils/hooks";
import style from "./About.module.scss";

function About() {
  const { data, isLoading, error } = useFetch("/about.json");

  const abouts = data;

  if (error) {
    return <span>Oups, il y a un problème</span>;
  }

  return (
    <>
      <Banner image={aboutBanner} />
      {isLoading ? (
        <Loader />
      ) : (
        <section className={style.wrapper}>
          {abouts?.map((about, index) => (
            <Collapse
              key={index}
              title={about.title}
              content={about.description}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default About;
