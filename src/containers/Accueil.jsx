import Banniere from "../components/Header";
import Footer from "../components/Footer";
import ListeLogement from "../components/ListeLogements";
function Accueil() {
  return (
    <>
      <Banniere ShowImage={true} />
      <Footer />
      <ListeLogement />
    </>
  );
}

export default Accueil;
