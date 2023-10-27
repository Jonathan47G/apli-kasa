import React from "react";
import Banniere from "../components/Structure/Header";
import Collapse from "../components/Fonctionnel/Collapse";
import Footer from "../components/Structure/Footer"
import "../styles/a-propos/a-propos.scss";

function APropos() {
  return (
    <main>
      <Banniere ShowImageApropos={true} />
      <div className="conteneur__collapseApropos">
        <Collapse
          titre="Fiabilité"
          contenu={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          }
          maxHeight={"80px"}
        />
        <Collapse
          titre="Respect"
          contenu={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
          maxHeight={"70px"}
        />
        <Collapse
          titre="Service"
          contenu={
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          }
          maxHeight={"70px"}
        />
        <Collapse
          titre="Sécurité"
          contenu={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
          maxHeight={"135px"}
        />
      </div>
      <Footer />
    </main>
  );
}

export default APropos;
