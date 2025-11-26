import { useParams } from "react-router";
import AccommodationDescription from "../../components/AccommodationDescription";
import Carrousel from "../../components/Carrousel";
import Collapse from "../../components/Collapse";
import Loader from "../../components/Loader";
import { useFetch } from "../../utils/hooks";
import "./index.scss";

function Logement() {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(`/logements.json`);

  const logement = data.find((item) => item.id === id);

  if (error) {
    return <span>Oups, il y a un problème</span>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Carrousel images={logement.pictures} />
          <AccommodationDescription
            title={logement.title}
            picture={logement.host.picture}
            host={logement.host.name}
            location={logement.location}
            tags={logement.tags}
            rating={logement.rating}
          />
          <section className="collapse__accommodation">
            <Collapse title={"Description"} content={logement.description} />
            <Collapse
              title="Équipements"
              content={
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </section>
        </div>
      )}
    </>
  );
}

export default Logement;
