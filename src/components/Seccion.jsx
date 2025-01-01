function Seccion({ titulo, descripcion, link }) {
  return (
    <section className="Seccion">
      <img className="imagen-seccion" src={link} alt="Imagen" />
      <h2 className="texto-seccion">{titulo}</h2>
      <p className="texto-seccion">{descripcion}</p>
      <button className="btn btn-light">Saber más...</button>
    </section>
  );
}

export default Seccion;
