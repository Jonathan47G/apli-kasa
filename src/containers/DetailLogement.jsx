import React from "react";
import Header from "../components/Structure/Header";
import Footer from "../components/Structure/Footer";
import GenerationDeLaPageLogement from "../components/Structure/GenerationDuLogement";
import "../styles/detailLogement/detailLogement.scss"

function DetailLogement() {
  return (
    
    <>
      <Header  />
      <GenerationDeLaPageLogement />
      <Footer />
    </>
  );
}

export default DetailLogement;
