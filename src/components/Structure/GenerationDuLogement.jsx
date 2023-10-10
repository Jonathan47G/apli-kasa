import React from "react";
import GenerationDuSlider from "./Slider";
import RecuperationDeIdActuel from "../Fonctionnel/RecuperationIdDeLaPage";
import GenerationDonneeJson from "../Fonctionnel/GenerationDonneeLogement";

function GenerationDeLaPageLogement() {
  const logement = RecuperationDeIdActuel(); 
  const rating = logement.rating;
  const titre = logement.title;
  const equipment = logement.equipments;

  return (
    <>
      <article>
        <div><GenerationDonneeJson dataJson={rating} className="rating" /></div>
        <div><GenerationDonneeJson dataJson={titre} className="titre"/></div>
        <div><GenerationDonneeJson dataJson={equipment} className="liste-equipment"/></div>
      </article>
    </>
  );
}

export default GenerationDeLaPageLogement;
