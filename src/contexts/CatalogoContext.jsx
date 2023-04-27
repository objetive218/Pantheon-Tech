import React,{createContext, useState} from "react";
import { catalogo } from "../data/catalogo";

const CatalogoContext = createContext(catalogo);
const CatalogoProvider = function({children}){
  const [productos, setProductos] = useState(catalogo);
  const agregaItem = function(elemento, id){
    
  }
  
  return <CatalogoContext.Provider value={{productos, setProductos, agregaItem}}>{children}</CatalogoContext.Provider>
}

export { CatalogoProvider }
export default CatalogoContext