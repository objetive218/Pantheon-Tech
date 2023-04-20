import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CarritoProvider } from "./contexts/CarritoContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Consolas from "./components/Consolas";
import Celulares from "./components/Celulares";
import Computadores from "./components/Computadores";
import Login from "./components/Login";
import Carrito from "./components/Carrito";
import { CatalogoProvider } from "./contexts/CatalogoContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/consolas",
    element: <Consolas />,
  },
  {
    path: "/celulares",
    element: <Celulares />,
  },
  {
    path: "computadores",
    element: <Computadores />,
  },
  {
    path: "/audio",
    element: <Audio />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CatalogoProvider>
      <CarritoProvider>
        <RouterProvider router={router} />
      </CarritoProvider>
    </CatalogoProvider>
  </React.StrictMode>
);
