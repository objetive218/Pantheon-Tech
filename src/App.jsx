import { Link } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <h1>hola</h1>
      <h1>hola</h1>
      <NavBar />
      <Link to="/">inicio</Link>
    </>
  );
};

export default App;
