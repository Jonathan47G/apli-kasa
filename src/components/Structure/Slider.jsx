import React, { useState } from "react";
import RecuperationDeIdActuel from "../Fonctionnel/RecuperationIdDeLaPage";
import FlecheDroit from "../../assets/Fleche-droit.svg";
import FlecheGauche from "../../assets/Fleche-gauche.svg";
import "../../styles/slider/slider.scss"

function GenerationDuSlider() {
  // Récupère l'ID du logement actuel
  const IdDuLogement = RecuperationDeIdActuel();
  const totalSlides = IdDuLogement.pictures.length;
  // Utilisation de useState pour gérer l'index de l'image affichée
  const [imageIndex, setImageIndex] = useState(0);

  

  // Mappe les images du logement pour les afficher dans le slider
  const imageDuSlider = IdDuLogement.pictures.map((image, index) => (
    <img
      key={index}
      // Ajoute la classe "active" à l'image actuellement affichée
      className={`slider__logement__img ${index === imageIndex ? "active" : ""}`}
      src={image}
      alt={`Vue n°${index + 1} du logement`}
    />
  ));

  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? IdDuLogement.pictures.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setImageIndex((prevIndex) =>
      prevIndex === IdDuLogement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  if (totalSlides === 1) {
    return (<div id="slider__logement"><img src = {IdDuLogement.pictures} alt="Vue du logement" className="slider__logement__img active"/></div>); // Ne rend rien si vous avez une seule photo
  }
  return (
    <div id="slider__logement">
      <div className="slider__logement__fleche">
        {/* Flèche gauche du slider avec onClick pour passer à l'image précédente */}
        <img
          className="slider__logement__fleche-gauche"
          src={FlecheGauche}
          alt="Fleche gauche du slide"
          onClick={prevSlide}
        />
        {/* Flèche droite du slider avec onClick pour passer à l'image suivante */}
        <img
          className="slider__logement__fleche-droit"
          src={FlecheDroit}
          alt="Fleche droit du slide"
          onClick={nextSlide}
        />
      </div>
      <div className="slider__logement__compteur">
        {/* Affiche le compteur d'images actuellement affichée */}
        <p>{`${imageIndex + 1} / ${IdDuLogement.pictures.length}`}</p>
      </div>
      {imageDuSlider}
    </div>
  );
}

export default GenerationDuSlider;