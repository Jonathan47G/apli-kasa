import React from "react";
import GenerationDuSlider from "../Structure/Slider";
import RecuperationDeIdActuel from "./RecuperationIdDeLaPage";
import GenerationDesTags from "./GenererTag";

function RecuperationDesIdLogementEtLesGenere() {
  const logement = RecuperationDeIdActuel();

  return (
    <>
      <article>
        <div><GenerationDuSlider /></div>
        <GenerationDesTags />
      </article>
    </>
  );
}

export default RecuperationDesIdLogementEtLesGenere;
