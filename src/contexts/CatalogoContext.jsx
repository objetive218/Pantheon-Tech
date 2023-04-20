import React,{createContext} from "react";
import { catalogo } from "../data/catalogo";

const CatalogoContext = createContext(catalogo);
const CatalogoProvider = function({children}){

  return <CatalogoContext.Provider value={}>{}</CatalogoContext.Provider>
}