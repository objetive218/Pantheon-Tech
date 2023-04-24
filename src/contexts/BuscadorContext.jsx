import React, { createContext, useState } from "react";

const BuscadorContext = createContext();
const BuscadorProvider = function ({ children }) {
  const [buscar, setBuscar] = useState("");
  return (
    <BuscadorContext.Provider value={{ buscar, setBuscar }}>
      {children}
    </BuscadorContext.Provider>
  );
};

export { BuscadorProvider };
export default BuscadorContext;
