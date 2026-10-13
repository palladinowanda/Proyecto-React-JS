import { Link } from "react-router-dom";
import logo from "/img/footware/logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src={logo} alt="Fire Music Logo" />
            <h3>Fire Music</h3>
          </div>
          <p>
            Tu tienda de música, lo mejor del rock & metal.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explorá Fire Music</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/cart">Carrito</Link>
            </li>
          </ul>
        </div>


        <div className="footer-col">
          <h4>Sobre nosotros</h4>
          <p>
            Pasión por la música física y el sonido auténtico para acompañar tu colección.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Fire Music. Proyecto realizado para Talento Tech.</p>
        <p className="credits">Hecho por Wanda Palladino</p>
      </div>
    </footer>
  );
};