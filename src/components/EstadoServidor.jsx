import { useEffect, useState } from "react";

const EstadoServidor = () => {
  const [estadoServidor, setEstadoServidor] = useState("Cargando...");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://mcapi.us/scripts/minecraft.min.js";
    script.async = true;

    script.onload = () => {
      if (window.MinecraftAPI && window.MinecraftAPI.getServerStatus) {
        window.MinecraftAPI.getServerStatus(
          "naruto-ul.xyz",
          { port: 25565 },
          (err, status) => {
            if (err) {
              console.error("Error al obtener el estado del servidor:", err);
              setEstadoServidor("Error al cargar el estado del servidor.");
            } else {
              setEstadoServidor(status.online ? "Activo 🔥" : "Apagado ☠️");
            }
          }
        );
      } else {
        setEstadoServidor("Error al cargar la API de Minecraft.");
      }
    };

    script.onerror = () => {
      setEstadoServidor("Error al cargar el script externo.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="server-status texto-seccion">
      El servidor se encuentra:{" "}
      <span className="server-online">{estadoServidor}</span>
      <img
        className="logito-estado"
        src="https://pa1.aminoapps.com/6488/d90e2b3a2022b7e1fce96ba71b9e02e56e986577_hq.gif"
        alt=""
      />
    </div>
  );
};

export default EstadoServidor;
