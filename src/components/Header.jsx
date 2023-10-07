import NavBar from "./NavBar";
import Logo from "../assets/Logo.svg";
import BackgroundBanner from "../assets/BackgroundBanner.png";
import "../styles/header/header.scss";

function Banniere({ ShowImage }) {
  return (
    <header className="header__principal">
      <div className="header__principal__navLogo">
        <img src={Logo} alt="Logo Kasa" className="kasa-logo" />
        <NavBar />
      </div>
      {ShowImage && (
        <div className="header__principal__banniere">
          <img
            className="banner-image"
            src={BackgroundBanner}
            alt="Fond banniere"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      )}
    </header>
  );
}

export default Banniere;
