import React,{createContext,useState} from "react";

const LoginContext =  createContext();
const LoginProvider = function({children}){
  const [usuario, setUsuario] = useState(null)
  return <LoginContext.Provider value={{usuario, setUsuario}}>
    {children}
  </LoginContext.Provider>
}
export { LoginProvider}
export default LoginContext