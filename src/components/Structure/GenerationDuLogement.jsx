import React from "react";
import GenerationDuSlider from "./Slider";
import TrouverIdLogement from "../Fonctionnel/TrouverIdLogement";
import GenerationDonneeJson from "../Fonctionnel/GenerationDonneeJson";
import Collapse from "../Fonctionnel/Collapse";
import GenerationEtoile from "../Fonctionnel/generationEtoile";
function GenerationDeLaPageLogement() {
  const logement = TrouverIdLogement();
  const noteDuLogement = logement.rating;
  const titreDuLogement = logement.title;
  const localisationDuLogement = logement.location;
  const tagDuLogement = logement.tags;
  const equipmentDuLogement = logement.equipments;
  const nomHote = logement.host.name;
  const imageHote = logement.host.picture;
  const descriptionDuLogement = logement.description;
  const noteParse = parseInt(noteDuLogement);
  
  return (
    <article className="detail__logement">
      <GenerationDuSlider />
      <div className="detail__logement__entete">
        <div className="detail__logement__entete__titre-localisation-tag">
          <GenerationDonneeJson
            dataJson={titreDuLogement}
            className="detail__logement__entete__titre-localisation-tag__titre"
            balise="h3"
          />
          <GenerationDonneeJson
            dataJson={localisationDuLogement}
            className="detail__logement__entete__titre-localisation-tag__localisation"
            balise="p"
          />
          <GenerationDonneeJson
          dataJson={tagDuLogement}
          className="detail__logement__entete__titre-localisation-tag__tag"
        />
        </div>
        <div className="detail__logement__entete__hote-note">
          <div className="detail__logement__entete__hote-note__hote">
          <GenerationDonneeJson
            dataJson={nomHote}
            className="nom-hote"
            balise="p"
          />
          <img
            className="image-hote"
            src={imageHote}
            alt={`Appartement de ${nomHote}`}
          />
          </div>
          <div className="detail__logement__hote-note__note">
          <GenerationEtoile note={noteParse} />
        </div>
        </div>
      </div>

      <div className="detail__logement__collapse">
        <Collapse
          titre="Description"
          contenu={
            <GenerationDonneeJson
              dataJson={descriptionDuLogement}
              className="detail__logement__description"
              balise="p"
            />
          }
          maxHeight={"260px"}
        /> 
        <Collapse
          titre="Équipements"
          contenu={
            <GenerationDonneeJson
              dataJson={equipmentDuLogement}
              className="detail__logement__equipment"
              
            />
          }
          maxHeight={"200px"}
        />
      </div>
    </article>
  );
}


export default GenerationDeLaPageLogement;
