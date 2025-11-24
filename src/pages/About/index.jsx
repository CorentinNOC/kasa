import aboutBanner from "../../assets/images/banner-about.webp";
import Banner from "../../components/Banner";
import CollapseContainer from "../../components/CollapseContainer";
import Loader from "../../components/Loader";
import { useFetch } from "../../utils/hooks";

function About() {
  const { data, isLoading, error } = useFetch("/about.json");

  const abouts = data;

  if (error) {
    return <span>Oups, il y a un problème</span>;
  }

  return (
    <>
      <Banner image={aboutBanner} />
      {isLoading ? <Loader /> : <CollapseContainer col={1} data={abouts} />}
    </>
  );
}

export default About;
