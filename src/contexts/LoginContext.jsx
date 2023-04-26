import React,{createContext,useState, useContext} from "react";
import UserDataContext from "./UserDataContext";

const LoginContext =  createContext();
const LoginProvider = function({children}){
  const [usuario, setUsuario] = useState(null)
  const {data} = useContext(UserDataContext);
  const logeo = function(usuario, password){
    const registrado = data.find(function(user){
      return user.username == usuario;
    });
    if(registrado != undefined && registrado.password == password){
      setUsuario(registrado)
    }else {
        setUsuario(null)
    }
  }
  const logout = function(){
    setUsuario(null)
  }
  const esAdmin = function(){
    if(usuario != null && user.roll == "administrador"){
      return true;
    }
      return false;
  };

  return <LoginContext.Provider value={{usuario, setUsuario, logeo, logout, esAdmin}}>
    {children}
  </LoginContext.Provider>
}
export { LoginProvider}
export default LoginContext