import { Link } from 'react-router-dom';
import ListeLogement from '../../datas/listeDeLogement.json';


function CreationListeDeLogement() {
  const ListeLogementFiltre = ListeLogement.reduce((accumulateur, logement) => { 
    const ListeLogementTraitement = accumulateur.find((id) => id === logement.id);
  
    if (!ListeLogementTraitement) {
      accumulateur.push(logement);
    }
    return accumulateur;
    
  }, []);

    return (
      <main className="contenu__principal">
        <ul className="contenu__principal__liste">
          {ListeLogementFiltre.map((logement) => (
            <li key={logement.id}><Link to={`/logements/${logement.id}`}><figure className="card-logement">
              <figcaption>{logement.title}</figcaption><img src={logement.cover} alt="couverture appartement"/>
              </figure></Link></li>
          ))}
        </ul> 
      </main>
    );
}

export default CreationListeDeLogement;
