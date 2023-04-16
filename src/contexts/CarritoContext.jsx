import { createContext, useState } from "react";

const CarritoContext = createContext();
const CarritoProvider = function ({ children }) {
  const [carrito, setCarrito] = useState(null);
  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export { CarritoProvider };
export default CarritoContext;
