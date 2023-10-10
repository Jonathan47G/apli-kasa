import React from "react";
import Header from "../components/Structure/Header";
import Footer from "../components/Structure/Footer";
import RecuperationDesIdLogementEtLesGenere from "../components/Fonctionnel/RecuperationLogement";
import "../styles/detailLogement/detailLogement.scss"

function DetailLogement() {
  return (
    
    <>
      <Header  />
      <RecuperationDesIdLogementEtLesGenere />
      <Footer />
    </>
  );
}

export default DetailLogement;
