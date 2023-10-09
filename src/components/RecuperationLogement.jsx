import React from "react";
import GenerationDuSlider from "./Slider";
import RecuperationDeIdActuel from "./RecuperationIdDeLaPage"

function RecuperationDesIdLogementEtLesGenere() {
  const logement = RecuperationDeIdActuel();

  return (
    <>
      <article>
        <div><GenerationDuSlider /></div>
        <p>{logement.description}</p>
      </article>
    </>
  );
}

export default RecuperationDesIdLogementEtLesGenere;
