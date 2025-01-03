import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Eventos() {
  const [eventInfo, setEventInfo] = useState({
    mensaje: "No hay ningún evento activo",
    mensaje2: "Test",
    image: null,
  });

  useEffect(() => {
    const checkHappyHour = () => {
      const uruguayTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Montevideo",
      });
      const currentTime = new Date(uruguayTime);
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      if (hours === 11 && minutes < 60) {
        setEventInfo({
          mensaje: "¡Happy Hour!",
          mensaje2: "¡X2 de experiencia junto a tus compañeros durante 1 hora!",
          image: "/imagenes/x2xp.gif",
        });
      } else if (hours === 16 && minutes < 60) {
        setEventInfo({
          mensaje: "¡Happy Hour!",
          mensaje2: "¡X2 de experiencia junto a tus compañeros durante 1 hora!",
          image: "/imagenes/x2xp.gif",
        });
      } else if (
        (hours === 0 && minutes >= 30) ||
        (hours === 1 && minutes < 30)
      ) {
        setEventInfo({
          mensaje: "¡Happy Hour!",
          mensaje2: "¡X2 de experiencia junto a tus compañeros durante 1 hora!",
          image: "/imagenes/x2xp.gif",
        });
      } else {
        setEventInfo({
          mensaje: "No hay ningún evento activo",
          image:
            "https://i.pinimg.com/originals/58/33/7b/58337b144d465a5aa891a3c13a0957e4.gif",
        });
      }
    };

    checkHappyHour();
    const interval = setInterval(checkHappyHour, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <section className="container contenedor-eventos">
        <div className="eventos">
          <h2 className="texto-seccion servidor-titulo">Eventos</h2>
          <p className="texto-seccion servidor-titulo">
            {eventInfo.mensaje} <br /> {eventInfo.mensaje2}
          </p>
          {eventInfo.image && (
            <img
              src={eventInfo.image}
              alt="Imagen del evento"
              className="imagen-evento"
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Eventos;
