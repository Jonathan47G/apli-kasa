import React, { useState } from "react";
import iconFerme from "../../assets/fleche-haut.svg";
import iconOuvert from "../../assets/fleche-bas.svg";
import "../../styles/collapse/collapse.scss";

function Collapse({ titre, contenu, maxHeight }) {
  // État local pour suivre si la section est ouverte ou fermée
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état de la section ouverte/fermée
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const stylePourLeContenu = {
    maxHeight: isOpen ? maxHeight : 0, // Appliquez la valeur de maxHeight lorsque le composant est ouvert
    overflow: 'hidden',
    transition: 'max-height 500ms ease-in-out',
  };

  return (
    <div className={`collapse ${isOpen ? "open" : "closed"}`}>
      {/* Bouton pour basculer l'état */}
      <button onClick={toggleCollapse} className="collapse__button">
        {titre}
        <span className="icon">
          <img
            src={isOpen ? iconOuvert : iconFerme}
            alt={isOpen ? "Ouvert" : "Fermé"}
          />
        </span>
      </button>
      {/* Rendu conditionnel du contenu en fonction de l'état isOpen */}

        <div
          className={`collapse__button__content ${isOpen ? "open" : "closed"}`}
          style= {stylePourLeContenu}
        >
          {contenu}
        </div>
    </div>
  );
}

export default Collapse;
