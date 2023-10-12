import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Structure/Header";
import Footer from "../components/Structure/Footer";
import GenerationDeLaPageLogement from "../components/Structure/GenerationDuLogement";
import "../styles/detailLogement/detailLogement.scss";
import TrouverLogementId from "../components/Fonctionnel/TrouverIdLogement"

function DetailLogement() {
  const logement = TrouverLogementId();

  // Utilisez le composant TrouverIdLogement comme une fonction pour obtenir les données du logement.

  if (!logement) {
    return  <Navigate to="/error" replace={true} />
  }

  return (
    
    <>
      <Header  />
      <GenerationDeLaPageLogement />
      <Footer />
    </>
  );
}

export default DetailLogement;
