import React, { createContext, useState } from "react";

const BuscadorContext = createContext(null);
const BuscadorProvider = function ({ children }) {
  const [buscar, setBuscar] = useState(null);
  return (
    <BuscadorContext.Provider value={{ buscar, setBuscar }}>
      {children}
    </BuscadorContext.Provider>
  );
};

export { BuscadorProvider };
export default BuscadorContext;
