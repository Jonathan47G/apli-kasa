import React from "react";
import { NavLink } from "react-router-dom";

function BarreDeNavigation({ ShowImage }) {
  return (
    <nav id="nav-bar">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/a-propos">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BarreDeNavigation;
