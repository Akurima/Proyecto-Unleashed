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
      <div className="container-fluid">
        <Header />
      </div>
      <section className="seccion-discord container">
        <div className="contenedor-discord">
          <div className="texto-seccion">
            <h3 className="texto-servidor searchable">
              ¡Ingresa ahora a nuestra comunidad de Discord!
            </h3>
            <a
              href="https://discord.gg/QGTq2DFF8r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-light">¡Ingresar!</button>
            </a>
          </div>
          <div className="video-container">
            <video
              ref={videoRef}
              className="video-discord"
              src="/imagenes/video_discord.mp4"
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
