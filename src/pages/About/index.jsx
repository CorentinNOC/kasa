import aboutBanner from "../../assets/images/banner-about.webp";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import Loader from "../../components/Loader";
import { useFetch } from "../../utils/hooks";
import "./index.scss";

function About() {
  const { data, isLoading, error } = useFetch("/about.json");

  const abouts = data;

  if (error) {
    return <span>Oups, il y a un problème</span>;
  }

  console.log(abouts);

  return (
    <>
      <Banner image={aboutBanner} />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="collapse__wrapper">
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
