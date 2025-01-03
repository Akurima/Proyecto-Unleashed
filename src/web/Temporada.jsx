import Header from "../components/Header";
import Footer from "../components/Footer";

function Temporada() {
  return (
    <>
      <div className="container">
        <Header />
      </div>

      <section className="container contenedor-temporada">
        <div className="contenedor-texto">
          <h3 className="texto-servidor texto-seccion">
            Sección en Mantenimiento
          </h3>
          <img
            className="imagen-temporada"
            src="https://i.pinimg.com/originals/5c/b1/a0/5cb1a07ebc666c8d86222005e4f98f96.gif"
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Temporada;
