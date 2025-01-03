import Header from "../components/Header";
import Footer from "../components/Footer";
function Reglas() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="reglamento container-fluid">
        <section className="contenedor-reglamento">
          <h2 className="texto-seccion reglamento-titulo">
            SERVIDOR DE DISCORD: REGLAMENTO
          </h2>
          <p className="texto-inicio reglas">
            1- Respeto Mutuo: Trata a todos los miembros con respeto y cortesía.
            No toleramos el lenguaje ofensivo, discriminación o acoso. <br />
            <br /> 2- Sin Contenido Ofensivo: Evita compartir contenido que
            pueda ser considerado ofensivo, ilegal, violento o inapropiado.
            <br />
            <br /> 3- No Spam: No hagas spam en los canales. Esto incluye
            mensajes repetitivos, enlaces innecesarios o publicidad no
            autorizada.
            <br />
            <br /> 4- Prohibido la Auto-Promoción: No promociones servicios o
            productos sin la aprobación de los administradores.
            <br />
            <br />
            5- No des Spoilers sin Aviso: Si compartes información que podría
            considerarse un spoiler, asegúrate de advertirlo claramente.
            <br />
            <br /> 6- Sin Contenido NSFW: No compartas contenido para adultos o
            inapropiado. Mantenlo amigable para todas las edades. <br />
            <br />
            7- Respeta a los Moderadores: Sigue las instrucciones de los
            moderadores y respeta sus decisiones. <br />
            <br />
            8- Evita Conflictos: Si tienes problemas con otro miembro, trata de
            resolverlo de manera privada y respetuosa. Si es necesario, informa
            a un moderador.
            <br />
            <br /> 9- Uso Apropiado de Canales de Voz: Respeta el uso adecuado
            de los canales de voz y evita interrumpir conversaciones. <br />
            <br />
            10- Sin Publicidad no Autorizada: No publiques enlaces o promociones
            sin el permiso de los administradores.
          </p>
        </section>
        <section className="contenedor-reglamento">
          <h2 className="texto-seccion reglamento-titulo">
            SERVIDOR DE MINECRAFT: REGLAMENTO
          </h2>
          <p className="texto-inicio reglas">
            1- No Griefing: No destruyas ni modifiques las construcciones del
            servidor.
            <br />
            <br /> 2- Prohibido el Uso de Hacks o Cheats o Mecanicas que den
            ventajas: No utilices modificaciones no autorizadas o mecanicas del
            propio juego que otorguen ventajas injustas o adulteren algún
            sistema dentro del servidor. <br />
            <br />
            3- No Spam o Publicidad: Evita el spam en el chat y no promociones
            otros servidores sin permiso. <br />
            <br />
            4- No Robar: No tomes objetos ni recursos de otros jugadores sin su
            consentimiento. <br />
            <br />
            5- Sin Uso Excesivo de Recursos del Servidor: No realices acciones
            que puedan afectar negativamente el rendimiento del servidor. <br />
            <br />
            6- Reporta Problemas: Informa cualquier problema o bug que
            encuentres a los administradores.
            <br />
            <br /> 7- Uso Apropiado de Canales de Chat: Utiliza los canales de
            chat apropiadamente y evita el uso excesivo de mayúsculas.
            <br />
            <br /> 8- Respeta las Decisiones del Personal: Sigue las
            instrucciones de los administradores y moderadores.
            <br />
            <br /> 9- No uses multicuentas: Está totalmente penado el uso de
            multicuentas, el incumplimiento de esta norma es severo.
            <br />
            <br /> 10- Diviértete: ¡Disfruta del juego y comparte la diversión
            con los demás jugadores!
          </p>
        </section>
        <section className="contenedor-reglamento">
          <h2 className="texto-seccion reglamento-titulo">
            NORMATIVAS: EXAMENES CHUNIN
          </h2>
          <p className="texto-inicio reglas">
            1- Herramientas permitidas: Hasta rango C. <br />
            <br />
            2- Jutsus permitidos, todos los de rango Gennin hasta rango B (P2W
            claramente prohibido).
            <br />
            <br />
            3- Herramientas: Solo se podrá utilizar un máximo de 8 vendas, 16
            unguentos, 10 papeles bomba, 4 bombas de humo en todos los combates,
            si son revisados y tienen mas que esta cantidad, serán
            descalificados
          </p>
          <h2 className="texto-seccion reglamento-titulo">REGLAS EXTRAS</h2>
          <p className="texto-inicio reglas">
            ❗ Cualquier transacción de arma legendaria / jutsu, antes de la
            transferencia de dinero, deberá ser aprobada por administración, por
            lo tanto, deberán abrir un ticket subiendo el trade/transacción
            pendiente de aprobación.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Reglas;
