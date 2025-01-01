import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="contenedor-general">
        <article className="contenedor-servidor">
          <div className="servidor">
            <h3 className="texto-seccion servidor-titulo">
              🔥 Naruto Unleashed Legends 🔥
            </h3>
            <p className="texto-seccion texto-servidor1">
              ¡Bienvenido a Naruto Unleashed Legends! Un servidor único de
              Minecraft ambientado en el fascinante mundo de Naruto. Aquí podrás
              sumergirte en una experiencia ninja como nunca antes, donde la
              creatividad de Minecraft se mezcla con la esencia del universo
              shinobi.
              <br />
              <br />
            </p>

            <p className="texto-seccion texto-servidor">
              ◻️ Cinco Grandes Aldeas ◻️ <br /> ◽ Explora y elige tu camino en
              Konoha, Suna, Iwa o Kumo. Cada aldea tiene su propio estilo,
              misiones y secretos por descubrir.
              <br />
              <br />
              ◻️ Sistema de Jutsus ◻️
              <br /> ◽ Aprende y domina poderosas técnicas ninjas como el
              Rasengan, Chidori, jutsus elementales y muchas más. ¡Cada jutsu
              tiene sus propias animaciones y efectos especiales!
              <br />
              <br /> ◻️ Clanes y Kekkei Genkai ◻️
              <br /> ◽ Forma parte de clanes legendarios como Uchiha, Hyūga, o
              Senju. Desbloquea habilidades únicas que te harán destacar en
              combate.
              <br />
              <br />
              ◻️ Armas Ninjas ◻️
              <br /> ◽ Equípate con kunais, shurikens, espadas legendarias y
              herramientas ninja personalizadas para enfrentar a tus enemigos o
              completar misiones.
              <br />
              <br />
              ◻️ Mundo Abierto Personalizado ◻️
              <br />
              ◽ Descubre un mapa fiel al universo de Naruto, lleno de misiones,
              NPCs, y lugares icónicos como el Valle del Fin o el Monte Myōboku.
              <br />
              <br />
              ◻️ Sistema de Guerra entre Aldeas ◻️
              <br />
              ◽ Participa en emocionantes batallas PvP entre aldeas para
              defender tu territorio o conquistar nuevas zonas estratégicas.
              <br />
              <br />
              ◻️ Misiones y Progresión ◻️
              <br />
              ◽ Completa misiones personalizadas para avanzar en tu rango
              ninja, desde estudiante hasta Hokage. ¡Tu dedicación definirá tu
              legado!
              <br />
              <br /> ◻️ Eventos Especiales ◻️
              <br />◽ Participa en torneos de chunin, invasiones Akatsuki y
              otras actividades temáticas con recompensas exclusivas.
            </p>
            <img
              className="imagen-info"
              src="/imagenes/ul-naruto.jpg"
              alt="Imagen Changelogs"
            />
            <p className="texto-seccion texto-servidor">
              ¡Únete Ahora! Conviértete en el ninja que siempre soñaste ser y
              escribe tu propia historia en Naruto Shinobi Realms. Ya sea que
              prefieras proteger tu aldea, aprender los jutsus más raros o
              simplemente explorar este increíble mundo, este servidor tiene un
              lugar para ti. ¡Prepárate para vivir la verdadera experiencia
              shinobi! 🌟
              <br /> <br />
            </p>
          </div>
        </article>
      </div>
      <div className="contenedor-general">
        <article className="contenedor-changelogs">
          <div className="changelogs">
            <h3 className="texto-seccion changelogs-titulo">
              🔥 Changelogs • 30/12/24 🔥
            </h3>
            <p className="texto-seccion texto-changelogs">
              ◽ Cambio 1: Se agrego un aviso y un nuevo horario de HappyHour a
              las 00:30 ARG. <br />
              <br />◽ Cambio 2: Se arregló el bug de los Viajes Rapidos: Mundo,
              que no teletransportaba y aun así consumía voluntad.
              <br />
              <br />◽ Cambio 3: ¡Se agregó el sistema de KOTHS! Muy pronto se
              implementará diversos Koths en cada país.
              <br />
              <br />◽ Cambio 4: Se arregló el causante del lag del arma
              Bastón:Control de agua.
              <br />
              <br />◽ Cambio 5: Reducción de particulas a jutsus que causaban
              lag...
            </p>
            <img
              className="imagen-changelogs"
              src="https://media.discordapp.net/attachments/1197225431405973576/1323140905376677968/image.png?ex=677568be&is=6774173e&hm=c5ce76c2164f554a566f7fc9d1e3993c6475720d52561c87954a5b4f900e08f3&=&format=webp&quality=lossless"
              alt="Imagen Changelogs"
            />
            <button className="btn btn-light">Ver todos los cambios</button>
          </div>
        </article>
        <div className="contenendor-inicio-general">
          <section className="contenedor-changelogs">
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
