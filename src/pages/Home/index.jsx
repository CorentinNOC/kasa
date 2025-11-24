import homeBanner from "../../assets/images/banner-home.webp";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

function Home() {
  return (
    <>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <Gallery />
    </>
  );
}

export default Home;
