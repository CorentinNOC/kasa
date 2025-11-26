import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Logement from "./pages/Logement";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "logement/:id",
        element: <Logement />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "404",
        element: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default routers;
