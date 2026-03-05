import { useFetch } from "../../utils/hooks";
import Card from "../Card";
import Loader from "../Loader";
import style from "./Gallery.module.scss";

function Gallery() {
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.BASE_URL}logements.json`,
  );

  const logementsList = data;

  if (error) {
    return <span>Oups, il y a un problème</span>;
  }

  return (
    <section className={style.gallery}>
      {isLoading ? (
        <Loader />
      ) : (
        logementsList?.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))
      )}
    </section>
  );
}

export default Gallery;
