import Header from "../components/Header";
import Footer from "../components/Footer";
import Seccion from "../components/Seccion";

function Wiki() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container ">
        <Seccion
          link="https://i.pinimg.com/736x/73/85/c4/7385c4599f0401844310ec76d983d4d1.jpg"
          titulo="Sistemas"
          descripcion="Encuentra aquí todos los sistemas que confoman el servidor."
        />
        <Seccion
          link="https://i.pinimg.com/736x/c9/7f/12/c97f12b11c85f789432cfe3bb27e413b.jpg"
          titulo="Clanes Ninja"
          descripcion="Encuentra aquí todos los clanes del servidor y su respectiva información."
        />
        <Seccion
          link="https://i.pinimg.com/736x/59/03/f0/5903f0e3b44fbe9f96cd943e89ce013b.jpg"
          titulo="Elementos"
          descripcion="Encuentra aquí todos los elementos del servidor incluyendo Kekkei Genakis y su respectiva información."
        />
        <Seccion
          link="https://i.pinimg.com/736x/ee/31/ee/ee31eeb1ef414675c920a863cf6ca55c.jpg"
          titulo="Estilos"
          descripcion="Encuentra aquí los estilos de combate que tiene el servidor y su respectiva información."
        />
        <Seccion
          link="https://i.pinimg.com/736x/2f/80/2d/2f802d00ac9f7c703dd923728117fc45.jpg"
          titulo="Armas"
          descripcion="Encuentra aquí las armas que se encuentran en el mundo ninja."
        />
        <Seccion
          link="https://i.pinimg.com/736x/f0/e9/9f/f0e99f329ef0c54cbb72ff39023f470c.jpg"
          titulo="Bijuu"
          descripcion="Encuentra aquí los bijuus, sus portadores e información de ellos."
        />
        <Seccion
          link="https://i.pinimg.com/736x/ec/5a/9f/ec5a9f76c3a681c4c2c9ae5627c54ecc.jpg"
          titulo="Extras"
          descripcion="Encuentra aquí contenido extra del servidor."
        />
      </div>
      <Footer />
    </>
  );
}

export default Wiki;
