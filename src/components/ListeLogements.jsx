import ListeLogement from "../datas/listeDeLogement.json";
console.log(ListeLogement);

function CreationListeDeLogement() {
  return (
    <div>
      <ul className="lmj-plant-list">
        {ListeLogement.map((logement) => (
          <li key={logement.id} className="card-logement">
            {logement.host.name}<img src={logement.cover} alt="couverture appartement"/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreationListeDeLogement;
