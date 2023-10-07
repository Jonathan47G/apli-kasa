import ListeLogement from "../datas/listeDeLogement.json";

function CreationListeDeLogement() {
  const ListeLogementFiltre = ListeLogement.reduce((accumulateur, logement) => { 
    const ListeLogementTraitement = accumulateur.find((id) => id === logement.id);
  
    if (!ListeLogementTraitement) {
      accumulateur.push(logement);
    }
  
    return accumulateur;
  }, []);
  console.log(ListeLogementFiltre)
    return (
      <div>
        <ul className="lmj-plant-list">
          {ListeLogementFiltre.map((logement) => (
            <li key={logement.id} className="card-logement">
              {logement.host.name}<img src={logement.cover} alt="couverture appartement"/>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default CreationListeDeLogement;
