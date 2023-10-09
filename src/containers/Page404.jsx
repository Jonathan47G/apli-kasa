import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/detailLogement/detailLogement.scss"

function Erreur404() {
  return (
    
    <>
      <Header  />
      <p>404</p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" >Retourner sur la page d’accueil</Link>
      <Footer />
    </>
  );
}

export default Erreur404;