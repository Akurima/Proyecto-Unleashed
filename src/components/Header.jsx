import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    highlightSearchResults();
  }, [searchTerm]);

  const highlightSearchResults = () => {
    const elements = document.querySelectorAll(".searchable");
    let count = 0;

    elements.forEach((element) => {
      const text = element.textContent || element.innerText;
      const regex = new RegExp(`(${searchTerm})`, "gi");

      // Limpia cualquier resaltado previo
      element.innerHTML = text.replace(
        /<span class="highlight">(.*?)<\/span>/gi,
        "$1"
      );

      // Aplica el resaltado si hay coincidencias
      if (searchTerm.trim()) {
        const newText = text.replace(
          regex,
          `<span class="highlight">$1</span>`
        );
        if (newText !== text) count++;
        element.innerHTML = newText;
      }
    });

    setMatches(count);
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <img src="/imagenes/logito.png" alt="Logo" className="logo" />
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar en la página..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={highlightSearchResults}>
              Buscar
            </button>
          </div>
          {searchTerm && (
            <div className="search-results">
              {matches > 0
                ? `Se encontraron ${matches} coincidencia(s)`
                : "No hay resultados"}
            </div>
          )}
          <ul className="ul-nav">
            <Link to="/">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Inicio <FontAwesomeIcon icon={faHouse} />
                </span>
              </li>
            </Link>
            <Link to="/Wiki">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Wiki <FontAwesomeIcon icon={faBook} />
                </span>
              </li>
            </Link>
            <Link to="/Reglamento">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Reglas <FontAwesomeIcon icon={faScaleBalanced} />
                </span>
              </li>
            </Link>
            <Link to="/Discord">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Discord <Icon icon="ic:baseline-discord" />
                </span>
              </li>
            </Link>
            <Link to="/Tienda">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Tienda <FontAwesomeIcon icon={faGem} />
                </span>
              </li>
            </Link>
            <Link to="/Temporada">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Temporada <FontAwesomeIcon icon={faCalendarDays} />
                </span>
              </li>
            </Link>
            <Link to="/Eventos">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Eventos <FontAwesomeIcon icon={faStar} />
                </span>
              </li>
            </Link>
            <Link to="/Estado">
              <li className="nav-item">
                <div className="background-dark"></div>
                <div className="background-transparent"></div>
                <span className="nav-text">
                  Estado <FontAwesomeIcon icon={faSignal} />
                </span>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
