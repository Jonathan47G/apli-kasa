import React from "react";
import Banniere from "../components/Header";
import Footer from "../components/Footer";
import CreationListeDeLogement from "../components/ListeLogements";
import '../styles/Accueil/accueil.scss';

function Accueil() {
  return (
    <>
      <Banniere ShowImage={true} />
      <CreationListeDeLogement />
      <Footer />   
    </>
  );
}

export default Accueil;
