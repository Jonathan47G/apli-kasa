import React from "react";
import Banniere from "../components/Structure/Header";
import Footer from "../components/Structure/Footer";
import ListeLogement from "../components/Structure/ListeLogements";
import '../styles/Accueil/accueil.scss'

function Accueil() {
  return (
    <>
      <Banniere ShowImage={true} />
      <ListeLogement />
      <Footer />   
    </>
  );
}

export default Accueil;
