import { createBrowserRouter } from "react-router";
import About from "./pages/About/index.jsx";
import Error from "./pages/Error/index.jsx";
import Home from "./pages/Home/index.jsx";
import Logement from "./pages/Logement/index.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routers;
