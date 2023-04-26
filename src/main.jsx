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
import Carro from "./components/Carro";
import { CatalogoProvider } from "./contexts/CatalogoContext";
import { BuscadorProvider } from "./contexts/BuscadorContext";
import { LoginProvider } from "./contexts/LoginContext";
import { UserDataProvider } from "./contexts/UserDataContext";

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
    path: "/carro",
    element: <Carro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserDataProvider>
      <LoginProvider>
        <BuscadorProvider>
          <CatalogoProvider>
            <CarritoProvider>
              <RouterProvider router={router} />
            </CarritoProvider>
          </CatalogoProvider>
        </BuscadorProvider>
      </LoginProvider>
    </UserDataProvider>
  </React.StrictMode>
);
