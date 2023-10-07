import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../containers/Accueil";
import APropos from "../containers/APropos";
import DetailLogement from "../containers/DetailLogement";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/logements/:id" element={<DetailLogement />} />
    </Routes>
  );
};

export default Routing;
