import Banniere from "../components/Header";
import Footer from "../components/Footer";
import CreationListeDeLogement from "../components/ListeLogements";
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
