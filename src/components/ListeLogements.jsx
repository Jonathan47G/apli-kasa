import { Link } from 'react-router-dom';
import ListeLogement from '../datas/listeDeLogement.json';
import '../styles/listeLogement/listeLogement.scss'

function CreationListeDeLogement() {
  const ListeLogementFiltre = ListeLogement.reduce((accumulateur, logement) => { 
    const ListeLogementTraitement = accumulateur.find((id) => id === logement.id);
  
    if (!ListeLogementTraitement) {
      accumulateur.push(logement);
    }
    return accumulateur;
  }, []);

    return (
      <section className="contenu__principal">
        <ul className="contenu__principal__liste">
          {ListeLogementFiltre.map((logement) => (
            <li key={logement.id}><Link to={`/logements/${logement.id}`}><article className="card-logement">
              <figcaption>{logement.title}</figcaption><img src={logement.cover} alt="couverture appartement"/>
              </article></Link></li>
          ))}
        </ul>
      </section>
    );
}

export default CreationListeDeLogement;
