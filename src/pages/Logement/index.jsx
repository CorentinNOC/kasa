import { useParams } from "react-router";
import Carrousel from "../../components/Carrousel";
import Loader from "../../components/Loader";
import { useFetch } from "../../utils/hooks";

function Logement() {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(`/logements.json`);

  const logement = data.find((item) => item.id === id);

  if (error) {
    return <span>Oups, il y a un problème</span>;
  }

  console.log(logement);
  return (
    <>{isLoading ? <Loader /> : <Carrousel images={logement.pictures} />}</>
  );
}

export default Logement;
