import NavBar from "./NavBar";
import Logo from "../../assets/Logo.svg";
import BackgroundBanner from "../../assets/BackgroundBanner.png";
import BackgroundBannerApropos from "../../assets/BackgroundBannerApropos.png";
import "../../styles/header/header.scss";

function Header({ ShowImage, ShowImageApropos }) {
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
            alt="Fond bannière"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      )}
       {ShowImageApropos && (
        <div className="header__principal__banniere">
          <img
            className="banner-image"
            src={BackgroundBannerApropos}
            alt="Fond bannière"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
