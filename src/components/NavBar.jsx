import React from "react";
import { Link } from "react-router-dom";

function BarreDeNavigation({ ShowImage }) {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/a-propos">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarreDeNavigation;
