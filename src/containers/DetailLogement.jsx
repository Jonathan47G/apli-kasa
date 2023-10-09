import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecuperationDesIdLogementEtLesGenere from "../components/RecuperationLogement";
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
