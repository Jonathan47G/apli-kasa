import React from "react";
import GenerationDuSlider from "./Slider";
import RecuperationDeIdActuel from "../Fonctionnel/RecuperationIdDeLaPage";
import GenerationDonneeJson from "../Fonctionnel/GenerationDonneeLogement";
import Collapse from "../Fonctionnel/Collapse";

function GenerationDeLaPageLogement() {
  const logement = RecuperationDeIdActuel();
  const noteDuLogement = logement.rating;
  const titreDuLogement = logement.title;
  const tagDuLogement = logement.tags;
  const equipmentDuLogement = logement.equipments;
  const nomHote = logement.host.name;
  const imageHote = logement.host.picture;
  const descriptionDuLogement = logement.description;

  return (
    <article>
      <GenerationDonneeJson dataJson={titreDuLogement} className="titre" />
      <div>
        <GenerationDonneeJson dataJson={nomHote} className="nom-host" />
        <img src={imageHote} alt={`Appartement de ${nomHote}`} />
      </div>
      <GenerationDonneeJson dataJson={tagDuLogement} className="liste-tag" />
      <div>
        <GenerationDonneeJson dataJson={noteDuLogement} className="rating" />
      </div>
      <Collapse
          titre="Description"
          contenu={
            <GenerationDonneeJson dataJson={descriptionDuLogement} className="description" />
          }
          maxHeight={"70px"}
        />
      <Collapse
          titre="Équipements"
          contenu={
            <GenerationDonneeJson dataJson={equipmentDuLogement} className="liste-equipment" />
          }
          maxHeight={"200px"}
        />
      
    </article>
  );
}

export default GenerationDeLaPageLogement;
