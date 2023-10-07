import "../styles/footer/footer.scss";
import Logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Kasa" className="kasa-logo-footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
