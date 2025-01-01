import Header from "../components/header";
import Footer from "../components/Footer";
function Tienda() {
  return (
    <>
      <Header />
      <div className="container relleno">
        <div className="contenedor-cartas">
          <article className="contenedor-carta">
            <img
              className="imagen-carta"
              src="https://i.pinimg.com/736x/d4/20/a6/d420a6040401d08d3a3fd3a5123bd3ab.jpg"
              alt=""
            />
            <h2 className="texto-seccion">Jades</h2>

            <p className="texto-seccion">
              Los jades es la moneda principal dentro del servidor, con la cual
              podrás canjear en el spawn (Con Tsunade Senju) por distintos
              productos, tales como:
            </p>
            <h6 className="texto-seccion">
              Oferta 1:{" "}
              <h5>
                <u>30 Jades = 1,5 USD 💵</u>
              </h5>{" "}
              Oferta 2:{" "}
              <h5>
                <u>150 Jades = 7 USD 💵</u>
              </h5>{" "}
              Oferta 3:{" "}
              <h5>
                <u>300 Jades = 14 USD 💵</u>
              </h5>
            </h6>
            <button className="btn btn-light">Más información</button>
            <button className="btn btn-light">Comprar!</button>
          </article>
          <article className="contenedor-carta">
            <img
              className="imagen-carta2"
              src="https://i.pinimg.com/736x/44/6d/f2/446df2ba95abec443896ab35f0b71475.jpg"
              alt=""
            />
            <h2 className="texto-seccion">Pase de Batalla: Premium</h2>

            <p className="texto-seccion">
              Con este producto, obtendrás la versión premium del pase de
              batalla.
            </p>
            <h6 className="texto-seccion">
              Basico:{" "}
              <h5>
                <u>1 Mes - 200 Jades 💵</u>
              </h5>{" "}
            </h6>
            <button className="btn btn-light">Más información</button>
            <button className="btn btn-light">Comprar!</button>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tienda;
