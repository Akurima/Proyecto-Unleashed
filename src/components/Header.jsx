import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <img src="/imagenes/logito.png" alt="Logo" className="logo" />
          <ul className="ul-nav">
            <Link to="/">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Inicio</span>
              </li>
            </Link>
            <Link to="/Wiki">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Wiki</span>
              </li>
            </Link>
            <Link to="/Reglamento">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Reglas</span>
              </li>
            </Link>
            <Link to="/Discord">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Discord</span>
              </li>
            </Link>
            <Link to="/Tienda">
              {" "}
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Tienda</span>
              </li>
            </Link>
            <Link to="/Temporada">
              {" "}
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Temporada</span>
              </li>
            </Link>
            <Link to="/Eventos">
              {" "}
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Eventos</span>
              </li>
            </Link>
            <Link to="/Estado">
              {" "}
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">Estado</span>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
