import React from "react";
import Banniere from "../components/Structure/Header";
import Footer from "../components/Structure/Footer";
import CreationListeDeLogement from "../components/Structure/ListeLogements";
import '../styles/Accueil/accueil.scss'

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
