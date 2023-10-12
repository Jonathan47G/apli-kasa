import { useParams } from "react-router-dom";
import ListeLogement from "../../datas/listeDeLogement.json";

function TrouverIdLogement() {
  const { id } = useParams();
  const logement = ListeLogement.find((logement) => logement.id === id);

  return logement;
}

export default TrouverIdLogement;
