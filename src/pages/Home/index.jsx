import homeBanner from "../../assets/images/banner-home.webp";
import Banner from "../../components/Banner";

function Home() {
  return (
    <>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
    </>
  );
}

export default Home;
