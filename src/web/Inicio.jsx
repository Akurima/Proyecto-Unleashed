import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="contenedor-general container-fluid">
        <article className="contenedor-servidor">
          <div className="servidor">
            <div className="contenedor-texto-changelogs">
              <h3 className="texto-seccion servidor-titulo">
                🔥 Naruto Unleashed Legends 🔥
              </h3>
            </div>
            <div className="contenedor-texto-changelogs">
              <p className="texto-inicio texto-servidor1">
                ¡Bienvenido a Naruto Unleashed Legends! <br />
                Un servidor único de Minecraft ambientado en el fascinante mundo
                de Naruto. Aquí podrás sumergirte en una experiencia ninja como
                nunca antes, donde la creatividad de Minecraft se mezcla con la
                esencia del universo shinobi.
              </p>
            </div>

            <div className="contenedor-texto-changelogs">
              <p className="texto-inicio texto-servidor">
                ◻️ Adéntrate en un mundo fielmente inspirado en el universo de
                Naruto y forja tu camino como ninja legendario. <br />
                ◻️ Elige entre las Cinco Grandes Aldeas: Konoha, Suna, Iwa o
                Kumo, cada una con su estilo único, misiones personalizadas y
                secretos por descubrir. <br />
                ◻️ Domina el Sistema de Jutsus, aprendiendo técnicas icónicas
                como el Rasengan, Chidori y jutsus elementales, con
                impresionantes animaciones y efectos visuales. <br />
                ◻️ Únete a clanes míticos como Uchiha, Hyūga o Senju y
                desbloquea poderosos Kekkei Genkai para destacar en combate.{" "}
                <br />
                ◻️ Explora un Mundo Abierto Personalizado, con locaciones
                emblemáticas como el Valle del Fin y el Monte Myōboku, lleno de
                NPCs, misiones y retos. <br />
                ◻️ Equípate con un arsenal de Armas Ninjas, desde kunais y
                shurikens hasta espadas legendarias. <br />
                ◻️ Participa en emocionantes Guerras entre Aldeas y defiende tu
                territorio en intensas batallas PvP. Progresarás completando
                Misiones Únicas, ascendiendo desde estudiante hasta Hokage, y
                participarás en Eventos Especiales como torneos chunin e
                invasiones de la Akatsuki con recompensas exclusivas.
              </p>
            </div>
            <img
              className="imagen-info"
              src="/imagenes/ul-naruto.jpg"
              alt="Imagen Changelogs"
            />
            <div className="contenedor-texto-changelogs">
              <p className="texto-inicio texto-servidor">
                ¡Únete Ahora! Conviértete en el ninja que siempre soñaste ser y
                escribe tu propia historia en Naruto Shinobi Realms. Ya sea que
                prefieras proteger tu aldea, aprender los jutsus más raros o
                simplemente explorar este increíble mundo, este servidor tiene
                un lugar para ti. ¡Prepárate para vivir la verdadera experiencia
                shinobi! 🌟
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className="contenedor-general container-fluid">
        <article className="contenedor-changelogs">
          <div className="changelogs">
            <div className="contenedor-texto-changelogs">
              <h3 className="texto-seccion changelogs-titulo">
                🔥 Changelogs • 04/01/25 🔥
              </h3>
            </div>
            <div className="contenedor-texto-changelogs">
              <p className="texto-inicio texto-changelogs">
                ◽ Se buffeó el Jutsu de Temporada: Tiburón Hambriento. <br />{" "}
                Se redujo su consumo de chakra (100 → 70) | 2: Se redujo su
                enfriamiento.
                <br />
                <br />◽ Cambio 2: ¡Se agrego un agente inmobiliario! Podrás
                encontrarlo en el Mundo Espiritual (Spawn).
                <br />
                <br />◽ Cambio 3: Se agregó un anuncio de evento cuando un KOTH
                esté activo.
                <br />
                <br />◽ Cambio 4:Se agregaron las coordenadas del KOTH Activo
                al TAB.
              </p>
            </div>
            <img
              className="imagen-changelogs"
              src="/imagenes/changelogs/changelogs.png"
              alt="Imagen Changelogs"
            />
          </div>
        </article>
        <div className="contenendor-inicio-general">
          <section className="contenedor-iframe">
            <h2 className="texto-seccion changelogs-titulo">
              ¿Ya visitaste nuestro último video?
            </h2>
            <iframe
              className="frame-inicio"
              width="98%"
              height="98%"
              style={{ borderRadius: "30px" }}
              src="https://www.youtube.com/embed/aKQHH9OVxlE?si=F66XCiQA5F1B6HeY&amp;start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
