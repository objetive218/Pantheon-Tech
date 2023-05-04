import React,{createContext, useState} from "react";
import { catalogo } from "../data/catalogo";

const CatalogoContext = createContext(catalogo);
const CatalogoProvider = function({children}){
  const [productos, setProductos] = useState(catalogo);
  const agregaItem = function(elemento){
    setProductos([...productos,elemento,])
  }

  const borrar = function(id){
    if(productos.find((item) => item.id == id)){
      setProductos(productos.filter(function(item){
        return item.id != id;
      }))
    }
  }
  return <CatalogoContext.Provider value={{productos, setProductos, agregaItem, borrar}}>{children}</CatalogoContext.Provider>
}

export { CatalogoProvider }
export default CatalogoContext