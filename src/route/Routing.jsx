import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../containers/Accueil";
import APropos from "../containers/APropos";
import DetailLogement from "../containers/DetailLogement";
import Page404 from "../containers/Page404";


const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/logements/:id" element={<DetailLogement />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routing;
