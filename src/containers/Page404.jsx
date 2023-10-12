import React, {useEffect} from "react";
import { Link, useNavigate  } from "react-router-dom";
import Header from "../components/Structure/Header";
import Footer from "../components/Structure/Footer";
import "../styles/Page404/page404.scss"

  function Erreur404() {
    const navigate = useNavigate();

  useEffect(() => {
    const delaiRedirection = 5000; // 5 secondes

    const redirectionTimer = setTimeout(() => {
      navigate("/");
    }, delaiRedirection);

    return () => {
      clearTimeout(redirectionTimer);
    };
  }, [navigate]);
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