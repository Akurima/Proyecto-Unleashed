import Footer from "../components/Footer";
import Header from "../components/Header";
import EstadoServidor from "../components/EstadoServidor";

function Estado() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="contenedor-estado container">
        <h2 className="texto-seccion">Estado del Servidor</h2>
        <EstadoServidor />
      </div>
      <Footer />
    </>
  );
}

export default Estado;
