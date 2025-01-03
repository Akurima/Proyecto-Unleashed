import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./web/Inicio";
import Wiki from "./web/Wiki";
import Reglas from "./web/Reglas";
import Tienda from "./web/Tienda";
import Discord from "./web/Discord";
import Temporada from "./web/Temporada";
import Eventos from "./web/Eventos";
import Estado from "./web/Estado";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/Wiki",
      element: <Wiki />,
    },
    {
      path: "/Reglamento",
      element: <Reglas />,
    },
    {
      path: "/Discord",
      element: <Discord />,
    },
    {
      path: "/Tienda",
      element: <Tienda />,
    },
    {
      path: "/Temporada",
      element: <Temporada />,
    },
    {
      path: "/Eventos",
      element: <Eventos />,
    },
    {
      path: "/Estado",
      element: <Estado />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
