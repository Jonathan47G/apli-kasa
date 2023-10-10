import React from "react";
import RecuperationDeIdActuel from "../Fonctionnel/RecuperationIdDeLaPage"
import FlecheDroit from"../../assets/Fleche-droit.svg";
import FlecheGauche from"../../assets/Fleche-gauche.svg"

function GenerationDuSlider() {
    const IdDuLogement =  RecuperationDeIdActuel();
    const imageDuSlider =  IdDuLogement.pictures.map((image, index) => (
        <><img key={index} className="slider__logement__img" src={image} alt={`Vue n°${index + 1} du logement`} /></>
    ));
    
    return (
        
        <div id="slider__logement">
            <div className="slider__logement__fleche">
            <img className="slider__logement__fleche-gauche" src={FlecheGauche} alt="Fleche gauche du slide"/>
            <img className="slider__logement__fleche-droit" src={FlecheDroit} alt="Fleche droit du slide"/>
            </div>
            {imageDuSlider}
            
        </div>
    )
}

export default GenerationDuSlider;