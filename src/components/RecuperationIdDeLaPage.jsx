import { useParams } from "react-router-dom";
import ListeLogement from "../datas/listeDeLogement.json"; 

function RecuperationDeIdActuel (){
    const { id } = useParams(); // Extrait l'ID du logement de l'URL
    const logement = ListeLogement.find((logement) => logement.id === id); // Trouve le logement correspondant à l'ID
  
    return logement;
}

export default RecuperationDeIdActuel;
