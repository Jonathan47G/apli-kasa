import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Page404/page404.scss"

function Erreur404() {
  return (
    
    <>
      <Header  />
      <div className="conteneur__404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" >Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </>
  );
}

export default Erreur404;