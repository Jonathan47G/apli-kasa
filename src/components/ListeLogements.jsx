import ListeLogementJSON from "../datas/listeDeLogement.json";

const listeLogementObjet = JSON.parse(ListeLogementJSON);

function ListeDeLogements() {
  const LogementUniqueId = listeLogementObjet.reduce(
    (acc, logement) =>
      acc.includes(logement.id) ? acc : acc.concat(logement.id),
    []
  );
  console.log(listeLogementObjet);
  return (
    <div>
      <ul>
        {LogementUniqueId.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {listeLogementObjet.map((logement) => (
          <li key={logement.id} className="card-logement">
            {logement.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeDeLogements;
