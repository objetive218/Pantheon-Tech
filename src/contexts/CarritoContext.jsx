import { createContext, useState } from "react";

const CarritoContext = createContext();
const CarritoProvider = function ({ children }) {
  const [carrito, setCarrito] = useState({ items: [], subTotal: 0 });
  const addModel = function (elemento, cantidad) {
    setCarrito({
      items: [
        ...carrito.items,
        {
          id: elemento.id,
          modelo: elemento.modelo,
          categoria: elemento.categoria,
          precio: elemento.precio,
          cantidad: cantidad,
        },
      ],
      subTotal: carrito.items
        .map(function (item) {
          return item.precio * item.cantidad;
        })
        .reduce(function (actual, siguiente) {
          return (actual += siguiente);
        }, 0),
    });
  };
  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, addModel }}>
      {children}
    </CarritoContext.Provider>
  );
};

export { CarritoProvider };
export default CarritoContext;
