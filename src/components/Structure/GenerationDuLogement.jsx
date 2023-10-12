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
        <div className="detail__logement__entete__titre-localisation">
          <GenerationDonneeJson
            dataJson={titreDuLogement}
            className="titre"
            balise="h3"
          />
          <GenerationDonneeJson
            dataJson={localisationDuLogement}
            className="localisation"
            balise="p"
          />
        </div>
        <div className="detail__logement__entete__hote">
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
      </div>
      <div className="detail__logement__tag-note">
        <GenerationDonneeJson
          dataJson={tagDuLogement}
          className="detail__logement__tag"
        />
        <div className="detail__logement__note">
          <GenerationEtoile note={noteParse} />
        </div>
      </div>
      <div className="detail__logement__collapse">
        <Collapse
          titre="Description"
          contenu={
            <GenerationDonneeJson
              dataJson={descriptionDuLogement}
              className="detail__logement__description"
            />
          }
          maxHeight={"80px"}
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
