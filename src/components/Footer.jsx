import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="footer-container">
        <div className="footer-item">
          <h3>Reglas</h3>
          <p>Lee nuestro reglamento del servidor. </p>
          <Link to="/Reglamento">
            <p>¡Click aqui!</p>
          </Link>
        </div>
        <div className="footer-item">
          <h3>Terminos</h3>
          <p>Lee nuestros terminos y condiciones.</p>
          <p>¡Click aqui!</p>
        </div>
        <div className="footer-item">
          <h3>Servidor</h3>
          <p>IP del Servidor Minecraft: naruto-ul.xyz</p>
          <p>Versión: 1.20.4</p>
        </div>
        <div className="footer-item">
          <h3>Política</h3>
          <p>Lee nuestras politicas de privacidad.</p>
          <p>¡Click aquí!</p>
        </div>
        <div className="footer-item">
          <h3>TikTok</h3>
          <p>Siguenos en TikTok para ver todos nuestros videos!</p>
          <p>¡Click aquí!</p>
        </div>
      </div>
      <span className="span-footer">
        {" "}
        Todos los derechos reservados - Naruto: Unleashed Legends | 2025 <br />
      </span>
      <span className="span-footer span-akurima">
        Sitio web desarrollado por <a href="">Akurima.</a>
      </span>
    </footer>
  );
};

export default Footer;
