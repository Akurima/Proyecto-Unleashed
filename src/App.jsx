import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./web/Inicio";
import Wiki from "./web/Wiki";
import Reglas from "./web/Reglas";
import Tienda from "./web/Tienda";
import Discord from "./web/Discord";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
