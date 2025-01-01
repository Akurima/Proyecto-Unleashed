import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Discord() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      <Header />
      <section className="seccion-discord">
        <div className="contenedor-discord">
          <div className="texto-seccion">
            <h3 className="texto-servidor">
              ¡Ingresa ahora a nuestra comunidad de Discord!
            </h3>
            <button className="btn btn-light">¡Ingresar!</button>
          </div>
          <div className="video-container">
            <video
              ref={videoRef}
              className="video-discord"
              src="./public/imagenes/video_discord.mp4"
              preload="auto"
              autoPlay
              muted
              loop
            ></video>
            <button className="btn btn-light btn-sound" onClick={toggleMute}>
              {isMuted ? "Activar Sonido" : "Desactivar Sonido"}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Discord;
