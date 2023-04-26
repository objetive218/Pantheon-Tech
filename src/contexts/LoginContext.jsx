import React,{createContext,useState, useContext} from "react";
import UserDataContext from "./UserDataContext";

const LoginContext =  createContext();
const LoginProvider = function({children}){
  const [usuario, setUsuario] = useState(null)
  const {data} = useContext(UserDataContext);
  const logeo = function(usuario, password){
    const registrado = data.find()
  }
  return <LoginContext.Provider value={{usuario, setUsuario}}>
    {children}
  </LoginContext.Provider>
}
export { LoginProvider}
export default LoginContext