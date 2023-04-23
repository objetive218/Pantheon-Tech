import { createContext, useState } from "react";

const CarritoContext = createContext();
const CarritoProvider = function ({ children }) {
  const [carrito, setCarrito] = useState({ items: [], subTotal: 0 });

  const addModel = function (elemento, cantidad) {
    if (
      carrito.items.find((item) => item.id == elemento.id) != undefined &&
      carrito.items.length > 0
    ) {
      setCarrito({
        items: carrito.items.map((item) => {
          if (item.id == elemento.id) {
            item.cantidad += cantidad;
          }
          return item;
        }),
        subTotal: carrito.items
          .map(function (item) {
            return item.precio * item.cantidad;
          })
          .reduce(function (actual, next) {
            return (actual += next);
          }, 0),
      });
    } else {
      setCarrito({
        items: [
          ...carrito.items,
          {
            id: elemento.id,
            modelo: elemento.modelo,
            categoria: elemento.categoria,
            url: elemento.url,
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
          }, elemento.precio),
      });
    }
  };
  const eliminarModel = function (id) {
    if (
      carrito.items.find((item) => item.id == id) != undefined &&
      carrito.items.find((item) => item.id == id).cantidad > 1
    ) {
      setCarrito({
        items: carrito.items.map((item) => {
          if (item.id == id) {
            item.cantidad -= 1;
          }
          return item;
        }),
        subTotal: carrito.items
          .map(function (item) {
            return item.precio * item.cantidad;
          })
          .reduce(function (actual, siguiente) {
            return (actual += siguiente);
          }, 0),
      });
    } else {
      setCarrito({
        items: carrito.items.filter(function (item) {
          return item.id != id;
        }),
        subTotal: carrito.items
          .filter(function (item) {
            return item.id != id;
          })
          .map(function (item) {
            return item.precio * item.cantidad;
          })
          .reduce(function (actual, siguiente) {
            return (actual += siguiente);
          }, 0),
      });
    }
  };
  return (
    <CarritoContext.Provider
      value={{ carrito, setCarrito, addModel, eliminarModel }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export { CarritoProvider };
export default CarritoContext;
