import etoileVide from "../../assets/Etoile-vide.svg";
import etoilePlein from "../../assets/Etoile-pleine.svg";

function GenerationEtoile({ note }) {
  const maxRating = 5; // Nombre total d'étoiles$
  const etoile = [];

  for (let index = 0; index < maxRating; index++) {
      if (index < note) {
        etoile.push(
        <img
        key={index}
        src={etoilePlein}
        alt={`Etoile plein ${index + 1}`}
       />);
      } else {
       etoile.push( <img
        key={index}
        src={etoileVide}
        alt={`Etoile ${index + 1}`}
      />
      );}
  }

  return <div className="detail__logement__entete__hote-note__note">{etoile}</div>;
}

export default GenerationEtoile;
