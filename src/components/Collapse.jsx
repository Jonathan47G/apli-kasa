import React, { useState } from 'react';

function Collapse({ titre, contenu }) {
  // État local pour suivre si la section est ouverte ou fermée
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état de la section ouverte/fermée
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      {/* Bouton pour basculer l'état */}
      <button onClick={toggleCollapse} className="collapse-button">
        {titre}
      </button>
      {/* Rendu conditionnel du contenu en fonction de l'état isOpen */}
      {isOpen && <div className="collapse-content">{contenu}</div>}
    </div>
  );
}

export default Collapse;