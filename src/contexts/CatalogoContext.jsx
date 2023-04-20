import React,{createContext, useState} from "react";
import { catalogo } from "../data/catalogo";

const CatalogoContext = createContext(catalogo);
const CatalogoProvider = function({children}){
  const [productos, setProductos] = useState(catalogo);
  
  return <CatalogoContext.Provider value={{productos, setProductos}}>{children}</CatalogoContext.Provider>
}

export { CatalogoProvider }
export default CatalogoContext